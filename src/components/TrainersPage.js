"use client"; // Ensure this component renders on the client-side

import React from "react";
import { useRouter } from "next/navigation";

const TrainersPage = () => {
  const router = useRouter();

  const handleViewProfile = (id) => {
    console.log("Navigating to trainer with ID:", id);
    router.push(`/Trainer/${id}`);
  };

  const trainersData = [
    {
      id: 1,
      imageUrl: "/img.png",
      imageAlt: "deepak.jpg",
      name: "Deepak Bomjan",
      profession: "DevOps Trainer",
      experience: "15 years",
      job: "System Engineer at Prestigious",
    },
    {
      id: 2,
      imageUrl: "/niresh1.jpg",
      imageAlt: "niresh.jpg",
      name: "Niresh Dhakal",
      profession: "Mern Stack Trainer",
      experience: "15 years",
      job: "Mern stack Trainer at N9 Solution",
    },
    {
      id: 3,
      imageUrl: "/jaya.png",
      imageAlt: "jaya.jpg",
      name: "Jaya Kumar Neupane",
      profession: "Oracle-certified Trainer",
      experience: "15 years",
      job: "Oracle Trainer at N9 Solution",
    },
    {
      id: 4,
      imageUrl: "/jaya.png",
      imageAlt: "jaya.jpg",
      name: "Jaya Kumar Neupane",
      profession: "Oracle-certified Trainer",
      experience: "15 years",
      job: "Oracle Trainer at N9 Solution",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-full bg-cover bg-center bg-[url('/coursecurve.svg')] py-60 h-[400px] lg:h-[900px]">
        <div className="flex items-center w-full text-center">
          {/* Arrowdot image for larger screens only */}
          <div className="hidden sm:block mr-4  ml-32 mt-96 h-[500px]">
            <img src="Arrowdot.svg" className="h-[500px]" alt="Arrow Dot" />
          </div>
          <div>
            {/* WhatsApp Icon wrapped in a link */}
            <a
              href="https://wa.me/9779851359759"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/whatapp.svg"
                alt="WhatsApp Icon"
                className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] fixed right-5"
                style={{
                  top: "50%",
                  transform: "translateY(-50%)", // Keeps the icon centered vertically
                  zIndex: "9999",
                  animation: "spin 4s linear infinite", // Ensures the icon spins
                }}
              />
            </a>
          </div>
          {/* Keyframes for spinning animation */}
          <style jsx>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>

          {/* Text content */}
          <div className="sm:mt-0 mt-32 px-5 lg:w-[800px] ">
            <h1 className="font-Quicksand text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Meet Our <strong className="text-[#FFCF59]">Trainers</strong>
            </h1>
            <h2 className="font-Quicksand text-lg sm:text-xl font-semibold text-white mt-4">
              Our trainers are dedicated to your success, providing personalized
              attention and ensuring that each learner leaves with a solid
              understanding of the subject.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-10 md:mt-6 text-center md:px-4">
        <h1 className="font-Quicksand font-bold text-3xl md:text-2xl lg:text-3xl text-[#004AAD]">
          Choose the Best Trainers
        </h1>
        <img
          src="/arrow1.svg"
          alt="Arrow Down"
          className="md:w-[200px] lg:w-[500px] md:my-2"
        />
        <h1 className="font-Quicksand font-bold text-3xl md:text-2xl lg:text-3xl text-[#004AAD]">
          For Your Career
        </h1>
      </div>

      {/* Trainers details */}
      <div className="flex flex-wrap justify-center items-center mt-10 gap-8 px-5 sm:px-10 md:px-16 mb-5">
        {trainersData.map((trainer) => (
          <div
            key={trainer.id}
            className="w-full sm:w-[350px] md:w-[400px] lg:w-[400px] rounded-2xl flex flex-col items-center shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src="trainersbg.svg"
              alt="background"
              className="w-full rounded-2xl"
            />
            <img
              src={trainer.imageUrl}
              alt={trainer.imageAlt}
              className="rounded-full w-[120px] sm:w-[130px] md:w-[155px] h-[120px] sm:h-[130px] md:h-[155px] -mt-14 border-4 border-white"
            />
            <div className="text-center px-4 mt-4">
              <h1 className="font-bold text-xl sm:text-2xl font-Quicksand">
                {trainer.name}
              </h1>
              <h2 className="mt-2 font-Quicksand font-medium text-gray-700">
                {trainer.profession}
              </h2>
              <h2 className="font-Quicksand font-medium text-gray-700">
                {trainer.experience}
              </h2>
              <h2 className="font-Quicksand font-medium text-gray-700">
                {trainer.job}
              </h2>
            </div>
            <button
              onClick={() => handleViewProfile(trainer.id)}
              className="mt-4 bg-[#0060FF] text-white rounded-2xl px-4 py-2 w-[150px] sm:w-[180px] mb-5 hover:bg-[#004AAD] transition duration-300"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrainersPage;
