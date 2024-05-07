import React, { useEffect } from "react";
import { Avatar, List } from "antd";
import { getChats } from "../../service/api";
import { useState } from "react";

const Chats = () => {
    const [chatData, setChatData] = useState();
    const fetchData = async () => {
        const data = await getChats();
        if (data) {
            setChatData(data);
        }
        console.log(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='grid grid-cols-2'>
            <div className='p-10'>
                <List
                    itemLayout='horizontal'
                    dataSource={chatData}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={
                                    <Avatar
                                        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                                    />
                                }
                                title={
                                    <a href='https://ant.design'>
                                        {item.username}
                                    </a>
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>
            <div className='p-10'>Detials</div>
        </div>
    );
};

export default Chats;
