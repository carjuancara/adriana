const { modifyState, getModel, updateModel } = require("../controllers");
const { Providers } = require("../db")

const validateProvider = (company_name, city, province, whatsapp) => {
  let missingConditions = [];
  if (!company_name) {
    missingConditions.push("company_name");
  }
  if (!city) {
    missingConditions.push("city");
  }
  if (!province) {
    missingConditions.push("province");
  }
  if (!whatsapp) {
    missingConditions.push("whatsapp");
  }
  return missingConditions;
};

const postProvider = async (req, res) => {
  try {
    const { company_name, city, province, whatsapp, direction, country, cuit } =
      req.body;
    const missingConditions = validateProvider(
      company_name,
      city,
      province,
      whatsapp
    );
    if (missingConditions.length > 0) {
      res.status(400).json({
        Error: {
          msg: "missing data",
          missing: missingConditions.join(", "),
        },
      });
    }
    const [newProvider, created] = await Providers.findOrCreate({
      where: { company_name: company_name },
      defaults: {
        city,
        province,
        whatsapp,
        direction,
        country,
        cuit,
      },
    });
    if (created) {
      res.status(201).json({ msg: `has been successfully created` });
    } else {
      res.status(200).json({ newProvider });
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getProvider = async (req, res) => {
  try {
    getModel(req, res, Providers);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const changeStateProvider = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const provider = await Providers.findByPk(id);
    if (provider.length === 0) {
      res.status(400).json("provider does not exist");
    } else {
      modifyState(req, res, provider, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};
const updateProvider = async (req, res) => {
  try {
    updateModel(req, res, Providers)
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postProvider,
  getProvider,
  changeStateProvider,
  updateProvider,
};
