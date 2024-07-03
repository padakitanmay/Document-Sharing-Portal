import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Perform database connection
const DBConnection = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.szxx1ij.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`,
            {
                useNewUrlParser: true,
            }
        );
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database ", error.message);
    }
};

export default DBConnection;
