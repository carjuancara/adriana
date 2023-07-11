const { modifyState, getModel, updateModel } = require("../controllers");
const { Reason_changes } = require("../db")

const postReason = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description)
      res.status(400).json({ Error: "missing data: description" });
    const [newReason, created] = await Reason_changes.findOrCreate({
      where: { description: description },
      defaults: {
        description: description,
      },
    });
    if (!created) {
      res.status(409).json({ msg: "reason changes already exists" });
    } else {
      res.status(201).json({ msg: "the reason changes has been added" });
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const getReason = async (req, res) => {
  try {
    getModel(req, res, Reason_changes);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const changeStateReason = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const reason = await Reason_changes.findByPk(id);
    if (reason.lenght === 0) {
      res.status(400).json("reason does not exist");
    } else {
      modifyState(req, res, reason, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const updateReason = async (req, res) => {
  try {
   updateModel(req, res, Reason_changes)
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postReason,
  getReason,
  changeStateReason,
  updateReason,
};
