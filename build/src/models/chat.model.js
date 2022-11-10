"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = exports.ChatModel = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireWildcard(require("mongoose"));
var _db = require("../configs/db");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Schema = _mongoose["default"].Schema;
var messageSchema = new Schema({
  body: {
    type: String,
    require: true
  },
  sender_id: {
    type: String,
    require: true
  },
  conversation_id: {
    type: _mongoose["default"].Types.ObjectId,
    require: true
  },
  parent_message_id: {
    type: _mongoose["default"].Types.ObjectId,
    "default": null,
    nullable: true
  },
  created_at: {
    type: Date,
    "default": Date.now
  }
}, {
  collection: 'messages'
});
var Message = _db.appDB.model('message', messageSchema);
exports.Message = Message;
var ChatModel = {
  getMessageByConversationId: function () {
    var _getMessageByConversationId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(conversationId) {
      var response;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Message.find({
                conversation_id: _mongoose["default"].Types.ObjectId(conversationId)
              });
            case 3:
              response = _context.sent;
              return _context.abrupt("return", response);
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    function getMessageByConversationId(_x) {
      return _getMessageByConversationId.apply(this, arguments);
    }
    return getMessageByConversationId;
  }(),
  addMessage: function () {
    var _addMessage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(message) {
      var body, sender_id, conversation_id, parent_message_id, newMessage, createdMessage;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              body = message.body, sender_id = message.sender_id, conversation_id = message.conversation_id, parent_message_id = message.parent_message_id;
              newMessage = new Message({
                body: body,
                sender_id: sender_id,
                conversation_id: _mongoose["default"].Types.ObjectId(conversation_id),
                parent_message_id: parent_message_id
              });
              _context2.prev = 2;
              _context2.next = 5;
              return newMessage.save();
            case 5:
              createdMessage = _context2.sent;
              return _context2.abrupt("return", createdMessage);
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              throw _context2.t0;
            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));
    function addMessage(_x2) {
      return _addMessage.apply(this, arguments);
    }
    return addMessage;
  }()
};
exports.ChatModel = ChatModel;