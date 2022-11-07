"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoleService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _role = require("../models/role.model");
var _slugify = _interopRequireDefault(require("slugify"));
var RoleService = {
  findAll: function () {
    var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var roles;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _role.RoleModel.findAll();
            case 3:
              roles = _context.sent;
              return _context.abrupt("return", roles);
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
    function findAll() {
      return _findAll.apply(this, arguments);
    }
    return findAll;
  }(),
  add: function () {
    var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(role) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              role.slug = (0, _slugify["default"])(role.name, {
                replacement: '-',
                lower: true,
                trim: true,
                remove: /[*+~.()'"!:@]/g
              });
              _context2.next = 4;
              return _role.RoleModel.add(role);
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
    function add(_x) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  "delete": function () {
    var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              if (id) {
                _context3.next = 3;
                break;
              }
              throw new Error('Cannot delete role');
            case 3:
              _context3.next = 5;
              return _role.RoleModel["delete"](id);
            case 5:
              return _context3.abrupt("return", _context3.sent);
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;
            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));
    function _delete(_x2) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }()
};
exports.RoleService = RoleService;