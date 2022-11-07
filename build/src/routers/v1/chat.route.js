"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatRoute = void 0;
var _express = _interopRequireDefault(require("express"));
var _message = require("../../controllers/message.controller");
var router = _express["default"].Router();
router.post('/getmsg', _message.MessageController.getAllMessage);
router.post('/addmsg', _message.MessageController.addMessage);
var ChatRoute = router;
exports.ChatRoute = ChatRoute;