import { ChatModel } from '../models/chat.model'

export const ChatService = {
  getMessageByConversationId: async (conversationId) => {
    try {
      const response = await ChatModel.getMessageByConversationId(conversationId)
      return response
    } catch (error) {
      throw error
    }
  }
}
