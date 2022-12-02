const { Schema } = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { appDB } = require('../configs/db')

const roleSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true, required: true },
  created_at: { type: Date, default: Date.now }
})
roleSchema.plugin(uniqueValidator)

const Role = appDB.model('Role', roleSchema)

const RoleModel = {
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
  },
  findOneBySlug: async (slug) => {
    return await Role.findOne({ slug: slug }).select('name slug _id')
  }
}

module.exports = {
  Role,
  RoleModel
}
