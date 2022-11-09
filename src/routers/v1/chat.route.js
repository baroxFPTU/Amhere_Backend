import express from 'express'
import { ChatController } from '../../controllers/chat.controller'

const ChatRoute = express.Router()

ChatRoute.get('/', ChatController.getMessageByConversationId)

export default ChatRoute
