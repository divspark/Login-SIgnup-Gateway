import mongoose from "mongoose";

const mongoURI = "mongodb+srv://divyansh2004mhj:bOopW7iWf5WCr7zr@food-miles.5ivi1wn.mongodb.net/Food-Miles"; 

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
