import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Perform database connection
const DBConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database ", error.message);
    }
};

export default DBConnection;
