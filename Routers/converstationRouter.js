const express = require("express");
const {
  getConverstationOfMember,
  getConverstationOfListener,
  getChatConverstation,
  getChatConverstationForListener,
} = require("../Controllers/converstationController");
const converstationRouter = express.Router();

// converstationRouter.get("/member/:userid", getConverstationOfMember);
// converstationRouter.get("/listener/:userid", getConverstationOfListener);
converstationRouter.get("/listener", getChatConverstationForListener);
converstationRouter.get("/", getChatConverstation);

module.exports = converstationRouter;
