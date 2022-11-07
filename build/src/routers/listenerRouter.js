"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _listenerController = require("../controllers/listenerController");
var listenerRouter = _express["default"].Router();
listenerRouter.get('/:listenerid', _listenerController.getListenerById);
listenerRouter.post('/', _listenerController.addNewListener);
var _default = listenerRouter;
exports["default"] = _default;