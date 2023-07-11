const express = require('express')
const CompanyRouter = express.Router()

const {
    getCompany,
    updateCompany,
  } = require("../handlers/handlersCompany");
  
  CompanyRouter.get("/", getCompany);
  CompanyRouter.put("/", updateCompany);

module.exports= CompanyRouter