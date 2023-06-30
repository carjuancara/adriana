const express = require("express");
const UsersRouter = express.Router();
const {
  postUser,
  getUser,
  deleteUser,
  updateUser,
} = require("../handlers/handlersUsers");

UsersRouter.post("/", postUser);
UsersRouter.get("/:id", getUser);
UsersRouter.delete("/:id", deleteUser);
UsersRouter.put("/:id", updateUser);
module.exports = UsersRouter;
