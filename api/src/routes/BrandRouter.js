const express = require("express");
const BrandRouter = express.Router();
const {
  postBrand,
  getBrand,
  deleteBrand,
  updateBrand,
} = require("../handlers/handlersBrands");

BrandRouter.post("/", postBrand);
BrandRouter.get("/:id", getBrand);
BrandRouter.delete("/:id", deleteBrand);
BrandRouter.put("/:id", updateBrand);
module.exports = BrandRouter;
