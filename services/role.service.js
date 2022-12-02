const { RoleModel } = require('../models/role.model')
const slugify = require('slugify')

module.exports.RoleService = {
  findAll: async () => {
    try {
      const roles = await RoleModel.findAll()
      return roles
    } catch (error) {
      throw error
    }
  },
  add: async (role) => {
    try {
      role.slug = slugify(role.name, {
        replacement: '-',
        lower: true,
        trim: true,
        remove: /[*+~.()'"!:@]/g
      })

      return await RoleModel.add(role)
    } catch (error) {
      throw error
    }
  },
  delete: async (id) => {
    try {
      if (!id) throw new Error('Cannot delete role')
      return await RoleModel.delete(id)
    } catch (error) {
      throw error
    }
  }
}
