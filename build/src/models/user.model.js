"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = exports.User = void 0;
exports.addRoleData = addRoleData;
exports.userSchemaYup = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _db = require("../configs/db");
var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));
var yup = _interopRequireWildcard(require("yup"));
var _environment = require("../configs/environment");
var _role = require("./role.model");
var _moment = _interopRequireDefault(require("moment"));
var _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  uid: {
    type: String,
    require: true,
    unique: true
  },
  nickname: {
    type: String,
    require: true
  },
  birthday: {
    type: Date
  },
  phone: {
    type: String,
    "default": null
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  photoURL: {
    type: String,
    "default": null
  },
  role_id: {
    type: _mongoose["default"].Types.ObjectId,
    require: true
  },
  categories: {
    type: Array
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
  collection: 'users'
});
var userSchemaYup = yup.object().shape({
  uid: yup.string().required('uid is required'),
  nickname: yup.string().required(),
  birthday: yup.date(),
  phone: yup.string().nullable(),
  email: yup.string().required(),
  photoURL: yup.string().nullable(),
  role_id: yup.string().length(24),
  categories: yup.array(),
  created_at: yup.date().transform(function (value, originalValue) {
    if (_this.isType(value)) {
      return value;
    }
    var result = (0, _moment["default"])(originalValue).toDate();
    return result;
  })["default"]((0, _moment["default"])(Date.now()).toDate()),
  updated_at: yup.date().nullable()
});
exports.userSchemaYup = userSchemaYup;
userSchema.plugin(_mongooseUniqueValidator["default"]);
var User = _db.appDB.model('User', userSchema);
exports.User = User;
var UserModel = {
  add: function () {
    var _add = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(user) {
      var uid, nickname, email, phone, photoURL, birthday, _user$role_id, role_id, createdUser, response, addedRoleUser;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              uid = user.uid, nickname = user.nickname, email = user.email, phone = user.phone, photoURL = user.photoURL, birthday = user.birthday, _user$role_id = user.role_id, role_id = _user$role_id === void 0 ? null : _user$role_id;
              createdUser = new User({
                uid: uid,
                nickname: nickname,
                email: email,
                phone: phone,
                photoURL: photoURL,
                birthday: birthday,
                role_id: role_id
              });
              _context.next = 5;
              return createdUser.save();
            case 5:
              response = _context.sent.toObject();
              _context.next = 8;
              return addRoleData(response);
            case 8:
              addedRoleUser = _context.sent;
              console.log({
                addedRoleUser: addedRoleUser
              });
              return _context.abrupt("return", addedRoleUser);
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              throw _context.t0;
            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 13]]);
    }));
    function add(_x) {
      return _add.apply(this, arguments);
    }
    return add;
  }(),
  findAll: function () {
    var _findAll = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return User.find();
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    function findAll() {
      return _findAll.apply(this, arguments);
    }
    return findAll;
  }(),
  findOneByUid: function () {
    var _findOneByUid = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(uid) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return User.findOne({
                uid: uid
              });
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    function findOneByUid(_x2) {
      return _findOneByUid.apply(this, arguments);
    }
    return findOneByUid;
  }()
};
exports.UserModel = UserModel;
function addRoleData(_x3) {
  return _addRoleData.apply(this, arguments);
}
function _addRoleData() {
  _addRoleData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
    var addedUser, roleData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            if (user) {
              _context4.next = 3;
              break;
            }
            throw new Error('Cannot add role for user');
          case 3:
            addedUser = user;
            if (!addedUser.role_id) {
              _context4.next = 10;
              break;
            }
            _context4.next = 7;
            return _role.RoleModel.findOne(addedUser.role_id);
          case 7:
            _context4.t0 = _context4.sent;
            _context4.next = 11;
            break;
          case 10:
            _context4.t0 = null;
          case 11:
            roleData = _context4.t0;
            addedUser.role_data = roleData;
            if (user.role_id) {
              delete addedUser.role_id;
            }
            return _context4.abrupt("return", addedUser);
          case 17:
            _context4.prev = 17;
            _context4.t1 = _context4["catch"](0);
            throw _context4.t1;
          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return _addRoleData.apply(this, arguments);
}