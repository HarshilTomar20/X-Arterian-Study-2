import mongoose from "mongoose";

const connection = async () => {

  try {
    await mongoose.connect(process.env.MONGO_DB_URI as string);
    console.log("Connected to MongoDB");


  } catch (error) {
    console.error("MongoDB connection error:", error);
 
  }
};

export default connection;