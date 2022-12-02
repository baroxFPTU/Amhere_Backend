const express = require('express')
const { AuthController } = require('../../controllers/auth.controller')
const { AuthValidation } = require('../../validations/auth.validation')

const AuthRoute = express.Router()

AuthRoute.route('/login-with-password').post(AuthValidation.login, AuthController.loginWithPassword)

AuthRoute.route('/register-with-password').post(
  AuthValidation.registerWithPassword,
  AuthController.registerWithPassword
)

AuthRoute.route('/login-with-provider').post(AuthController.loginWithProvider)

module.exports = AuthRoute
