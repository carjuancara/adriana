const { modifyState, getModel, updateModel } = require("../controllers");
const { Tax } = require("../db")

const postTax = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description)
      res.status(400).json({ Error: "missing data: description" });
    const [newTax, created] = await Tax.findOrCreate({
      where: { description: description },
      defaults: {
        description: description,
      },
    });
    if (!created) {
      res.status(409).json({ msg: "Tax changes already exists" });
    } else {
      res.status(201).json({ msg: "the Tax changes has been added" });
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getTax = async (req, res) => {
  try {
    getModel(req, res, Tax);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const changeStateTax = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const tax = await Tax.findByPk(id);
    if (tax.lenght === 0) {
      res.status(400).json("tax does not exist");
    } else {
      modifyState(req, res, tax, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const updateTax = async (req, res) => {
  try {
    updateModel(req, res, Tax);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postTax,
  getTax,
  changeStateTax,
  updateTax,
};
