import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    id: 1,
    name: 'Nirjala Shrestha',
    role: ' Full Stack Developer',
    review:
      'Studying at N9 Solution has been a great experience for me. The MERN stack training is hands-on, and I’ve gained practical skills that have boosted my confidence in web development. ',
    image: '/nirjala.jpg',
    stars: 5,
  },
  {
    id: 2,
    name: 'Riyaz Pokhrel',
    role: 'Python Developer',
    review:
      'I have great experience with the Python course at N9solution. The tutors made complex things so simple.',
    image: '/riyaz.jpg',
    stars: 4,
  },
  {
    id: 3,
    name: 'Sneha Tamang',
    role: 'UI/UX Designer',
    review:
      'The UI/UX course gave me a clear understanding of design principles, user psychology, and the tools needed to create engaging interfaces. .',
    image: '/sneha.jpg',
    stars: 5,
  },
  {
    id: 4,
    name: 'Priya Dev',
    role: 'MernStack Developer',
    review:
      'I’m grateful for the opportunity to attend the MERN class at NNine Solution. The comprehensive training and hands-on approach have significantly improved my development skills..',
    image: '/priya7.jpg',
    stars: 5,
  },
];

const ReviewLanding = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay:true,
    autoplaySpeed:300,
    pauseOnHover: true,  // Pauses autoplay when hovered (desktop)
    pauseOnFocus: true,  // Pauses autoplay on focus (useful for mobile touch)
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
  
    <div className=" h-auto mt-10">
      <h1 className="flex justify-center  font-Quicksand items-center font-bold text-black text-4xl mb-8 mt-8 text-center">
        What Our Students Say About Us
      </h1>
      <div className="py-8 mr-8 mb-16">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={review.id} className="px-2 mb-10">
              <div
                className={`bg-white w-full sm:w-[90%] md:w-[70%] lg:w-[447px] min-h-[350px] h-auto rounded-2xl shadow-lg p-5 flex flex-col justify-between mx-2 transition-transform duration-300 ${
                  activeSlide === index
                    ? 'transform scale-110 shadow-3xl opacity-200' // Increased scale and added shadow
                    : 'opacity-75' // Slightly reduce opacity of non-active cards
                }`}
                style={{ margin: '0 5px' }}
              >
                {/* Star Rating */}
                <div className="flex mb-2">
                  {Array(review.stars)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 h-[24px] w-[24px]" />
                    ))}
                </div>
                {/* Review Content */}
                <div className="flex-1">
                  <h1 className="font-bold  font-Quicksand text-2xl text-gray-800">{review.name}</h1>
                  <p className="mt-2 text-xl text-gray-600 font-Quicksand line-clamp-4 overflow-hidden">
                    {review.review}
                  </p>
                </div>
                {/* Reviewer Info */}
                <div className="flex items-center mt-5">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full h-[78px] w-[78px] border-2 border-gray-200 shadow-sm"
                  />
                  <div className="ml-3">
                    <h1 className="font-bold font-Quicksand text-gray-800">{review.name}</h1>
                    <h3 className="font-semibold font-Quicksand text-gray-600">{review.role}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>

  );
};

export default ReviewLanding;
