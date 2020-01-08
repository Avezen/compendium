import axios from 'axios';
import { storage } from './Storage';


const AppAPI = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchPage = (path) => AppAPI.get(`/api/page${path}`);
export const fetchUser = (path) => AppAPI.get(`/api/is-authenticated`);
export const downloadComponent = (path) => AppAPI.get(`/download${path}`);






const SESSION_TOKEN = 'SESSION_TOKEN';

export const isAuthenticated = () => !!storage.get(SESSION_TOKEN);

export const setSessionToken = (token) =>
    storage.setObject(SESSION_TOKEN, token);

export const getSessionToken = () => storage.getObject(SESSION_TOKEN);

export const removeSessionToken = () => storage.delete(SESSION_TOKEN);

export const login = (userData) => AppAPI.post('/login', userData);

export const logout = () =>
    AppAPI.post('/logout').then((response) => {
        removeSessionToken();
        return response;
    });