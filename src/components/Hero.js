"use client";
import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  const handleEnrollNowClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://forms.gle/in86LKYEFJRimao1A", "_blank");
    }
  };

  return (
    <div className="h-screen w-full">
      {/* <Navbar /> */}
      <br />
      <div
        className="w-full h-full text-white flex items-center justify-center"
        style={{ background: "#5184d6" }}
      >
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row">
          <div className="text-center lg:w-1/2">
            <div className="ml-6">
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Welcome to Nnine Training Center
              </h1>
              <p className="text-2xl mb-8">
                Enroll now and get discount up 40% on the occasion on New Year
                2081.
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
    </div>
  );
};

export default Hero;
