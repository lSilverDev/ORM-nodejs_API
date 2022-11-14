'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class levels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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