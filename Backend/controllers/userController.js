import validator from 'validator'
import bcrypt from 'bcryptjs'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import {v2 as cloudinary} from 'cloudinary'

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
            return res.json({success:false, message:'User does not exit'})
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

// API for get user profile data -------------------------------------

const getProfile = async (req, res) =>{
    try{
        const {userId} = req.body
        const userData = await userModel.findById(userId).select('-password')
        res.json({success:true,userData})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// API to update user profile ---------------------------------------

const updateProfile = async (req, res) => {
    try{
        const {userId, name, phone, dob, gender, location, jobTitel} = req.body
        const imageFile = req.file

        if(!name || !phone || !dob || !gender || !location || !jobTitel){
            return res.json({success:false, message:"Data Missing"})
        }

        await userModel.findByIdAndUpdate(userId, {name, phone, dob, location, gender, jobTitel})

        if (imageFile) {
            //uplode image cloudnary--------------------------------
            const imageUplode = await cloudinary.uploader.upload(imageFile.path,{resource_type:'image'})
            const imageURL = imageUplode.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageURL})
        }

        res.json({success:true, message:"Profile Updated"})
            
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// API to get user datails ---------------------------------------

const getUserDetails = async (req, res) => {
    try{
        const user = await userModel.find({}).select('-password')
        res.json({success:true, user})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export {registerUser, loginUser, getProfile, updateProfile, getUserDetails}