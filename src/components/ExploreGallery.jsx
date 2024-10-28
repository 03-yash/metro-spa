import React from 'react'
import gallery1 from "../assets/Gallery/gallery1.jpg"
import gallery2 from "../assets/Gallery/gallery2.jpg"
import gallery3 from "../assets/Gallery/gallery3.jpg"
import gallery4 from "../assets/Gallery/gallery4.jpg"
import gallery5 from "../assets/Gallery/gallery5.jpg"
import gallery6 from "../assets/Gallery/gallery6.jpg"
import gallery7 from "../assets/Gallery/gallery7.jpg"
import gallery9 from "../assets/Gallery/gallery9.jpg"
const ExploreGallery = () => {
  return (
    <div className="w-full   text-center  px-6">
    <h1 className="pt-16 text-6xl text-pink-400 font-bold  sm:text-6xl lg-text-9xl">
      Explore

    </h1>
    <p className='mt-2 text-3xl font-bold '>Our Gallery</p>
    <div className="grid mt-8 grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-4">
  <div className="relative overflow-hidden bg-pink-200">
    <img
      src={gallery1} 
      alt="Image 1"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-300">
    <img
       src={gallery2} 
      alt="Image 2"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-400">
    <img
     src={gallery3} 
      alt="Image 3"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-500">
    <img
        src={gallery4} 
      alt="Image 4"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-600">
    <img
   src={gallery5} 
      alt="Image 5"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-700">
    <img
    src={gallery6} 
      alt="Image 6"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-800">
    <img
        src={gallery7} 
      alt="Image 7"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
  <div className="relative overflow-hidden bg-pink-900">
    <img
         src={gallery9} 
      alt="Image 8"
      className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-115"
    />
  </div>
</div>
    </div>
  )
}

export default ExploreGallery