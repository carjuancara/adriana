const express = require("express");
const SalesRouter = express.Router();
const {
  postSale,
  getSale,
  deleteSale,
  updateSale,
} = require("../handlers/handlersSales");

SalesRouter.post("/", postSale);
SalesRouter.get("/:id", getSale);
SalesRouter.delete("/:id", deleteSale);
SalesRouter.put("/:id", updateSale);

module.exports = SalesRouter;
