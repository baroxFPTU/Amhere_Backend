const express = require('express')
const { RoleController } = require('../../controllers/role.controller')

const RoleRoute = express.Router()

RoleRoute.route('/')
  .get(RoleController.findAll)
  .post(RoleController.add)
  .delete(RoleController.delete)

module.exports = RoleRoute
