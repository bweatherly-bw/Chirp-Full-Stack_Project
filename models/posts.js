'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      models.posts.hasMany(models.likes,{
        foreignKey:{
          name:'post_id',
        allowedNull:false
            }
      })
    }
    
  };
  posts.init({
    user_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
    text: DataTypes.STRING,
    post_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};