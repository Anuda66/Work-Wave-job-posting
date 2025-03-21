import express from 'express'
import { registerUser, loginUser, getProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'

const UserRouter = express.Router()

UserRouter.post('/register', registerUser)
UserRouter.post('/login', loginUser)

UserRouter.get('/get-profile', authUser, getProfile)




export default UserRouter