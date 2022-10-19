const express = require("express");
const {
  getAllMessage,
  addMessage,
} = require("../Controllers/messageController");

const messageRouter = express.Router();

messageRouter.post("/getmsg", getAllMessage);
messageRouter.post("/addmsg", addMessage);

module.exports = messageRouter;
