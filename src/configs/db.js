const mongoose = require('mongoose')
const { env } = require('./environment')

const connectDB = () => {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then((res, rej) => {
        console.log('Connect to DB successfully.')
        return resolve(res)
      })
      .catch((err) => reject(err))
  })
}

const appDB = mongoose.connection.useDb('amhere_database')
const userCollection = appDB.collection('users')

module.exports = {
  connectDB,
  appDB,
  userCollection
}
