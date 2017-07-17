'use strict';
module.exports = function(sequelize, DataTypes) {
  var flight = sequelize.define('flight', {
    date: DataTypes.DATE,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    airplane_id: DataTypes.INTEGER
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
  return flight;
};
