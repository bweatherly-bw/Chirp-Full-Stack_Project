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
      models.posts.belongsTo(models.user_id)
      models.posts.hasMany(models.exports,{
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
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};