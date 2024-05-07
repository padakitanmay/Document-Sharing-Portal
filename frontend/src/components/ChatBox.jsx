import React, { useEffect } from "react";
import Upload from "./Upload";
import { Avatar } from "antd";
import { useAuth } from "../contexts/authContext";
import { getDocs } from "../service/api";
import { useState } from "react";

const ChatBox = ({ data }) => {
    const [docs, setDocs] = useState([]);
    const [auth] = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            if (data && auth) {
                const datas = await getDocs(auth.user._id, data?._id);
                setDocs(datas);
            }
        };
        fetchData();
    }, []);
    console.log(docs);
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
            <div className='h-auto'>
                {docs.files?.length > 0 &&
                    docs.files?.map((item) => {
                        return <div key={item._id}>Sent By{item.sentBy}</div>;
                    })}
            </div>
            <div className=' p-3 flex justify-center bg-blue-200 rounded-lg'>
                <Upload data={data} />
            </div>
        </div>
    );
};

export default ChatBox;
