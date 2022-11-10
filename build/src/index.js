"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _express = _interopRequireDefault(require("express"));
var _socket = require("socket.io");
var _message = _interopRequireDefault(require("./controllers/message.controller"));
var _index = require("./routers/v1/index.js");
var _db = require("./configs/db.js");
var _environment = require("./configs/environment.js");
var _chat = require("./models/chat.model");
var _chat2 = require("./services/chat.service");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
  var server = app.listen(_environment.env.PORT, _environment.env.HOST, function () {
    console.log("Server running on: http://".concat(_environment.env.HOST, ":").concat(_environment.env.PORT));
  });
  var onlineUsers = [];
  var tempMessagesStorage = [];
  var io = new _socket.Server(server, {
    cors: {
      origin: _environment.env.SOCKET_CONNECTOR
    }
  });
  io.on('connection', function (socket) {
    socket.on('disconnect', function (roleSlug) {
      console.log(socket.id);
      onlineUsers = onlineUsers.filter(function (user) {
        return user.socket_id !== socket.id;
      });
      console.log('out ', onlineUsers);
    });
    socket.on('client-auth', function (auth) {
      socket.user = auth;
      if (onlineUsers.findIndex(function (user) {
        return user.uid === auth.uid;
      }) === -1) {
        onlineUsers.push(_objectSpread(_objectSpread({}, auth), {}, {
          socket_id: socket.id
        }));
        var onlineListeners = onlineUsers.filter(function (user) {
          return user.role_data.slug === 'nguoi-lang-nghe';
        });
        var onlineTellers = onlineUsers.filter(function (user) {
          return user.role_data.slug === 'nguoi-ke-chuyen';
        });
        io.sockets.emit('server-update-online-listeners', onlineListeners);
        io.sockets.emit('server-update-online-tellers', onlineTellers);
      }
    });
    socket.on('client-join-room', function (roomId) {
      console.log({
        roomId: roomId
      });
      socket.join(roomId);
      socket.room = roomId;
    });
    socket.on('client-send-message', /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
        var createdMessage;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _chat2.ChatService.addMessage(data);
              case 2:
                createdMessage = _context.sent;
                console.log({
                  createdMessage: createdMessage
                });
                if (socket.room) {
                  io.sockets["in"](socket.room).emit('server-exchange-message', createdMessage);
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
    socket.on('client-get-conversation-message', function (roomId) {
      var _roomMessages$message;
      console.log({
        roomId: roomId
      });
      var roomMessages = tempMessagesStorage.find(function (roomMessage) {
        return roomMessage.id === roomId;
      });
      console.log({
        roomMessages: roomMessages
      });
      socket.emit('server-send-conversation-message', (_roomMessages$message = roomMessages === null || roomMessages === void 0 ? void 0 : roomMessages.messages) !== null && _roomMessages$message !== void 0 ? _roomMessages$message : []);
    });
  });
};