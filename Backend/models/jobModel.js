import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    JobTitle:{type:String, require:true},
    companyName:{type:String, require:true},
    intro:{type:String, require:true},
    dis:{type:String, require:true},
    requiremat:{type:String, require:true},
    techlnolegy:{type:String, require:true},
    date:{type:Number, require:true},
    image: {type:String, require:true},

})

const jobModel = mongoose.model.job || mongoose.model('job', jobSchema)

export default jobModel