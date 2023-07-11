const express = require("express");
const ProviderRouter = express.Router();
const {
  postProvider,
  getProvider,
  changeStateProvider,
  updateProvider,
} = require("../handlers/handlersProviders");

ProviderRouter.post("/", postProvider);
ProviderRouter.get("/", getProvider);
ProviderRouter.put("/state", changeStateProvider);
ProviderRouter.put("/update", updateProvider);

module.exports = ProviderRouter;
