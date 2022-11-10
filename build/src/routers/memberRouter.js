"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _memberController = require("../controllers/memberController");
var memberRouter = _express["default"].Router();
memberRouter.get('/:memberid', _memberController.getMemberById);
memberRouter.post('/', _memberController.addNewMember);
var _default = memberRouter;
exports["default"] = _default;