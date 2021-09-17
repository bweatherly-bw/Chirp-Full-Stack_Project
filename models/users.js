'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.posts,{
        foreignKey:{
          name:'user_id',
          allowedNull: false
        }
      })
    }
  };
  users.init({
    user_email: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};