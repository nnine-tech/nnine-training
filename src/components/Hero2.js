import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

const Hero2 = () => {
  return (
    <div className="bg-[#004AAD] h-auto flex  flex-col lg:flex-row">
      <div className="bg-[#004AAD] ml-0 lg:ml-10 w-full lg:w-[1000px] flex flex-col justify-center p-5 lg:p-10 mt-2 lg:mt-32">
        <h1 className="text-[#FFFFFF] text-5xl md:text-5xl lg:text-7xl font-bold font-Quicksand mt-24 lg:mt-9 md:mt-40 md:ml-6">
          Unlocking <span className="text-[#FFCF59] lg:text-6xl">your</span>
        </h1>
        <h1 className="text-[#FFCF59] text-5xl md:text-5xl lg:text-7xl font-bold font-Quicksand mt-2 md:ml-6">
          Potential with
        </h1>
        <h1 className="text-[#FFFFFF] text-5xl md:text-5xl lg:text-7xl font-bold font-Quicksand mt-2 md:ml-6">
          Advanced IT Training
        </h1>
        <h3 className="text-[#DDDDDD] mt-4 font-Quicksand font-medium text-sm md:text-base md:ml-6">
          We provide comprehensive training, guaranteed internships,
        </h3>
        <h3 className="text-[#DDDDDD] font-Quicksand font-medium text-sm md:text-base md:ml-6">
          and placement support to drive your career forward.
        </h3>
        <div className="mt-6 md:mt-10 mb-6 md:mb-10 flex flex-col lg:flex-row gap-3 md:gap-5">
          <Link href="/Popularcourses">
            <button className="bg-[#FFCF59] w-[140px] p-2 h-[50px] rounded-3xl font-Quicksand font-bold md:ml-6">
              Get Started
            </button>
          </Link>

          <div className="flex flex-row items-center md:ml-6">
            <h1 className="flex items-center text-[#FFFFFF] font-Quicksand font-semibold text-lg md:text-xl">
              <FaPlayCircle className="text-white w-[30px] h-[30px] md:w-[50px] md:h-[40px]" />
              &nbsp;See How It Works?
            </h1>
          </div>
        </div>
      </div>

      {/* Second div with WhatsApp Icon */}
      <div className="bg-[#004AAD] w-full lg:w-[700px] justify-center  items-center p-5 hidden md:hidden lg:block lg:relative lg:p-10  ">
        <img
          src="/image 7.png"
          alt="Illustration"
          className="w-full h-full max-w-xs md:max-w-sm lg:mt-20 lg:w-[800px]  md:h-[400px] "
        />

        {/* WhatsApp Icon wrapped in a link */}
        <a
          href="https://wa.me/9779851359759"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatapp.svg"
            alt="WhatsApp Icon"
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] fixed right-5"
            style={{
              top: "50%",
              transform: "translateY(-50%)", // Keeps the icon centered vertically
              zIndex: "9999",
              animation: "spin 4s linear infinite", // Ensures the icon spins
            }}
          />
        </a>
      </div>
      {/* Keyframes for spinning animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero2;
