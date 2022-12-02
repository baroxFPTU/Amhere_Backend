const express = require('express')
const { ConversationController } = require('../../controllers/conversation.controller')
const { ConversationValidation } = require('../../validations/conversation.validation')
const ConversationRoute = express.Router()

ConversationRoute.get(
  '/',
  ConversationValidation.getConversationWith,
  ConversationController.getConversationWith
)

ConversationRoute.get(
  '/all',
  ConversationValidation.getAllConversations,
  ConversationController.getAllConversations
)

module.exports = ConversationRoute
