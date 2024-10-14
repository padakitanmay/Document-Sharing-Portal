import express from "express";
import upload from "../middleware/multer.js";
import { uploadFile, getFile,getDocs, deleteFile } from "../controller/file-controller.js";
import { registerUser, loginUser,getUsers } from "../controller/user-controller.js";

const router = express.Router();

//Routes
//To upload file
router.post("/upload", upload.single("file"), uploadFile);
//Delete file
router.get("/delete",deleteFile); 
//Get a file
router.get("/file/:fileId", getFile);
//Get all files between sender and receiver
router.get('/getDocs',getDocs)
//Get all users
router.post("/getUsers",getUsers)
//login user
router.post("/login",loginUser);
//register user
router.post("/register",registerUser);
// app.get('/file/:id', (req, res) => {
//     const filePath = path.join(__dirname, 'path/to/your/file.pdf'); // Change this to the actual file path
    
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'inline; filename="file.pdf"'); // Change filename if necessary
    
//     res.sendFile(filePath, (err) => {
//         if (err) {
//             console.error(err);
//             res.status(err.status).end();
//         }
//     });
// });


export default router;
