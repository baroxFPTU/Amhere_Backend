import express from 'express'
import { UserController } from '~/controllers/user.controller'

const UserRoute = express.Router()

UserRoute.get('/:userid', UserController.getUserByUId)
UserRoute.get('/userid/:userid', UserController.getUserById)
UserRoute.get('/filter/role/:role', UserController.getUserByRole)
UserRoute.get('/filter/name/:name', UserController.getUserByName)
UserRoute.get('/', UserController.findAll)
UserRoute.post('/', UserController.addNewUser)

export default UserRoute
