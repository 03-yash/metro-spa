import React from 'react';
import Info from './components/Info';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonial from './pages/Testimonial';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <Router>
        <Info />
        <Navbar />
      
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonial" element={<Testimonial />} />
          </Routes>
       
      
     <ToastContainer/>
    </Router>
  );
};

export default App;
