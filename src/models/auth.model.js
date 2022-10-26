import mongoose from 'mongoose'
import { userCollection } from '../configs/db'

export const AuthModel = {
  login: async (uid) => {
    try {
      const res = await userCollection.findOne({
        _id: uid
      })

      console.log(await res)
    } catch (error) {
      throw error
    }
  }
}
