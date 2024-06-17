import React, { useEffect } from "react";
import { Avatar, List } from "antd";
import { getUsers } from "../service/api";
import { useState } from "react";
import Documents from "./Documents";
import { useSelector } from "react-redux";

const Users = () => {
    const auth = useSelector((state) => state.auth);
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [chatData, setChatData] = useState();
    const [comData, setComData] = useState(null);
    const fetchData = async () => {
        const data = await getUsers();
        if (data) setChatData(data);
    };
    useEffect(() => {
        fetchData();
        const data = JSON.parse(localStorage.getItem("auth"));
        if (data) setisLoggedIn(true);
    }, [setComData, setChatData]);
    return (
        <div className='grid grid-cols-2'>
            <div className='p-10'>
                {isLoggedIn ? (
                    <List
                        itemLayout='horizontal'
                        dataSource={chatData}
                        renderItem={(item, index) =>
                            item?.username != auth?.user?.username && (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar
                                                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                                            />
                                        }
                                        title={
                                            <span
                                                onClick={() => setComData(item)}
                                            >
                                                {item?.username}
                                            </span>
                                        }
                                    />
                                </List.Item>
                            )
                        }
                    />
                ) : (
                    <h1 className='text-3xl ml-96 text-center font-bold'>
                        Login First
                    </h1>
                )}
            </div>
            <div className='p-10'>
                {comData && <Documents data={comData} />}
            </div>
        </div>
    );
};

export default Users;
