const express = require('express');
const controllers = require('../../app/controllers');
const { authorization, bodyValidation, checkBody } = require("../../app/middlewares")

const router = express.Router();

router.get('/', authorization, controllers.api.v1.postController.list);
router.post('/', authorization, bodyValidation.postValidation, checkBody, controllers.api.v1.postController.create);
router.get('/:id', authorization ,controllers.api.v1.postController.show);
router.patch('/:id', authorization ,controllers.api.v1.postController.update);
router.delete('/:id', authorization ,controllers.api.v1.postController.destroy);

module.exports = router;