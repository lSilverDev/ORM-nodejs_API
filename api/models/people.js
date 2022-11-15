'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people extends Model {
    static associate(models) {
      people.hasMany(models.classes, {
        foreignKey: 'teacher_id'
      });
      people.hasMany(models.enrollments, {
        foreignKey: 'student_id'
      });
    }
  }
  people.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'people',
  });
  return people;
};