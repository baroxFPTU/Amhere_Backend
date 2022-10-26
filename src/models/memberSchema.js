import mongoose from 'mongoose'
import { env } from '../configs/environment'

const { Schema } = mongoose

const memberSchema = new Schema({
  user_id: String,
  categories: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
})

const myDB = mongoose.connection.useDb(env.DB_NAME)
export const Member = myDB.model('member', memberSchema)
