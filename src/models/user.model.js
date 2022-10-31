import mongoose from 'mongoose'
import { appDB, userCollection } from '../configs/db'
import uniqueValidator from 'mongoose-unique-validator'
import { env } from '../configs/environment'
import { RoleModel } from './role.model'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    uid: { type: String, require: true, unique: true },
    nickname: { type: String, require: true },
    birthday: { type: Date },
    phone: { type: String, default: null },
    email: { type: String, require: true, unique: true },
    photoURL: { type: String, default: null },
    role_id: { type: mongoose.Types.ObjectId, require: true },
    categories: { type: Array },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null }
  },
  {
    collection: 'users'
  }
)
userSchema.plugin(uniqueValidator)

export const User = appDB.model('User', userSchema)

export const UserModel = {
  add: async (user) => {
    try {
      const { uid, nickname, email, phone, photoURL, birthday, role_id } = user
      const createdUser = new User({
        uid,
        nickname,
        email,
        phone,
        photoURL,
        birthday,
        role_id
      })

      const response = (await createdUser.save()).toObject()
      const addedRoleUser = await addRoleData(response)

      console.log({ addedRoleUser })
      return addedRoleUser
    } catch (error) {
      throw error
    }
  },
  findAll: async () => {
    return await User.find()
  },
  findOneByUid: async (uid) => {
    return await User.findOne({ uid })
  }
}

export async function addRoleData(user) {
  try {
    if (!user) throw new Error('Cannot add role for user')
    const addedUser = user
    const roleData = await RoleModel.findOne(addedUser.role_id)
    if (!roleData) throw new Error('RoleID is not found')
    addedUser.role_data = roleData
    delete addedUser.role_id

    return addedUser
  } catch (error) {
    throw error
  }
}
