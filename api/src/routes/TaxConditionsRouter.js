const express = require("express");
const TaxConditionsRouter = express.Router();
const {
  postTax,
  getTax,
  deleteTax,
  updateTax,
} = require("../handlers/handlersTaxConditions");

TaxConditionsRouter.post("/", postTax);
TaxConditionsRouter.get("/:id", getTax);
TaxConditionsRouter.delete("/:id", deleteTax);
TaxConditionsRouter.put("/:id", updateTax);
module.exports = TaxConditionsRouter;
