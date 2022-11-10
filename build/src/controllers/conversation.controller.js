"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConversationController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _converstationSchema = _interopRequireDefault(require("../models/converstationSchema"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _userSchema = _interopRequireDefault(require("../models/userSchema"));
var _conversation = require("../services/conversation.service");
var ObjectId = _mongoose["default"].Types.ObjectId;
var ConversationController = {
  getChatWith: function () {
    var _getChatWith = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$query, uid, chatWithUid, conversations, conversation;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$query = req.query, uid = _req$query.uid, chatWithUid = _req$query.cw;
              _context.prev = 1;
              if (chatWithUid) {
                _context.next = 7;
                break;
              }
              _context.next = 5;
              return _conversation.ConversationService.getAllChat(uid);
            case 5:
              conversations = _context.sent;
              return _context.abrupt("return", res.status(200).json((0, _toConsumableArray2["default"])(conversations)));
            case 7:
              _context.next = 9;
              return _conversation.ConversationService.getChatWith(uid, chatWithUid);
            case 9:
              conversation = _context.sent;
              res.status(200).json(conversation);
              _context.next = 16;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](1);
              res.status(400).json({
                errors: _context.t0
              });
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 13]]);
    }));
    function getChatWith(_x, _x2) {
      return _getChatWith.apply(this, arguments);
    }
    return getChatWith;
  }()
};
exports.ConversationController = ConversationController;
var getConverstationOfMember = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userid;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return req.params['userid'];
          case 2:
            userid = _context2.sent;
            _context2.prev = 3;
            _context2.next = 6;
            return _converstationSchema["default"].findOne({
              member_id: userid
            });
          case 6:
            ConverstatioinInfo = _context2.sent;
            res.status(200).json(ListenerInfo);
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            res.status(400).json({
              errors: _context2.t0
            });
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return function getConverstationOfMember(_x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
var getConverstationOfListener = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var userid;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return req.params['userid'];
          case 2:
            userid = _context3.sent;
            _context3.prev = 3;
            _context3.next = 6;
            return _converstationSchema["default"].findOne({
              listener_id: userid
            });
          case 6:
            ConverstatioinInfo = _context3.sent;
            res.status(200).json(ListenerInfo);
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(400).send();
          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return function getConverstationOfListener(_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var getChatConverstation = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _yield$req$query, senderId, receiverId, conver, ReUserInfo, listUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return req.query;
          case 2:
            _yield$req$query = _context5.sent;
            senderId = _yield$req$query.senderId;
            receiverId = _yield$req$query.receiverId;
            _converstationSchema["default"].find();
            _context5.next = 8;
            return _converstationSchema["default"].find({
              sender: senderId
            });
          case 8:
            conver = _context5.sent;
            ReUserInfo = conver.map( /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(item) {
                var userInfo;
                return _regenerator["default"].wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _userSchema["default"].findOne({
                          _id: item.receiver
                        });
                      case 2:
                        userInfo = _context4.sent;
                        return _context4.abrupt("return", userInfo);
                      case 4:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return function (_x9) {
                return _ref4.apply(this, arguments);
              };
            }());
            listUser = [];
            _context5.next = 13;
            return Promise.all(ReUserInfo).then(function (list) {
              return list;
            });
          case 13:
            listUser = _context5.sent;
            res.status(200).json(listUser);
          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return function getChatConverstation(_x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();
var getChatConverstationForListener = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var _yield$req$query2, receiverId, conver, ReUserInfo, listUser;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return req.query;
          case 2:
            _yield$req$query2 = _context7.sent;
            receiverId = _yield$req$query2.receiverId;
            _context7.next = 6;
            return _converstationSchema["default"].find({
              receiver: receiverId
            });
          case 6:
            conver = _context7.sent;
            ReUserInfo = conver.map( /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(item) {
                var userInfo;
                return _regenerator["default"].wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return _userSchema["default"].findOne({
                          _id: item.sender
                        });
                      case 2:
                        userInfo = _context6.sent;
                        return _context6.abrupt("return", userInfo);
                      case 4:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
              return function (_x12) {
                return _ref6.apply(this, arguments);
              };
            }());
            listUser = [];
            _context7.next = 11;
            return Promise.all(ReUserInfo).then(function (list) {
              return list;
            });
          case 11:
            listUser = _context7.sent;
            res.status(200).json(listUser);
          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return function getChatConverstationForListener(_x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();