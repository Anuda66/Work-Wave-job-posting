import {v2 as cloudinary} from 'cloudinary'
import jobModel from '../models/jobModel.js'
import jwt from 'jsonwebtoken'

// Api for adding Jobs from admin -----------------------

const addJob = async (req, res) => {
    try {
      const { JobTitle, comName, discription, requiremat, techlnolegy, date , link} = req.body;
      // const imageFile = req.file;
  
      // Check if all required fields are present
      if (!JobTitle || !comName || !discription || !requiremat || !techlnolegy || !link) {
        return res.json({ success: false, message: "Missing data" });
      }
  
      // Check if a file was uploaded
     // if (!imageFile) {
      //  return res.json({ success: false, message: "No file uploaded" });
     // }
  
      // Upload image to Cloudinary
      // const imageUploade = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'});
      // const imageUrl = imageUploade.secure_url;
  
      // Add data to the database
      const jobData = {
        JobTitle,
        comName, 
        discription,
        requiremat,
        techlnolegy,
        link,
        date: Date.now(),
        //image: imageUrl
      };
  
      const newJob = new jobModel(jobData);
      await newJob.save();
  
      res.json({ success: true, message: 'Job added' });
    } 
    
    catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };


  // API for the admin loging

  const loginAdmin = async(req,res) => {
    try{
      const {email, password} = req.body

      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign(email + password, process.env.JWT_SECRET)
        res.json({success:true,token})
      }
      else{
        res.json({success:false, message:"Ivalid Creadentials"}) 
      }
    }
    catch(error){
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  }

  export { addJob, loginAdmin };