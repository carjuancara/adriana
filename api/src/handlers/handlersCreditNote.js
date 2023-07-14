const { CreditNote, CreditDetail } = require('../db')
const postCredit = async (req, res) => {
  try {
    const { SaleId, date_original, date, UserId, direction, document, total_credit,detailsCredit } = req.body
    if (!SaleId ||
      !date_original ||
      !date ||
      !UserId ||
      !direction ||
      !document ||
      !total_credit ||
      !detailsCredit) res.status(400).json({ Error: "missing data" });
    const newCreditNote = await CreditNote.create(
      {
        SaleId,
        date_original,
        date,
        UserId,
        direction,
        document,
        total_credit
      })
    const newDetailsCreditNote = await CreditDetail.bulkCreate(detailsCredit)

    res.status(201).json({ msg: "the NoteCredit changes has been addeds" })

  } catch (error) {
    res.status(400).json({ Error: error.message })
  }
};
const getCredit = async (req, res) => { };
const deleteCredit = async (req, res) => { };
const updateCredit = async (req, res) => { };
const enabledCredit = async (req, res) => { }
module.exports = {
  postCredit,
  getCredit,
  deleteCredit,
  updateCredit,
  enabledCredit
};
