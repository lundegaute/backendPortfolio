module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define(
    "Role",
    {
      Role: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    },
  );

  Role.associate = (models) => {
    Role.hasMany(models.User, {});
  };

  return Role;
};
