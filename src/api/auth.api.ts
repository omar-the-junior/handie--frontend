import { LoginCredentials, AuthResponse, RefreshResponse } from '../types/auth';
import api from '.';
export const login = async (
  credentials: LoginCredentials,
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', credentials);
  return response.data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};

export const refreshToken = async (): Promise<RefreshResponse> => {
  const response = await api.post<RefreshResponse>('/auth/refresh-token');
  return response.data;
};

// Interceptor to handle token refresh
