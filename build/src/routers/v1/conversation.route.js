"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _converstationController = require("../../controllers/converstationController");
var ConversationRoute = _express["default"].Router();

// ConversationRoute.get("/member/:userid", getConverstationOfMember);
// ConversationRoute.get("/listener/:userid", getConverstationOfListener);
ConversationRoute.get('/listener', _converstationController.getChatConverstationForListener);
ConversationRoute.get('/', _converstationController.getChatConverstation);
var _default = ConversationRoute;
exports["default"] = _default;