import { Link } from 'react-router-dom';
import Button from './Button';
import { useState } from 'react';
function Navbar() {
  const [isloggedin, setisloggedin] = useState(true);
  return (
    <nav
      className="flex items-center justify-between"
      style={{
        width: '100%',
        padding: '20px 80px',
        borderBottom: '2px solid #B88E2F',
      }}
    >
      <Link to="/" className="flex-shrink-0">
        <img src="/images/logo-horizontal.svg" className="w-40" alt="logo" />
      </Link>
      <ul className="flex space-x-10 items-center">
        <li className="text-sm font-semibold leading-normal text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm font-semibold leading-normal text-black">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="text-sm font-semibold leading-normal text-black">
          <Link to="/about">About</Link>
        </li>
        <li className="text-sm font-semibold leading-normal text-black">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
      
        <Button size="small" variant="solid" color="primary" className="w-24">
          Sell
        </Button>

        {isloggedin ? (
          <img
            src="public/images/profile-user-svgrepo-com(1).svg" // User icon
           className="w-10 h-10 rounded-full"
          />
        ) : (
          
          <Button size="small" variant="outline" color="primary" className="w-24">
            Login
          </Button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
