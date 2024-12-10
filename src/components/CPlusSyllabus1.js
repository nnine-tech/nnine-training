"use client";

import React, { useState } from "react";
import PythonClassType from "./PythonClassType";
import AwsCloudClassType from "./AwsCloudClassType";
import CPlusClassType from "./CPlusClassType";

const CPlusSyllabus1 = () => {
  // State to manage dropdown visibility for each section
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const syllabusSections = [
    {
      title: "Introduction to C++",
      lectures: [
        "Introduction to programming and C++",
        "Setting up development environment",
        "Basic syntax and structure of C++ programs",
      ],
      info: "3 lectures",
    },
    {
      title: "Data Types and Operators",
      lectures: [
        "Variables and data types",
        "Operators and expressions",
        "Input and output (cin, cout)",
      ],
      info: "3 lectures",
    },
    {
      title: "Control Structures",
      lectures: [
        "Control structures: if, else if, else, switch",
        "Loops: while, do-while, for",
        "Basic debugging techniques",
      ],
      info: "3 lectures",
    },
    {
      title: "Functions and Arrays",
      lectures: [
        "Functions: declaration, definition, parameters, return types",
        "Function overloading",
        "Recursion",
      ],
      info: "3 lectures",
    },
    {
      title: "Arrays and Pointers",
      lectures: [
        "Arrays: declaration, initialization, accessing elements",
        "Multi-dimensional arrays",
        "Pointers and memory management basics",
      ],
      info: "3 lectures",
    },
    {
      title: "Dynamic Memory Allocation",
      lectures: [
        "Pointers and arrays",
        "Dynamic memory allocation: new and delete operators",
      ],
      info: "2 lectures",
    },
    {
      title: "Object-Oriented Programming Basics",
      lectures: [
        "Introduction to OOP concepts",
        "Classes and objects: declaration, instantiation",
        "Class members: attributes, methods",
      ],
      info: "3 lectures",
    },
    {
      title: "Constructors and Destructors",
      lectures: [
        "Constructors and destructors",
        "Access specifiers: public, private, protected",
        "Static members and functions",
      ],
      info: "3 lectures",
    },
    {
      title: "Inheritance and Polymorphism",
      lectures: [
        "Inheritance: single, multiple, multilevel",
        "Polymorphism: function overriding, virtual functions",
        "Abstract classes and pure virtual functions",
      ],
      info: "3 lectures",
    },
    {
      title: "Templates and Standard Template Library (STL)",
      lectures: [
        "Introduction to templates",
        "Function templates",
        "Class templates",
        "Standard Template Library (STL) overview",
      ],
      info: "4 lectures",
    },
    {
      title: "Advanced Features",
      lectures: [
        "Exception handling",
        "File handling: reading from and writing to files",
        "Streams and file manipulation",
      ],
      info: "3 lectures",
    },
    {
      title: "Advanced Concepts and Project Work",
      lectures: [
        "Smart pointers: unique_ptr, shared_ptr, weak_ptr",
        "Move semantics and rvalue references",
        "Lambda expressions",
        "Standard Library algorithms and iterators",
        "Multithreading basics",
      ],
      info: "5 lectures",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row sm:flex-row sm:mt-4 ml-20 mb-10">
      <div className="w-[65%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl ml-8 p-[10px] font-poppins mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div key={index} className={`relative lg:w-full w-[250px] max-w-[800px]`}>
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all ${
                  !openDropdowns[section.title] &&
                  index !== syllabusSections.length - 1
                    ? "border-b-5"
                    : ""
                }`}
              >
                <div
                  className="flex items-center p-[10px] cursor-pointer"
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
                <div className="w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
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
      <div className="ml-[-65px] md:ml-[20px]">
      <CPlusClassType />
      </div>
    </div>
  );
};

export default CPlusSyllabus1;
