const express = require("express");
const RolesRouter = express.Router();

const {
  postRoles,
  getRoles,
  deleteRoles,
  updateRoles,
} = require("../handlers/handlersRoles");

RolesRouter.post("/", postRoles);
RolesRouter.get("/:id", getRoles);
RolesRouter.delete("/:id", deleteRoles);
RolesRouter.put("/:id", updateRoles);

module.exports = RolesRouter;
