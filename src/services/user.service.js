import { UserModel } from '../models/user.model'

export const UserService = {
  findAll: async (roleSlug) => {
    try {
      const lsUsers = await UserModel.findAll(roleSlug)
      return lsUsers
    } catch (error) {
      throw error
    }
  }
}
