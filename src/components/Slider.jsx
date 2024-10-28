import React, { useEffect, useRef } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import Link
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";

const MyCarousel = () => {
  const intervalRef = useRef(null);
  const carouselRef = useRef(); // Create a ref to hold CarouselProvider

  useEffect(() => {
    // Set interval for auto-scrolling
    intervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.nextSlide(); // Call nextSlide directly
      }
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(intervalRef.current); // Clear interval on unmount
    };
  }, []);

  return (
    <CarouselProvider
      ref={carouselRef} // Set the ref to the CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      className="text-black w-full h-full bg-red-50 relative"
    >
      <Slider className="w-full h-full">
        <Slide
          index={0}
          style={{ backgroundImage: `url(${im1})` }}
          className="bg-no-repeat bg-cover bg-center relative"
        >
          <div className="info absolute top-[15%] sm:top-[8%] px-2 text-white flex flex-col lg:ml-40 ">
            <div className="text ml-8">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-heading">
                New Metro Spa & Salon
              </h1>
              <p className="text-sm sm:text-base lg:text-lg mt-2 font-highlight">
                Where Luxury Meets Nature to Create a Blissful Escape for Your
                Mind, Body, and Spirit.
              </p>
            </div>
            <div className="buttons-div flex flex-col items-center sm:flex-row sm:ml-8 ml-4 mt-2 font-bold text-base font-body">
              <Link to="/services" className="relative mt-5 w-48 h-10 flex items-center justify-center font-bold text-pink-500 border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out overflow-hidden group">
                <span className="absolute inset-0 bg-pink-500 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10">VIEW SERVICES</span>
              </Link>

              <Link to="/about" className="w-32 h-10 mt-5 sm:ml-12 flex items-center justify-center bg-transparent text-white border-2 hover:bg-pink-500 hover:text-white transition duration-300">
                About Us
              </Link>
            </div>
          </div>
        </Slide>
        <Slide
          index={1}
          style={{ backgroundImage: `url(${im2})` }}
          className="bg-no-repeat bg-cover bg-center"
        >
          <div className="info absolute top-[15%] sm:top-[8%] px-2 text-white flex flex-col lg:ml-40 ">
            <div className="text ml-8">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-heading">
                New Metro Spa & Salon
              </h1>
              <p className="text-sm sm:text-base lg:text-lg mt-2 font-highlight ">
                Where Luxury Meets Nature to Create a Blissful Escape for Your
                Mind, Body, and Spirit.
              </p>
            </div>
            <div className="buttons-div flex flex-col items-center sm:flex-row sm:ml-8 ml-4 mt-2 font-bold text-base font-body">
              <Link to="/services" className="relative mt-5 w-48 h-10 flex items-center justify-center font-bold text-pink-500 border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out overflow-hidden group">
                <span className="absolute inset-0 bg-pink-500 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10">VIEW SERVICES</span>
              </Link>
              <Link to="/about" className="w-32 h-10 mt-5 sm:ml-12 flex items-center justify-center bg-transparent text-white border-2 hover:bg-pink-500 hover:text-white transition duration-300">
                About Us
              </Link>
            </div>
          </div>
        </Slide>
        <Slide
          index={2}
          style={{ backgroundImage: `url(${im3})` }}
          className="bg-no-repeat bg-cover bg-center"
        >
          <div className="info absolute top-[15%] sm:top-[8%] px-2 text-white flex flex-col lg:ml-40 ">
            <div className="text ml-8">
              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold font-heading">
                New Metro Spa & Salon
              </h1>
              <p className="text-sm sm:text-base lg:text-lg mt-2 font-highlight">
                Where Luxury Meets Nature to Create a Blissful Escape for Your
                Mind, Body, and Spirit.
              </p>
            </div>
            <div className="buttons-div flex flex-col items-center sm:flex-row sm:ml-8 ml-4 mt-2 font-bold text-base font-body">
              <Link to="/services" className="relative mt-5 w-48 h-10 flex items-center justify-center font-bold text-pink-500 border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all duration-300 ease-in-out overflow-hidden group">
                <span className="absolute inset-0 bg-pink-500 transition-all duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10">VIEW SERVICES</span>
              </Link>
              <Link to="/about" className="w-32 h-10 mt-5 sm:ml-12 flex items-center justify-center bg-transparent text-white border-2 hover:bg-pink-500 hover:text-white transition duration-300">
                About Us
              </Link>
            </div>
          </div>
        </Slide>
      </Slider>
      <div className="buttons absolute top-1/2 transform -translate-y-1/2 flex w-full items-center justify-between px-2">
        <ButtonBack className="hidden sm:flex ml-12 w-20 h-12 outline-none text-2xl sm:text-4xl bg-none text-white/40 hover:text-white/70 transition duration-300">
          <FaCircleArrowLeft />
        </ButtonBack>
        <ButtonNext className="hidden sm:flex w-20 h-12 outline-none text-2xl sm:text-4xl bg-none text-white/40 hover:text-white/70 transition duration-300">
          <FaCircleArrowRight />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default MyCarousel;
