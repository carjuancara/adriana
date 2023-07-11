const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "Company",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        defaultValue: 1,
        unique: true,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuit: {
        type: DataTypes.STRING(13),
        allowNull: false,
        validate: {
          len: {
            args: [13, 13],
            msg: "El CUIT debe tener 13 caracteres",
          },
          isFormattedCuit: function (value) {
            if (!/^\d{2}-\d{8}-\d{1}$/.test(value)) {
              throw new Error("El formato del CUIT es incorrecto");
            }
          },
        },
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iibb: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      modelName: "Company",
    }
  );
};
