import express from 'express'
import {
  addNewUser,
  getAllUser,
  getUserByRole,
  getUserByName,
  getUserByUId,
  getUserById
} from '~/controllers/user.controller'

const UserRoute = express.Router()

UserRoute.get('/:userid', getUserByUId)
UserRoute.get('/userid/:userid', getUserById)
UserRoute.get('/filter/role/:role', getUserByRole)
UserRoute.get('/filter/name/:name', getUserByName)
UserRoute.get('/', getAllUser)
UserRoute.post('/', addNewUser)

export default UserRoute
