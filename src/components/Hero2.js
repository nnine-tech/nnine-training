import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className='bg-[#004AAD] h-auto flex flex-col lg:flex-row'>
        
      <div className='bg-[#004AAD] w-full lg:w-[1000px] flex flex-col justify-center p-5 lg:p-10 mt-2 lg:mt-32'>
        <h1 className='text-[#FFCF59] font-semibold font-Quicksand text-lg md:text-xl'>Best Learning Platform</h1>
        <h1 className='text-[#FFFFFF] text-5xl md:text-5xl lg:text-6xl font-semibold font-Quicksand mt-2'>
          Grow Your Skills
        </h1>
        <h1 className='text-[#FFFFFF] text-5xl md:text-5xl lg:text-5xl font-semibold font-Quicksand mt-2'>
          To Advance Your Career Path
        </h1>
        <h3 className='text-[#DDDDDD] mt-4 font-Quicksand font-medium text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
        <h3 className='text-[#DDDDDD] font-Quicksand font-medium text-sm md:text-base'>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <div className='mt-6 md:mt-10 mb-6 md:mb-10 flex flex-col lg:flex-row gap-3 md:gap-5'>
          <button className='bg-[#FFCF59] w-[140px] p-2 h-[50px] rounded-3xl font-Quicksand font-bold'>
            Get Started
          </button>
          <div className='flex flex-row items-center'>
            <h1 className='flex items-center text-[#FFFFFF] font-Quicksand font-semibold text-lg md:text-xl'>
              <FaPlayCircle className='text-white w-[30px] h-[30px] md:w-[50px] md:h-[40px]' />
              &nbsp;See How It Works?
            </h1>
          </div>
        </div>
      </div>

      <div className='bg-[#004AAD] w-full lg:w-[600px] flex justify-center lg:justify-end items-center p-5 md:p-8 lg:p-10'>
        <img src="/image 7.png" alt="Illustration" className='w-full h-auto max-w-xs md:max-w-sm lg:max-w-full'/>
      </div>

    </div>
  )
}

export default Hero2;
