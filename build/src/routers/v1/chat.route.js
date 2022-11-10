"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _chat = require("../../controllers/chat.controller");
var ChatRoute = _express["default"].Router();
ChatRoute.get('/', _chat.ChatController.getMessageByConversationId);
ChatRoute.post('/', _chat.ChatController.addMessage);
var _default = ChatRoute;
exports["default"] = _default;