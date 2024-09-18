import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";
import Slider from "react-slick";

// Custom arrow components for Next and Previous buttons
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !bg-blue-600 hover:!bg-blue-700 p-2 rounded-full shadow-lg absolute top-1/2 right-2 z-20 text-white transition-colors duration-300`}
      onClick={onClick}
      style={{ display: "block" }} // Ensures visibility
    >
      &gt; {/* Right arrow symbol (>) */}
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} !bg-blue-600 hover:!bg-blue-700 p-2 rounded-full shadow-lg absolute top-1/2 left-2 z-20 text-white transition-colors duration-300`}
      onClick={onClick}
      style={{ display: "block" }} // Ensures visibility
    >
      &lt; {/* Left arrow symbol (<) */}
    </button>
  );
};

const CourseSlide = (props) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
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

  const router = useRouter();

  const handleEnrollNow = (googleFormUrl) => {
    window.open(googleFormUrl, "_blank");
  };

  const handleViewSyllabus = (syllabusUrl) => {
    router.push(syllabusUrl);
  };

  return (
    <div className="relative p-4 max-w-full mx-9">
    <Slider {...settings}>
      {props.course.map((course, index) => (
        <div
          key={index}
          className="relative w-full sm:w-[500px] md:w-[350px] lg:w-[300px] rounded-lg shadow-2xl bg-[#FBF3F3] max-w-sm rounded-bl[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[10px] flex-shrink-0 overflow-hidden mx-3 my-5 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          <div className="rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-[150px] sm:h-[200px] object-cover"
            />
            <div className="px-4 sm:px-6 py-4">
              <h1 className="font-bold font-poppins text-center text-base sm:text-lg text-gray-800 mb-2">
                {course.title}
              </h1>
              <h2 className="font-medium text-center text-gray-600 text-xs sm:text-sm mb-4">
                Duration: {course.courseDuration}
              </h2>
              <div className="flex justify-center gap-2 sm:gap-3">
                <button
                  onClick={() => handleViewSyllabus(course.syllabusUrl)}
                  className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-full px-3 py-2 text-xs sm:text-base text-white font-poppins font-bold"
                >
                  View Syllabus
                </button>
                <button
                  onClick={() => handleEnrollNow(course.googleFormUrl)}
                  className="bg-green-500 hover:bg-green-600 transition-colors rounded-full px-3 py-2 text-xs sm:text-base text-white font-poppins font-bold"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default CourseSlide;
