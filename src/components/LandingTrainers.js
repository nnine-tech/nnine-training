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
      id: 3,
      src: "sudan1.jpg",
      alt: "Trainer 3",
      name: "Sudan",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
    {
      id: 4,
      src: "sudan1.jpg",
      alt: "Trainer 4",
      name: "Sudan",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
    {
      id: 5,
      src: "sudan1.jpg",
      alt: "Trainer 5",
      name: "Sudan",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
    {
      id: 6,
      src: "sudan1.jpg",
      alt: "Trainer ",
      name: "Sudan",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const container = trainersContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1;
    let scrollInterval = setInterval(() => {
      if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
        container.scrollTop = 0;
      } else {
        container.scrollTop += scrollSpeed;
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="bg-[#FCE4BD] h-[601] w-[90vw] mt-[40px] mb-[93px] mr-[60px] ml-[60px] rounded-tl-xl rounded-tr-sm rounded-bl-sm rounded-br-3xl flex flex-row gap-10 font-['Quicksand']">
      <div className="flex items-center mb-6 w-[2500px] mt-[26px] mb-[25px] ml-[50px]">
        <div className="h-[200px] w-[500px]  flex flex-col text-left gap-4">
        <h1 className="font-bold text-[48px] ml-[20px]">Our Trainers</h1>
        <p className="ml-[20px] text-[20px] text-[#545252]">
        Our trainers are dedicated to your success, providing personalized attention and ensuring that each learner leaves with a solid understanding of the subject.
</p>

        </div>
      </div>

      {/* Auto-scrolling container */}
      <div
        ref={trainersContainerRef}
        className="flex flex-col w-[1500px] mb-[25px] mt-[26px] mr-[80px] gap-7 overflow-hidden"
        style={{ maxHeight: '500px' }}
      >
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-[#F6F8FC] h-[300px] flex justify-between p-3 border rounded-lg gap-4 animate-fadeIn"
          >
            <img
              src={trainer.src}
              alt={trainer.alt}
              className="h-16 w-16 object-contain mt-[6px] rounded-lg cursor-not-allowed"
            />
            <div className="flex-1">
              <div className="flex items-center gap-5">
                <h2 className="text-xl font-semibold hover:underline cursor-default uppercase">
                  {trainer.name}
                </h2>
                <i className="fas fa-star text-blue-500 mt-1 ml-2"></i>
                <span className="ml-0 text-blue-600 font-semibold">
                  {trainer.rating}.0
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{trainer.review}</p>
              <div className="flex gap-8 mt-9 cursor-pointer">
                {trainer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#E0E0E0] text-sm text-black py-1 px-3 rounded-full"
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
