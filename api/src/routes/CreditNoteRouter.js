const express = require("express");
const CreditNoteRouter = express.Router();
const {
  postCredit,
  getCredit,
  deleteCredit,
  updateCredit,
} = require("../handlers/handlersCreditNote");

CreditNoteRouter.post("/", postCredit);
CreditNoteRouter.get("/:id", getCredit);
CreditNoteRouter.delete("/:id", deleteCredit);
CreditNoteRouter.put("/:id", updateCredit);

module.exports = CreditNoteRouter;
