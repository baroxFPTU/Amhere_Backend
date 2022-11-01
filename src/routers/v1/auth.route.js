import express from 'express'
import { AuthController } from '../../controllers/auth.controller'
import { AuthValidation } from '../../validations/auth.validation'

const AuthRoute = express.Router()

AuthRoute.route('/login-with-password').post(AuthValidation.login, AuthController.loginWithPassword)

AuthRoute.route('/register-with-password').post(
  AuthValidation.registerWithPassword,
  AuthController.registerWithPassword
)

AuthRoute.route('/login-with-provider').post(AuthController.loginWithProvider)
export default AuthRoute
