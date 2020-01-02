import axios from 'axios';

const AppAPI = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPage = (topic) => AppAPI.get(`/test${topic}`);