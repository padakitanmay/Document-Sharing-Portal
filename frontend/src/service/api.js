import axios from 'axios';

const API_URI = 'http://localhost:8000';

export const uploadFile = async (data) => {
    try {
        const res = await axios.post(`${API_URI}/upload`, data);
        return res.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}