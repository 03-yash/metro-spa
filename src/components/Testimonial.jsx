import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icon for ratings
import { Link } from "react-router-dom";

const testimonialsData = [
  {
    name: "Prateek Bhatt",
    rating: 5,
    description:
      "Expert staff.... Professional services... And Rejuvenating Ambience.... Must visit for mental and physical relaxation.",
  },
  {
    name: "Aditi Sharma",
    rating: 4,
    description:
      "A fantastic experience! The atmosphere was calming, and the massage was just what I needed.",
  },
  {
    name: "Rahul Verma",
    rating: 5,
    description:
      "The best spa in town! I always leave feeling rejuvenated and refreshed.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full pb-16 bg-gray-200 text-center mt-10 px-6">
      <h1 className="pt-16 text-4xl text-pink-400 font-bold sm:text-6xl lg:text-9xl font-heading">
        What Our Customers Say
      </h1>
      <div className="tohold w-full sm:flex sm:space-x-4 sm:justify-center mt-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="w-full sm:w-1/3 h-full px-4 mt-12 flex flex-col justify-between bg-white py-8 rounded-lg shadow-lg"
          >
            <div className="flex justify-center mb-4">
              <img
                src={`https://via.placeholder.com/150?text=${testimonial.name.charAt(0)}`} // Placeholder image
                alt={testimonial.name}
                className="w-24 rounded-full h-24 "
              />
            </div>
            <div className="text-section text-gray-600 flex flex-col items-center space-y-2">
              <h3 className="text-lg font-semibold font-heading">{testimonial.name}</h3>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-gray-700 font-highlight">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/testimonial"
         
          className="border-2 border-pink-500 w-40 h-10 font-bold text-white bg-pink-400 hover:bg-pink-500 transition duration-300 flex items-center justify-center z-10 font-body"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default Testimonial;
