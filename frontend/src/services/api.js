import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend URL

export const getWelcomeMessage = async () => {
    try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching welcome message:", error);
        return { message: "Error connecting to backend" };
    }
};
