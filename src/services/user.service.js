import { UserModel } from '../models/user.model'

export const UserService = {
  findAll: async () => {
    try {
      const lsUsers = await UserModel.findAll()
      return lsUsers
    } catch (error) {
      throw error
    }
  }
}
