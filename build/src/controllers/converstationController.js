"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConverstationOfMember = exports.getConverstationOfListener = exports.getChatConverstationForListener = exports.getChatConverstation = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _converstationSchema = _interopRequireDefault(require("../models/converstationSchema"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _userSchema = _interopRequireDefault(require("../models/userSchema"));
var ObjectId = _mongoose["default"].Types.ObjectId;
var getConverstationOfMember = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userid;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.params['userid'];
          case 2:
            userid = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return _converstationSchema["default"].findOne({
              member_id: userid
            });
          case 6:
            ConverstatioinInfo = _context.sent;
            res.status(200).json(ListenerInfo);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            res.status(400).send();
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
  return function getConverstationOfMember(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getConverstationOfMember = getConverstationOfMember;
var getConverstationOfListener = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
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
              listener_id: userid
            });
          case 6:
            ConverstatioinInfo = _context2.sent;
            res.status(200).json(ListenerInfo);
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](3);
            res.status(400).send();
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 10]]);
  }));
  return function getConverstationOfListener(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// const addNewConverstation = async (req, res) => {
//   const listener = await { ...req.body };
//   const listenrSave = new Listener(listener);
//   try {
//     await listenrSave.save();
//     res.status(200).send(listenrSave);
//   } catch (error) {
//     res.status(400).send();
//   }
// };
exports.getConverstationOfListener = getConverstationOfListener;
var getChatConverstation = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _yield$req$query, senderId, receiverId, conver, ReUserInfo, listUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return req.query;
          case 2:
            _yield$req$query = _context4.sent;
            senderId = _yield$req$query.senderId;
            receiverId = _yield$req$query.receiverId;
            _converstationSchema["default"].find();
            _context4.next = 8;
            return _converstationSchema["default"].find({
              sender: senderId
            });
          case 8:
            conver = _context4.sent;
            ReUserInfo = conver.map( /*#__PURE__*/function () {
              var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(item) {
                var userInfo;
                return _regenerator["default"].wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _userSchema["default"].findOne({
                          _id: item.receiver
                        });
                      case 2:
                        userInfo = _context3.sent;
                        return _context3.abrupt("return", userInfo);
                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());
            console.log(ReUserInfo);
            listUser = [];
            _context4.next = 14;
            return Promise.all(ReUserInfo).then(function (list) {
              return list;
            });
          case 14:
            listUser = _context4.sent;
            console.log(listUser);
            res.status(200).json(listUser);
          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return function getChatConverstation(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getChatConverstation = getChatConverstation;
var getChatConverstationForListener = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _yield$req$query2, receiverId, conver, ReUserInfo, listUser;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return req.query;
          case 2:
            _yield$req$query2 = _context6.sent;
            receiverId = _yield$req$query2.receiverId;
            _context6.next = 6;
            return _converstationSchema["default"].find({
              receiver: receiverId
            });
          case 6:
            conver = _context6.sent;
            ReUserInfo = conver.map( /*#__PURE__*/function () {
              var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(item) {
                var userInfo;
                return _regenerator["default"].wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _userSchema["default"].findOne({
                          _id: item.sender
                        });
                      case 2:
                        userInfo = _context5.sent;
                        return _context5.abrupt("return", userInfo);
                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));
              return function (_x10) {
                return _ref6.apply(this, arguments);
              };
            }());
            console.log(ReUserInfo);
            listUser = [];
            _context6.next = 12;
            return Promise.all(ReUserInfo).then(function (list) {
              return list;
            });
          case 12:
            listUser = _context6.sent;
            console.log(listUser);
            res.status(200).json(listUser);
          case 15:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function getChatConverstationForListener(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getChatConverstationForListener = getChatConverstationForListener;