import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, getUserDetails } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const UserRouter = express.Router()

UserRouter.post('/register', registerUser)
UserRouter.post('/login', loginUser)

UserRouter.get('/get-profile', authUser, getProfile)
UserRouter.post('/update-profile', upload.single('image'),authUser, updateProfile)

UserRouter.get('/get-usersDetails', getUserDetails)

export default UserRouter 