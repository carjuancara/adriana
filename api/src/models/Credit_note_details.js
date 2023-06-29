const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Credit_detail",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      note_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reason_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Credit_detail", // Nombre de tabla personalizado
    }
  );
};
