"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserController = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _listenerSchema = _interopRequireDefault(require("../models/listenerSchema"));
var _memberSchema = _interopRequireDefault(require("../models/memberSchema"));
var _userSchema = _interopRequireDefault(require("../models/userSchema"));
var _user = require("../services/user.service");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getUserById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userid, UserInfor, memberInfo, listenerInfo;
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
            return _userSchema["default"].findOne({
              _id: userid
            });
          case 6:
            UserInfor = _context.sent;
            if (!(UserInfor.active_role == 'member')) {
              _context.next = 12;
              break;
            }
            _context.next = 10;
            return _memberSchema["default"].findOne({
              user_id: UserInfor._id
            });
          case 10:
            memberInfo = _context.sent;
            UserInfor.categories = (memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.categories) || [];
          case 12:
            if (UserInfor.active_role == 'listener') {
              listenerInfo = _listenerSchema["default"].findOne({
                user_id: UserInfor._id
              });
              UserInfor.categories = listenerInfo.categories;
            }
            res.status(200).json(UserInfor);
            _context.next = 20;
            break;
          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            res.status(400).send();
          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 16]]);
  }));
  return function getUserById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getUserByUId = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userid, UserInfor, memberInfo, listenerInfo;
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
            return _userSchema["default"].findOne({
              uid: userid
            });
          case 6:
            UserInfor = _context2.sent;
            if (!(UserInfor.active_role == 'member')) {
              _context2.next = 12;
              break;
            }
            _context2.next = 10;
            return _memberSchema["default"].findOne({
              user_id: UserInfor._id
            });
          case 10:
            memberInfo = _context2.sent;
            UserInfor.categories = (memberInfo === null || memberInfo === void 0 ? void 0 : memberInfo.categories) || [];
          case 12:
            if (UserInfor.active_role == 'listener') {
              listenerInfo = _listenerSchema["default"].findOne({
                user_id: UserInfor._id
              });
              UserInfor.categories = listenerInfo.categories;
            }
            res.status(200).json(UserInfor);
            _context2.next = 20;
            break;
          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](3);
            console.log(_context2.t0);
            res.status(400).send();
          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 16]]);
  }));
  return function getUserByUId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUserByRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var role, UserInfor;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return req.params['role'];
          case 2:
            role = _context3.sent;
            _context3.prev = 3;
            _context3.next = 6;
            return _userSchema["default"].find({
              active_role: role
            });
          case 6:
            UserInfor = _context3.sent;
            res.status(200).json(UserInfor);
            _context3.next = 14;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            console.log(_context3.t0);
            res.status(400).send();
          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return function getUserByRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var getUserByName = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var searchName, UserInfor;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return req.params['name'];
          case 2:
            searchName = _context4.sent;
            _context4.prev = 3;
            _context4.next = 6;
            return _userSchema["default"].find({
              nickname: {
                $regex: searchName
              }
            });
          case 6:
            UserInfor = _context4.sent;
            res.status(200).json(UserInfor);
            _context4.next = 14;
            break;
          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](3);
            console.log(_context4.t0);
            res.status(400).send();
          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[3, 10]]);
  }));
  return function getUserByName(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var findAll = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user.UserService.findAll();
          case 3:
            users = _context5.sent;
            res.status(200).json({
              users: users
            });
            _context5.next = 11;
            break;
          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(400).json({
              message: _context5.t0.message
            });
          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function findAll(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var addNewUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _objectSpread({}, req.body);
          case 2:
            user = _context6.sent;
            UserController.add(user);
            // const userSave = new User(user)

            // console.log(user)

            // const curentUser = await User.findOne({ uid: user.uid })
            try {
              //   if (!curentUser) {
              //     if (user.active_role == 'listener') {
              //       const categories = user.categories
              //       const memberSave = new Listener({
              //         user_id: userSave._id,
              //         categories: categories
              //       })
              //       userSave.active_role_id = memberSave._id
              //       console.log(userSave)
              //       await memberSave.save()
              //     }
              //     if (user.active_role == 'member') {
              //       const categories = user.categories
              //       const memberSave = new Member({
              //         user_id: userSave._id,
              //         categories: categories
              //       })
              //       userSave.active_role_id = memberSave._id
              //       console.log(userSave)
              //       await memberSave.save()
              //     }
              //     await userSave.save()
              //     res.status(200).send(userSave)
              //   }
              // res.status(200).send(curentUser)
            } catch (error) {
              console.log(error);
              res.status(400).send();
            }
          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return function addNewUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var UserController = {
  getUserByUId: getUserByUId,
  addNewUser: addNewUser,
  findAll: findAll,
  getUserByRole: getUserByRole,
  getUserByName: getUserByName,
  getUserById: getUserById
};
exports.UserController = UserController;