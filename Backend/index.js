import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book_route.js"
import userRoute from "./route/user_route.js"
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json()); //this app use to parse the data which is come from the req body to save the data in the database

dotenv.config();//this helps to run the env port ok

const PORT=process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
console.log(URI)
// data base connection
const connectDB = async () => {
  try {
    await mongoose.connect(URI); // ✅ No deprecated options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
connectDB();

// define routes
app.use("/book", bookRoute);
app.use("/user", userRoute); 


app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})