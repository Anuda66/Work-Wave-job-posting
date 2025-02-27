//fQ7kxTDwdu727cSh
//mongodb+srv://anudaransara:fQ7kxTDwdu727cSh@cluster0.gosxe.mongodb.net

//npm run server

import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', ()=>console.log("Database Connected"));
    
    await mongoose.connect(`${process.env.MONGODB_URL}/prescripto`)
}

export default connectDB