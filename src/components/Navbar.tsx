import { Link } from 'react-router-dom';
import Button from './Button';
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

function Navbar() {
  const [IsLoggedIn, SetIsLoggedIn] = useState(false);
  const [IsDropDown, SetIsDropDown] = useState(false);
  const [IsSeller, SetIsSeller] = useState(false); //get from seller page data
  const [IsMenuOpen, SetIsMenuOpen] = useState(false);
  const Toggoledropdown = () => {
    SetIsDropDown(!IsDropDown);
  };
  const toggleMobileMenu = () => {
    SetIsMenuOpen(!IsMenuOpen);
    if (IsMenuOpen) {
      SetIsDropDown(false);
    }
  };

  return (
    <nav
      className="flex items-center justify-flex items-center justify-between w-full py-5 px-20 border-b-2 border-[#B88E2F]"
    >

      <div className="block lg:hidden">
        <button onClick={toggleMobileMenu}>
          <Icon icon="ci:menu-alt-02" width="40" height="40" className="text-black absolute top-[30px] right-[20px]"
          />
        </button>
      </div>





      {IsMenuOpen && (
        <div
          className="fixed top-0 right-0 h-full bg-white shadow-lg z-50 w-[250px] p-5 border-l-2 border-[#B88E2F]"
        >
          <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
            <Icon icon="ci:close-big" width="30" height="30" className="text-black" />
          </button>

          {/* Arrange menu items in a column */}
          <ul className="flex flex-col items-start space-y-4 mt-10">
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

          {/* Arrange sell and login buttons in a column */}
          <div className="flex flex-col items-start space-y-4 mt-8">
            {IsSeller && IsLoggedIn ? (
              <img src="/sell.svg" alt="Sell" />
            ) : (
              <div onClick={() => SetIsSeller(!IsSeller)}>
                <Button size="small" variant="solid" color="primary" className="w-24">
                  Sell
                </Button>
              </div>
            )}

            {IsLoggedIn ? (
              <>
                <Icon
                  icon="iconamoon:profile-circle"
                  width="64"
                  height="64"
                  className="h-10 w-10 rounded-full text-primary"
                  onClick={Toggoledropdown}
                />

                {IsDropDown && (
                  <div
                    className="flex flex-col mt-2 bg-[#F6F0E4] shadow-lg rounded-lg border border-[#E8E8E8] z-[1000] absolute right-[10px] top-[100px] p-4 dropdown"
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
              <div onClick={() => SetIsLoggedIn(!IsLoggedIn)}>
                <Button size="small" variant="outline" color="primary" className="w-24">
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>
      )}






      <Link to="/" className="flex-shrink-0">
        <img src="/images/logo-horizontal.svg" className="w-40" alt="logo" />
      </Link>

      {/* <div className={`flex-grow ${IsMenuOpen ? 'hidden lg:flex' : 'flex'}`}> */}
      <ul className="flex items-center space-x-10">
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
        {IsSeller && IsLoggedIn ? (
          <img src="/sell.svg" alt="Sell" />
        ) : (
          <div onClick={() => SetIsSeller(!IsSeller)}>
            <Button size="small" variant="solid" color="primary" className="w-24">
              Sell
            </Button>
          </div>
        )}

        {IsLoggedIn ? (
          <>
            {/* Wrap the icon and dropdown must in fragment */}
            <Icon
              icon="iconamoon:profile-circle"
              width="64"
              height="64"
              className="h-10 w-10 rounded-full text-primary"
              onClick={Toggoledropdown}
            />

            {IsDropDown && (
              <div
                className="flex mt-2 bg-[#F6F0E4] shadow-lg rounded-lg border border-[#E8E8E8] z-[1000] absolute right-[10px] top-[100px] p-4 dropdown"
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
          <div onClick={() => SetIsLoggedIn(!IsLoggedIn)}>
            <Button size="small" variant="outline" color="primary" className="w-24">
              Login
            </Button>
          </div>
        )}
      </div>

    </nav >
  );
}

export default Navbar;
