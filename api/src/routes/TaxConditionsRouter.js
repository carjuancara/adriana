const express = require("express");
const TaxConditionsRouter = express.Router();
const {
  postTax,
  getTax,
  changeStateTax,
  updateTax,
} = require("../handlers/handlersTaxConditions");

TaxConditionsRouter.post("/", postTax);
TaxConditionsRouter.get("/", getTax);
TaxConditionsRouter.put("/update", updateTax);
TaxConditionsRouter.put("/state", changeStateTax);
module.exports = TaxConditionsRouter;
