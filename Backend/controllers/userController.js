import validator from 'validator'
import bcrypt from 'bcryptjs'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// API to register user---------------------------

const registerUser = async(req, res)=>{
    try{
        const {name, email, password} = req.body

        if (!name || !password || !email){
            return res.json({success:false, message:'MIssing Details'})
        }
        // Validation email ----------------------------
        if (!validator.isEmail(email)){
            return res.json({success:false, message:'Invalid Emil'})
        }
        // validation strong----------------------------
        if (password.length < 8){
            return res.json({success:false, message:'Enter Strong Password'})
        }
        // Hashing password ----------------------------
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password : hashedPassword
        }

        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)

        res.json({success:true, token})

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})      
    }
}

// Api for user login-------------------------------------

const loginUser = async (req, res)=>{
    try{

        const {email, password} = req.body
        const user = await userModel.findOne({email})

        if(!user){
            res.json({success:false, message:'User does not exit'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(isMatch){
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invalid credentials"})
        }

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {registerUser, loginUser}