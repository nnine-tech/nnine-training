import React from "react";

const WhyUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-8 md:py-16">
      <div className="text-center mb-8 md:mb-16 w-full md:w-[800px] mx-auto px-4">
        <h1 className="text-black font-extrabold text-3xl md:text-5xl mb-4 font-Quicksand">
          Why Choose Us
        </h1>
        <h3 className="text-gray-600 text-base md:text-xl font-Quicksand">
          At N9, we offer industry-relevant courses designed to equip you with the latest skills and knowledge. Our expert trainers ensure you gain practical experience and mastery in cutting-edge technologies.
        </h3>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-4 md:p-6 flex flex-col items-center text-center">
            <img
              src="expert.svg"
              className="h-12 w-12 mb-4"
              alt="Expert Trainers"
            />
            <h2 className="text-xl font-bold mb-3 font-Quicksand">
              Expert Trainers
            </h2>
            <p className="text-black font-Quicksand">
              We are committed to your success beyond the classroom. Our dedicated placement support team works tirelessly to connect you with top employers, ensuring you secure the right job after completing your training.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-4 md:p-6 flex flex-col items-center text-center">
            <img
              src="video.svg"
              className="h-12 w-12 mb-4"
              alt="Class Videos"
            />
            <h2 className="text-xl font-bold mb-3 font-Quicksand">
              Class Videos
            </h2>
            <p className="text-black font-Quicksand">
              Access recorded videos of all the classes, ensuring that you can learn at your own pace and revisit topics whenever necessary.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-4 md:p-6 flex flex-col items-center text-center">
            <img
              src="support.svg"
              className="h-12 w-12 mb-4"
              alt="Lifetime Support"
            />
            <h2 className="text-xl font-bold mb-3 font-Quicksand">
              Lifetime Support
            </h2>
            <p className="text-black font-Quicksand">
              Enjoy lifetime support from our team, ensuring that no matter where your career takes you, we're here to assist and guide you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-12">
          {/* Card 4 */}
          <div className="p-4 md:p-6 flex flex-col items-center text-center">
            <img
              src="price.svg"
              className="h-12 w-12 mb-4"
              alt="Best Price"
            />
            <h2 className="text-xl font-bold mb-3 font-Quicksand">
              Best Price
            </h2>
            <p className="text-black font-Quicksand">
              Our courses are competitively priced, ensuring you receive the best value for your investment while gaining high-quality training and resources.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-4 md:p-6 flex flex-col items-center text-center">
            <img
              src="certificate.svg"
              className="h-12 w-12 mb-4"
              alt="Certificate"
            />
            <h2 className="text-xl font-bold mb-3 font-Quicksand">
              Certificate
            </h2>
            <p className="text-black font-Quicksand">
              Upon completion of your course, you will receive a professional certificate, validating the skills and knowledge you've acquired.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-4 md:p-6 flex flex-col items-center text-center">
            <img
              src="placement.svg"
              className="h-12 w-12 mb-4"
              alt="Career Placement"
            />
            <h2 className="text-xl font-bold mb-3 font-Quicksand">
              Career Placement Support
            </h2>
            <p className="text-black font-Quicksand">
              We are dedicated to helping you launch your career. Our team will connect you with top employers, providing personalized guidance to help you secure your dream job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
