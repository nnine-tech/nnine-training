// components/CourseList.js
"use client"; // Ensure this component is marked as a client component

import React from "react";
import Card2 from "./Card2";

const CourseList = ({ courseData }) => {
  return (
    <div>



      <div className="flex flex-wrap justify-center -mt-80">


        {courseData.map((card, index) => (
          <Card2 key={index} {...card}  />
        ))}
      </div>
    </div>
  ); 
};

export default CourseList;
