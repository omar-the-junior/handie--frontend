import { Link } from 'react-router-dom';
import Button from './Button';
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

function Navbar() {
  const [isloggedin, setisloggedin] = useState(false);
  const [isdropdown, setisdropdown] = useState(false);
  const [isseller, setisseller] = useState(false); //get from seller page data
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggoledropdown = () => {
    setisdropdown(!isdropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between w-full p-5 border-b-2 border-yellow-500">
      <Link to="/" className="flex-shrink-0">
        <img src="/images/logo-horizontal.svg" className="w-40" alt="logo" />
      </Link>

      {/* Hamburger Menu for Small Screens */}
      <div className="block lg:hidden">
        <button onClick={toggleMobileMenu}>
          <Icon icon="ci:menu-alt-02" width="40" height="40" className="text-black" />
        </button>
      </div>

      {/* Desktop Menu */}
      <ul
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row lg:space-x-10 space-y-4 lg:space-y-0 text-center lg:text-left absolute lg:relative top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none z-50`}
      >
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

      {/* User Actions (Login/Dropdown) */}
      <div className="flex items-center space-x-4">
        {isseller && isloggedin ? (
          <img src="/sell.svg" alt="Sell" />
        ) : (
          <div onClick={() => setisseller(!isseller)}>
            <Button size="small" variant="solid" color="primary" className="w-24">
              Sell
            </Button>
          </div>
        )}

        {isloggedin ? (
          <>
            {/* Profile Dropdown */}
            <Icon
              icon="iconamoon:profile-circle"
              width="64"
              height="64"
              className="h-10 w-10 rounded-full text-primary"
              onClick={toggoledropdown}
            />

            {isdropdown && (
              <div
                className="flex mt-2 bg-white shadow-lg rounded-lg dropdown"
                style={{
                  padding: '16px',
                  border: '1px solid #E8E8E8',
                  zIndex: '1000',
                  backgroundColor: '#F6F0E4',
                }}
              >
                <ul className="flex flex-col space-y-4">
                  <li className="flex items-center space-x-2">
                    <img src="/shopping_cart.svg" alt="Wishlist Icon" className="w-6 h-6" />
                    <span className="font-semibold text-black">Wishlist</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img src="/wishlist.svg" alt="Shopping Cart Icon" className="w-6 h-6" />
                    <span className="font-semibold text-black">Shopping cart</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img src="/profile.svg" alt="Profile Icon" className="w-6 h-6" />
                    <span className="font-semibold text-black">Profile</span>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div onClick={() => setisloggedin(!isloggedin)}>
            <Button size="small" variant="outline" color="primary" className="w-24">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
