import mongoose from 'mongoose'
import { appDB, userCollection } from '../configs/db'
import { env } from '../configs/environment'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    email: String,
    nickname: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
    is_online: Boolean,
    active_role: String,
    active_role_id: String,
    categories: Array,
    uid: String
  },
  {
    collection: 'users'
  }
)

const myDB = mongoose.connection.useDb(env.DB_NAME)
export const User = myDB.model('User', userSchema)

export const UserModel = {
  add: () => {},
  findAll: async () => {
    const response = await User.find({})
    console.log({ response })
    return response
  }
}
