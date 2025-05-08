import axios from 'axios';
import { store } from '../store';

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const httpService = axios.create({
  baseURL: baseUrl,
  timeout: 30000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

httpService.interceptors.request.use(
  (config) => {
    const token = store.getters['oauth/accessToken'];
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);


export { httpService }; 