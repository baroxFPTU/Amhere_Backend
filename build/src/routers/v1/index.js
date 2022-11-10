"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiV1 = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = _interopRequireDefault(require("./auth.route"));
var _chat = _interopRequireDefault(require("./chat.route"));
var _conversationRoute = _interopRequireDefault(require("./conversation.route.js"));
var _role = _interopRequireDefault(require("./role.route"));
var _user = _interopRequireDefault(require("./user.route"));
var router = _express["default"].Router();

/**
 * Auth APIs
 */
router.use('/auth', _auth["default"]);

/**
 * User APIs
 */
router.use('/users', _user["default"]);

/**
 * Conversations APIs
 */
router.use('/conversations', _conversationRoute["default"]);

/**
 * Chat APIs
 */
router.use('/chat', _chat["default"]);

/**
 * Role APIs
 */
router.use('/roles', _role["default"]);

/**
 * Root
 */
router.use('/', function (req, res) {
  res.send('<h1>Hello, welcome to AmHere APIs</h1>');
});
var apiV1 = router;
exports.apiV1 = apiV1;