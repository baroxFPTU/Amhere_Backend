import { AuthService } from '../services/auth.service'

export const AuthController = {
  login: async (req, res) => {
    try {
      const { uid } = req.body
      const isExit = await AuthService.login(uid)
    } catch (error) {
      console.error(error)
      res.json({
        errors: error
      })
    }
  }
}
