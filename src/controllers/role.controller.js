import { RoleService } from '../services/role.service'

export const RoleController = {
  findAll: async (req, res) => {
    try {
      const roles = await RoleService.findAll()
      res.json( roles).status(200)
    } catch (error) {
      console.error(error)
      res
        .json({
          errors: error
        })
        .status(500)
    }
  },
  add: async (req, res) => {
    try {
      const role = req.body
      const createdRole = await RoleService.add(role)
      res.json({ role: createdRole }).status(200)
    } catch (error) {
      console.error(error)
      res
        .json({
          errors: error
        })
        .status(500)
    }
  },
  delete: async (req, res) => {
    try {
      const roleID = req.query.id
      const response = await RoleService.delete(roleID)
      res.json({ message: 'Deleted Success' }).status(200)
    } catch (error) {
      res
        .json({
          errors: error.message
        })
        .status(500)
    }
  }
}
