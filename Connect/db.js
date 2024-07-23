import mongoose from "mongoose";

const mongoURI = process.env.MONGO_URI;

export const connectDB =() => {
    mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("Database Name:", mongoose.connection.db.databaseName);
    console.log("MongoDB Server:", mongoose.connection.client.s.url);
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
} 
