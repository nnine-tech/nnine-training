import React from "react";
import Link from "next/link";


const Career = () => {
  const jobPositions = [
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
    {
      title: "Product Designer",
      description:
        "We're looking for a mid-level product designer to join our team.",
      location: "Hybrid",
      type: "Full-time",
    },
  ];

  return (
    <div className="relative">
      <div className="relative">
        <img
          src="career.svg"
          alt=""
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col gap-6 h-[300px] w-[90%] sm:w-[1000px] justify-center items-center mx-auto mt-80 text-center px-4">
          <h1 className="text-white font-Quicksand text-4xl sm:text-6xl font-bold">
            Join <span className="text-[#FFCF59]">Our</span> Team
          </h1>
          <p className="text-white font-Quicksand font-semibold text-base sm:text-xl text-left">
            We are looking for passionate people to join us on our mission
            <br />
            We value flat hierarchies, clear communication, and full
            <br />
            ownership and responsibility
          </p>
          <div className="flex justify-center bg-white h-[180px] w-[300px] rounded-lg ml-[550px] mt-[20px]">
            <div className="bg-white shadow-2xl border-violet-300 h-[180px] w-[300px] rounded-lg p-3 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div className="flex justify-between items-center">
                <h1 className="font-Quicksand text-[#000000] text-lg font-bold">
                  {jobPositions[0].title}
                </h1>
                <Link href="/product">
                  <h2 className="font-Quicksand text-[#0060FF] flex items-center font-semibold cursor-pointer">
                    Apply
                    <img
                      src="right-up (1).png"
                      alt="Apply"
                      className="w-[22px] h-[22px] ml-2"
                    />
                  </h2>
                </Link>
              </div>
              <p className="text-sm font-medium font-Quicksand pt-2">
                {jobPositions[0].description}
              </p>
              <div className="flex gap-4 pt-4">
                <span className="h-[38px] w-[108px] border border-slate-950 rounded-full text-xs flex items-center gap-2 p-3">
                  <img
                    src="loc.png"
                    alt={jobPositions[0].location}
                    className="w-[22px] h-[22px]"
                  />
                  {jobPositions[0].location}
                </span>
                <span className="h-[38px] w-[108px] border border-slate-950 rounded-full text-xs flex items-center gap-2 p-3">
                  <img
                    src="clock.png"
                    alt={jobPositions[0].type}
                    className="w-[22px] h-[22px]"
                  />
                  {jobPositions[0].type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* First Card after the paragraph */}

      {/* Job Positions in a staircase pattern */}
      <div className="flex flex-wrap justify-center gap-[32px] mx-auto max-w-5xl px-4 mt-8">
        {jobPositions.slice(1).map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-2xl border-violet-300 h-[180px] w-[300px] rounded-lg p-3 flex flex-col justify-between mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
            style={{ marginTop: `${index * 20}px` }} // Staggered margin for staircase effect
          >
            <div className="flex justify-between items-center">
              <h1 className="font-Quicksand text-[#000000] text-lg font-bold">
                {job.title}
              </h1>
              <h2 className="font-Quicksand text-[#0060FF] flex items-center font-semibold cursor-pointer">
                Apply
                <img
                  src="right-up (1).png"
                  alt="Apply"
                  className="w-[22px] h-[22px] ml-2"
                />
              </h2>
            </div>
            <p className="text-sm font-medium font-Quicksand pt-2">
              {job.description}
            </p>
            <div className="flex gap-4 pt-4">
              <span className="h-[38px] w-[108px] border border-slate-950 rounded-full text-xs flex items-center gap-2 p-3">
                <img
                  src="loc.png"
                  alt={job.location}
                  className="w-[22px] h-[22px]"
                />
                {job.location}
              </span>
              <span className="h-[38px] w-[108px] border border-slate-950 rounded-full text-xs flex items-center gap-2 p-3">
                <img
                  src="clock.png"
                  alt={job.type}
                  className="w-[22px] h-[22px]"
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