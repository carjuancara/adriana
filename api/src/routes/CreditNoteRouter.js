const express = require("express");
const CreditNoteRouter = express.Router();
const {
  postCredit,
  getCredit,
  deleteCredit,
  updateCredit,
  enabledCredit
} = require("../handlers/handlersCreditNote");

CreditNoteRouter.post("/", postCredit);
CreditNoteRouter.get("/", getCredit);
CreditNoteRouter.delete("/", deleteCredit);
CreditNoteRouter.put("/update", updateCredit);
CreditNoteRouter.put('/enabled',enabledCredit)
module.exports = CreditNoteRouter;
