import axios from 'axios';

const AppAPI = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPage = (path) => AppAPI.get(`/page${path}`);
export const downloadComponent = (path) => AppAPI.get(`/download${path}`);