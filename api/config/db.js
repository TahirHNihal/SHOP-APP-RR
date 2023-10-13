import mongoose from "mongoose";

//Create a MongoDB connection
const mongoDBConncent = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongodb connected successfully`.bgBlue.white);
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};
//Export
export default mongoDBConncent;
