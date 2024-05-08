import File from "../models/file.js";
import User from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

// Controller to create a new file
export const uploadFile = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
        receivedBy: req.body.receivedBy,
        sentBy: req.body.sentBy,
    };

    try {
        const file = await File.create(fileObj);
        res.status(200).json({
            path: `http://localhost:${process.env.PORT}/file/${file._id}`,
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a file
export const deleteFile = async (req, res) => {
    const fileId = req.query.fileId; 
    try {
        const deletedFile = await File.findByIdAndDelete(fileId);
        if (!deletedFile) {
            return res.status(404).json({ error: "File not found" });
        }
        // Optionally, you may also want to delete the file from the filesystem using fs.unlinkSync(deletedFile.path);
        res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
};

// Controller to download/get a file
export const getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);

        file.downloadCount++;

        await file.save();

        res.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};


// Controller to get all files of a user
export const getDocs = async (req, res) => {
    try {
        const { senderId, recieverId } = req.query;
        const sData = await User.findById(senderId);
        const rData = await User.findById(recieverId);
        const sender = {
            ...sData,
            password: null,
        };
        const reciever = {
            ...rData,
            password: null,
        };

        const files = await File.find({
            $or: [
                { sentBy: sData.username, receivedBy: rData.username },
                { sentBy: rData.username, receivedBy: sData.username },
            ],
        });
        for (let i = 0; i < files.length; i++) {
            files[
                i
            ].path = `http://localhost:${process.env.PORT}/file/${files[i]._id}`;
        }
        res.status(200).json({ sender, reciever, files });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};
