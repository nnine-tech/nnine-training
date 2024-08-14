import React from "react";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row w-full ">
      <div className="flex flex-col w-full">
        <h1 className="mt-24 text-center font-bold text-[#000080] text-4xl md:text-5xl">
          FULL STACK MERN
        </h1>
        <div className="flex flex-col md:flex-row mt-2 w-full flex-grow">
          {/* Image Section */}
          <div className="flex justify-center md:w-[36%] mb-4 md:mb-0 flex-grow">
            <img
              src="/mern2.png"
              alt="MERN Stack"
              className="w-full max-w-[507px] h-[340px]"
            />
          </div>
          {/* Text Section */}
          <div className=" ml-11 flex flex-col gap-5 items-center md:items-start mt-10 md:w-[64%] flex-grow">
            <h2 className="text-[24px] md:text-[36px] ml-4 md:ml-0 font-poppins">
              Enhance your web development skill
            </h2>
            <p className="text-lg md:text-xl font-poppins mx-4 md:mx-0">
              Develop your web development skills with Full Stack MERN which
              includes MongoDB, Express, React, and Node. MERN is the stack of
              choice for today's web developers looking to move quickly,
              particularly for those with React.js experience.
            </p>

            {/* Flex container for the four images */}
            <div className="flex items-center justify-center w-full max-w-[755px] mx-auto h-[54px] mt-4">
              <div className="flex flex-row items-center gap-5">
                <img
                  src="/mongo4.svg"
                  alt="MongoDB"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                />
                <img
                  src="/express4.svg"
                  alt="Express"
                  className="w-[120px] h-[40px] md:w-[150px] md:h-[50px]"
                />
                <img
                  src="/react4.svg"
                  alt="React"
                  className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                />
                <img
                  src="/node4.svg"
                  alt="Node"
                  className="w-[60px] h-[40px] md:w-[74px] md:h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
