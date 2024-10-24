import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from './routes/Home';
import Shop from './routes/Shop';
import About from './routes/About';
import Contact from './routes/Contact';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import Login from './routes/Login';
import Signup from './routes/Signup';
import Checkout from './routes/Checkout';
import Userprofile from './routes/Userprofile';
import Cart from './routes/Cart';

import Wishlist from './routes/Wishlist';

import BecomeSeller from './routes/BecomeSeller';
import { store } from './store/store';
import { logout, refreshToken } from './store/authSlice';
import authLoader from './loaders/authLoader';
import protectedLoader from './loaders/protectedLoader';
import { RefreshResponse } from './types/auth';
import profileLoader from './loaders/profileLoader';
import { fetchData } from './api/services.api';
import { Product, SuccessResponse } from './types/response.types';

export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    async loader() {
      // refresh access token once the application starts
      const responsePayload = (await store.dispatch(refreshToken()))
        .payload as RefreshResponse | null;

      if (responsePayload) {
        const { user } = responsePayload;
        return { user, isAuthenticated: !!user };
      }

      return { user: null, isAuthenticated: false };
    },
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
        async loader({ request, params }) {
          console.log('hello from loader');
          const { data } = await fetchData<SuccessResponse<Product>>(
            '/api/products/',
            {
              signal: request.signal,
              params: params,
            },
          );

          console.log(data);

          return data;
        },
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'login',
        loader: authLoader,
        element: <Login />,
      },
      {
        path: 'signup',
        loader: authLoader,
        element: <Signup />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        id: 'profile',
        path: 'profile',
        loader: profileLoader,
        element: <Userprofile />,
      },
      {
        path: 'cart',
        loader: protectedLoader,
        element: <Cart />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,

        path: 'become-seller',
        element: <BecomeSeller />,
      },
    ],
  },
  {
    path: '/logout',
    async action() {
      await store.dispatch(logout());
      return redirect('/');
    },
  },
]);
