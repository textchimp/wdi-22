'use strict';
module.exports = function(sequelize, DataTypes) {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.post.belongsTo(models.user, { foreignKey: 'user_id'} );
      }
    }
  });
  return post;
};
