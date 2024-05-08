import React, { useEffect } from "react";
import Upload from "./Upload";
import { Avatar } from "antd";
import { useAuth } from "../contexts/authContext";
import { getDocs, deleteFile } from "../service/api";
import { useState } from "react";

const ChatBox = ({ data }) => {
    const [docs, setDocs] = useState([]);
    const [auth] = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            if (data && auth != null) {
                const datas = await getDocs(auth?.user._id, data?._id);
                // if (datas.sender._doc._id == auth.user._id && datas.receiver._doc._id == data._id)
                setDocs(datas);
            }
        };
        fetchData();
    }, [auth,docs,deleteFile]);

    const remove = (fileId) => {
        deleteFile(fileId);
    };
    return (
        <div className='flex flex-col h-screen'>
            <div className='text-center font-bold p-5 bg-blue-200 rounded-lg'>
                <span>
                    <Avatar
                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=0`}
                    />
                </span>
                {data?.username}
            </div>
            <div className='mt-4'>
                {docs.files?.length > 0 && (
                    <ul className='divide-y divide-gray-200'>
                        {docs.files.map((item) => (
                            <li key={item._id} className='py-4'>
                                <p className='font-semibold'>
                                    URL:{" "}
                                    <a
                                        href={`${item.path}`}
                                        className='block mt-4 text-green-500 hover:text-green-700'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        {item.name}
                                    </a>
                                    <button onClick={()=>remove(item._id)}>
                                        Delete
                                    </button>
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

export default ChatBox;
