'use strict';
module.exports = function(sequelize, DataTypes) {
  var airplane = sequelize.define('airplane', {
    name: DataTypes.STRING,
    rows: DataTypes.INTEGER,
    columns: DataTypes.INTEGER
  }, {
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return airplane;
};
