"use client";
import React from "react";

const TrainersDetails = ({ trainerId }) => {
  if (!trainerId) {
    return <div>Loading...</div>;
  }

  const trainerData = {
    1: {
      name: "Deepak",
      surname: "Bomjan",
      image: "/img.png",
      imagealt: "kuram.jpg",
      profession:
        "Certified DevOps Trainer & System Engineer at CAS & Logpoint",
      experience: "15 years",
      location: "Sundarijal, Kathmandu",
      star: "5.0 (100)",
      skill1: "verilog",
      skill2: "UVM",
      skill3: "VLSI",
      skill4: "RTL Design",
      skill5: "System Verilog",
      linkedln: "https://www.linkedin.com/in/deepakbomjan64050/",
      about:
        "Mr. Bomjan is a highly regarded Certified DevOps trainer, boasting over 15 years of invaluable industry experience. His expertise stems from years of hands-on work as a system engineer at prestigious firms such as CAS and Logpoint. Renowned for his adeptness in enterprise training, Mr. Bomjan brings a wealth of practical knowledge and real-world insights to his teaching.",
    },
    2: {
      name: "Niresh",
      surname: "Dhakal",
      image: "/niresh1.jpg",
      imagealt: "niresh.jpg",
      profession: "Certified Machine Learning Trainer ",
      experience: "12 years",
      location: "Makalbari, Kathmandu",
      star: "5.0 (100)",
      skill1: "Python",
      skill2: "Data Structure and algorithm",
      skill3: "Docker",
      skill4: "Git ",
      skill5: "Cloud Platform",
      linkedln: "https://www.linkedin.com/in/niresh-dhakal-b39a0192/",
      about:
        "Introducing our Data Science and Machine Learning trainer, equipped with an invaluable experience in the field. Mr. Niresh holds master degree in information and technology from Chemnitz University of Technology, Germany with a solid background in IT field, he offers comprehensive training backed by years of practical expertise.",
    },
    3: {
      name: "Arjun",
      surname: "Subedi",
      image: "/arjun.jpeg",
      imagealt: "kumar.jpg",
      profession: "Certified FullStack Trainer",
      experience: "15 years",
      location: "Mulpani, Kathmandu",
      star: "5.0 (100)",
      skill1: "node.js",
      skill2: "javascript",
      skill3: "Java",
      skill4: "Database",
      skill5: "React",
      skill6: "html/css",
      linkedln: "https://www.linkedin.com/in/arjunsubedi1/",
      about:
        "Meet our Full Stack Certified trainer, boasting over ten years of immersive industry experience spanning the entire stack. With a solid history of delivering results, they provide invaluable insights and expertise to empower learners on their journey to mastering a diverse array of technologies.",
    },
    4: {
      name: "JayaKumar",
      surname: "Neupane",
      image: "/Jaya.png",
      imagealt: "kuram.jpg",
      profession: "Certified Oracle Trainer",
      experience: "15 years",
      location: "Sundarijal, Kathmandu",
      star: "5.0 (100)",
      skill1: "Java Programming",
      skill2: "Database Model",
      skill3: "Mathmatical skill",
      skill4: "Problem Solving skill",
      skill5: "Adaptability",
      linkedln: "https://www.linkedin.com/in/jay-neupane-9684011b7/",

      about:
        "Meet our Oracle-Certified trainer, boasting an impressive 15-year tenure in the field. With a wealth of experience under their belt, they bring unparalleled expertise and insight to every session.",
    },
    5: {
      name: "Gyan Bahadur ",
      surname: "Tamang",
      image: "/img.png",
      imagealt: "tamang.jpg",
      profession: "Certified Oracle Trainer",
      experience: "16 years",
      location: " Kathmandu",
      star: "5.0 (100)",
      skill1: "Java Programming",
      skill2: "Database Model",
      skill3: "Mathmatical skill",
      skill4: "Problem Solving skill",
      skill5: "Adaptability",
      linkedln: "https://www.linkedin.com/in/jay-neupane-9684011b7/",

      about:
        "Meet our Oracle Certified trainer, equipped with over a decade of comprehensive industry experience. With a proven track record of success, they offer invaluable insights and expertise to guide learners towards mastery in Oracle technologies.",
    },
    6: {
      name: "Kumar ",
      surname: "Lamichhane",
      image: "/kumar.jpg",
      imagealt: "kumar.jpg",
      profession: "Certified Java Trainer",
      experience: "10 years",
      location: " Mulpani, Kathmandu",
      star: "5.0 (100)",
      skill1: "Java Programming",
      skill2: "Database Model",
      skill3: "Mathmatical skill",
      skill4: "Problem Solving skill",
      skill5: "Adaptability",
      linkedln:
        "https://www.linkedin.com/in/kumar-lamichhane-%F0%9F%87%B3%F0%9F%87%B5-58b0a766/",

      about:
        "Presenting our Java-Certified trainer, bringing a decade of extensive experience to the table. With a strong foundation in Java development and training, they offer unparalleled expertise and guidance to learners at every level",
    },

    7: {
      name: "Anish ",
      surname: "Adhikari",
      image: "/img.png",
      imagealt: "img.jpg",
      profession: "Certified Full Stack Developer",
      experience: "8 years",
      location: " Koteshwor, Kathmandu",
      star: "5.0 (100)",
      skill1: "node.js",
      skill2: "Database Model",
      skill3: "React",
      skill4: "Express",
      skill5: "problem solving skill",
      linkedln: "https://www.linkedin.com/in/anish-adhikari-2083002ba/",

      about:
        "Meet our Full Stack Certified trainer, boasting over ten years of immersive industry experience spanning the entire stack. With a solid history of delivering results, they provide invaluable insights and expertise to empower learners on their journey to mastering a diverse array of technologies.",
    },
  };

  const trainer = trainerData[trainerId];

  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/trainersprofilebg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-[400px] sm:h-[600px] flex flex-col items-center sm:flex-row"
      >
        <div className="flex mt-32 sm:mt-96 sm:ml-16 w-[200px] sm:w-[800px]  ml-14">
          <img
            src={trainer.image}
            alt={trainer.imagealt}
            className="rounded-full h-[120px] w-[120px] sm:h-[240px] sm:w-[240px] "
          />
        </div>
        <div className="flex flex-col sm:flex-row mt-4 sm:mt-96 sm:ml-56 gap-2 sm:gap-4">
          <a
            href={trainer.linkedln}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg flex items-center p-3 shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto"
          >
            <img
              src="/linkedln.svg"
              alt="LinkedIn"
              className="h-5 w-5 sm:h-6 sm:w-6"
            />
            <h1 className="ml-2 sm:ml-3 font-Quicksand font-bold text-sm sm:text-base">
              LinkedIn
            </h1>
          </a>
        </div>
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

      <div className="flex flex-col sm:flex-row sm:px-24 mt-4 sm:mt-28 px-4 text-center sm:text-left">
        <div className="flex-1 sm:mr-10">
          <h1 className="font-Quicksand text-xl sm:text-4xl font-bold text-[#3646D2]">
            {trainer.name}{" "}
            <strong className="text-black">{trainer.surname}</strong>
          </h1>
          <h2 className="font-Quicksand font-bold mt-3 text-md sm:text-xl">
            {trainer.profession}
          </h2>
          <h2 className="font-Quicksand font-bold mt-3 text-md sm:text-xl">
            {trainer.experience}
          </h2>

          <div className="mt-5">
            <div className="flex flex-row items-center justify-center sm:justify-start">
              <img
                src="/locationtrainers.svg"
                alt="location"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h1 className="font-Quicksand font-semibold ml-3">
                {trainer.location}
              </h1>
            </div>
            <div className="flex flex-row items-center mt-3 justify-center sm:justify-start">
              <img
                src="/startrainer.svg"
                alt="rating"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <h1 className="font-Quicksand font-semibold ml-3">
                {trainer.star}
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-0 sm:ml-10 w-full sm:w-[500px] p-5 rounded-lg">
          <h1 className="text-black text-xl sm:text-4xl font-bold mb-5 font-Quicksand">
            Skills
          </h1>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              trainer.skill1,
              trainer.skill2,
              trainer.skill3,
              trainer.skill4,
              trainer.skill5,
            ].map((skill, index) => (
              <div
                key={index}
                className="rounded-full bg-[#F3F4F6] px-4 py-1 sm:py-2 text-sm font-semibold font-Quicksand"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="w-full border-t border-gray-300 mt-10 "></div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 mt-5 text-center sm:text-left max-w-full lg:max-w-[1000px] mb-9">
        <h1 className="font-Quicksand text-lg sm:text-xl lg:text-xl font-bold">
          About
        </h1>
        <p className="mt-3 font-Quicksand font-semibold text-sm sm:text-base lg:text-base">
          {trainer.about}
        </p>
      </div>

      {/* Student feedback section
      <div className="w-full border-t border-gray-300 mt-10"></div>
      <div className="px-4 sm:px-24 mt-5 text-center sm:text-left  lg:w-[700px]">
        <h1 className="font-Quicksand text-lg sm:text-xl font-bold">
          What students say
        </h1>
        <div className="flex flex-col sm:flex-row mt-4 ">
          <img
            src="/pradeep1.jpg"
            className="rounded-full h-[78px] w-[78px] mx-auto sm:mx-0"
            alt="student"
          />
          <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4">
            <h1 className="font-Quicksand text-lg sm:text-xl font-bold">
              Rima
            </h1>
            <div className="flex justify-center sm:justify-start">
              {[...Array(4)].map((_, i) => (
                <img key={i} src="/star.svg" className="h-5 w-5" alt="star" />
              ))}
            </div>
          </div>
          <p className="text-xs font-Quicksand font-bold mt-4 sm:ml-10">
            Jan 24, 2024
          </p>
        </div>
        <p className="mt-5 font-Quicksand text-sm text-gray-700 mb-28">
          locationtrainersnjdfjdnfoirjfl fdfnenfoerf kjjhflem;fke
          uhfinlajefrhfmrelkfer fiufndkf gfiufefniuds oufo nhiuarhf jfiudhfi
          hfiuhf
        </p>
      </div> */}
    </div>
  );
};

export default TrainersDetails;
