"use client";

import React, { useState } from "react";
import UIUXClassType from "./UIUXClassType";
import WebdevelopmentClassType from "./WebdevelopmentClassType";


const WebdevelopmentSyllabus1 = () => {
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
      title: "Foundations of Web Development",
      lectures: [
        "Understanding the History of Web/Mobile Development",
        "Research, Wireframing, and Prototyping Techniques",
        "Introduction to Mockup Designing with Adobe Photoshop/Fireworks",
        "Exploring the Psychology of Color and Typography in Web Design",
        "Tools and Methods for Mockup Design and Vector Design",
        "Project Work: Designing Mockup",
      ],
      info: "6 lectures • 1 hour",
    },
    {
      title: "HTML5 and CSS3 Fundamentals",
      lectures: [
        "Semantic Markup with HTML5",
        "Structural Tags and XHTML vs. HTML5 Elements",
        "HTML5 Forms and CSS3 Styling",
        "CSS3 Layouts and Box Model",
        "Selectors and Responsive Design with Media Queries",
        "Fonts, Effects, and Frameworks",
      ],
      info: "6 lectures • 1 hour",
    },
    {
      title: "Introduction to JavaScript and jQuery",
      lectures: [
        "JavaScript Basics: Objects, Properties, and Methods",
        "Understanding the Document Object Model (DOM)",
        "Introduction to jQuery and its Features",
        "Implementing JavaScript and jQuery in Live Projects",
        "Final Project: Assessments of HTML, CSS, and JavaScript Skills",
      ],
      info: "5 lectures • 1 hour",
    },
    {
      title: "PHP/MySQL Development",
      lectures: [
        "Server Installation and PHP Background",
        "PHP Syntax, Data Types, and Debugging",
        "Web Concepts and Embedding PHP into HTML",
        "Arrays, Operators, and Control Structures",
        "Form Handling and Global Variables",
        "Functions, Templating, and String Manipulation",
      ],
      info: "6 lectures • 1 hour",
    },
    {
      title: "Database Management with MySQL",
      lectures: [
        "Introduction to Database and RDBMS Technology",
        "SQL Basics: Database Creation, Table Operations",
        "Database Management Tools and MySQL Workbench Usage",
        "CRUD Operations: Inserting, Updating, Deleting Data",
        "Working with Queries and Altering Table Structures",
      ],
      info: "5 lectures • 1 hour",
    },
    {
      title: "Web Security in PHP",
      lectures: [
        "Understanding Web Security Principles",
        "Security Concerns in MySQL and Preventing SQL Injection",
        "Handling Cross-Site Scripting (XSS) Vulnerabilities",
        "Final Project Courses Outline",
        "File Upload Using FileZilla/CuteFTP",
        "CPanel/Webmail and Domain Registration",
        "Concepts of Pre-Processors: Less, Sass",
        "Tips for Enhancing Front-End Development",
        "Pro Tips for Job Interviews",
      ],
      info: "9 lectures • 2 hours",
    },

    {
        title: "Final Project Courses Outline",
        lectures: [
            "File Upload Using FileZilla/CuteFTP",
            "CPanel/Webmail and Domain Registration",
            "Concepts of Pre-Processors: Less, Sass",
            "Tips for Enhancing Front-End Development",
            "Pro Tips for Job Interviews"
        ],
        info: "9 lectures • 2 hours",
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
      <WebdevelopmentClassType/>
    </div>
  );
};

export default WebdevelopmentSyllabus1;
