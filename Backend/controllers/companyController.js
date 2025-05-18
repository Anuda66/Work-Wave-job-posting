import companyModel from "../models/companyModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import validator from "validator";
import jobModel from "../models/jobModel.js";
import { v2 as cloudinary } from 'cloudinary'
import userModel from "../models/userModel.js";

// API to get user datails ---------------------------------------

const getUserDeatils = async (req, res) => {
  try {
    const user = await userModel.find({}).select('-password')
    res.json({ success: true, user })
  }
  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}

// API to get dashboard data for admin panel---------------------------------

const companyDashboard = async (req, res) => {
  try {
    const jobs = await jobModel.find({})
    const users = await userModel.find({})

    const dashData = {
      jobs: jobs.length,
      users: users.length,
      latstJobs: jobs.reverse().slice(0, 5)
    }

    res.json({ success: true, dashData })

  }
  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message, adminDashboard })

  }
}

// API for Company register---------------------------

const registerCompany = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.json({ success: false, message: 'Missing details' })
    }
    // Validate email----------------------------
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: 'Invalid email' })
    }
    // Validate strong password----------------------------
    if (password.length < 8) {
      return res.json({ success: false, message: 'Enter strong password' })
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

    const Ctoken = jwt.sign({ id: company._id }, process.env.JWT_SECRET)
    res.json({ success: true, Ctoken })

  }
  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}

// Api for company login-------------------------------------

const companyLogin = async (req, res) => {
  try {

    const { email, password } = req.body
    const company = await companyModel.findOne({ email })

    if (!company) {
      return res.json({ success: false, message: 'Company does not exit' })
    }

    const isMatch = await bcrypt.compare(password, company.password)

    if (isMatch) {
      const Ctoken = jwt.sign({ id: company._id }, process.env.JWT_SECRET)
      res.json({ success: true, Ctoken })
    }
    else {
      res.json({ success: false, message: "Invalid credentials" })
    }
  }
  catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}


// Api for adding Jobs from Company Dashboard -----------------------

const addJob = async (req, res) => {
  try {
    const { comName, jobTitel, technology, discription, requirements, email, link } = req.body;
    const imageFile = req.file;

    // Check if all required fields are present

    if (!comName || !jobTitel || !technology || !discription || !requirements || !email || !link) {
      return res.json({ success: false, message: "Missing data" });
    }

    //console.log({comName,  jobTitel, technology, discription, requirements, email, link},imageFile);

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid emai" });
    }

    // Check if a file was uploaded
    if (!imageFile) {
      return res.json({ success: false, message: "No file uploaded" });
    }

    // Upload image to Cloudinary
    const imageUploade = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
    const imageUrl = imageUploade.secure_url;

    // Add data to the database
    const jobData = {

      comName,
      jobTitel,
      technology,
      discription,
      requirements,
      email,
      link,
      date: Date.now(),
      image: imageUrl
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



export { registerCompany, companyLogin, addJob, companyDashboard, getUserDeatils }