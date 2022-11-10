"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getListenerById = exports.addNewListener = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _listenerSchema = _interopRequireDefault(require("../models/listenerSchema"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var getListenerById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var listenerId, ListenerInfo;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.params['listenerid'];
          case 2:
            listenerId = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return _listenerSchema["default"].findOne({
              _id: listenerId
            });
          case 6:
            ListenerInfo = _context.sent;
            res.status(200).json(ListenerInfo);
            _context.next = 13;
            break;
          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](3);
            res.status(400).send();
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 10]]);
  }));
  return function getListenerById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getListenerById = getListenerById;
var addNewListener = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var listener, listenrSave;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _objectSpread({}, req.body);
          case 2:
            listener = _context2.sent;
            listenrSave = new _listenerSchema["default"](listener);
            _context2.prev = 4;
            _context2.next = 7;
            return listenrSave.save();
          case 7:
            res.status(200).send(listenrSave);
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](4);
            res.status(400).send();
          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 10]]);
  }));
  return function addNewListener(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.addNewListener = addNewListener;