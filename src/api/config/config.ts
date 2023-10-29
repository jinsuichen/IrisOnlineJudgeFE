import axios from 'axios';
import {LocalStorageKeys} from "../../common/localStorageKeys.ts";

export interface IrisMessage<T> {
    success: boolean;
    message: string;
    data: T;
}

function getAuthToken() {
    const key = LocalStorageKeys.AUTH_TOKEN;
    return localStorage.getItem(key) || '';
}

const api = axios.create({
    baseURL: 'http://localhost:8888/api',
});

api.defaults.headers.common['Authorization'] = `Bearer ${getAuthToken()}`

export default api