const express = require('express')
const { UserController } = require('../../controllers/user.controller')
const { UserValidation } = require('../../validations/user.validation')
const { User } = require('../../models/user.model')

const UserRoute = express.Router()

UserRoute.put('/test', async (req, res) => {
  const response = await User.updateMany(
    {},
    {
      $project: {
        bio: 'test'
      }
    }
  )
  console.log('🚀 ~ file: user.route.js:17 ~ UserRoute.put ~ response', response)
  res.json({
    message: 'success'
  })
})
UserRoute.put('/:uid', UserValidation.updateOneByUid, UserController.updateOneByUid)
UserRoute.get('/:uid', UserController.findOneByUid)
UserRoute.get('/', UserController.findAll)

module.exports = UserRoute
