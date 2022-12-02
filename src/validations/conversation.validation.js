const { User, UserModel } = require('../models/user.model')

module.exports.ConversationValidation = {
  getConversationWith: async (req, res, next) => {
    try {
      const { uid, cw } = req.query
      console.log(cw)
      if (!(await UserModel.isUserExists(uid)) || !(await UserModel.isUserExists(cw))) {
        throw new Error('Users is not exist')
      }
      next()
    } catch (error) {
      res.status(403).json({
        message: error.message
      })
    }
  },
  getAllConversations: async (req, res, next) => {
    try {
      const { uid } = req.query
      if (!(await UserModel.isUserExists(uid))) {
        throw new Error('User is not exist')
      }
      next()
    } catch (error) {
      res.status(403).json({
        message: error.message
      })
    }
  }
}
