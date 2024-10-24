import React from "react";

const LandingTrainers = () => {
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
      alt: "Trainer 3",
      name: "Sudan",
      review:
        "Welcome to N9 Solution, your premier destination for cutting-edge expertise in DevOps, AWS, Blockchain, and game development...",
      skills: ["AWS", "Cloud Computing", "Serverless"],
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#F4A623] h-[590px] w-[1350px] mt-[20px] mb-[93px] mr-[40px] ml-[70px] rounded-tl-2xl rounded-tr-sm rounded-bl-sm rounded-br-3xl flex flex-row gap-10">
      <div className="flex justify-center items-center w-[2500px] mt-[26px] mb-[25px] ml-[100px]">
        <div className="h-[200px] w-[500px] justify-center flex flex-col text-left gap-4">
          <h1 className="font-semibold text-3xl ml-[85px]">Our Trainers</h1>
          <p className="ml-[80px]">
            Welcome to N9 Solution, your premier destination for cutting-edge
            expertise in DevOps, AWS, Blockchain, and game development...
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[2500px] mb-[25px] mt-[26px] mr-[80px] gap-7 overflow-y-scroll scrollbar-hide ">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className="bg-[#F6F8FC] h-[300px] flex justify-between p-3 border rounded-lg gap-4"
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
