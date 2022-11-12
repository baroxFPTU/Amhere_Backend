import mongoose from 'mongoose'
import { userCollection } from '../configs/db'
import { addRoleData, UserModel } from './user.model'

export const AuthModel = {
  loginWithPassword: async (uid) => {
    try {
      const response = await UserModel.findOneByUid(uid)
      const addedRoleUser = await addRoleData(response)
      return {
        id: uid,
        role_data: addedRoleUser.role_data,
        nickname: addedRoleUser.nickname,
        photoURL: addedRoleUser.photoURL
      }
    } catch (error) {
      throw error
    }
  },
  loginWithProvider: async (user) => {
    try {
      let userInstance = user
      const response = await UserModel.findOneByUid(user.uid)
      if (!response) {
        userInstance = await UserModel.add(user)
      }
      const addedRoleUser = await addRoleData(userInstance)
      return {
        // insert user id
        role_data: addedRoleUser.role_data,
        nickname: addedRoleUser.nickname,
        photoURL: addedRoleUser.photoURL
      }
    } catch (error) {
      throw error
    }
  },
  registerWithPassword: async (user) => {
    const createdUser = await UserModel.add(user)
    return {
      id: createdUser.uid,
      role_data: createdUser.role_data,
      photoURL: createdUser.photoURL,
      nickname: createdUser.nickname
    }
  }
}
