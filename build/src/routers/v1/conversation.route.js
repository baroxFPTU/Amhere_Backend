"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _conversation = require("../../controllers/conversation.controller");
var ConversationRoute = _express["default"].Router();
ConversationRoute.get('/', _conversation.ConversationController.getChatWith);
var _default = ConversationRoute;
exports["default"] = _default;