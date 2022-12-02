const express = require('express')
const { UserController } = require('../../controllers/user.controller')
const { UserValidation } = require('../../validations/user.validation')

const UserRoute = express.Router()

UserRoute.put('/:uid?', UserValidation.updateOneByUid, UserController.updateOneByUid)
UserRoute.get('/:uid', UserController.findOneByUid)
UserRoute.get('/', UserController.findAll)

module.exports = UserRoute
