import express from 'express'
import { ConversationController } from '../../controllers/conversation.controller'
import { ConversationValidation } from '../../validations/conversation.validation'
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

export default ConversationRoute
