"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthModel = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _db = require("../configs/db");
var _user = require("./user.model");
var AuthModel = {
  loginWithPassword: function () {
    var _loginWithPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(uid) {
      var response, addedRoleUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _user.UserModel.findOneByUid(uid);
            case 3:
              response = _context.sent;
              _context.next = 6;
              return (0, _user.addRoleData)(response);
            case 6:
              addedRoleUser = _context.sent;
              return _context.abrupt("return", {
                role_data: addedRoleUser.role_data,
                nickname: addedRoleUser.nickname,
                photoURL: addedRoleUser.photoURL
              });
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    function loginWithPassword(_x) {
      return _loginWithPassword.apply(this, arguments);
    }
    return loginWithPassword;
  }(),
  loginWithProvider: function () {
    var _loginWithProvider = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(user) {
      var userInstance, response, addedRoleUser;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              userInstance = user;
              _context2.next = 4;
              return _user.UserModel.findOneByUid(user.uid);
            case 4:
              response = _context2.sent;
              if (response) {
                _context2.next = 9;
                break;
              }
              _context2.next = 8;
              return _user.UserModel.add(user);
            case 8:
              userInstance = _context2.sent;
            case 9:
              _context2.next = 11;
              return (0, _user.addRoleData)(userInstance);
            case 11:
              addedRoleUser = _context2.sent;
              return _context2.abrupt("return", {
                role_data: addedRoleUser.role_data,
                nickname: addedRoleUser.nickname,
                photoURL: addedRoleUser.photoURL
              });
            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](0);
              throw _context2.t0;
            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 15]]);
    }));
    function loginWithProvider(_x2) {
      return _loginWithProvider.apply(this, arguments);
    }
    return loginWithProvider;
  }(),
  registerWithPassword: function () {
    var _registerWithPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(user) {
      var createdUser;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _user.UserModel.add(user);
            case 2:
              createdUser = _context3.sent;
              return _context3.abrupt("return", {
                role_data: createdUser.role_data,
                photoURL: createdUser.photoURL,
                nickname: createdUser.nickname
              });
            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    function registerWithPassword(_x3) {
      return _registerWithPassword.apply(this, arguments);
    }
    return registerWithPassword;
  }()
};
exports.AuthModel = AuthModel;