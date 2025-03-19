import express from 'express'
import { jobList } from '../controllers/jobController.js'


const jobRoute = express.Router()

jobRoute.get('/list',jobList)

export default jobRoute