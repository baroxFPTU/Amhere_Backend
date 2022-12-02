const { ChatModel } = require('../models/chat.model')

module.exports.ChatService = {
  getMessageByConversationId: async (conversationId) => {
    try {
      return await ChatModel.getMessageByConversationId(conversationId)
    } catch (error) {
      throw error
    }
  },
  addMessage: async (message) => {
    try {
      return await ChatModel.addMessage(message)
    } catch (error) {
      console.log(error)

      throw error
    }
  }
}
