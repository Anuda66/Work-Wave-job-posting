import dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config(); // Load environment variables from .env file

const connectCloudinary = async () => {
  cloudinary.config({
    cloude_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECROTE_KEY,
  });
};

export default connectCloudinary