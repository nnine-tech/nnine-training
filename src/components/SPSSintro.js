import React from "react";

const SPSSintro = () => {
  return (
    <div className="flex flex-col md:flex-row w-full sm:w-screen lg:w-full md:w-full  bg-[#014AAC] select-none  md:p-7">
      <div className="flex flex-col w-full mt-20">
        <h1 className="mt-10 md:mt-24 font-bold font-Quicksand text-white text-3xl md:text-4xl md:ml-20 text-center md:text-left">
          USING SPSS FOR DATA ANALYSIS
        </h1>
        <div className="flex flex-col md:flex-row-reverse mt-6 w-full">
          {/* Image Section */}
          <div className="flex justify-center md:w-[36%] mt-4 md:mt-1">
            <img
              src="/SPSS.jpg"
              alt="UIUX"
              className="w-full max-w-[300px] md:max-w-[389px] h-auto md:h-[217px] mb-4 md:mb-20"
            />
          </div>
          {/* Text Section */}
          <div className="md:ml-10 flex flex-col gap-5 items-center md:items-start mt-8 md:mt-4 md:w-[60%]">
            <p className="text-lg md:text-lg font-semibold font-Quicksand text-center md:text-left text-[#C1D4FF] mx-4 md:mx-0">
              By the end of this course, participants will be able to design
              research surveys that align with their study objectives and
              effectively collect relevant data. They will gain the skills to
              create clear and impactful data visualizations. Participants will
              also be proficient in performing descriptive analysis to summarize
              data, as well as in applying prediction models and exploring
              associations between variables. Additionally, they will understand
              and use parametric inferential statistics and non-parametric
              tests. Finally, they will be able to assess the quality of their
              data using normality, reliability, and validity tests to ensure
              accurate and reliable research outcomes
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
                <h2 className="text-[#FFFFFF] font-Quicksand">
                  Duration: 16 hours, 1 Credit
                </h2>
              </div>
              <div className="flex items-center gap-2 ml-8 sm:ml-0">
                <img src="/careerlogo.svg" alt="Career" />
                <h2 className="text-[#FFFFFF] font-Quicksand text-[15px]  ">
                  Career: DATA ANALYST,DATA SCIENTIST,MARKET RESEARCHER,
                  STATISTICAL CONSULTANT
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SPSSintro;
