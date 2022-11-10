"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _chat = require("../models/chat.model");
var ChatService = {
  getMessageByConversationId: function () {
    var _getMessageByConversationId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conversationId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _chat.ChatModel.getMessageByConversationId(conversationId);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));
    function getMessageByConversationId(_x) {
      return _getMessageByConversationId.apply(this, arguments);
    }
    return getMessageByConversationId;
  }(),
  addMessage: function () {
    var _addMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(message) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _chat.ChatModel.addMessage(message);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);
              throw _context2.t0;
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 6]]);
    }));
    function addMessage(_x2) {
      return _addMessage.apply(this, arguments);
    }
    return addMessage;
  }()
};
exports.ChatService = ChatService;