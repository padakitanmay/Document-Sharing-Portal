import React, { useEffect } from "react";
import { Avatar, List } from "antd";
import { getChats } from "../service/api";
import { useState } from "react";
import ChatBox from "./ChatBox";
import { useAuth } from "../contexts/authContext";

const Chats = () => {
    const [auth] = useAuth();
    const [chatData, setChatData] = useState();
    const [comData, setComData] = useState(null);
    const fetchData = async () => {
        const data = await getChats();
        if (data) setChatData(data);
    };
    useEffect(() => {
        fetchData();
    }, [auth]);
    return (
        <div className='grid grid-cols-2'>
            <div className='p-10'>
                <List
                    itemLayout='horizontal'
                    dataSource={chatData}
                    renderItem={(item, index) =>
                        item.username != auth.user.username && (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar
                                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                                        />
                                    }
                                    title={
                                        <span onClick={() => setComData(item)}>
                                            {item.username}
                                        </span>
                                    }
                                />
                            </List.Item>
                        )
                    }
                />
            </div>
            <div className='p-10'>{comData && <ChatBox data={comData} />}</div>
        </div>
    );
};

export default Chats;
