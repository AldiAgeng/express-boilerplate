const express = require("express");
const controllers = require("../../app/controllers");

const router = express.Router();

router.post("/register", controllers.api.v1.userController.register);
router.post("/login", controllers.api.v1.userController.login);

module.exports = router;