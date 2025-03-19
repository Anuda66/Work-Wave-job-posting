import jobModel from "../models/jobModel.js";

const jobList = async(req, res)=>{
    try{
        const jobs = await jobModel.find({})

        res.json({success:true, jobs})
    }
    catch(error){
        console.log(error);
        res.json({success:false, message:error.message})        
    }
}

export {jobList}