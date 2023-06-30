const express = require("express");
const PaymentRouter = express.Router();

const {
  postPayment,
  getPayment,
  deletePayment,
  updatePayment,
} = require("../handlers/handlersPayment");

PaymentRouter.post("/", postPayment);
PaymentRouter.get("/:id", getPayment);
PaymentRouter.delete("/:id", deletePayment);
PaymentRouter.put("/:id", updatePayment);

module.exports = PaymentRouter;
