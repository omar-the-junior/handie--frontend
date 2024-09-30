import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Root() {
  return (
    <>
      <Navbar className="sticky left-0 top-0 bg-white" />
      <main className="py-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
