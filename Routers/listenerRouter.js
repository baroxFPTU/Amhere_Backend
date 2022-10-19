const express = require("express");
const {
  getListenerById,
  addNewListener,
} = require("../Controllers/listenerController");

const listenerRouter = express.Router();

listenerRouter.get("/:listenerid", getListenerById);
listenerRouter.post("/", addNewListener);

module.exports = listenerRouter;
