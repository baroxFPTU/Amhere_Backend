"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Member = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _environment = require("../configs/environment");
var Schema = _mongoose["default"].Schema;
var memberSchema = new Schema({
  user_id: String,
  categories: [String],
  created_at: {
    type: Date,
    "default": Date.now
  },
  updated_at: {
    type: Date
  }
});
var myDB = _mongoose["default"].connection.useDb(_environment.env.DB_NAME);
var Member = myDB.model('member', memberSchema);
exports.Member = Member;