import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CourseSlide = (props) => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleViewSyllabus = (syllabusUrl) => {
    if (typeof syllabusUrl === "string") {
      router.push(syllabusUrl);
    } else {
      console.error("Invalid URL:", syllabusUrl);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-[#E9E9E9] mx-5 mt-14 rounded-br-3xl rounded-tl-2xl">
      <div className="p-10 w-full max-w-screen-lg mx-auto flex flex-col items-center">
        <h1 className="text-center text-3xl font-extrabold md:text-5xl font-Quicksand">
          Popular Courses
        </h1>
        <p className="text-center text-xl font-Quicksand mt-3">
          Explore our most sought-after courses designed to help you master
          in-demand skills. Each program is carefully curated to provide
          hands-on learning, industry insights, and expert guidance, ensuring
          you're well-prepared for your next career move.
        </p>
      </div>

      <div className="relative  pl-4 pr-4 max-w-full mx-auto ">
        {isMounted && (
          <div className="pr-3 pl-3 ">
            <Slider {...settings} className="">
              {props.course.map((course, index) => (
                <div
                  key={index}
                  className="felx  w-full sm:w-[500px] md:w-[350px] lg:w-[300px] rounded-lg shadow-lg hover:shadow-xl max-w-sm rounded-bl-[40px] rounded-tr-[40px] flex-shrink-0 overflow-hidden my-5  "
                  style={{ height: "400px" }}
                  onClick={() => handleViewSyllabus(course.syllabusUrl)}
                >
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-[150px] sm:h-[200px] object-cover"
                  />
                  <div className="px-4 sm:px-6 py-4 overflow-hidden">
                    <h1
                      className="font-bold font-poppins text-center text-base sm:text-lg text-gray-800 mb-2"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {course.title}
                    </h1>
                    <h2 className="font-medium text-center text-gray-600 text-xs sm:text-sm mb-4">
                      Duration: {course.courseDuration}
                    </h2>
                    <div className="flex items-center justify-center">
                      <button
                        className="bg-[#0765BB] text-white w-[100px] h-[30px] rounded-3xl text-xs font-bold"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewSyllabus(course.syllabusUrl);
                        }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSlide;
