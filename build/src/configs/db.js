"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userCollection = exports.connectDB = exports.appDB = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var _environment = require("./environment");
var connectDB = function connectDB() {
  return new Promise(function (resolve, reject) {
    _mongoose["default"].connect(_environment.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }).then(function (res, rej) {
      console.log('Connect to DB successfully.');
      return resolve(res);
    })["catch"](function (err) {
      return reject(err);
    });
  });
};
exports.connectDB = connectDB;
var appDB = _mongoose["default"].connection.useDb('amhere_database');
exports.appDB = appDB;
var userCollection = appDB.collection('users');
exports.userCollection = userCollection;