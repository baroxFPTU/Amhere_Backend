import mongoose from 'mongoose'
import { env } from '../configs/environment'

const { Schema } = mongoose

const feedBackSchema = new Schema({
  feedBackListnerId: String,
  feedBackText: String,
  memberFeedBackId: String
})

const myDB = mongoose.connection.useDb(env.DB_NAME)
export const feedBack = myDB.model('feedback', feedBackSchema)
