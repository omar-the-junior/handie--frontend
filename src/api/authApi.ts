import axios from 'axios';
import { LoginCredentials, AuthResponse, RefreshResponse } from '../types/auth';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API || 'http://localhost:3000',
  withCredentials: true, // This allows the API to set cookies
});

export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/logout');
};

export const refreshToken = async (): Promise<RefreshResponse> => {
  const response = await api.post<RefreshResponse>('/auth/refresh-token');
  return response.data;
};

// Interceptor to handle token refresh
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
