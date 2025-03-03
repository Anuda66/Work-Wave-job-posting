import express from 'express'
import { addJob, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-job', upload.single('image'), addJob)
adminRouter.post('/login', loginAdmin)

export default adminRouter