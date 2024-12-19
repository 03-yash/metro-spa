import React from 'react'
import { FaAnglesUp,FaPhone, FaLocationDot, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative w-full mt-12">
    <hr className="border-4 border-pink-400 bg-pink-400 mt-2  w-full" />
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-pink-600 text-xl text-white px-4 py-4 rounded-full font-bold"
    >
    <FaAnglesUp/>
    </button>


    <div className="rest pb-5">
        <div className="info flex flex-col items-start justify-start space-y-7 mt-12 pl-4 text-gray-700 font-highlight">
            <h3 className='text-2xl sm:4xl lg:text-6xl font-heading font-bold'>Reach Us</h3>
            <p className='flex items-start '><FaLocationDot className='mt-2 text-2xl text-pink-500 sm:mt-0'/><span className='ml-2'> Navin Photocopy 1st Floor scheme No. 54 Vijay Nagar, Indore, Madhya Pradesh.</span></p>
            <p className='flex items-center justify-center '> <span className='mr-2'><FaPhone className=' text-pink-500' /></span> <span className='hover:underline cursor-pointer'>0731-19941609</span> <span className='ml-2 hover:underline cursor-pointer'>7440744919</span></p>
            
            <p className='flex'><FaEnvelope className='mt-1  text-pink-500'/> <span className='ml-2'>newmetrospaansalon@gmail.com</span></p>
        </div>

   
    </div>

  </div>
  
  )
}

export default Footer