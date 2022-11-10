"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeedBackListener = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _feedBackSchema = _interopRequireDefault(require("../Models/feedBackSchema"));
var getFeedBackListener = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userid, feedBackList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return req.params['userid'];
          case 2:
            userid = _context.sent;
            _context.prev = 3;
            _context.next = 6;
            return _feedBackSchema["default"].find({
              _id: userid
            });
          case 6:
            feedBackList = _context.sent;
            res.status(200).json(feedBackList);
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
  return function getFeedBackListener(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getFeedBackListener = getFeedBackListener;