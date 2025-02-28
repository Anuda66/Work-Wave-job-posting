import {v2 as cloudinary} from 'cloudinary'
import jobModel from '../models/jobModel.js'


// Api for adding Jobs from admin -----------------------

const addJob = async (req, res) => {
    try {
      const { JobTitle, companyName, dis, requiremat, techlnolegy, date } = req.body;
      // const imageFile = req.file;
  
      // Check if all required fields are present
      if (!JobTitle || !companyName || !dis || !requiremat || !techlnolegy) {
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
        companyName, 
        dis,
        requiremat,
        techlnolegy,
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
  
  export { addJob };