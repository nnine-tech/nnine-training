import React from "react";

const RedHatOpenShiftDevelopmentIntro = () => {
  return (
    <div className="flex flex-col md:flex-row w-[400px]   sm:w-screen lg:w-full md:w-full  bg-[#014AAC]  md:p-7">
      <div className="flex flex-col w-full mt-32">
<<<<<<< HEAD
        <h1 className="mt-10 md:mt-24 font-bold font-Quicksand text-white text-3xl md:text-4xl md:ml-20 text-center md:text-left">
=======
        <h1 className="mt-10 md:mt-24 font-bold text-white text-3xl md:text-4xl md:ml-20 text-center md:text-left">
>>>>>>> 2250833a24d38114f3c9c958e419f9e80edfc822
          THE COMPLETE RED HAT OPENSHIFT DEVELOPMENT  COURSE
        </h1>
        <div className="flex flex-col md:flex-row-reverse mt-6 w-full">
          {/* Image Section */}
          <div className="flex justify-center md:w-[36%] mt-4 md:mt-1">
            <img
              src="/redhatopenshiftdevI.png"
              alt="redhatopenshiftdevI"
              className="w-full max-w-[300px] md:max-w-[389px] h-auto md:h-[217px] mb-4 md:mb-20"
            />
          </div>
          {/* Text Section */}
          <div className="md:ml-20 flex flex-col gap-5 items-center md:items-start mt-8 md:mt-10 md:w-[64%]">
            <p className="text-lg md:text-2xl font-semibold font-Quicksand text-center md:text-left text-[#C1D4FF] mx-4 md:mx-0">
              Develop your  Red Hat OpenShift Development skill
            </p>
            <div className="flex flex-wrap gap-4 mt-5 justify-center md:justify-start">
              <button className="bg-[#CCCBC8] p-2 text-black font-Quicksand font-semibold">
                Top rated
              </button>
              <div className="flex items-center text-[#FFFFFF]">
                4.5
                <span className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src="/star.svg"
                      alt="Star"
                      className="w-[23px] h-[20px]"
                    />
                  ))}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/duration.svg" alt="Duration" />
                <h2 className="text-[#FFFFFF] font- Quicksand">Duration: 30h</h2>
              </div>
              <div className="flex items-center gap-2">
                <img src="/career.svg" alt="Career" />
                <h2 className="text-[#FFFFFF] font-Quicksand">Career: RED HAT OPENSHIFT DEVELOPER</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedHatOpenShiftDevelopmentIntro;
