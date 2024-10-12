import React, { useState, useEffect, useRef } from "react";
import { uploadFile } from "../service/api";
import { useSelector } from "react-redux";

const Upload = (props) => {
    const auth = useSelector((state) => state.auth);
    const [file, setFile] = useState("");
    const fileInputRef = useRef();

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                data.append("receivedBy", props.data.username);
                data.append("sentBy", auth.user.username);
                console.log(file)
                if (file.size > 26214400) {
                    alert("File size exceeds 25MB");
                    return;
                }
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
                New File (upto 25 MB)
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
