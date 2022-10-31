import { AuthService } from '../services/auth.service'

export const AuthController = {
  login: async (req, res) => {
    try {
      const { uid } = req.body
      const userData = await AuthService.login(uid)
      res.status(200).json({
        ...userData
      })
    } catch (error) {
      console.error(error)
      res.json({
        errors: error
      })
    }
  },
  register: async (req, res) => {
    try {
      const user = req.body
      const userData = await AuthService.register(user)
      res.status(200).json({
        ...userData
      })
    } catch (error) {
      console.error(error)
      res.json({
        errors: error
      })
    }
  }
}
