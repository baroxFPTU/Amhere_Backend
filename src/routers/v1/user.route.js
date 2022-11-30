import express from 'express'
import { UserController } from '~/controllers/user.controller'
import { UserValidation } from '../../validations/user.validation'

const UserRoute = express.Router()

UserRoute.put('/:uid?', UserValidation.updateOneByUid, UserController.updateOneByUid)
UserRoute.get('/:uid', UserController.findOneByUid)
UserRoute.get('/', UserController.findAll)

export default UserRoute
