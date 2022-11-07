"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _messageSchema = _interopRequireDefault(require("../models/messageSchema"));
var _converstationSchema = _interopRequireDefault(require("../models/converstationSchema"));
var _mongodb = _interopRequireDefault(require("mongodb"));
var getAllMessage = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, sender, receiver, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, sender = _req$body.sender, receiver = _req$body.receiver;
            _context.next = 4;
            return _messageSchema["default"].find({
              users: {
                $all: [sender, receiver]
              }
            }).sort({
              updateAt: 1
            });
          case 4:
            message = _context.sent;
            res.json(message);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            res.status(400).send();
          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function getAllMessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var addMessage = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, receiver, sender, message, converstationSave, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, receiver = _req$body2.receiver, sender = _req$body2.sender, message = _req$body2.message;
            _context2.next = 4;
            return _converstationSchema["default"].findOne({
              users: {
                $all: [sender, receiver]
              }
            });
          case 4:
            converstationSave = _context2.sent;
            if (converstationSave) {
              _context2.next = 9;
              break;
            }
            converstationSave = new _converstationSchema["default"]({
              users: [receiver, sender],
              sender: sender,
              receiver: receiver
            });
            _context2.next = 9;
            return converstationSave.save();
          case 9:
            _context2.next = 11;
            return _messageSchema["default"].create({
              message: message,
              users: [receiver, sender],
              sender: sender,
              receiver: receiver,
              converstation_id: converstationSave._id
            });
          case 11:
            data = _context2.sent;
            if (!data) {
              _context2.next = 14;
              break;
            }
            return _context2.abrupt("return", res.json({
              msg: 'Message addedd successfully'
            }));
          case 14:
            return _context2.abrupt("return", res.json({
              msg: 'Failed to addedd message to database'
            }));
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(400).send();
          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return function addMessage(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var addMessageFun = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref3) {
    var receiver, sender, message, converstationSave, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            receiver = _ref3.receiver, sender = _ref3.sender, message = _ref3.message;
            _context3.next = 3;
            return _converstationSchema["default"].findOne({
              users: {
                $all: [sender, receiver]
              }
            });
          case 3:
            converstationSave = _context3.sent;
            console.log({
              converstationSave: converstationSave
            });
            if (converstationSave) {
              _context3.next = 9;
              break;
            }
            converstationSave = new _converstationSchema["default"]({
              users: [receiver, sender],
              sender: sender,
              receiver: receiver
            });
            _context3.next = 9;
            return converstationSave.save();
          case 9:
            _context3.next = 11;
            return _messageSchema["default"].create({
              message: message,
              users: [receiver, sender],
              sender: sender,
              receiver: receiver,
              converstation_id: converstationSave._id
            });
          case 11:
            data = _context3.sent;
          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return function addMessageFun(_x5) {
    return _ref4.apply(this, arguments);
  };
}();
var MessageController = {
  getAllMessage: getAllMessage,
  addMessage: addMessage,
  addMessageFun: addMessageFun
};
exports.MessageController = MessageController;