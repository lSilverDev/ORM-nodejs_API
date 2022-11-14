'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      classes.hasMany(models.enrollments, {
        foreignKey: 'class_id'
      });
      classes.belongsTo(models.people);
      classes.belongsTo(models.levels);
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