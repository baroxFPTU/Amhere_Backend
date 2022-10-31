import express from 'express'
import { AuthController } from '../../controllers/auth.controller'
import { AuthValidation } from '../../validations/auth.validation'

const AuthRoute = express.Router()

AuthRoute.route('/login').post(AuthValidation.login, AuthController.login)

AuthRoute.route('/register').post(AuthController.register)

export default AuthRoute
