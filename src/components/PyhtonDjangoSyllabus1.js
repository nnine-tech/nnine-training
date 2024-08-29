"use client";

import React, { useState } from "react";
import PythonDjangoClassType from "./PythonDjangoClassType";

const PythonDjangoSyllabus1 = () => {
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
      title: "Python Basics",
      lectures: [
        "Introduction to Python: Overview of Python, installation, basic syntax, data types, variables, and operators",
        "Control Flow and Functions: Conditional statements, loops, functions, parameters, return values, and scope",
        "Data Structures and Algorithms: Lists, tuples, dictionaries, sets, comprehensions, sorting algorithms, searching algorithms",
      ],
      info: "3 lectures",
    },
    {
      title: "Object-Oriented Programming (OOP) in Python",
      lectures: [
        "Classes and Objects: Defining classes, creating objects, attributes, methods, constructors, and inheritance",
        "Advanced OOP Concepts: Encapsulation, polymorphism, method overriding, class and static methods",
      ],
      info: "2 lectures",
    },
    {
      title: "Introduction to Django",
      lectures: [
        "Setting up Django: Installation, project structure, understanding Django settings, and managing applications",
        "Django Models and ORM: Defining models, database migrations, querying data using Django ORM",
      ],
      info: "2 lectures",
    },
    {
      title: "Building Web Applications with Django",
      lectures: [
        "Views and Templates: Creating views, rendering templates, passing data to templates, URL routing",
        "Forms and Form Handling: Creating HTML forms, form validation, handling form submissions, form widgets",
      ],
      info: "2 lectures",
    },
    {
      title: "Advanced Django Concepts",
      lectures: [
        "Authentication and Authorization: User authentication, session management, permissions, and role-based access control",
        "Django REST Framework: Building RESTful APIs, serializers, views, authentication, and testing",
      ],
      info: "2 lectures",
    },
    {
      title: "Deployment and Project",
      lectures: [
        "Deploying Django Applications: Hosting options, deploying Django applications on platforms like Heroku, AWS, or DigitalOcean",
        "Capstone Project: Building a real-world Django application from scratch, integrating various Django concepts",
      ],
      info: "2 lectures",
    },
];

  
  return (
    <div className="w-full flex flex-col md:flex-row sm:flex-row sm:mt-4">
      <div className="w-[80%] flex flex-col mt-14">
      <div className="w-full">
  <h1 className="font-bold text-3xl ml-8 p-[10px] font-poppins mb-[37px] text-[#003366]">
    Course Syllabus
  </h1>
  {syllabusSections.map((section, index) => (
    <div key={index} className={`relative mx-auto w-[400px] md:w-full`}>
      <div
        className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all   ${
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
      <PythonDjangoClassType/>
    </div>
  );
};

export default PythonDjangoSyllabus1;
