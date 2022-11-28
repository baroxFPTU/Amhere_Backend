import express from 'express'
import { UserController } from '~/controllers/user.controller'

const UserRoute = express.Router()

UserRoute.get('/:uid', UserController.findOneByUid)
UserRoute.get('/', UserController.findAll)

export default UserRoute
