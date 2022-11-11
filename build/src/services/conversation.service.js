'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.ConversationService = void 0
var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))
var _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'))
var _conversation = require('../models/conversation.model')
var _user = require('../models/user.model')
var ConversationService = {
  getAllConversation: (function () {
    var _getAllConversation = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee(uid) {
        return _regenerator['default'].wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0
                  _context.next = 3
                  return _conversation.ConversationModel.getAllConversation(uid)
                case 3:
                  return _context.abrupt('return', _context.sent)
                case 6:
                  _context.prev = 6
                  _context.t0 = _context['catch'](0)
                  throw _context.t0
                case 9:
                case 'end':
                  return _context.stop()
              }
            }
          },
          _callee,
          null,
          [[0, 6]]
        )
      })
    )
    function getAllConversation(_x) {
      return _getAllConversation.apply(this, arguments)
    }
    return getAllConversation
  })(),
  getConversationWith: (function () {
    var _getConversationWith = (0, _asyncToGenerator2['default'])(
      /*#__PURE__*/ _regenerator['default'].mark(function _callee2(uid, chatWithUid) {
        var response, isExist
        return _regenerator['default'].wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0
                  _context2.next = 3
                  return _conversation.ConversationModel.getConversationWith(uid, chatWithUid)
                case 3:
                  response = _context2.sent
                  isExist = response.length !== 0
                  if (isExist) {
                    _context2.next = 9
                    break
                  }
                  _context2.next = 8
                  return _conversation.ConversationModel.create(uid, chatWithUid)
                case 8:
                  return _context2.abrupt('return', _context2.sent)
                case 9:
                  return _context2.abrupt('return', response[0])
                case 12:
                  _context2.prev = 12
                  _context2.t0 = _context2['catch'](0)
                  console.log(_context2.t0)
                  throw _context2.t0
                case 16:
                case 'end':
                  return _context2.stop()
              }
            }
          },
          _callee2,
          null,
          [[0, 12]]
        )
      })
    )
    function getConversationWith(_x2, _x3) {
      return _getConversationWith.apply(this, arguments)
    }
    return getConversationWith
  })()
}
exports.ConversationService = ConversationService
