import { redirect } from 'react-router-dom';
import { store } from '../store/store';
import { refreshToken } from '../store/authSlice';

async function authLoader() {
  const responsePayload = (await store.dispatch(refreshToken())).payload;

  if (responsePayload) {
    return redirect('/');
  }

  return null;
}

export default authLoader;
