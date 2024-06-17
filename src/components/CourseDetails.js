import React from "react";

const CourseDetails = () => {
  return (
    <section className="relative top-0 left-0">
      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 flex items-center justify-center">
        {/* Left Side - Course Details */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6 mb-6 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">MERN Stack Training in Nepal</h1>
          <p className="text-lg text-gray-700 mb-8">
            Elevate your web development skills: Master the in-demand MERN stack (MongoDB, Express, React, and Node.js)
            in this extraordinary training program by Mindrisers Institute of Technology in Nepal. Build dynamic web
            applications with confidence and launch your career in the thriving tech world.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out text-xl"
            >
              Get Admission
            </a>
          </div>
        </div>

        {/* Right Side - Additional Details */}
        <div className="w-full md:w-1/2 bg-blue-100 rounded-lg shadow-md p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Training Level</h2>
            <p className="text-gray-700">Beginner To Expert</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Format</h2>
            <p className="text-gray-700">Physical/Online Class</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Duration</h2>
            <p className="text-gray-700">3 Months</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Career Prospect</h2>
            <p className="text-gray-700">MERN Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
