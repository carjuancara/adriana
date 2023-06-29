const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Company", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement:true
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    cuit: {
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        len: 13,
        isFormattedCuit(value) {
          if (!/^\d{2}-\d{8}-\d{1}$/.test(value)) {
            throw new Error('El formato del CUIT es incorrecto');
          }
        }
      }
    },
    direction: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull:false
    },
    country: {
      type: DataTypes.STRING,
      allowNull:false
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric:isNumeric('El número de teléfono debe contener solo dígitos')
      }
    },
    iibb: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric:isNumeric('El numero de IIBB solo debe contener numeros')
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue:true
  }
  },{
    tableName: 'Company' // Nombre de tabla personalizado
  });
};