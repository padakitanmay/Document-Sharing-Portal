import express from "express";
import cors from "cors";
import router from "./src/routes/routes.js";
import DBConnection from "./src/database/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const corsOptions = {
    origin: "https://document-sharing-portal.vercel.app",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200, // Some legacy browsers (e.g., IE11) choke on 204
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
