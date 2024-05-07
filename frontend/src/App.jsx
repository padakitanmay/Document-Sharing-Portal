import React, { useState, useEffect, useRef } from "react";
import { uploadFile } from "./service/api";
import Chats from "./components/Pages/Chats";
import Upload from "./components/Upload";

const App = () => {
    return (
        <div>
            <Chats />
            <Upload/>
        </div>
    );
};

export default App;
