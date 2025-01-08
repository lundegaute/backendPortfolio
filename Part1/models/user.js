module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      Email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      EncryptedPassword: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: false,
      },
      Salt: {
        type: Sequelize.DataTypes.BLOB,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );
  User.associate = function (models) {
    User.belongsTo(models.Role, { allowNull: false });
  };
  return User;
};
