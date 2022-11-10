import { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import { appDB } from '../configs/db'

const roleSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  created_at: { type: Date, default: Date.now }
})
roleSchema.plugin(uniqueValidator)

export const Role = appDB.model('Role', roleSchema)

export const RoleModel = {
  add: async ({ name, slug }) => {
    try {
      const createdRole = new Role({ name, slug })
      return await createdRole.save()
    } catch (error) {
      throw error?.errors ? error.errors : error
    }
  },
  delete: async (id) => {
    try {
      const response = await Role.findByIdAndDelete(id)
      return response
    } catch (error) {
      throw new Error('Cannot delete role.')
    }
  },
  findAll: async () => {
    return await Role.find()
  },
  findOne: async (id) => {
    return await Role.findOne(id).select('name slug _id')
  }
}
