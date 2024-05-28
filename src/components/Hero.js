import React, { useState, useEffect } from "react";
import {ReactTyped} from 'react-typed';

const Hero = () => {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallDevice(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEnrollNowClick = () => {
    window.open("https://forms.gle/in86LKYEFJRimao1A", "_blank");
  };

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {isSmallDevice ? (
        <div className="bg-[#2670C6] h-full flex items-center justify-center">
          <div className="text-center">
          <div className='flex justify-center items-center'>
                  <ReactTyped
                  className='md:text-5xl sm:text-4xl text-4xl text-[#fff] font-bold md:pl-4 pl-2'
                    strings={[' Welcome to Nnine Training center']}
                    typeSpeed={110}
                    backSpeed={80}
                    loop
                  >
                  </ReactTyped>
                </div>
            <br />
            <br />
            
            <p className="text-xl mb-8 text-[#fff]">
            Develop your skills in a new and unique way learning to make a better tomorrow!
            </p>
            <button
              onClick={handleEnrollNowClick}
              className="hover:bg-red-200 bg-white text-gray-800 font-bold rounded-full py-4 px-8"
            >
              Enroll Now
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full text-white flex items-center justify-start">
          <video
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 z-[-1] min-w-full object-cover"
            style={{ minHeight: "300px", maxHeight: "900px", height: "100%" }}
          >
            <source src="/nn.mp4" type="video/mp4" />
          </video>
          <div className="container mx-auto flex px-5 py-24 items-start justify-start flex-col lg:flex-row">
            <div className="text-center lg:w-1/2">
              <div className="ml-6">
              <div className='flex justify-center items-center'>
                  <ReactTyped
                  className='md:text-5xl sm:text-4xl text-xl text-[#1E4FBC] font-bold md:pl-4 pl-2'
                    strings={[' Welcome to Nnine Training center']}
                    typeSpeed={110}
                    backSpeed={80}
                    loop
                  >
                  </ReactTyped>
                </div>
                <br />  
                <p className="text-2xl mb-8 text-[#1E4FBC]">
                Develop your skills in a new and unique way learning to make a better tomorrow!
                </p>
                <button
                  onClick={handleEnrollNowClick}
                  className="hover:bg-red-200 bg-white text-gray-800 font-bold rounded-full py-4 px-8"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Hero;
