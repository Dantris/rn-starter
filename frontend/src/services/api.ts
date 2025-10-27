import axios from 'axios';
import { API_BASE_URL } from '../constants/config';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add auth token if exists
        // const token = await getToken();
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally
        console.error('API Error:', error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;