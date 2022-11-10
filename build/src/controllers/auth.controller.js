"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _auth = require("../services/auth.service");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var AuthController = {
  loginWithPassword: function () {
    var _loginWithPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var token, decode, userData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              token = req.body.token;
              decode = _jsonwebtoken["default"].decode(token);
              _context.next = 5;
              return _auth.AuthService.loginWithPassword(decode.user_id);
            case 5:
              userData = _context.sent;
              res.status(200).json(_objectSpread({}, userData));
              _context.next = 13;
              break;
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.status(400).json({
                errors: _context.t0
              });
            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 9]]);
    }));
    function loginWithPassword(_x, _x2) {
      return _loginWithPassword.apply(this, arguments);
    }
    return loginWithPassword;
  }(),
  loginWithProvider: function () {
    var _loginWithProvider = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body, token, providerType, userRequest, userResponse;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body = req.body, token = _req$body.token, providerType = _req$body.provider_type;
              userRequest = _jsonwebtoken["default"].decode(token);
              _context2.next = 5;
              return _auth.AuthService.loginWithProvider(userRequest, providerType);
            case 5:
              userResponse = _context2.sent;
              res.status(200).json({
                nickname: userResponse.nickname,
                photoURL: userResponse.photoURL || null,
                role_data: userResponse.role_data
              });
              _context2.next = 13;
              break;
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              res.status(400).json({
                errors: _context2.t0
              });
            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));
    function loginWithProvider(_x3, _x4) {
      return _loginWithProvider.apply(this, arguments);
    }
    return loginWithProvider;
  }(),
  registerWithPassword: function () {
    var _registerWithPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var user, userData;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              user = req.body;
              _context3.next = 4;
              return _auth.AuthService.registerWithPassword(user);
            case 4:
              userData = _context3.sent;
              res.status(200).json(_objectSpread({}, userData));
              _context3.next = 12;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              res.status(400).json({
                errors: _context3.t0
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));
    function registerWithPassword(_x5, _x6) {
      return _registerWithPassword.apply(this, arguments);
    }
    return registerWithPassword;
  }()
};
exports.AuthController = AuthController;