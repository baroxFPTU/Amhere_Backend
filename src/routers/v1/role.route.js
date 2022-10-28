import express from 'express'
import { RoleController } from '~/controllers/role.controller'

const RoleRoute = express.Router()

RoleRoute.route('/')
  .get(RoleController.findAll)
  .post(RoleController.add)
  .delete(RoleController.delete)

export default RoleRoute
