module.exports = function (sequelize, DataTypes) {
  var MovieShow = sequelize.define('MovieShow', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  });
  MovieShow.associate = function (models) {
    MovieShow.hasMany(models.Favorite);
  };

  return MovieShow;
};