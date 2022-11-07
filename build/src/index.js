"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _express = _interopRequireDefault(require("express"));
var _socket = require("socket.io");
var _message = _interopRequireDefault(require("./controllers/message.controller"));
var _index = require("./routers/v1/index.js");
var _db = require("./configs/db.js");
var _environment = require("./configs/environment.js");
(0, _db.connectDB)().then(function () {
  bootServer();
});
var bootServer = function bootServer() {
  var app = (0, _express["default"])();
  app.use((0, _morgan["default"])('tiny'));
  app.use(_express["default"].json({
    limit: '30mb',
    extended: 'false'
  }));
  app.use(_express["default"].urlencoded({
    limit: '30mb',
    extended: 'true'
  }));
  app.use((0, _cors["default"])({
    origin: '*'
  }));
  app.use('/api', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    next();
  }, _index.apiV1);

  // app.get('*', (req, res) => {
  //   res.send('<h1>Hello, welcome to AmHere APIs</h1>')
  // })

  var server = app.listen(_environment.env.PORT, _environment.env.HOST, function () {
    console.log("Server running on: http://".concat(_environment.env.HOST, ":").concat(_environment.env.PORT));
  });
  var io = new _socket.Server(server);
  var onlineUsers = new Map();
  io.on('connection', function (socket) {
    socket.on('add-user', function (userId) {
      onlineUsers.set(userId, socket.id);
    });
    socket.on('send-msg', /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var sendToUserSocket;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                sendToUserSocket = onlineUsers.get(data.receiver);
                console.log(data);
                _context.next = 4;
                return _message["default"].addMessageFun(data);
              case 4:
                if (sendToUserSocket) {
                  socket.to(sendToUserSocket).emit('msg-receive', data);
                }
              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  });
};