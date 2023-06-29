const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dni: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rol_id: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
      },
      tex_conditions_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      balance: {
        type: DataTypes.REAL,
        defaultValue: 0,
      },
      cuit: {
        type: DataTypes.STRING(13),
        allowNull: true,
        validate: {
          len: 13,
          isFormattedCuit(value) {
            if (!/^\d{2}-\d{8}-\d{1}$/.test(value)) {
              throw new Error("El formato del CUIT es incorrecto");
            }
          },
        },
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Users", // Nombre de tabla personalizado
    }
  );
};
