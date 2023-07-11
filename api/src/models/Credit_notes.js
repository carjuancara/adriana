const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "CreditNotes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      sale_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date_original: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: new Date().toLocaleDateString(),
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      document: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      total_credit: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "CreditNotes", // Nombre de tabla personalizado
    }
  );
};
