const express = require("express");
const ReasonChangeRouter = express.Router();

const {
  postReason,
  getReason,
  updateReason,
  changeStateReason,
} = require("../handlers/handlersReasonChange");

ReasonChangeRouter.post("/", postReason);
ReasonChangeRouter.get("/", getReason);
ReasonChangeRouter.put("/update", updateReason);
ReasonChangeRouter.put("/state", changeStateReason);

module.exports = ReasonChangeRouter;
