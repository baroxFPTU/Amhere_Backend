"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _auth = require("../models/auth.model");
var AuthService = {
  loginWithPassword: function () {
    var _loginWithPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uid) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _auth.AuthModel.loginWithPassword(uid);
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
    function loginWithPassword(_x) {
      return _loginWithPassword.apply(this, arguments);
    }
    return loginWithPassword;
  }(),
  loginWithProvider: function () {
    var _loginWithProvider = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user, providerType) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              console.log({
                user: user
              });
              _context2.next = 4;
              return _auth.AuthModel.loginWithProvider({
                nickname: user.name || user.displayName,
                email: user.email,
                uid: user.user_id,
                photoURL: user.picture
              });
            case 4:
              return _context2.abrupt("return", _context2.sent);
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
    function loginWithProvider(_x2, _x3) {
      return _loginWithProvider.apply(this, arguments);
    }
    return loginWithProvider;
  }(),
  registerWithPassword: function () {
    var _registerWithPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              user.role_id = _mongoose["default"].Types.ObjectId(user.role_id);
              _context3.next = 4;
              return _auth.AuthModel.registerWithPassword(user);
            case 4:
              return _context3.abrupt("return", _context3.sent);
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
    function registerWithPassword(_x4) {
      return _registerWithPassword.apply(this, arguments);
    }
    return registerWithPassword;
  }()
};
exports.AuthService = AuthService;