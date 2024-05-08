import React, { useState, useEffect, useRef } from "react";
import { uploadFile } from "../service/api";
import { useAuth } from "../contexts/AuthContext";

const Upload = (props) => {
    const [auth] = useAuth();
    const [file, setFile] = useState("");
    const fileInputRef = useRef();

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                console.log(file);
                data.append("receivedBy", props.data.username);
                data.append("sentBy", auth.user.username);
                const res = await uploadFile(data);
            }
        };
        getImage();
    }, [file]);

    const onUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <button
                className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
                onClick={onUploadClick}
            >
                Send
            </button>
            <input
                type='file'
                ref={fileInputRef}
                className='hidden'
                onChange={(e) => setFile(e.target.files[0])}
            />
        </>
    );
};

export default Upload;
