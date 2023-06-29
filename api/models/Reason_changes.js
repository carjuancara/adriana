const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Reason_changes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Reason_changes", // Nombre de tabla personalizado
    }
  );
};
