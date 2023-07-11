const express = require("express");
const SalesRouter = express.Router();
const {
  postSale,
  getSale,
  deleteSale,
  updateSale,
} = require("../handlers/handlersSales");

SalesRouter.post("/", postSale);
SalesRouter.get("/", getSale);
SalesRouter.put("/update", updateSale);
SalesRouter.put("/active", deleteSale);

module.exports = SalesRouter;
