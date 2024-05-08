import express from "express";
import upload from "../middleware/multer.js";
import { uploadImage, getFile,getDocs, deleteImage } from "../controller/file-controller.js";
import { registerUser, loginUser,getUsers } from "../controller/user-controller.js";

const router = express.Router();

//Routes
//To upload file
router.post("/upload", upload.single("file"), uploadImage);
//Delete file
router.get("/delete",deleteImage); 
//Get a file
router.get("/file/:fileId", getFile);
//Get all files between sender and receiver
router.get('/getDocs',getDocs)
//Get all users
router.post("/getChats",getUsers)
//login user
router.post("/login",loginUser);
//register user
router.post("/register",registerUser);

export default router;
