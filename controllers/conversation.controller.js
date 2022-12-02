const mongoose = require('mongoose')
const User = require('../models/userSchema')
const { ConversationService } = require('../services/conversation.service')
const ObjectId = mongoose.Types.ObjectId

module.exports.ConversationController = {
  getConversationWith: async (req, res) => {
    const { uid, cw: chatWithUid } = req.query
    try {
      const conversation = await ConversationService.getConversationWith(uid, chatWithUid)
      res.status(200).json(conversation)
    } catch (error) {
      console.log(error)

      res.status(400).json({
        errors: error
      })
    }
  },
  getAllConversations: async (req, res) => {
    const { uid } = req.query
    try {
      const conversations = await ConversationService.getAllConversations(uid)
      return res.status(200).json([...conversations])
    } catch (error) {
      console.log(error)
      res.status(400).json({
        errors: error
      })
    }
  }
}
