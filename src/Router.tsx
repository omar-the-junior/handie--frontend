import { createBrowserRouter } from 'react-router-dom';
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
import BecomeSeller from './routes/BecomeSeller';
import SingleProduct from './routes/SingleProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
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
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'profile',
        element: <Userprofile />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'become-seller',
        element: <BecomeSeller />,
      },
      {
        path: 'singleproduct',
        element: <SingleProduct />,
      },
    ],
  },
]);
