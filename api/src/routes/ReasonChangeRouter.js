const express = require("express");
const ReasonChangeRouter = express.Router();

const {
  postReason,
  getReason,
  deleteReason,
  updateReason,
} = require("../handlers/handlersReasonChange");

ReasonChangeRouter.post("/", postReason);
ReasonChangeRouter.get("/:id", getReason);
ReasonChangeRouter.delete("/:id", deleteReason);
ReasonChangeRouter.put("/:id", updateReason);

module.exports = ReasonChangeRouter;
