'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Email must be valid.",
        },
        notEmpty: {
          msg: "Email is required, and cannot be empty.",
        },
        isUnique: function(value, next) {
          User.findOne({where: {email: value}}).then(user => {
            if(user) {
              return next('Email already in use.')
            }
            return next();
          }).catch((err) => {
            return next(err);
          });
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Name is required, and cannot be empty.",
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password is required, and cannot be empty.",
        },
        isStrongPassword: {
          msg: "Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.",
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};