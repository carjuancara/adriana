const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Roles",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      roles: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Roles", // Nombre de tabla personalizado
    }
  );
};
