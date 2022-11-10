"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = require("../../controllers/user.controller");
var UserRoute = _express["default"].Router();
UserRoute.get('/:userid', _user.UserController.getUserByUId);
UserRoute.get('/userid/:userid', _user.UserController.getUserById);
UserRoute.get('/filter/role/:role', _user.UserController.getUserByRole);
UserRoute.get('/filter/name/:name', _user.UserController.getUserByName);
UserRoute.get('/', _user.UserController.findAll);
UserRoute.post('/', _user.UserController.addNewUser);
var _default = UserRoute;
exports["default"] = _default;