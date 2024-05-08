import React, { useEffect } from "react";
import Upload from "./Upload";
import { useAuth } from "../contexts/AuthContext";
import { getDocs, deleteFile } from "../service/api";
import { useState } from "react";

const Documents = ({ data }) => {
    const [docs, setDocs] = useState([]);
    const [auth] = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            if (data && auth != null) {
                const datas = await getDocs(auth?.user._id, data?._id);
                setDocs(datas);
            }
        };
        fetchData();
    }, [auth, docs, deleteFile]);

    const remove = (fileId) => {
        deleteFile(fileId);
    };
    return (
        <div className='flex flex-col h-screen'>
            <div className='text-center font-bold p-5 bg-blue-200 rounded-lg'>
                <div>Files</div>
                <div>{data?.username}</div>
            </div>
            <div className='mt-4'>
                {docs.files?.length > 0 && (
                    <ul className='divide-y divide-gray-200'>
                        {docs.files.map((item) => (
                            <li key={item._id} className='py-4'>
                                <p className='font-semibold'>
                                    File:
                                    <a
                                        href={`${item.path}`}
                                        className='block text-green-500 hover:text-green-700'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {item.name}
                                    </a>
                                    {item.sentBy == auth.user.username && (
                                        <button
                                            onClick={() => remove(item._id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                </p>
                                <div>From: {item.sentBy}</div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className=' p-3 flex justify-center bg-blue-200 rounded-lg'>
                <Upload data={data} />
            </div>
        </div>
    );
};

export default Documents;
