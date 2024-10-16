import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store';
import { refreshToken } from '../store/authSlice';
import Cookies from 'js-cookie';

export default function ProtectedRoute() {
  const { isAuthenticated, accessToken } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const storedToken = Cookies.get('accessToken');
    if (!storedToken) {
      dispatch(refreshToken());
    }
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      Cookies.set('accessToken', accessToken, { expires: 7 }); // Set cookie to expire in 7 days
    }
  }, [accessToken]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}