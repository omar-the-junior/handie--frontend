import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      {/* <h1 className="p-3 pt-4 text-3xl">Welcome to the home page</h1>  */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
