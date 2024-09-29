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
    <nav className="justify-flex flex w-full items-center justify-between border-b-2 border-primary px-20 py-5">
      <div className="block lg:hidden">
        <button onClick={toggleMobileMenu}>
          <Icon
            icon="ci:menu-alt-02"
            width="40"
            height="40"
            className="absolute right-[20px] top-[30px] text-black"
          />
        </button>
      </div>

      {IsMenuOpen && (
        <div className="fixed right-0 top-0 z-50 h-full w-[250px] border-l-2 border-primary bg-white p-5 shadow-lg">
          <button onClick={toggleMobileMenu} className="absolute right-4 top-4">
            <Icon
              icon="ci:close-big"
              width="30"
              height="30"
              className="text-black"
            />
          </button>

          {/* Arrange menu items in a column */}
          <ul className="mt-10 flex flex-col items-start space-y-4">
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
          <div className="mt-8 flex flex-col items-start space-y-4">
            {IsSeller && IsLoggedIn ? (
              <img src="/sell.svg" alt="Sell" />
            ) : (
              <div onClick={() => SetIsSeller(!IsSeller)}>
                <Button
                  size="small"
                  variant="solid"
                  color="primary"
                  className="w-24"
                >
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
                  <div className="dropdown border-neutral absolute right-[10px] top-[100px] z-[1000] mt-2 flex flex-col rounded-lg border bg-secondary p-4 shadow-lg">
                    <ul className="flex flex-col space-y-4">
                      <li className="flex items-center space-x-2">
                        <img
                          src="/shopping_cart.svg"
                          alt="Wishlist Icon"
                          className="h-6 w-6"
                        />
                        <span className="font-semibold text-black">
                          Wishlist
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img
                          src="/wishlist.svg"
                          alt="Shopping Cart Icon"
                          className="h-6 w-6"
                        />
                        <span className="font-semibold text-black">
                          Shopping cart
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <img
                          src="/profile.svg"
                          alt="Profile Icon"
                          className="h-6 w-6"
                        />
                        <span className="font-semibold text-black">
                          Profile
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div onClick={() => SetIsLoggedIn(!IsLoggedIn)}>
                <Button
                  size="small"
                  variant="outline"
                  color="primary"
                  className="w-24"
                >
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
            <Button
              size="small"
              variant="solid"
              color="primary"
              className="w-24"
            >
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
              <div className="dropdown border-neutral absolute right-[10px] top-[100px] z-[1000] mt-2 flex rounded-lg border bg-secondary p-4 shadow-lg">
                <ul className="flex flex-col space-y-4">
                  <li className="flex items-center space-x-2">
                    <img
                      src="/shopping_cart.svg"
                      alt="Wishlist Icon"
                      className="h-6 w-6"
                    />
                    <span className="font-semibold text-black">Wishlist</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src="/wishlist.svg"
                      alt="Shopping Cart Icon"
                      className="h-6 w-6"
                    />
                    <span className="font-semibold text-black">
                      Shopping cart
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <img
                      src="/profile.svg"
                      alt="Profile Icon"
                      className="h-6 w-6"
                    />
                    <span className="font-semibold text-black">Profile</span>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <div onClick={() => SetIsLoggedIn(!IsLoggedIn)}>
            <Button
              size="small"
              variant="outline"
              color="primary"
              className="w-24"
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
