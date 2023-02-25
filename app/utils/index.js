const hashPassword = require("./hash.password");
const checkPassword = require("./check.password");
const createToken = require("./create.token");

module.exports = {
  hashPassword,
  checkPassword,
  createToken,
};