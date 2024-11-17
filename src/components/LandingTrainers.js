import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingTrainers = () => {
  const trainersContainerRef = useRef(null);

  const trainers = [
    {
      id: 1,
      src: "arjun.jpeg",
      alt: "Trainer 1",
      name: "Arjun",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["DevOps", "AWS", "Kubernetes"],
      rating: 5,
    },
    {
      id: 2,
      src: "niresh1.jpg",
      alt: "Trainer 2",
      name: "Niresh",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
    {
      id:3,
      src: "niresh1.jpg",
      alt: "Trainer 2",
      name: "Niresh",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
    {
      id: 4,
      src: "niresh1.jpg",
      alt: "Trainer 2",
      name: "Niresh",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
    // Additional trainers...
  ];

  useEffect(() => {
    const container = trainersContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1;
    let scrollInterval = setInterval(() => {
      if (
        container.scrollTop >=
        container.scrollHeight - container.clientHeight
      ) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += scrollSpeed;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-[#FCE4BD] h-auto w-full md:w-[90vw] mx-auto mt-10 mb-20 rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-3xl flex flex-col md:flex-row gap-5 md:gap-10 font-['Quicksand']">
      <div className="flex items-center w-full md:w-auto px-4 md:px-0 mb-6 mt-6">
        <div className="flex flex-col text-left gap-4">
          <h1 className="font-bold text-2xl md:text-4xl lg:ml-10 md:ml-4">
            Our Trainers
          </h1>
          <p className="lg:ml-10 md:ml-4 text-base md:text-lg text-[#545252]">
            Our trainers are dedicated to your success, providing personalized
            attention and ensuring that each learner leaves with a solid
            understanding of the subject.
          </p>
        </div>
      </div>

      {/* Auto-scrolling container */}
      <div
        ref={trainersContainerRef}
        className="flex flex-col w-full md:w-[60%] px-4 md:px-0 gap-5 overflow-hidden lg:mr-11"
        style={{ maxHeight: "500px" }}
      >
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-[#F6F8FC] h-auto md:h-[300px] flex flex-col md:flex-row justify-between p-3 border rounded-lg gap-4"
          >
            <img
              src={trainer.src}
              alt={trainer.alt}
              className="h-20 w-20 md:h-16 md:w-16 object-contain rounded-lg mx-auto md:mx-0"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-5">
                <h2 className="text-lg md:text-xl font-semibold hover:underline uppercase">
                  {trainer.name}
                </h2>
                <div className="flex items-center">
                  <i className="fas fa-star text-blue-500"></i>
                  <span className="ml-2 text-blue-600 font-semibold">
                    {trainer.rating}.0
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{trainer.review}</p>
              <div className="flex flex-wrap gap-3 mt-4 md:mt-9">
                {trainer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#E0E0E0] text-xs md:text-sm py-1 px-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingTrainers;
