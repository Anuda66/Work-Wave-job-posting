import companyModel from "../models/companyModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import validator from "validator";
import {v2 as cloudinary} from "cloudinary";

// API for Company register---------------------------

const registerCompany = async(req, res)=>{
    try{
        const {name, email, password} = req.body

        if (!name || !email || !password){
            return res.json({success:false, message:'Missing details'})
        }
        // Validate email----------------------------
        if (!validator.isEmail(email)){
            return res.json({success:false, message:'Invalid email'})
        }
        // Validate strong password----------------------------
        if (password.length < 8){
            return res.json({success:false, message:'Enter strong password'})
        }
        // Hashing password----------------------------
        const salt = await bcrypt.genSalt(10)   
        const hashedPassword = await bcrypt.hash(password, salt)

        const companyData = {
            name,
            email,
            password: hashedPassword
        }
        const newCompany = new companyModel(companyData)
        const company = await newCompany.save()

        const Ctoken = jwt.sign({id:company._id}, process.env.JWT_SECRET)
        res.json({success:true, Ctoken})

    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})        
    }
}

// Api for user login-------------------------------------

const companyLogin = async (req, res)=>{
    try{

        const {email, password} = req.body
        const company = await companyModel.findOne({email})

        if(!company){
            return res.json({success:false, message:'Company does not exit'})
        }

        const isMatch = await bcrypt.compare(password, company.password)

        if(isMatch){
            const Ctoken = jwt.sign({id:company._id}, process.env.JWT_SECRET)
            res.json({success:true,Ctoken})
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

    
export {registerCompany, companyLogin}