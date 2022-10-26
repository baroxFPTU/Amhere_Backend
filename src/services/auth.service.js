import { AuthModel } from '../models/auth.model'

export const AuthService = {
  login: async (uid) => {
    try {
      await AuthModel.login(uid)
    } catch (error) {
      throw error
    }
  }
}
