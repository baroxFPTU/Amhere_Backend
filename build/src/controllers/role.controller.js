"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoleController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _role = require("../services/role.service");
var RoleController = {
  findAll: function () {
    var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var roles;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _role.RoleService.findAll();
            case 3:
              roles = _context.sent;
              res.json(roles).status(200);
              _context.next = 11;
              break;
            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              res.json({
                errors: _context.t0
              }).status(500);
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));
    function findAll(_x, _x2) {
      return _findAll.apply(this, arguments);
    }
    return findAll;
  }(),
  add: function () {
    var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var role, createdRole;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              role = req.body;
              _context2.next = 4;
              return _role.RoleService.add(role);
            case 4:
              createdRole = _context2.sent;
              res.json({
                role: createdRole
              }).status(200);
              _context2.next = 12;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              res.json({
                errors: _context2.t0
              }).status(500);
            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));
    function add(_x3, _x4) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  "delete": function () {
    var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var roleID, response;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              roleID = req.query.id;
              _context3.next = 4;
              return _role.RoleService["delete"](roleID);
            case 4:
              response = _context3.sent;
              res.json({
                message: 'Deleted Success'
              }).status(200);
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              res.json({
                errors: _context3.t0.message
              }).status(500);
            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));
    function _delete(_x5, _x6) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }()
};
exports.RoleController = RoleController;