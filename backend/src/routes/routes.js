import express from "express";
import upload from "../middleware/multer.js";
import { uploadImage, getImage,getDocs, deleteImage } from "../controller/image-controller.js";
import { registerUser, loginUser,getChatsController } from "../controller/user-controller.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/delete",deleteImage); 
router.post("/login",loginUser);
router.post("/register",registerUser);
router.get("/file/:fileId", getImage);
router.get('/getDocs',getDocs)
router.post("/getChats",getChatsController)

export default router;
