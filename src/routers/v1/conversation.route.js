import express from 'express'
import { ConversationController } from '../../controllers/conversation.controller'
const ConversationRoute = express.Router()

ConversationRoute.get('/', ConversationController.getChatWith)

export default ConversationRoute
