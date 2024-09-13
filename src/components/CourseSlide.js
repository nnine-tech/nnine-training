import React, { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import default carousel styles

const CourseSlide = (props) => {
  const carouselRef = useRef(null); // Use ref to control carousel programmatically
  const [currentSlide, setCurrentSlide] = useState(0); // Track current slide
  const limitedCourses = props.course.slice(0, 16); // Limit the number of courses shown
  const router = useRouter(); // Use useRouter hook for navigation

  // Function to handle previous slide
  const handlePrev = () => {
    if (carouselRef.current) {
      const prevSlide = currentSlide === 0 ? limitedCourses.length - 1 : currentSlide - 1;
      carouselRef.current.moveTo(prevSlide); // Move to previous slide
      setCurrentSlide(prevSlide); // Update current slide index
    }
  };

  // Function to handle next slide
  const handleNext = () => {
    if (carouselRef.current) {
      const nextSlide = currentSlide === limitedCourses.length - 1 ? 0 : currentSlide + 1;
      carouselRef.current.moveTo(nextSlide); // Move to next slide
      setCurrentSlide(nextSlide); // Update current slide index
    }
  };

  // Function to handle enrollment
  const handleEnrollNow = (googleFormUrl) => {
    window.open(googleFormUrl, "_blank"); // Open enrollment Google form in a new tab
  };

  // Function to handle viewing syllabus
  const handleViewSyllabus = (syllabusUrl) => {
    router.push(syllabusUrl); // Navigate to the syllabus page
  };

  return (
    <div className="relative p-4">
      <Carousel
        ref={carouselRef} // Attach the carousel ref
        showArrows={false} // Disable default arrows
        showIndicators={false} // Disable default indicators
        autoPlay={true}
        showThumbs={false} // Disable thumbnail navigation
        showStatus={false} // Disable slide status bar
        swipeable={true}
        emulateTouch={true}
        infiniteLoop={true}
        selectedItem={currentSlide} // Keep track of current slide
        className="course-carousel"
      >
        {/* Map through courses in a single row */}
        <div className="flex flex-nowrap overflow-x-auto gap-4 lg:gap-6">
          {limitedCourses.map((course, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-[300px] md:w-[400px] lg:w-[250px] xl:w-[300px] rounded-lg shadow-2xl bg-[#FBF3F3] rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[10px] overflow-hidden mx-3 my-5 transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl"
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-[150px] object-cover shadow-xl"
              />
              <div className="px-4 py-4">
                <h1 className="font-bold font-poppins text-center text-sm sm:text-xl lg:text-lg mb-2">
                  {course.title}
                </h1>
                <h2 className="font-medium text-center font-Montserrat text-xs sm:text-sm lg:text-base">
                  Duration: {course.courseDuration}
                </h2>
              </div>
              <div className="flex flex-row justify-center gap-3 pb-4 px-4">
                <button
                  onClick={() => handleViewSyllabus(course.syllabusUrl)} // Pass syllabusUrl to handler
                  className="bg-[#0765BB] rounded-full px-3 py-1 text-[#FFFFFF] font-poppins font-bold shadow-2xl"
                >
                  View Syllabus
                </button>
                <button
                  onClick={() => handleEnrollNow(course.googleFormUrl)} // Pass googleFormUrl to handler
                  className="bg-[#28F455] rounded-full px-3 py-1 text-[#FFFFFF] font-poppins font-bold"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </Carousel>

      {/* Custom Next and Previous Buttons */}
      {/* <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-400 text-black p-2 rounded-full shadow-lg z-20"
        aria-label="Previous"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-blue-400 text-black p-2 rounded-full shadow-lg z-20"
        aria-label="Next"
      >
        &rarr;
      </button> */}
    </div>
  );
};

export default CourseSlide;
