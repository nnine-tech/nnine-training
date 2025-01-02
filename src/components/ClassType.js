"use client";

import React, { useState } from "react";

const ClassType = () => {
  let [selectedClass, setSelectedClass] = useState("");

  let classes = [
    { label: "Online Class", value: "Online Class" },
    { label: "Physical Class", value: "Physical Class" },
  ];

  const handleCheckboxChange = (classType) => {
    setSelectedClass(classType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEnrollNow = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      "_blank"
    );
  };
  return (
    <div className=" md:mr-2 md:ml-5 mt-6">
      <div className="lg:w-[390px] w-[350px] bg-[#F6F9ED] rounded-xl shadow-bottom mb-4 p-4 ">
        <div className="font-poppins text-center ">
          <h1 className="text-[#000080]  text-center p-[20px] text-xl font-medium ">
            Training Available
          </h1>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="flex flex-col items start mt-2 ml-2 font-semibold">
              {classes.map((item, i) => {
                return (
                  <span key={i} className="mb-2">
                    <label htmlFor={item.value} className="ml-2">
                      {item.label}
                    </label>
                  </span>
                );
              })}
            </div>

            <div className="mt-6  ml-7 mb-6 ">
              <button
                className="bg-[#000080] w-[170px] font-bold h-[40px] text-white py-2 px-4 rounded-md"
                onClick={handleEnrollNow}
              >
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClassType;
