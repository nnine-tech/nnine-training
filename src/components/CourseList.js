// components/CourseList.js
"use client"; // Ensure this component is marked as a client component

import React from "react";
import Card2 from "./Card2";

const CourseList = ({ courseData }) => {
  return (
    <div className="w-screen flex items-center justify-center">
      <div className="w-[1421px] flex flex-wrap justify-center md:-mt-52 -mt-36 ">
        {courseData.map((card, index) => (
          <Card2 key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
