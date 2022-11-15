'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    static associate(models) {
      classes.hasMany(models.enrollments, {
        foreignKey: 'class_id'
      });

      classes.belongsTo(models.people, {
        foreignKey: 'teacher_id'
      });
      classes.belongsTo(models.levels, {
        foreignKey: 'level_id'
      });
    }
  }
  classes.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'classes',
  });
  return classes;
};