// components/CourseList.js
"use client"; // Ensure this component is marked as a client component

import React from "react";
import Card2 from "./Card2";

const CourseList = ({ courseData }) => {
  return (
    <div>

<div className="flex flex-col justify-center items-center mt-8 px-4">
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-Quicksand text-[#004AAD] text-center">
    Explore our courses
  </h1>
  <img src="Arrow1.svg" alt="Arrow" className="mt-2 w-[300px] sm:w-10 md:w-[300px] lg:w-[550px]" />
</div>

      <div className="flex flex-wrap justify-center mt-28">


        {courseData.map((card, index) => (
          <Card2 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
