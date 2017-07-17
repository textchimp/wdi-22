'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    image: DataTypes.STRING
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
  return user;
};
