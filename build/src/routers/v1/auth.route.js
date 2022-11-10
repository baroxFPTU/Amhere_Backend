"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _auth = require("../../controllers/auth.controller");
var _auth2 = require("../../validations/auth.validation");
var AuthRoute = _express["default"].Router();
AuthRoute.route('/login-with-password').post(_auth2.AuthValidation.login, _auth.AuthController.loginWithPassword);
AuthRoute.route('/register-with-password').post(_auth2.AuthValidation.registerWithPassword, _auth.AuthController.registerWithPassword);
AuthRoute.route('/login-with-provider').post(_auth.AuthController.loginWithProvider);
var _default = AuthRoute;
exports["default"] = _default;