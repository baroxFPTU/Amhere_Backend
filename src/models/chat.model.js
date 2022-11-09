import mongoose, { Types } from 'mongoose'
import { appDB } from '../configs/db'

const { Schema } = mongoose

const messageSchema = new Schema(
  {
    body: { type: String, require: true },
    senderId: { type: String, require: true },
    conversation_id: { type: mongoose.Types.ObjectId, require: true },
    parent_message_id: { type: mongoose.Types.ObjectId },
    created_at: { type: Date, default: Date.now }
  },
  {
    collection: 'messages'
  }
)

export const Message = appDB.model('message', messageSchema)

export const ChatModel = {
  getMessageByConversationId: async (conversationId) => {
    try {
      const response = await Message.find({
        conversation_id: mongoose.Types.ObjectId(conversationId)
      })

      return response
    } catch (error) {
      throw error
    }
  }
}
