'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class levels extends Model {
    static associate(models) {
      levels.hasMany(models.classes, {
        foreignKey: 'level_id'
      });
    }
  }
  
  levels.init({
    level_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'levels',
  });

  return levels;
};