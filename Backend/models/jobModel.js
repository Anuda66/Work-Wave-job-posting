import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    image: {type:String, require:true},
    comName:{type:String, require:true},
    JobTitle:{type:String, require:true},
    discription:{type:String, require:true},
    requiremat:{type:String, require:true},
    techlnolegy:{type:String, require:true},
    date:{type:Number, require:true},
    link:{type:String, require:true},

})

const jobModel = mongoose.model.job || mongoose.model('job', jobSchema)

export default jobModel