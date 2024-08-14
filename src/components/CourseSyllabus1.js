"use client";

import React, { useState } from "react";
import MernSchedule from "./MernSchedule";

const CourseSyllabus1 = () => {
  // State to manage dropdown visibility for each section
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Array of syllabus sections
  const syllabusSections = [
    {
      title: "Introduction",
      lectures: [
        "Introduction to MERN stack",
        "Introduction to Javascript programming language",
        "Technologies around Javascript",
      ],
      info: "7 lectures • 1 hour",
    },
    {
      title: "Environment Setup",
      lectures: [
        "Introduction to development tools",
        "Text Editor, IDE",
        "Command Prompt(command line)",
        "Node setup",
        "Postman",
      ],
      info: "7 lectures • 1 hours",
    },
    {
      title: "Javascript",
      lectures: [
        "Overview of Javascript",
        "Variables",
        "Operator and Operands",
        "Conditionals and Iterations",
        "Data types and coercion",
        "A brief introduction to data structures like stack, queues, array, and objects Debugging a jS code",
        "JS naming conventions",
        "A brief introduction to javascript functions and classes",
      ],
      info: "7 lectures • 1 hours",
    },
    {
      title: "EcmaScript and Modern Javascript",
      lectures: [
        "Need of ES language specification Understanding of transpilers and polyfills",
        "CommonJs vs ES modules",
        "Deep guide to modern ES6+ features",
        "Brief introduction to Typescript",
        "TypeScript Vs JavaScript",
      ],
      info: "7 lectures • 1 hours",
    },
    {
      title: "JS-under the hood",
      lectures: [
        "Hoisting",
        "Block/Global/Local Scopes and Temporal Dead Zones Scopes and Closures",
        "Prototypes",
        "Asynchronous javascript and WebAPIs usages",
        "Global execution context",
        "Event loops",
      ],
      info: "7 lectures • 1 hours",
    },
    {
      title: "Javascript Functions",
      lectures: [
        "Arguments and Parameters",
        "Functions declaration and executions",
        "ES6 arrow functions",
        "Callback functions",
        "Higher Order Functions",
      ],
      info: "7 lectures • 1 hours",
    },
    {
      title: "Node js",
      lectures: [
        "Nodejs",
        "Introduction to nodejs",
        "Requirements for nodejs",
        "Nodejs and it’s usages",
        "Setup nodejs",
        "NPM (Node package Manager)",
        "Introduction to NPM",
        "Global Vs Local Installation",
        "The package.json file",
        "Attributes of Package.json",
        "Installing and uninstalling packages using npm",
        "Introduction to dependency and dev-dependency",
      ],
      info: "7 lectures • 1 hours",
    },
    {
      title: "Express js",
      lectures: [
        "Introduction to Express JS",
        "Introduction to framework and Express",
        "Setting up an express application",
        "Express exercise: Creating a hello world application using express",
      ],
      info: "7 lectures • 1 hours",
    },
  ];

  return (
    <div className="w-full  flex flex-col md:flex-row sm:flex-row sm:mt-4">
      <div className="w-[80%] flex flex-col">
      <div className="w-full">
  <h1 className="font-bold text-3xl ml-8 p-[10px] font-poppins mb-[37px] text-[#003366]">
    Course Syllabus
  </h1>
  {syllabusSections.map((section, index) => (
    <div key={index} className={`relative mx-auto`}>
      <div
        className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all ${
          !openDropdowns[section.title] && index !== syllabusSections.length - 1
            ? "border-b-5"
            : ""
        }`}
        style={{ width: '100%', maxWidth: '800px', minWidth: '300px' }} // Setting max and min widths
      >
        <div
          className="flex items-center p-[10px]"
          onClick={() => toggleDropdown(section.title)}
        >
          <button className="dropdown-button mr-2">
            <img
              src="/dropdown.svg"
              alt="Toggle Dropdown"
              className="mr-0 w-[11px] h-[14px]"
            />
          </button>
          <span className="font-semibold font-poppins">
            {section.title}
          </span>
          <span className="hidden md:block text-right ml-auto font-poppins">
            {section.info}
          </span>
        </div>
      </div>
      {openDropdowns[section.title] && (
        <div className="relative w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
          <ul className="p-2">
            {section.lectures.map((lecture, idx) => (
              <li key={idx} className="py-1">
                <span className="mx-1">•</span>
                {lecture}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>

      </div>
      <MernSchedule />
    </div>
  );
};

export default CourseSyllabus1;
