import React from "react";
import { FaStar } from "react-icons/fa"; // Import star icon for ratings
import Footer from "../components/Footer";

const testimonialsData = [
  {
    name: "Sarita Legha",
    rating: 5,
    description:
      "New Metro spa and salon is a luxurious retreat with a relaxing ambience. They offer great services at a reasonable price. It's the perfect place to pamper yourself",
  },
  {
    name: "Himanshu Rathod",
    rating: 5,
    description:
      "Best spa in Indore! Great Service 👍 Staffs are well knowledgeable",
  },
  {
    name: "Bittu Sen",
    rating: 5,
    description:
      "Very nice and beautiful metro spa. Best service near Vijay Nagar Square.",
  },
  {
    name: "Yashasvi Mehta",
    rating: 5,
    description:
      "Staff nature is very good. Great experience 😀👍",
  },
  {
    name: "Roki Tanwar",
    rating: 5,
    description:
      "Very nice spa, the best spa in Indore. Very beautiful spa with nice staff.",
  },
  {
    name: "Krishna Singh Darbar",
    rating: 5,
    description: "Bhoat badiya kaam hai indore me bhaiya ka 🙏🥰",
  },
  {
    name: "Prateek Bhatt",
    rating: 5,
    description:
      "Expert staff... Professional services... And rejuvenating ambience... Must visit for mental and physical relaxation.",
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
   <>
    <div className="w-full pb-16 bg-gray-200 text-center mt-10 px-6">
      <h1 className="pt-16 text-4xl text-pink-400 font-bold sm:text-6xl lg:text-8xl font-heading">
        What Our Customers Say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col justify-between bg-white py-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <img
                src={testimonial.imageUrl || `https://via.placeholder.com/150?text=${testimonial.name.charAt(0)}`}
                alt={testimonial.name}
                className="w-24 rounded-full h-24 object-cover"
              />
            </div>
            <div className="text-section text-gray-600 flex flex-col items-center space-y-2 px-4">
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
    </div>
    <Footer/>
   </>
  );
};

export default Testimonial;
