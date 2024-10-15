import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RootState, AppDispatch } from '../store/store';
import { refreshToken } from '../store/authSlice';

export default function ProtectedRoute() {
  const { isAuthenticated, accessToken } = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!accessToken && !isAuthenticated) {
      dispatch(refreshToken());
    }
  }, [dispatch, accessToken, isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
