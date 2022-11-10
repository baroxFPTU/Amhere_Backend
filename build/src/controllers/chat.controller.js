"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChatController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _chat = require("../services/chat.service");
var ChatController = {
  getMessageByConversationId: function () {
    var _getMessageByConversationId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var conversationId, messages;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              conversationId = req.query.id;
              _context.prev = 1;
              _context.next = 4;
              return _chat.ChatService.getMessageByConversationId(conversationId);
            case 4:
              messages = _context.sent;
              res.status(200).json(messages);
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              res.status(400).json(_context.t0);
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));
    function getMessageByConversationId(_x, _x2) {
      return _getMessageByConversationId.apply(this, arguments);
    }
    return getMessageByConversationId;
  }(),
  addMessage: function () {
    var _addMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var message, createdMessage;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              message = req.body;
              console.log({
                message: message,
                location: 'controller'
              });
              _context2.prev = 2;
              _context2.next = 5;
              return _chat.ChatService.addMessage(message);
            case 5:
              createdMessage = _context2.sent;
              res.status(200).json(createdMessage);
              _context2.next = 12;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              res.status(400).json(_context2.t0);
            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));
    function addMessage(_x3, _x4) {
      return _addMessage.apply(this, arguments);
    }
    return addMessage;
  }()
};
exports.ChatController = ChatController;