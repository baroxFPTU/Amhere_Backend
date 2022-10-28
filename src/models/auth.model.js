import mongoose from 'mongoose'
import { userCollection } from '../configs/db'
import { addRoleData, UserModel } from './user.model'

export const AuthModel = {
  login: async (uid) => {
    try {
      const response = await UserModel.findOneByUid(uid)
      const addedRoleUser = await addRoleData(response)
      return {
        role_data: addedRoleUser.role_data,
        nickname: addedRoleUser.nickname,
        photoURL: addedRoleUser.photoURL
      }
    } catch (error) {
      throw error
    }
  },
  register: async (user) => {
    const createdUser = await UserModel.add(user)
    return {
      role_data: createdUser.role_data,
      photoURL: createdUser.photoURL,
      nickname: createdUser.nickname
    }
  }
}
