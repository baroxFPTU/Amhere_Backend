const mongoose = require('mongoose')
const { env } = require('../configs/environment')

const { Schema } = mongoose

const userSchema = new Schema({
  email: String,
  nickname: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  is_online: Boolean,
  active_role: String,
  active_role_id: String,
  categories: Array,
  uid: String
})

const myDB = mongoose.connection.useDb(env.DB_NAME)
const User = myDB.model('user', userSchema)

module.exports = {
  User
}
