const express = require('express')
const { ChatController } = require('../../controllers/chat.controller')

const ChatRoute = express.Router()

ChatRoute.get('/', ChatController.getMessageByConversationId)
ChatRoute.post('/', ChatController.addMessage)

module.exports = ChatRoute
