const { UserService } = require('../services/user.service')

module.exports.UserController = {
  findAll: async (req, res) => {
    try {
      const { role = '' } = req.query
      const users = await UserService.findAll(role)

      res.status(200).json({
        data: users
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        message: error.message
      })
    }
  },
  findOneByUid: async (req, res) => {
    try {
      const { uid } = req.params
      const user = await UserService.findOneByUid(uid)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
    }
  },
  updateOneByUid: async (req, res) => {
    try {
      const { uid } = req.params
      const data = req.body
      const updatedUser = await UserService.updateOneByUid(uid, data)
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(400).json({
        message: error.message
      })
    }
  }
}
