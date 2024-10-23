import axios from 'axios';
import { refreshToken } from './auth.api';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API || 'http://localhost:5000',
  withCredentials: true, // This allows the API to set cookies
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { accessToken } = await refreshToken();
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default api;
