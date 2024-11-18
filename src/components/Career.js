import React from "react";
import Link from "next/link";

const Career = () => {
  const jobPositions = [
    ,
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
      applyLink: "ProductDesigner",
    },
    {
      title: "Frontend Developer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
      applyLink: "/product-designer",
    },
    {
      title: "Backend Developer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
      applyLink: "/product-designer",
    },
    {
      title: "Quality Assurance",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
      applyLink: "/product-designer",
    },
    {
      title: "HR Manager",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
      applyLink: "/product-designer",
    },
    {
      title: "Internship",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
      applyLink: "/product-designer",
    },
  ];

  return (
    <div className="relative">
      <div className="relative">
        <img
          src="career.svg"
          alt=""
          className="w-full h-[300px] sm:h-[500px] lg:h-[800px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col gap-4 sm:gap-6 lg:gap-6 h-auto sm:h-[300px] w-full sm:w-[90%] lg:w-[1000px] justify-center items-center mx-auto mt-56 sm:mt-40 lg:mt-50 text-center px-4">
          <h1 className="text-white font-Quicksand text-2xl sm:text-4xl lg:text-6xl font-bold mt-20">
            Join <span className="text-[#FFCF59]">Our</span> Team
          </h1>
          <p className="text-white font-Quicksand font-semibold text-sm sm:text-base lg:text-xl text-left">
            We are looking for passionate people to join us on our mission
            <br className="hidden sm:block" />
            We value flat hierarchies, clear communication, and full
            <br className="hidden sm:block" />
            ownership and responsibility
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mx-auto max-w-6xl px-4 pb-28 relative gap-x-8 gap-y-10 -mt-[200px]">
        {jobPositions.slice(1).map((job, index) => (
          <div
            key={index}
            className={`bg-white shadow-2xl border-violet-300 h-auto sm:h-[180px] w-full sm:w-[300px] md:w-[350px] lg:w-[320px] xl:w-[340px] rounded-lg p-3 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105 ${
              index % 3 === 0
                ? "translate-y-0"
                : index % 3 === 1
                ? "translate-y-[40px]"
                : "translate-y-[80px]"
            }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h1 className="font-Quicksand text-[#000000] text-base sm:text-lg font-bold">
                {job.title}
              </h1>
              <Link href={job.applyLink} key={index}>
                <h2 className="font-Quicksand text-[#0060FF] flex items-center font-semibold cursor-pointer">
                  Apply
                  <img
                    src="right-up (1).png"
                    alt="Apply"
                    className="w-4 sm:w-[22px] h-4 sm:h-[22px] ml-2"
                  />
                </h2>
              </Link>
            </div>
            <p className="text-sm font-medium font-Quicksand pt-2">
              {job.description}
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
              <span className="h-auto sm:h-[38px] w-auto sm:w-[108px] border border-slate-950 rounded-full text-xs flex items-center gap-2 px-2 sm:p-3">
                <img
                  src="loc.png"
                  alt={job.location}
                  className="w-4 sm:w-[22px] h-4 sm:h-[22px]"
                />
                {job.location}
              </span>
              <span className="h-auto sm:h-[38px] w-auto sm:w-[108px] border border-slate-950 rounded-full text-xs flex items-center gap-2 px-2 sm:p-3">
                <img
                  src="clock.png"
                  alt={job.type}
                  className="w-4 sm:w-[22px] h-4 sm:h-[22px]"
                />
                {job.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
