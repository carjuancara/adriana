const express = require('express')
const CompanyRouter = express.Router()

const {
    postCompany,
    getCompany,
    deleteCompany,
    updateCompany,
  } = require("../handlers/handlersCompany");
  
  CompanyRouter.post("/", postCompany);
  CompanyRouter.get("/:id", getCompany);
  CompanyRouter.delete("/:id", deleteCompany);
  CompanyRouter.put("/:id", updateCompany);

module.exports= CompanyRouter