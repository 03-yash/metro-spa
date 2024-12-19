import React from "react";
import MyCarousel from "./Slider";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaArrowRightLong, FaArrowLeftLong, FaWhatsapp } from "react-icons/fa6";
import cr3 from "../assets/cr3.jpeg";
import Testimonial from "./Testimonial";
import Form from "./Form";
import Footer from "./Footer";
import Memberships from "./Memberships";
import coconutmassage from "../assets/coconut-oil-massage.jpg";
import milkcream from "../assets/milk-cream-massage.jpg";
import aromatherapymassage from "../assets/aromatherapy-massage.jpg";

const HeroSection = () => {
  return (
    <div className="w-full h-[370px] sm:h-[550px] ">
      <MyCarousel />
      <div className="natural-services mt-14 flex flex-col items-center">
        <div className="heading flex flex-col items-center">
          <h1 className="text-6xl sm:text-8xl text-pink-400 font-semibold font-heading">
            Natural
          </h1>
          <p className="text-xl sm:text-2xl mt-6 font-highlight">SERVICES</p>
        </div>
        <div className="carousal w-full sm:h-[25rem]">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
            className="mt-16 w-full relative "
          >
            <Slider className="w-full p-5 sm:px-14 lg:px-20  ">
              <Slide
                index={0}
                className="flex w-full sm:flex-row border-green-300"
              >
                <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between ">
                  <div className="image-section sm:w-1/2 ">
                    <img src={coconutmassage} alt="" className="sm:w-3/4" />
                  </div>
                  <div className="text-section flex flex-col items-start space-y-3 mt-3 sm:w-1/2 sm:text-2xl">
                    <h3 className="font-bold font-heading">COCONUT OIL MASSAGE</h3>
                    <h5 className="text-pink-500 font-bold font-body">INR 3,000</h5>
                    <p className="text-base font-highlight">
                      Experience the nourishing benefits of our Coconut Oil
                      Massage, which utilizes natural coconut oil to hydrate and
                      rejuvenate the skin.
                    </p>
                    <a
                      href={`https://wa.me/+917440744919?text=${encodeURIComponent(
                        "Hello, I want to make an inquiry about coconut oil massage"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border-2 border-pink-500 w-40 h-10 font-bold text-white bg-pink-400 font-body"
                    >
                      INQUIRY
                    </a>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                {" "}
                <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between">
                  <div className="image-section sm:w-1/2 ml-5">
                    <img src={milkcream} alt="" className="sm:w-3/4" />
                  </div>
                  <div className="text-section flex flex-col items-start space-y-3 mt-3 ml-6 sm:w-1/2 sm:text-2xl">
                    <h3 className="font-bold font-heading">MILK CREAM MASSAGE</h3>
                    <h5 className="text-pink-500 font-bold font-body">INR 3,000</h5>
                    <p className="text-base font-highlight">
                      Indulge in the luxurious Milk Cream Massage, where rich
                      milk cream is applied to nourish and soften your skin.
                    </p>
                    <a
                      href={`https://wa.me/+917440744919?text=${encodeURIComponent(
                        "Hello, I want to make an inquiry about milk cream massage"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border-2 border-pink-500 w-40 h-10 font-bold text-white bg-pink-400 font-body"
                    >
                      INQUIRY
                    </a>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                {" "}
                <div className="flex flex-col sm:flex-row sm:w-full sm:justify-between">
                  <div className="image-section sm:w-1/2 ml-5">
                    <img src={aromatherapymassage} alt="" className="sm:w-3/4" />
                  </div>
                  <div className="text-section flex flex-col items-start space-y-3 mt-3 ml-6 sm:w-1/2 sm:text-2xl">
                    <h3 className="font-bold font-heading">AROMA MASSAGE</h3>
                    <h5 className="text-pink-500 font-bold font-body">INR 2,000</h5>
                    <p className="text-base font-highlight">Revitalize your senses with our Aroma Massage, featuring a blend of essential oils tailored to your needs. </p>
                    <a
                      href={`https://wa.me/+917440744919?text=${encodeURIComponent(
                        "Hello, I want to make an inquiry about aroma massage"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border-2 border-pink-500 w-40 h-10 font-bold text-white bg-pink-400 font-body"
                    >
                      INQUIRY
                    </a>
                  </div>
                </div>
              </Slide>
            </Slider>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2  text-2xl space-x-9 text-pink-500">
              <ButtonBack>
                <FaArrowLeftLong />
              </ButtonBack>
              <ButtonNext>
                <FaArrowRightLong />
              </ButtonNext>
            </span>
          </CarouselProvider>
        </div>
      </div>
      <Testimonial />
      <Memberships/>
      <div className="relative">
        <Form />
        <a
          href={`https://wa.me/+917440744919?text=${encodeURIComponent(
            "Hello, I want to Inquire about your service"
          )}`}
          className="fixed bottom-10 right-10 bg-green-500 p-4 rounded-full shadow-lg transform transition-all hover:scale-110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-white text-4xl" />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
