import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0,
    },
    sentBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    receivedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
});

export default File = mongoose.model("file", FileSchema);
