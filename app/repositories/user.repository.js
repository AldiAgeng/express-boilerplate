const { User } = require("../models")

module.exports = {
  create(createArgs) {
    return User.create(createArgs);
  },
  findByEmail(email) {
    return User.findOne({ where: { email } });
  },
  findById(id) {
    return User.findByPk(id);
  }
}