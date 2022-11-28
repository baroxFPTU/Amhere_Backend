import { UserModel } from '../models/user.model'

export const UserService = {
  findAll: async (roleSlug) => {
    try {
      const lsUsers = await UserModel.findAll(roleSlug)
      return lsUsers
    } catch (error) {
      throw error
    }
  },
  findOneByUid: async (uid) => {
    try {
      const user = await UserModel.findOneByUid(uid)
      return user
    } catch (error) {
      throw error
    }
  }
}
