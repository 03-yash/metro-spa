import React, { useState } from "react";
import { FaBars, FaRegCircleXmark } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import icon from "../assets/icon.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  const scrollToForm = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToFormField();
      }, 500);
    } else {
      scrollToFormField();
    }
  };

  const scrollToFormField = () => {
    const formElement = document.getElementById("form-field");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to navigate to the services page
 

  return (
    <>
      <nav className="w-full h-16 flex justify-between items-center px-4 relative bg-white shadow-lg">
       <Link to={"/"}>
       <img
          className="w-16 h-14 border border-red-100"
          src={icon}
          alt="Logo"
        /></Link>
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation Menu */}
          <ul className="hidden sm:flex items-center text-sm font-bold text-gray-700 space-x-6 font-highlight">
            <li className="hover:text-pink-400 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-400 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-pink-400 cursor-pointer">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-pink-400 cursor-pointer">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-pink-400 cursor-pointer">
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li
              className="hover:text-pink-400 cursor-pointer"
              onClick={scrollToForm}
            >
              Contacts
            </li>
          </ul>

         
          <a
            href="https://wa.me/+917440744919?text=Hello%2C%20I%20want%20to%20make%20a%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="w-24 h-10 border-2 rounded-md border-pink-400 text-sm text-pink-400 bg-pink-50 hover:bg-pink-100 transition flex items-center justify-center font-body"
          >
            Book Now
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="sm:hidden text-2xl focus:outline-none text-pink-400 transition-all"
            onClick={toggleSidebar}
          >
            {isOpen ? <FaRegCircleXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Sidebar Menu */}
        {isOpen && (
          <ul className="flex flex-col absolute right-0 top-16 text-xs text-pink-400 border-l-2 border-pink-300 bg-white w-40 h-auto shadow-md sm:hidden z-20 p-4 space-y-3 font-highlight">
            <li className="hover:text-pink-500 cursor-pointer">
              <Link to="/" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li className="hover:text-pink-500 cursor-pointer">
              <Link to="/about" onClick={toggleSidebar}>
                About
              </Link>
            </li>
            <li className="hover:text-pink-500 cursor-pointer">
              <Link to="/services" onClick={toggleSidebar}>
                Services
              </Link>
            </li>
            <li className="hover:text-pink-500 cursor-pointer">
              <Link to="/gallery" onClick={toggleSidebar}>
                Gallery
              </Link>
            </li>
            <li className="hover:text-pink-500 cursor-pointer">
              <Link to="/testimonial" onClick={toggleSidebar}>
                Testimonial
              </Link>
            </li>
            <li
              className="hover:text-pink-500 cursor-pointer font-body"
              onClick={() => {
                scrollToForm();
                toggleSidebar(); // Close sidebar after navigation
              }}
            >
              Contacts
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
