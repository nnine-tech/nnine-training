// components/CourseList.js
"use client"; // Ensure this component is marked as a client component

import React from "react";
import Card from "./Card";

const CourseList = ({ courseData }) => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-wrap justify-center">
        {courseData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
