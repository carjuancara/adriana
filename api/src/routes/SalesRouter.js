const express = require("express");
const SalesRouter = express.Router();
const {
  postSale,
  getSale,
} = require("../handlers/handlersSales");

SalesRouter.post("/", postSale);
SalesRouter.get("/", getSale);


module.exports = SalesRouter;
