import express from 'express'
import { addJob, allJobs, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'


const adminRouter = express.Router()

adminRouter.post('/add-job',authAdmin ,upload.single('image'), addJob)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-jobs', authAdmin, allJobs)

export default adminRouter