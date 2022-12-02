const { ChatService } = require('../services/chat.service')

module.exports.ChatController = {
  getMessageByConversationId: async (req, res) => {
    const { id: conversationId } = req.query
    try {
      const messages = await ChatService.getMessageByConversationId(conversationId)
      res.status(200).json(messages)
    } catch (error) {
      res.status(400).json(error)
    }
  },
  addMessage: async (req, res) => {
    const message = req.body
    console.log({ message, location: 'controller' })
    try {
      const createdMessage = await ChatService.addMessage(message)
      res.status(200).json(createdMessage)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}
