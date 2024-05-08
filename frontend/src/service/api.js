import axios from "axios";

const API_URI = "http://localhost:5000";

// Uploads a file to the server
export const uploadFile = async (data) => {
    try {
        const res = await axios.post(`${API_URI}/upload`, data);
        return res.data;
    } catch (error) {
        console.log("Error while calling the upload API ", error.message);
    }
};

// Deletes a file from the server
export const deleteFile = async (fileId) => {
    try {
        const res = await axios.get(`${API_URI}/delete`, {
            params: { fileId },
        });
        return res.data;
    } catch (error) {
        console.log("Error while calling the delete API ", error.message);
    }
};

// function to login user
export const loginUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URI}/login`, userData);
        return res.data;
    } catch (error) {
        console.log("Error while calling the login API ", error.message);
    }
};

// function to signup user
export const signupUser = async (userData) => {
    try {
        const res = await axios.post(`${API_URI}/register`, userData);
        return res.data;
    } catch (error) {
        console.log("Error while calling the signup API ", error.message);
    }
};

// function to get the users
export const getUsers = async () => {
    try {
        const res = await axios.post(`${API_URI}/getUsers`);
        return res.data;
    } catch (error) {
        console.log("Error while calling the chats API ", error.message);
    }
};

// function to get the documents
export const getDocs = async (senderId, recieverId) => {
    try {
        const res = await axios.get(`${API_URI}/getDocs`, {
            params: { recieverId, senderId },
        });
        return res.data;
    } catch (error) {
        console.log("Error while calling the docs API ", error.message);
    }
};
