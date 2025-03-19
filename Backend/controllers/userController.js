import validator from 'validator'
import bcrypt from 'bcryptjs'

// API to register user---------------------------

const registerUser = async(req, res)=>{
    try{
        const {name, email, password} = req.body

        if (!name || !password || !email){
            return res.json({success:false, message:'MIssing Details'})
        }
        if (!validator.isEmail(email)){
            return res.json({success:false, message:'Invalid Emil'})
        }
        if (password.length < 8){
            return res.json({success:false, message:'Enter Strong Password'})
        }
    }
    catch(error){

    }
}