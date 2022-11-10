"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationModel = exports.Conversation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _db = require("../configs/db");
var _user = require("./user.model");
var Schema = _mongoose["default"].Schema;
var conversationSchema = new Schema({
  creator_uid: {
    type: String,
    require: true
  },
  participants: {
    type: Array
  },
  last_message_id: {
    type: String
  },
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date,
    "default": null
  }
}, {
  collection: 'conversations'
});
var Conversation = _db.appDB.model('Conversation', conversationSchema);
exports.Conversation = Conversation;
var ConversationModel = {
  create: function () {
    var _create = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uid, chatWithUid) {
      var newConversation, createdConversation;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              newConversation = new Conversation({
                creator_uid: uid,
                participants: [uid, chatWithUid],
                last_message_id: null
              });
              _context.next = 4;
              return newConversation.save();
            case 4:
              createdConversation = _context.sent.toObject();
              return _context.abrupt("return", createdConversation);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));
    function create(_x, _x2) {
      return _create.apply(this, arguments);
    }
    return create;
  }(),
  getChatWith: function () {
    var _getChatWith = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(uid, chatWithUid) {
      var response;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Conversation.find({
                participants: {
                  $all: [uid, chatWithUid]
                }
              });
            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    function getChatWith(_x3, _x4) {
      return _getChatWith.apply(this, arguments);
    }
    return getChatWith;
  }(),
  getAllChat: function () {
    var _getAllChat = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(uid) {
      var response;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return Conversation.find({
                participants: {
                  $all: [uid]
                }
              });
            case 3:
              response = _context3.sent;
              return _context3.abrupt("return", response);
            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;
            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));
    function getAllChat(_x5) {
      return _getAllChat.apply(this, arguments);
    }
    return getAllChat;
  }()
};
exports.ConversationModel = ConversationModel;