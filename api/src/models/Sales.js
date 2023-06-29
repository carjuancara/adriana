const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Sales",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      total: {
        type: DataTypes.REAL,
        allowNull:false
        },
      discount_total: {
        type: DataTypes.REAL,
        allowNull:false
        },
      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull:false
        },
      sales_date: {
        type: DataTypes.STRING(10),
        defaultValue: new Date().toLocaleDateString()
        },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Sales", // Nombre de tabla personalizado
    }
  );
};