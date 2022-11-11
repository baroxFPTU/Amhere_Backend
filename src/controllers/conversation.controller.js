import Converstation from '~/models/converstationSchema'
import mongoose from 'mongoose'
import User from '../models/userSchema'
import { ConversationService } from '../services/conversation.service'
const ObjectId = mongoose.Types.ObjectId

export const ConversationController = {
  getConversationWith: async (req, res) => {
    const { uid, cw: chatWithUid } = req.query
    try {
      if (!chatWithUid) {
        const conversations = await ConversationService.getAllConversation(uid)
        return res.status(200).json([...conversations])
      }
      const conversation = await ConversationService.getConversationWith(uid, chatWithUid)
      res.status(200).json(conversation)
    } catch (error) {
      console.log(error)

      res.status(400).json({
        errors: error
      })
    }
  }
}

const getConverstationOfMember = async (req, res) => {
  const userid = await req.params['userid']
  try {
    ConverstatioinInfo = await Converstation.findOne({ member_id: userid })
    res.status(200).json(ListenerInfo)
  } catch (error) {
    res.status(400).json({
      errors: error
    })
  }
}

const getConverstationOfListener = async (req, res) => {
  const userid = await req.params['userid']
  try {
    ConverstatioinInfo = await Converstation.findOne({ listener_id: userid })
    res.status(200).json(ListenerInfo)
  } catch (error) {
    res.status(400).send()
  }
}

const getChatConverstation = async (req, res) => {
  const { senderId, receiverId } = await req.query
  Converstation.find()
  const conver = await Converstation.find({
    sender: senderId
  })

  const ReUserInfo = conver.map(async (item) => {
    const userInfo = await User.findOne({ _id: item.receiver })
    return userInfo
  })

  let listUser = []

  listUser = await Promise.all(ReUserInfo).then((list) => list)

  res.status(200).json(listUser)
}

const getChatConverstationForListener = async (req, res) => {
  const { receiverId } = await req.query

  const conver = await Converstation.find({
    receiver: receiverId
  })

  const ReUserInfo = conver.map(async (item) => {
    const userInfo = await User.findOne({ _id: item.sender })
    return userInfo
  })

  let listUser = []

  listUser = await Promise.all(ReUserInfo).then((list) => list)

  res.status(200).json(listUser)
}
