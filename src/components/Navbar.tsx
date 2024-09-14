import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-5">
      <Link to="/" className="flex-shrink-0">
        <img src="/images/logo-horizontal.svg" className="w-40" alt="logo" />
      </Link>
      <ul className="flex space-x-4">
        <li className="w-12 text-sm font-semibold leading-normal text-black">
          <Link to="/">Home</Link>
        </li>
        <li className="w-10 text-sm font-semibold leading-normal text-black">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="w-12 text-sm font-semibold leading-normal text-black">
          <Link to="/about">About</Link>
        </li>
        <li className="w-16 text-sm font-semibold leading-normal text-black">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
