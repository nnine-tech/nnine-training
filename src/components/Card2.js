import React from "react";
import { useRouter } from "next/navigation";

function Card2(props) {
  const router = useRouter();

  // Function to handle viewing syllabus
  const handleViewSyllabus = () => {
    router.push(props.syllabusUrl);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
      {/* Entire card is wrapped in a div with onClick event */}
      <div
        onClick={handleViewSyllabus}
        className="relative w-[275px] sm:w-[700px] md:w-96 lg:w-80 rounded-lg shadow-2xl bg-[#FBF3F3] max-w-sm rounded-bl[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[10px] flex-shrink-0 overflow-hidden mx-3 my-5 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl cursor-pointer"
      >
        <img
          src={props.imageUrl}
          alt=""
          className="w-full h-[200px] object-cover shadow-xl"
        />
        <div className="px-4 py-4">
          <h1 className="font-bold font-poppins text-center text-base sm:text-2xl mb-2">
            {props.title}
          </h1>
          <h2 className="font-medium text-center font-Quicksand text-xs">
            Duration: {props.courseDuration}
          </h2>
        </div>
        <div className="flex flex-row justify-center gap-3 pb-4 px-4">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents the onClick on the parent div from triggering
              handleViewSyllabus();
            }}
            className="bg-[#0765BB] rounded-full py-1 text-[#FFFFFF] font-poppins font-bold shadow-2xl h-[24px] w-[84px]"
          >
            <h1 className="text-bold font-Quicksand text-xs">Read More</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;
