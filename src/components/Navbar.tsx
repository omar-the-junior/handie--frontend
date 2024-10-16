import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import DropdownMenu from './DropdownMenu';
import { twMerge } from 'tailwind-merge';
import useClickOutside from '../hooks/useClickOutside';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';

function Navbar({ className }: { className?: string }) {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const isSeller = false;

  // const [isSeller, setIsSeller] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={twMerge(
        'z-40 w-full border-b-2 border-primary py-5',
        className,
      )}
    >
      <div className="container flex items-center justify-between">
        {isMenuOpen && (
          <Sidebar
            toggleMobileMenu={toggleMobileMenu}
            isLoggedIn={isAuthenticated}
            isSeller={isSeller}
          />
        )}
        <Logo />
        <DesktopMenu />
        <UserActions
          isLoggedIn={isAuthenticated}
          isSeller={isSeller}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </nav>
  );
}

function Sidebar({
  toggleMobileMenu,
  isLoggedIn,
  isSeller,
}: {
  toggleMobileMenu: () => void;
  isLoggedIn: boolean;
  isSeller: boolean;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside(sidebarRef, () => {
    toggleMobileMenu();
  });
  return (
    <aside
      ref={sidebarRef}
      className="fixed left-0 top-0 z-50 h-full w-[250px] border-r-2 border-primary bg-white p-5 shadow-lg"
    >
      <button onClick={toggleMobileMenu} className="absolute right-4 top-4">
        <Icon
          icon="ci:close-big"
          width="30"
          height="30"
          className="text-black"
        />
      </button>
      <ul className="mt-10 flex flex-col items-start space-y-4">
        <MenuItem to="/" label="Home" />
        <MenuItem to="/shop" label="Shop" />
        <MenuItem to="/about" label="About" />
        <MenuItem to="/contact" label="Contact" />
      </ul>

      {isSeller && isLoggedIn ? (
        <button className="btn btn-sm mt-5 flex w-full items-center justify-center gap-5">
          <Icon icon="clarity:store-solid" className="size-8" />
          <span className="text-xl-r font-medium">My Store</span>
        </button>
      ) : (
        <Link to="/become-seller" className="btn mt-5 w-full">
          Sell
        </Link>
      )}
    </aside>
  );
}

function Logo() {
  return (
    <Link to="/">
      <img
        src="/images/logo-horizontal.svg"
        className="w-40 min-w-28"
        alt="logo"
      />
    </Link>
  );
}

function DesktopMenu() {
  return (
    <ul className="hidden items-center space-x-10 lg:flex">
      <MenuItem to="/" label="Home" />
      <MenuItem to="/shop" label="Shop" />
      <MenuItem to="/about" label="About" />
      <MenuItem to="/contact" label="Contact" />
    </ul>
  );
}

function MenuItem({ to, label }: { to: string; label: string }) {
  return (
    <li className="text-base-r font-semibold text-charcoal">
      <Link to={to}>{label}</Link>
    </li>
  );
}

function UserActions({
  isLoggedIn,
  isSeller,
  toggleMobileMenu,
}: {
  isLoggedIn: boolean;
  isSeller: boolean;
  toggleMobileMenu: () => void;
}) {
  return (
    <div className="flex items-center space-x-4">
      {isSeller && isLoggedIn ? (
        <button className="hidden lg:block">
          <Icon icon="clarity:store-solid" className="size-10 text-primary" />
        </button>
      ) : (
        <Link to="/become-seller" className="btn hidden lg:block">
          Sell
        </Link>
      )}
      {isLoggedIn ? (
        <DropdownMenu className="h-10">
          <DropdownMenu.Trigger>
            <button className="h-10">
              <Icon
                icon="iconamoon:profile-circle"
                className="size-10 rounded-full text-primary"
              />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="right-0 h-max gap-2 bg-secondary p-4">
            <DropdownMenuItem
              to="/cart"
              iconSrc="/icons/shopping_cart.svg"
              label="Shopping Cart"
            />
            <DropdownMenuItem
              to="/wishlist"
              iconSrc="/icons/wishlist.svg"
              label="Wishlist"
            />
            <DropdownMenuItem
              to="/profile"
              iconSrc="/icons/profile.svg"
              label="Profile"
            />
          </DropdownMenu.Content>
        </DropdownMenu>
      ) : (
        <Link to="/login" className="btn btn-outline btn-sm lg:btn-md">
          Login
        </Link>
      )}
      <button onClick={toggleMobileMenu} className="lg:hidden">
        <Icon
          icon="ic:round-menu"
          width="40"
          height="40"
          className="text-primary"
        />
      </button>
    </div>
  );
}

function DropdownMenuItem({
  to,
  iconSrc,
  label,
}: {
  to: string;
  iconSrc: string;
  label: string;
}) {
  return (
    <DropdownMenu.Item className="w-full gap-4">
      <Link to={to} className="flex w-full gap-4">
        <img src={iconSrc} alt={`${label} Icon`} className="h-6 w-6" />
        <span className="text-black font-semibold">{label}</span>
      </Link>
    </DropdownMenu.Item>
  );
}

export default Navbar;
