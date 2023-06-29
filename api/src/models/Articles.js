const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Articles",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      description: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        set(value) {
          this.setDataValue("description", value.toLowerCase());
        },
        get() {
          const value =
            this.getDataValue("description").slice(0, 1).toUpperCase() +
            this.getDataValue("description").slice(1).toLowerCase();

          return value;
        },
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
      price_cost: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      cash_price: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      price_list: {
        type: DataTypes.REAL,
        allowNull: false,
      },
      discount: {
        type: DataTypes.REAL,
        allowNull: true,
      },
      brand_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      provider_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Articles", // Nombre de tabla personalizado
    }
  );
};
