import express from 'express'
import { addJob } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRouter = express.Router()

adminRouter.post('/add-job', upload.single('image'), addJob)

export default adminRouter