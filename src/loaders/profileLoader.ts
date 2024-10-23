import { LoaderFunctionArgs } from 'react-router-dom';
import { fetchData } from '../api/services.api';
import protectedLoader from './protectedLoader';

type ProfileLoaderResponse =
  | {
      status: 'success';
      data: {
        user: {
          id: number;
          email: string;
          name: string;
          phone: string;
          userType: string;
        };
      };
      message: string;
    }
  | {
      status: 'error';
      error: string;
      errorCode: 'AUTHENTICATION_ERROR';
      message: string;
    }
  | {
      status: 'error';
      error: string;
      errorCode: 'NOT_FOUND_ERROR';
      message: string;
    };

async function profileLoader({ request }: LoaderFunctionArgs) {
  const protectedLoaderResponse = await protectedLoader({
    request,
    params: {},
  });

  if (protectedLoaderResponse === null) {
    const userData = await fetchData<ProfileLoaderResponse>('api/user/profile');

    if (userData.status === 'success') {
      return { user: userData.data.user };
    } else {
      throw new Error(userData.message);
    }
  }
  return protectedLoaderResponse;
}

export default profileLoader;
