const { RoleModel } = require('../models/role.model')
const { addRoleData, UserModel } = require('../models/user.model')

module.exports.UserService = {
  findAll: async (roleSlug) => {
    try {
      const lsUsers = await UserModel.findAll(roleSlug)
      return lsUsers
    } catch (error) {
      throw error
    }
  },
  findOneByUid: async (uid) => {
    try {
      const user = await UserModel.findOneByUid(uid)
      return user
    } catch (error) {
      throw error
    }
  },
  updateOneByUid: async (uid, data) => {
    try {
      /**
       * Validate:
          + slug
          + schema
          + uid
       */
      const roleSlug = data.role_data.slug
      const role = await RoleModel.findOneBySlug(roleSlug)

      if (role) {
        data.role_id = role._id
      }

      const updatedUser = await UserModel.updateOneByUid(uid, data)
      delete updatedUser.updated_at
      delete updatedUser.created_at

      return await addRoleData(updatedUser)
    } catch (error) {
      throw error
    }
  }
}
