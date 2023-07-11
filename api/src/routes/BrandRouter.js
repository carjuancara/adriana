const express = require("express");
const BrandRouter = express.Router();
const {
  postBrand,
  getBrand,
  updateBrand,
  changeStateBrand,
} = require("../handlers/handlersBrands");

BrandRouter.post("/", postBrand);
BrandRouter.get("/", getBrand);
BrandRouter.put("/update", updateBrand);
BrandRouter.put("/state", changeStateBrand);
module.exports = BrandRouter;
