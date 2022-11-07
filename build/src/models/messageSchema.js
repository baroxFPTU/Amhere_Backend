"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _environment = require("../configs/environment");
var Schema = _mongoose["default"].Schema;
var MessageSchema = new Schema({
  message: {
    type: String,
    require: true
  },
  users: Array,
  sender: String,
  receiver: String
});
var myDB = _mongoose["default"].connection.useDb(_environment.env.DB_NAME);
var Message = myDB.model('Message', MessageSchema);
exports.Message = Message;