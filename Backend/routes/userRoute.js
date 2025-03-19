import express from 'express'
import { registerUser } from '../controllers/userController.js'

const UserRouter = express.Router()

UserRouter.post('/register', registerUser)






export default UserRouter