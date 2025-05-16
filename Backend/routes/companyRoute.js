import express from "express";
import { registerCompany, companyLogin, addJob, companyDashboard, getUserDeatils } from "../controllers/companyController.js";
import authCompany from "../middlewares/authCompany.js";
import upload from "../middlewares/multer.js";

const CompanyRouter = express.Router();

CompanyRouter.post("/register", registerCompany); 
CompanyRouter.post("/login", companyLogin);
CompanyRouter.post("/add-job", authCompany, upload.single("image"), addJob);
CompanyRouter.get('/dashboard', authCompany, companyDashboard)
CompanyRouter.get('/user-details', authCompany, getUserDeatils)

export default CompanyRouter;