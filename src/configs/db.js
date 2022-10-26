import mongoose from 'mongoose'
import { env } from './environment'

export const connectDB = () => {
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

export const appDB = mongoose.connection.useDb('amhere_database')
export const userCollection = appDB.collection('users')
