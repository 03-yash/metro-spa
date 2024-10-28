import React from "react";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <>
      <div className="mt-20 mb-16 sm:mb-0 sm:mt-10 flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-pink-200">
        <div className="max-w-4xl w-full rounded-lg overflow-hidden shadow-xl bg-white transform transition-transform duration-300 hover:scale-105 flex flex-col sm:flex-row border border-pink-200">
          
          {/* Image Section */}
          <div className="w-full sm:w-1/2 relative overflow-hidden">
            <img
              className="w-full h-auto sm:h-full object-cover transform hover:scale-105 transition-all duration-500"
              src={logo}
              alt="Brand Logo"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-1/2 p-6 flex flex-col justify-center text-center bg-gradient-to-br from-pink-50 via-white to-white">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-pink-600 mb-4 tracking-wide font-heading">
              Welcome to New Metro Spa
            </h1>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 font-highlight">
              At New Metro Spa, we specialize in offering a luxurious and
              hygienic environment where relaxation meets rejuvenation. Our
              signature bat therapy is designed to provide a unique, soothing
              experience, tailored to relieve stress and promote wellness. Step
              into a world of serenity and let us elevate your spa experience to
              new heights.
            </p>

            {/* Contact Us Button */}
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bold py-2 px-8 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-lg font-body"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
