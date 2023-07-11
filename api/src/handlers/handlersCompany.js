const { Company } = require('../db')
const getCompany = async (req, res) => {
  const getCompany = await Company.findByPk(1)
  res.status(200).json(getCompany)
 }
const updateCompany = async (req, res) => {
  const { company_name, cuit, direction, city, province, country, whatsapp, iibb } = req.body
  
  
  
}
  module.exports = {
    getCompany,
    updateCompany,
  };
