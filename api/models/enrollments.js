'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enrollments extends Model {
    static associate(models) {
      enrollments.belongsTo(models.people, {
        foreignKey: 'student_id'
      });
      enrollments.belongsTo(models.classes, {
        foreignKey: 'class_id'
      });
    }
  }
  enrollments.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'enrollments',
  });
  return enrollments;
};