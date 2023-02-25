const postService = require("../../../services/post.service");
const errorCheck = require("../../../errors/error.check");

module.exports = {
  async list (req, res) {
    try {
      const data = await postService.list();
      res.status(200).json({
        status: "SUCCESS",
        result: data.length || 0,
        data: {
          posts: data,
        },
      });
    } catch (err) {
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  },

  async create (req, res) {
    try {
      const data = await postService.create(req.body);

      res.status(201).json({
        status: "SUCCESS",
        data: data,
      });
    } catch (err) {
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  },

  async update(req, res) {
    try {
      const data = await postService.update(req.params.id, req.body);

      if(!data) throw {
        name: "DataNotFound",
      }

      res.status(200).json({
        status: "SUCCESS",
        data: {
          post: req.body,
        },
      });
    } catch (err) {
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  },

  async show(req, res) {
    try {
      const data = await postService.get(req.params.id);

      if(!data) throw {
        name: "DataNotFound",
      }
      
      res.status(200).json({
        status: "SUCCESS",
        data: data,
      });
    } catch (err) {
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  },

  async destroy(req, res) {
    try {
      const post = await postService.delete(req.params.id);

      if(!post) throw {
        name: "DataNotFound",
      }

      res.status(200).json({
        status: "SUCCESS",
        data: {
          post: "Post deleted",
        }
      });
    } catch (err) {
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  },
};
