import mongoose from "mongoose";

const configOptions = { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000, // Increase the timeout as needed
  socketTimeoutMS: 30000,  // Increase the timeout as needed

};

// const apiUrl = process.env.DATABASE_MONGODB_SECRET;

const connectToDB = async () => {
  const connectionUrl = 'mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/';

  try {
    await mongoose.connect(connectionUrl, configOptions);
    console.log("Ecommerce database connected successfully!");
  } catch (err) {
    console.log(`Error connecting to the database: ${err.message}`);
  }
};

export default connectToDB;