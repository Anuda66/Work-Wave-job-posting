import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    image: {type:String, require:true},
    comName:{type:String, require:true},
    jobTitel:{type:String, require:true},
    technology:{type:String, require:true},
    discription:{type:String, require:true},
    requirements:{type:String, require:true},
    date:{type:Number, require:true},
    email:{type:String, require:true},
    link:{type:String, require:true},
},{minimize:false})

const jobModel = mongoose.model.job || mongoose.model('job', jobSchema)

export default jobModel