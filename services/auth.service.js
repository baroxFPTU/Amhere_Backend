const mongoose = require('mongoose')
const { AuthModel } = require('../models/auth.model')

module.exports.AuthService = {
  loginWithPassword: async (uid) => {
    try {
      return await AuthModel.loginWithPassword(uid)
    } catch (error) {
      throw error
    }
  },
  loginWithProvider: async (user, providerType) => {
    try {
      return await AuthModel.loginWithProvider({
        nickname: user.name || user.displayName,
        email: user.email,
        uid: user.user_id,
        photoURL: user.picture
      })
    } catch (error) {
      throw error
    }
  },
  registerWithPassword: async (user) => {
    try {
      user.role_id = mongoose.Types.ObjectId(user.role_id)
      return await AuthModel.registerWithPassword(user)
    } catch (error) {
      throw error
    }
  }
}
