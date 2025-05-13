import express from "express";
import { registerCompany } from "../controllers/companyController.js";
import authCompany from "../middlewares/authCompany.js";
import upload from "../middlewares/multer.js";

const CompanyRouter = express.Router();

CompanyRouter.post("/register", registerCompany);


export default CompanyRouter;