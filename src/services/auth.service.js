import mongoose from 'mongoose'
import { AuthModel } from '../models/auth.model'

export const AuthService = {
  login: async (uid) => {
    try {
      return await AuthModel.login(uid)
    } catch (error) {
      throw error
    }
  },
  register: async (user) => {
    try {
      user.role_id = mongoose.Types.ObjectId(user.role_id)
      return await AuthModel.register(user)
    } catch (error) {
      throw error
    }
  }
}
