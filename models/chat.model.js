const mongoose = require('mongoose')
const { appDB } = require('../configs/db')

const { Schema } = mongoose

const messageSchema = new Schema(
  {
    body: { type: String, require: true },
    sender_id: { type: String, require: true },
    conversation_id: { type: mongoose.Types.ObjectId, require: true },
    parent_message_id: { type: mongoose.Types.ObjectId, default: null, nullable: true },
    created_at: { type: Date, default: Date.now }
  },
  {
    collection: 'messages'
  }
)

const Message = appDB.model('message', messageSchema)

const ChatModel = {
  getMessageByConversationId: async (conversationId) => {
    try {
      const response = await Message.find({
        conversation_id: mongoose.Types.ObjectId(conversationId)
      })

      return response
    } catch (error) {
      throw error
    }
  },
  addMessage: async (message) => {
    const { body, sender_id, conversation_id, parent_message_id } = message
    const newMessage = new Message({
      body,
      sender_id,
      conversation_id: mongoose.Types.ObjectId(conversation_id),
      parent_message_id
    })
    try {
      const createdMessage = await newMessage.save()
      return createdMessage
    } catch (error) {
      throw error
    }
  }
}

module.exports = {
  Message,
  ChatModel
}
