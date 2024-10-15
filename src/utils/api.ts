import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API,
});

export const fetchData = async <T>(endpoint: string, options: AxiosRequestConfig = {}): Promise<T> => {
  try {
    const response = await api.get<T>(endpoint, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async <T, D>(endpoint: string, data: D, options: AxiosRequestConfig = {}): Promise<T> => {
  try {
    const response = await api.post<T>(endpoint, data, options);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};