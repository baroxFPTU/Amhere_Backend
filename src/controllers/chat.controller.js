import { ChatService } from '../services/chat.service'

export const ChatController = {
  getMessageByConversationId: async (req, res) => {
    const { conversationId } = req.query
    try {
      const messages = await ChatService.getMessageByConversationId(conversationId)
      res.status(200).json(messages)
    } catch (error) {
      console.log(error)
      res.status(400).json({
        errors: error
      })
    }
  }
}
