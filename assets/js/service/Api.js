import axios from 'axios';


const AppAPI = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPage = (path) => AppAPI.get(`/api/page${path}`);
export const downloadComponent = (path) => AppAPI.get(`/download${path}`);



export const fetchUser = () => AppAPI.get(`/api/is-authenticated`);
export const login = (userData) => AppAPI.post('/login', userData);
export const logout = () => AppAPI.post('/logout');