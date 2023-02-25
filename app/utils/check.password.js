const bcrypt = require('bcryptjs');

module.exports = (password, encryptedPassword) => {
  return new Promise((resolve, reject) => {
      bcrypt.compare(password, encryptedPassword, (err, result) => {
        if (!!err) {
          reject(err);
          return
        }
        resolve(result);
      });
    });
};