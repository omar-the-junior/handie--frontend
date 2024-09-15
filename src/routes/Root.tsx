import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
function Root() {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
    </>
  );
}

export default Root;
