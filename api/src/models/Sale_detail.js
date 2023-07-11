const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "SaleDetails",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      sales_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      article_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price_cost: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      sale_price: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      discount_item: {
        type: DataTypes.REAL,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "SaleDetails", // Nombre de tabla personalizado
    }
  );
};
