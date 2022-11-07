"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.feedBack = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _environment = require("../configs/environment");
var Schema = _mongoose["default"].Schema;
var feedBackSchema = new Schema({
  feedBackListnerId: String,
  feedBackText: String,
  memberFeedBackId: String
});
var myDB = _mongoose["default"].connection.useDb(_environment.env.DB_NAME);
var feedBack = myDB.model('feedback', feedBackSchema);
exports.feedBack = feedBack;