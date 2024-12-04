"use client";

import React, { useState } from "react";
import PythonClassType from "./PythonClassType";
import AwsCloudClassType from "./AwsCloudClassType";
import AspNetClassType from "./AspNetClassType";

const AspNetSyllabus1 = () => {
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
      title: "Introduction to ASP.NET Framework",
      lectures: [
        "Overview of ASP.NET Framework",
        "Understanding the MVC (Model-View-Controller) architecture",
        "Setting up the development environment (Visual Studio, .NET Framework)",
        "Creating a new ASP.NET MVC project",
      ],
      info: "4 lectures",
    },
    {
      title: "Building Models",
      lectures: [
        "Introduction to Models in ASP.NET MVC",
        "Creating Entity Classes",
        "Data Annotations for Validation",
        "Working with Entity Framework for Database Connectivity",
      ],
      info: "4 lectures",
    },
    {
      title: "Creating Views",
      lectures: [
        "Introduction to Views in ASP.NET MVC",
        "Using Razor Syntax for Dynamic Content",
        "Layouts and Partial Views",
        "HTML Helpers for Form Elements",
      ],
      info: "4 lectures",
    },
    {
      title: "Controller and Routing",
      lectures: [
        "Understanding Controllers and Actions",
        "Defining Routes in ASP.NET MVC",
        "Handling HTTP Requests (GET, POST, PUT, DELETE)",
        "Implementing CRUD Operations in Controllers",
      ],
      info: "4 lectures",
    },
    {
      title: "Working with Data",
      lectures: [
        "Integrating Entity Framework for Data Access",
        "Repository Pattern for Data Layer Abstraction",
        "LINQ (Language Integrated Query) for Data Manipulation",
        "Database Migrations and Code-First Approach",
      ],
      info: "4 lectures",
    },
    {
      title: "Implementing CRUD Operations",
      lectures: [
        "Creating Views for CRUD Operations",
        "Implementing Create, Read, Update, and Delete actions in Controllers",
        "Form Validation and Error Handling",
        "Displaying Data in Views",
      ],
      info: "4 lectures",
    },
    {
      title: "Security and Authentication",
      lectures: [
        "Authentication and Authorization in ASP.NET MVC",
        "Implementing User Registration and Login Functionality",
        "Role-Based Access Control (RBAC)",
        "Securing Controllers and Actions",
      ],
      info: "4 lectures",
    },
    {
      title: "Advanced Topics",
      lectures: [
        "Working with Ajax and jQuery for Asynchronous Operations",
        "Implementing Search and Pagination Functionality",
        "Error Logging and Exception Handling",
        "Performance Optimization Techniques",
      ],
      info: "4 lectures",
    },
  ];

  return (
    <>
      <div className=" flex flex-col md:flex-row sm:flex-row ml-20 mb-5">
        <div className=" lg:w-[60%] flex flex-col mt-14">
          <div className="w-full">
            <h1 className="font-bold text-3xl  p-[10px] font-Quicksand mb-[37px] text-[#003366]">
              Course Syllabus
            </h1>
            {syllabusSections.map((section, index) => (
              <div key={index} className={`relative lg:w-full max-w-[800px] w-[250px]`}>
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
                    <span className="font-semibold font-Quicksand">
                      {section.title}
                    </span>
                    <span className="hidden md:block text-right ml-auto font-Quicksand">
                      {section.info}
                    </span>
                  </div>
                </div>
                {openDropdowns[section.title] && (
                  <div className="w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
                    <ul className="p-2">
                      {section.lectures.map((lecture, idx) => (
                        <li key={idx} className="py-1 font-Quicksand">
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
        <div className="ml-[-65px] md:ml-12">
          <AspNetClassType />
        </div>
      </div>
    </>
  );
};

export default AspNetSyllabus1;
