"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _role = require("../../controllers/role.controller");
var RoleRoute = _express["default"].Router();
RoleRoute.route('/').get(_role.RoleController.findAll).post(_role.RoleController.add)["delete"](_role.RoleController["delete"]);
var _default = RoleRoute;
exports["default"] = _default;