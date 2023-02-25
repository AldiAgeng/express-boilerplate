const userServices = require("../../../services/user.service");
const errorCheck = require("../../../errors/error.check");

module.exports = {
  async register(req, res) {
    try {
      const user = await userServices.register(req.body);
      res.status(201).json({
        status: "SUCCESS",
        data: {
          user
        },
      });
    }catch(err){
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  },
  async login(req, res) {
    try {
      const token = await userServices.login(req.body);
      res.status(200).json({
        status: "SUCCESS",
        data: {
          token
        },
      });
    }catch(err){
      errorCheck(err);
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
  }
};
    