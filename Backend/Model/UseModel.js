const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    FirstName:{
        type:String, //data type
        require: true,//validate  
    },
    LastName:{
        type:String, //data type
        require: true,//validate  
    },
    gmail:{
        type:String, //data type
        require: true,//validate  
    },
    Password1:{
        type:Number, //data type
        require: true,//validate  
    },
    Password2:{
        type:String, //data type
        require: true,//validate  
    },
});

module.exports = mongoose.model(
    "UserModel", //File name
    userSchema //function name
)