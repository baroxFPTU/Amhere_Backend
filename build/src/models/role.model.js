"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoleModel = exports.Role = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));
var _db = require("../configs/db");
var roleSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    unique: true,
    required: true
  },
  created_at: {
    type: Date,
    "default": Date.now
  }
});
roleSchema.plugin(_mongooseUniqueValidator["default"]);
var Role = _db.appDB.model('Role', roleSchema);
exports.Role = Role;
var RoleModel = {
  add: function () {
    var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var name, slug, createdRole;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              name = _ref.name, slug = _ref.slug;
              _context.prev = 1;
              createdRole = new Role({
                name: name,
                slug: slug
              });
              _context.next = 5;
              return createdRole.save();
            case 5:
              return _context.abrupt("return", _context.sent);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw _context.t0 !== null && _context.t0 !== void 0 && _context.t0.errors ? _context.t0.errors : _context.t0;
            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));
    function add(_x) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  "delete": function () {
    var _delete2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
      var response;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return Role.findByIdAndDelete(id);
            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response);
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw new Error('Cannot delete role.');
            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));
    function _delete(_x2) {
      return _delete2.apply(this, arguments);
    }
    return _delete;
  }(),
  findAll: function () {
    var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Role.find();
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    function findAll() {
      return _findAll.apply(this, arguments);
    }
    return findAll;
  }(),
  findOne: function () {
    var _findOne = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Role.findOne(id).select('name slug _id');
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    function findOne(_x3) {
      return _findOne.apply(this, arguments);
    }
    return findOne;
  }()
};
exports.RoleModel = RoleModel;