const { body } = require('express-validator');
const { User } = require('../../models');

module.exports = {
  postValidation: [
    body('title', "Title is required").exists(),
    body('body', "Body is required").exists(),
  ],
  userValidation: [
    body('email', "Email is required").exists(),
    body('email', "Email must be valid").isEmail(),
    body("email", "Email already in use.").custom((value) => {
      return User.findOne({ where: { email: value } }).then((user) => {
        if (user) {
          return Promise.reject("Email already in use.");
        }
      });
    }),
    body('name', "Name is required").exists(),
    body('password', "Password is required").exists(),
    body('password', "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.").isStrongPassword(),
  ],
};