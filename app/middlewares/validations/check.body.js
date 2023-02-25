const { validationResult } = require("express-validator")
const  errorCheck = require("../../errors/error.check")

module.exports = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    const err = {
      name: "BadRequest",
      message: errors.array().map((error) => error.msg),
    }
    errorCheck(err);
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  next()
};