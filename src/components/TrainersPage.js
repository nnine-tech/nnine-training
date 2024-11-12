<<<<<<< Updated upstream
import React from 'react';
import TrainerProfile from '@/components/TrainersProfile'

const TrainersPage = () => {
  const trainersData = [
    {
      imageUrl:'/img.png',
      imageAlt: 'deepak.jpg',
      name: 'Deepak Bomjan',
      description: 'Mr. Bomjan is a highly regarded Certified DevOps trainer, boasting over 15 years of invaluable industry experience. His expertise stems from years of hands-on work as a system engineer at prestigious firms such as CAS and Logpoint. Renowned for his adeptness in enterprise training, Mr. Bomjan brings a wealth of practical knowledge and real-world insights to his teaching.',
    },
    {
      imageUrl: '/jaya.png',
      imageAlt: 'jaya.jpg',
      name: 'Jaya Kumar Neupane',
      description: 'Meet our Oracle-Certified trainer, boasting an impressive 15-year tenure in the field. With a wealth of experience under their belt, they bring unparalleled expertise and insight to every session.',
    },
    {
      imageUrl: '/kumar.jpg',
      imageAlt: 'kumar.jpg',
      name: 'Kumar Lamichhane',
      description: 'Presenting our Java-Certified trainer, bringing a decade of extensive experience to the table. With a strong foundation in Java development and training, they offer unparalleled expertise and guidance to learners at every level',
    },
    {
      imageUrl: '/saurav.jpg',
      imageAlt: 'saurav',
      name: 'Saurav Gautam',
      description: 'Introducing our Data Science and Machine Learning trainer, equipped with an invaluable experience in the field. Mr. Gautam holds master degree in information and technology from Chemnitz University of Technology, Germany with a solid background in IT field, he offers comprehensive training backed by years of practical expertise.',
    },
    {
      imageUrl: '/img.png',
      imageAlt: 'niresh',
      name: 'Niresh Dhakal',
      description: 'Mr Dhakal holds Master degree from Otto-von-Guericke university, Germany. He is a RHEL Certified trainer and Full Stack Developer with more than 10 years of Academic/professional experience',
    },
    {
      imageUrl: '/sudan1.jpg',
      imageAlt: 'sudan',
      name: 'Sudan Pudasaini',
      description: 'Meet our certified .NET trainer, backed by a decade of hands-on experience. With a profound understanding of .NET technologies, they deliver expert training and mentorship to empower learners in mastering the intricacies of the platform.',
    },
    {
      imageUrl: '/raj.png',
      imageAlt: 'Raj',
      name: 'Raj Kamal Thapa',
      description: 'Introducing our seasoned Network Engineer, boasting over 15 years of extensive industry experience. With a proven track record of success, they bring a wealth of knowledge and expertise to every project, ensuring robust and efficient network solutions',
    },
    {
      imageUrl: '/gyan.png',
      imageAlt: 'Gyan',
      name: 'Gyan Bahadur Tamang',
      description: 'Meet our Oracle Certified trainer, equipped with over a decade of comprehensive industry experience. With a proven track record of success, they offer invaluable insights and expertise to guide learners towards mastery in Oracle technologies.',
    },
    {
      imageUrl: '/pradeep1.jpg',
      imageAlt: 'Pradeep',
      name: 'Pradeep Aryal',
      description: 'Mr Aryal holds a Master degree from Germany in Machine Learning and Data Science. He is working as data analyst and Machine learning engineer since last decade.',
    },
    {
      imageUrl: '/arjun.jpeg',
      imageAlt: 'Arjun',
      name: 'Arjun Subedhi',
      description: 'Meet our Full Stack Certified trainer, boasting over ten years of immersive industry experience spanning the entire stack. With a solid history of delivering results, they provide invaluable insights and expertise to empower learners on their journey to mastering a diverse array of technologies.',
    },


    
    // Add more trainer profiles as needed
  ];


  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
        <br />
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trainersData.map((trainer, index) => (
            <div key={index} className="flex items-center justify-center">
              <TrainerProfile {...trainer} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
=======
<<<<<<< HEAD
import React from "react";

const TrainersPage = () => {
  return <div>TrainersPage</div>;
=======
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
      <div
        style={{
          backgroundImage: "url('coursecurve.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "850px",
        }}
        className="flex justify-center items-center"
      >
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

      <div className="flex items-center justify-center flex-col mt-10">
        <h1 className="font-Quicksand font-bold text-3xl text-[#004AAD]">
          Choose the Best Trainers
        </h1>
        <img src="/arrow1.svg" alt="Arrow Down" />
        <h1 className="font-Quicksand font-bold text-3xl text-[#004AAD]">
          For Your Career
        </h1>
      </div>

      {/* Trainers details */}
      <div className="flex flex-wrap justify-center items-center mt-10 gap-8 px-5 sm:px-10 md:px-16 mb-5">
        {trainersData.map((trainer) => (
          <div
            key={trainer.id}
            className="w-full sm:w-[350px] md:w-[400px] lg:w-[400px] rounded-2xl flex flex-col items-center shadow-lg bg-white"
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
              className="mt-4 bg-[#004AAD] text-white rounded-2xl px-4 py-2 w-[150px] sm:w-[180px] mb-5"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </>
  );
>>>>>>> d75bde9c71b427e452eeb3aaaf377b8a6754eb88
>>>>>>> Stashed changes
};

export default TrainersPage;
