import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { refreshToken } from '../store/authSlice';
import { store } from '../store/store';

async function protectedLoader({ request }: LoaderFunctionArgs) {
  const responsePayload = (await store.dispatch(refreshToken())).payload;

  if (!responsePayload) {
    const params = new URLSearchParams();
    params.set('from', new URL(request.url).pathname);
    return redirect('/login?' + params.toString());
  }

  return null;
}

export default protectedLoader;
