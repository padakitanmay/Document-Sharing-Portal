import express from "express";
import cors from "cors";
import router from "./src/routes/routes.js";
import DBConnection from "./src/database/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
    origin: "*", // Allow requests from all origins
    methods: "GET,PATCH,POST,DELETE", // Allow all HTTP methods
    allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization", // Allow these headers
    credentials: true, // Allow sending cookies across origins
};

app.use(cors(corsOptions));

// Preflight request handling (OPTIONS)
app.options("*", cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", router);

const PORT = process.env.PORT || 8000;

// Database connection
DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
