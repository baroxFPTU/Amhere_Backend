import express from 'express'
import { AuthController } from '../../controllers/auth.controller'

const AuthRoute = express.Router()

AuthRoute.route('/login').post(AuthController.login)

export default AuthRoute
