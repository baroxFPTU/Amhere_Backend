const express = require("express");
const {
  getMemberById,
  addNewMember,
} = require("../Controllers/memberController");

const memberRouter = express.Router();

memberRouter.get("/:memberid", getMemberById);
memberRouter.post("/", addNewMember);

module.exports = memberRouter;
