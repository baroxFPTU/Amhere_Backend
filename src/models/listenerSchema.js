import mongoose from 'mongoose'
import { env } from '../configs/environment'
const { Schema } = mongoose

const listenerSchema = new Schema({
  user_id: String,
  categories: [String],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date }
})

const myDB = mongoose.connection.useDb(env.DB_NAME)
export const Listener = myDB.model('listener', listenerSchema)
