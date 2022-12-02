const jwt = require('jsonwebtoken')
const { AuthService } = require('../services/auth.service')

module.exports.AuthController = {
  loginWithPassword: async (req, res) => {
    try {
      const { token } = req.body
      const decode = jwt.decode(token)
      const userData = await AuthService.loginWithPassword(decode.user_id)
      res.status(200).json({
        ...userData
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        errors: error
      })
    }
  },
  loginWithProvider: async (req, res) => {
    try {
      const { token, provider_type: providerType } = req.body
      const userRequest = jwt.decode(token)
      const userResponse = await AuthService.loginWithProvider(userRequest, providerType)
      res.status(200).json({
        nickname: userResponse.nickname,
        photoURL: userResponse.photoURL || null,
        role_data: userResponse.role_data
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        errors: error
      })
    }
  },
  registerWithPassword: async (req, res) => {
    try {
      const user = req.body
      const userData = await AuthService.registerWithPassword(user)
      res.status(200).json({
        ...userData
      })
    } catch (error) {
      console.error(error)
      res.status(400).json({
        errors: error
      })
    }
  }
}
