const { Brands } = require("../db")
const {
  modifyState,
  getModel,
  updateModel,
  newModel,
} = require("../controllers");

const postBrand = async (req, res) => {
  try {
    /* a este manera falta validar campos obligatorios de cada modelo 
    const brand = new Brands
    newModel(req, res, brand, Brands) */
    const { company_name } = req.body;

    if (!company_name) {
      res.status(400).json({ Error: "missing data: company_name" });
    } else {
      const [newBrand, created] = await Brands.findOrCreate({
        where: { company_name: company_name },
        defaults: {
          company_name: company_name,
        },
      });
      if (!created) res.status(409).json({ msg: "brand already exists" });
      res.status(201).json({ msg: "the brand has been added" });
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const getBrand = async (req, res) => {
  try {
    getModel(req, res, Brands);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const changeStateBrand = async (req, res) => {
  try {
    const { id, active } = req.query;
    if (!id) res.status(400).json({ error: "missing data: id" });
    const brand = await Brands.findByPk(id);
    if (brand.length === 0) {
      res.status(400).json("brand does not exist");
    } else {
      modifyState(req, res, brand, active);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const updateBrand = async (req, res) => {
  try {
    updateModel(req, res, Brands);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

module.exports = {
  postBrand,
  getBrand,
  changeStateBrand,
  updateBrand,
};
