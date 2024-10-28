import React from "react";
import Footer from "../components/Footer";
import gallery1 from "../assets/Gallery/gallery1.jpg"
import gallery2 from "../assets/Gallery/gallery2.jpg"
import gallery3 from "../assets/Gallery/gallery3.jpg"
import gallery4 from "../assets/Gallery/gallery4.jpg"
import gallery5 from "../assets/Gallery/gallery5.jpg"
import gallery6 from "../assets/Gallery/gallery6.jpg"
import gallery7 from "../assets/Gallery/gallery7.jpg"
import gallery9 from "../assets/Gallery/gallery9.jpg"
import gallery10 from "../assets/Gallery/gallery10.jpg"
import gallery11 from "../assets/Gallery/gallery11.jpg"
import gallery12 from "../assets/Gallery/gallery12.jpg"
import gallery13 from "../assets/Gallery/gallery13.jpg"
import gallery14 from "../assets/Gallery/gallery14.jpg"
import gallery15 from "../assets/Gallery/gallery15.jpg"
import gallery16 from "../assets/Gallery/gallery16.jpg"
import gallery8 from "../assets/Gallery/gallery8.jpg"
const Gallery = () => {
  const images = [
    gallery1,
    gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14, gallery15, gallery16,
  ];

  return (
    <div className="w-full text-center px-6">
     
      <h1 className="pt-16 text-4xl sm:text-6xl text-pink-400 font-bold font-heading">
        Explore
      </h1>
      <p className="mt-2 text-2xl sm:text-3xl font-bold font-highlight">Experience Bliss: A Visual Tour of Our Spa Retreat</p>

      {/* Responsive Image Grid */}
      <div className="grid mt-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-gray-200 h-64"
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
