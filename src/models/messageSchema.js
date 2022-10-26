import mongoose from 'mongoose'
import { env } from '../configs/environment'

const { Schema } = mongoose

const MessageSchema = new Schema({
  message: {
    type: String,
    require: true
  },
  users: Array,
  sender: String,
  receiver: String
})

const myDB = mongoose.connection.useDb(env.DB_NAME)
export const Message = myDB.model('Message', MessageSchema)
