import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import jobRoute from './routes/jobRoute.js'
import userRouter from './routes/userRoute.js'
import CompanyRouter from './routes/companyRoute.js'


// mongodb+srv://anudaransara:fQ7kxTDwdu727cSh@cluster0.gosxe.mongodb.net
//J0qvhLUmLMjcRaXo
//mongodb+srv://anudaransara1:J0qvhLUmLMjcRaXo@cluster0.vynfxgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//App config----------------------------------
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlware ----------------------------------
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

//API endpoint--------------------------------
app.use('/api/admin',adminRouter )
app.use('/api/job', jobRoute)
app.use('/api/user',userRouter)
app.use('/api/company',CompanyRouter)

// localhost:4000/api/admin/add-job


app.get('/',(req,res)=>{
    res.send('API WORKING ')
})

app.listen(port,()=>console.log("Server Started",port))