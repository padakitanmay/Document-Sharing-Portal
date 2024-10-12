import React, { useEffect, useState } from "react";
import Upload from "../Upload";
import { getDocs, deleteFile } from "../../service/api";
import { useSelector } from "react-redux";
import FilePreviewer from "./Previewer";

// Helper function to determine file type from file extension
const getFileType = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "bmp"].includes(extension)) {
        return "image";
    } else if (extension === "pdf") {
        return "pdf";
    }
    return "unsupported";
};

const Documents = ({ data }) => {
    const [docs, setDocs] = useState([]);
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchData = async () => {
            if (data && auth) {
                const fetchedDocs = await getDocs(auth?.user._id, data?._id);
                setDocs(fetchedDocs);
            }
        };
        fetchData();
    }, [auth, data]);

    const remove = async (fileId) => {
        await deleteFile(fileId);
        setDocs((prevDocs) => ({
            ...prevDocs,
            files: prevDocs.files.filter((file) => file._id !== fileId),
        }));
    };

    return (
        <div className='flex flex-col h-screen'>
            <div className='text-center font-bold p-5 bg-blue-200 rounded-lg'>
                <div>Files</div>
                <div>{data?.username}</div>
            </div>

            <div className='mt-4'>
                {docs.files?.length > 0 ? (
                    <ul className='divide-y divide-gray-200'>
                        {docs.files.map((item) => (
                            <li key={item._id} className='py-4'>
                                <p className='font-semibold'>
                                    <span>File:</span>
                                    <FilePreviewer
                                        file={{
                                            name: item.name,
                                            path: item.path,
                                            type: getFileType(item.name), // Use the helper function to get the type
                                        }}
                                    />
                                    <a
                                        href={item.path}
                                        className='block text-green-500 hover:text-green-700 my-1'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {item.name}
                                    </a>
                                    {item.sentBy === auth?.user?.username && (
                                        <button
                                            onClick={() => remove(item._id)}
                                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded-xl'
                                        >
                                            Delete
                                        </button>
                                    )}
                                </p>
                                <div>From: {item.sentBy}</div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className='text-center'>No files uploaded yet.</p>
                )}
            </div>

            <div className='p-3 flex justify-center bg-blue-200 rounded-lg'>
                <Upload data={data} />
            </div>
        </div>
    );
};

export default Documents;
