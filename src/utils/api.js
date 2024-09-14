import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const YOUR_API_KEY = "AIzaSyCPmWbB4a_A4jqLODc-Pv6OUE4u-Rn3NIQ";

export const fetchData = async (url, params) => {
    try {
        const response = await axios.get(`${BASE_URL}/${url}`, {
            params: {
                ...params,
                key: YOUR_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching data:",
            error.response ? error.response.data : error.message
        );
        throw error;
    }
};
