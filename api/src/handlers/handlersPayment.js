const { Payments } = require("../db");
const { modifyState, getModel, updateModel } = require("../controllers");

const postPayment = async (req, res) => {
  try {
    const { description } = req.body;

    if (!description)
      res.status(400).json({ Error: "missing data: description" });
    const [newPayment, created] = await Payments.findOrCreate({
      where: { description: description },
      defaults: {
        description: description,
      },
    });
    if (!created) res.status(409).json({ msg: "Payment already exists" });
    res.status(201).json({ msg: "the payment has been added" });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getPayment = async (req, res) => {
  try {
    await getModel(req, res, Payments);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const changeStatePayment = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const payment = await Payments.findByPk(id);
    if (payment.length === 0) {
      res.status(400).json("payment does not exist");
    } else {
      modifyState(req, res, payment, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const updatePayment = async (req, res) => {
  try {
    updateModel(req, res, Payments);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postPayment,
  getPayment,
  changeStatePayment,
  updatePayment,
};
