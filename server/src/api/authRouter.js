import { Router } from 'express'
import AuthController from '../controllers/authController.js'
const authRouter = Router()

authRouter.get('/register', AuthController.registration)
authRouter.get('/login', AuthController.login)
authRouter.get('/logout', AuthController.logout)
authRouter.get('/activate:link', AuthController.activate)
authRouter.get('/users', AuthController.getUsers)

export default authRouter
