export interface User {
  id: string;
  email: string;
  name: string;
  userType: 'SELLER' | 'BUYER';
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

export interface RefreshResponse {
  user: User;
  accessToken: string;
}
