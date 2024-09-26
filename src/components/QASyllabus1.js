"use client";
import React, { useState } from "react";
import QAClassType from "./QAClassType";
const QASyllabus1 = () => {
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
      title: "Fundamentals of Testing",
      lectures: [
        "Understanding QA/QC/Testing",
        "Human Errors and Their Impact",
        "Testing vs. Debugging",
        "Importance of Software Quality",
      ],
      info: "6 lectures • 2 hours",
    },
    {
      title: "Software Requirements and Testing Process",
      lectures: [
        "Characteristics of Good Requirements",
        "Testing Objectives and Correctness",
        "Software Requirement Types",
        "Testing Process Overview",
      ],
      info: "5 lectures • 1.5 hours",
    },
    {
      title: "Testing Techniques",
      lectures: [
        "Input Space Analysis",
        "Psychology and Principles of Testing",
        "Test Metrics and Measurement",
        "Software Development Life Cycle (SDLC) and Models",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Black Box Testing",
      lectures: [
        "Techniques: Equivalence Class Partitioning, Boundary Value Analysis",
        "State Transition, Cause Effect Graphing, Decision Table",
        "Use Case Testing and Advanced Techniques",
      ],
      info: "8 lectures • 2.5 hours",
    },
    {
      title: "White Box Testing",
      lectures: [
        "Coverage: Statement, Branch, Condition, Path",
        "Advanced Techniques and Tool Support",
        "Gray Box, Intuitive, and Experience-Based Testing",
      ],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "Verification and Validation",
      lectures: [
        "Inspection, Walkthrough, Reviews",
        "Validation: Unit, Integration, Functional, System, Acceptance",
        "Alpha and Beta Testing",
      ],
      info: "3 lectures • 1.5 hours",
    },
    {
      title: "Types and Levels of Testing",
      lectures: [
        "Usability, Performance, Load, Stress, Security Testing",
        "Alpha, Beta, Sanity, Smoke, Regression, Mutation Testing",
      ],
      info: "8 lectures • 3 hours",
    },
    {
      title: "Test Cases and Management",
      lectures: [
        "Test Case Design and Templates",
        "Test Scenario vs. Test Case",
        "Test Management, Strategy, and Activity",
        "Incident, Configuration, and Bug Management",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Introduction to Automation Testing",
      lectures: ["Benefits and Drawbacks", "Factors and Tools Selection"],
      info: "3 lectures • 4 hours",
    },
    {
      title: "Selenium WebDriver",
      lectures: [
        "Components Overview",
        "Installation and Configuration",
        "Object Identification and Locators",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "API Testing with Postman",
      lectures: [
        "Basics and Navigation",
        "REST and SOAP Introduction",
        "Creating and Testing Requests",
        "Collections, Environments, and Workflows",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Performance Testing with JMeter",
      lectures: [
        "Core Concepts and Components",
        "Recording and Execution",
        "Parameterization and Correlation",
        "Dashboard Reporting and Plugins",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Mobile App Testing",
      lectures: [
        "Overview and Types of Mobile Apps",
        "Challenges and Testing Tours",
        "Android Automation with Appium",
        "Testing on Real and Virtual Devices",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Bug Reporting with JIRA",
      lectures: [
        "Project Setup and Configuration",
        "Adding Users and Issues",
        "Managing Bugs and Defects",
        "Classification and Prioritization",
      ],
      info: "7 lectures • 3 hours",
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
            <div
              key={index}
              className={`relative w-full max-w-[800px]`}
            >
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
      <QAClassType/>
    </div>
  );
};
export default QASyllabus1;
