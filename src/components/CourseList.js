// components/CourseList.js
"use client"; // Ensure this component is marked as a client component

import React from "react";
import Card from "./Card";
import Card2 from "./Card2";

const CourseList = ({ courseData }) => {
  return (
    <>
      
      <div className="flex flex-wrap justify-center mt-28">
        {courseData.map((card, index) => (
          <Card2 key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
