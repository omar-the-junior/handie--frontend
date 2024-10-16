import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthState, LoginCredentials } from '../types/auth';
import * as authApi from '../api/authApi';
import Cookies from 'js-cookie';

const initialState: AuthState = {
  user: null,
  accessToken: Cookies.get('accessToken') || null,
  isAuthenticated: !!Cookies.get('accessToken'),
  isLoading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authApi.login(credentials);
      Cookies.set('accessToken', response.accessToken, { expires: 7 }); // Set cookie to expire in 7 days
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await authApi.logout();
  Cookies.remove('accessToken');
});

export const refreshToken = createAsyncThunk('auth/refreshToken', async () => {
  const response = await authApi.refreshToken();
  Cookies.set('accessToken', response.accessToken, { expires: 7 }); // Set cookie to expire in 7 days
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
      });
  },
});

export const { clearError, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
