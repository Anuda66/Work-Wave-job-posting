import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRoute from './routes/adminRoute.js'

//App config----------------------------------
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlware ----------------------------------
app.use(express.json())
app.use(cors())

//API endpoint--------------------------------
app.use('/api/admin',adminRoute)
// localhost:4000/api/admin/add-job
app.get('/',(req,res)=>{
    res.send('API WORKING ')
})

app.listen(port,()=>console.log("Server Started",port))