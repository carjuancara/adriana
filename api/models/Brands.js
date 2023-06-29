const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Brands",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Brands", // Nombre de tabla personalizado
    }
  );
};
