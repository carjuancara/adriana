const express = require("express");
const UsersRouter = express.Router();
const {
  postUser,
  getUser,
  changeStateUser,
  updateUser,
} = require("../handlers/handlersUsers");

UsersRouter.post("/", postUser);
UsersRouter.get("/", getUser);
UsersRouter.put("/update", updateUser);
UsersRouter.put("/state", changeStateUser);
module.exports = UsersRouter;
