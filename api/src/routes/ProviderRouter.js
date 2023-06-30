const express = require("express");
const ProviderRouter = express.Router();
const {
  postProvider,
  getProvider,
  deleteProvider,
  updateProvider,
} = require("../handlers/handlersProviders");

ProviderRouter.post("/", postProvider);
ProviderRouter.get("/:id", getProvider);
ProviderRouter.delete("/:id", deleteProvider);
ProviderRouter.put("/:id", updateProvider);

module.exports = ProviderRouter;
