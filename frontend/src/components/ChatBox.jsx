import React from "react";
import Upload from "./Upload";
import { Avatar } from "antd";

const ChatBox = ({ data }) => {
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
            <div className="h-auto">
                <div>Documents</div>
            </div>
            <div className=" p-3 flex justify-center bg-blue-200 rounded-lg">
                <Upload />
            </div>
        </div>
    );
};

export default ChatBox;
