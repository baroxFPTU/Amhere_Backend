import mongoose from 'mongoose'
import { appDB, userCollection } from '../configs/db'
import uniqueValidator from 'mongoose-unique-validator'
import * as yup from 'yup'
import { env } from '../configs/environment'
import { RoleModel } from './role.model'
import moment from 'moment'

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

export const userSchemaYup = yup.object().shape({
  uid: yup.string().required('uid is required'),
  nickname: yup.string().required(),
  birthday: yup.date(),
  phone: yup.string().nullable(),
  email: yup.string().required(),
  photoURL: yup.string().nullable(),
  role_id: yup.string().length(24),
  categories: yup.array(),
  created_at: yup
    .date()
    .transform((value, originalValue) => {
      if (this.isType(value)) {
        return value
      }
      const result = moment(originalValue).toDate()
      return result
    })
    .default(moment(Date.now()).toDate()),
  updated_at: yup.date().nullable()
})

userSchema.plugin(uniqueValidator)

export const User = appDB.model('User', userSchema)

export const UserModel = {
  add: async (user) => {
    try {
      const { uid, nickname, email, phone, photoURL, birthday, role_id = null } = user
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

      return addedRoleUser
    } catch (error) {
      throw error
    }
  },
  findAll: async (roleSlug) => {
    const roleData = await RoleModel.findOne({ slug: roleSlug })
    return await User.find({ role_id: roleData?._id }, { _id: 0 })
  },
  findOneByUid: async (uid) => {
    const user = await User.findOne({ uid: uid }, { created_at: 0, updated_at: 0, _id: 0 })
    const addedRoleUser = await addRoleData(user)
    console.log(addedRoleUser)
    return addedRoleUser
  },
  isUserExists: async (uid) => {
    return Boolean(await User.findOne({ uid: uid }))
  }
}

export async function addRoleData(user) {
  try {
    if (!user) throw new Error('Cannot add role for user')
    const addedUser = { ...user._doc }
    const roleData = addedUser.role_id ? await RoleModel.findOne(addedUser.role_id) : null
    addedUser.role_data = roleData
    console.log({ addedUser })
    if (user.role_id) {
      delete addedUser.role_id
      console.log('remove role_id')
      console.log({ addedUser })
    }
    return addedUser
  } catch (error) {
    throw error
  }
}
