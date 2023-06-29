const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Providers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      autoIncrement:true
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    direction: {
      type: DataTypes.STRING,
      allowNull: true,
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
    cuit: {
      type: DataTypes.STRING(13),
      allowNull: true,
      validate: {
        len: 13,
        isFormattedCuit(value) {
          if (!/^\d{2}-\d{8}-\d{1}$/.test(value)) {
            throw new Error('El formato del CUIT es incorrecto');
          }
        }
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },{
    tableName: 'Providers' // Nombre de tabla personalizado
  });
};
