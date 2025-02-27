import express from 'express'
import { addJob } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'

const adminRoute = express.Router()

adminRoute.post('/add-job', upload.single('image'),addJob)

export default adminRoute