import React, { useState, useEffect, useRef } from "react";
import { uploadFile } from "../service/api";
import { useAuth } from "../contexts/authContext";

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
        // // <div className='container mx-auto py-4'>
        //     {/* <img src={url} className='max-w-full mb-4' alt='' /> */}
        //     <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
        //         <h1 className='text-2xl font-bold mb-2'>
        //             Simple file sharing!
        //         </h1>
        //         <p className='text-lg mb-4'>
        //             Upload and share the download link.
        //         </p>
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
        //         {result && (
        //             <img className='max-w-full mt-4' src={result} alt='' />
        //         )}
        //         {result && (
        //             
        //         )}
        //     </div>
        // </div>
    );
};

export default Upload;
