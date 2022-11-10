import { ConversationModel } from '../models/conversation.model'
import { UserModel } from '../models/user.model'

export const ConversationService = {
  getAllChat: async (uid) => {
    try {
      return await ConversationModel.getAllChat(uid)
    } catch (error) {
      throw error
    }
  },
  getChatWith: async (uid, chatWithUid) => {
    try {
      let response = await ConversationModel.getChatWith(uid, chatWithUid)
      const isExist = response.length !== 0
      if (!isExist) {
        return await ConversationModel.create(uid, chatWithUid)
      }
      return response[0]
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
