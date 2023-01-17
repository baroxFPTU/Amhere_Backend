const mongoose = require('mongoose')
const { userCollection } = require('../configs/db')
const { addRoleData, UserModel } = require('./user.model')

module.exports.AuthModel = {
  loginWithPassword: async (uid) => {
    try {
      const user = await UserModel.findOneByUid(uid)
      return {
        uid: uid,
        email: user.email,
        password: user.password,
        phone: user.phone,
        birthday: user.birthday,
        categories: user.categories,
        role_data: user.role_data,
        nickname: user.nickname,
        photoURL: user.photoURL
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
      uid: createdUser.uid,
      email: createdUser.email,
      password: createdUser.password,
      phone: createdUser.phone,
      birthday: createdUser.birthday,
      categories: createdUser.categories,
      role_data: createdUser.role_data,
      nickname: createdUser.nickname,
      photoURL: createdUser.photoURL
    }
  }
}
