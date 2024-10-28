import React from 'react'
import { FaEnvelope ,FaPhone } from "react-icons/fa6";
const Info = () => {
  return (
    <div className='bg-pink-400 font-bold text-white items-center flex justify-center w-full h-16 font-body'>
        <span className='text-sm  sm:space-x-11 sm:flex sm:justify-between '>
            <p className='flex items-center justify-center hover:underline cursor-pointer'> <span className='mr-2'><FaEnvelope/></span>newmetrospaansalon@gmail.com</p>
            <p className='flex items-center justify-center '> <span className='mr-2'><FaPhone /></span> <span className='hover:underline cursor-pointer'>0731-19941609</span> <span className='ml-2 hover:underline cursor-pointer'>74407404919</span></p>
        </span>
    </div>
  )
}

export default Info