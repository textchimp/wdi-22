'use strict';
module.exports = function(sequelize, DataTypes) {
  var reservation = sequelize.define('reservation', {
    user_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    row_no: DataTypes.INTEGER,
    column_no: DataTypes.INTEGER,
    seat_no: DataTypes.INTEGER
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
  return reservation;
};
