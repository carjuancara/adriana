const express = require("express");
const PaymentRouter = express.Router();

const {
  postPayment,
  getPayment,
  changeStatePayment,
  updatePayment,
} = require("../handlers/handlersPayment");

PaymentRouter.post("/", postPayment);
PaymentRouter.get("/", getPayment);
PaymentRouter.put("/update", updatePayment);
PaymentRouter.put("/state", changeStatePayment);

module.exports = PaymentRouter;
