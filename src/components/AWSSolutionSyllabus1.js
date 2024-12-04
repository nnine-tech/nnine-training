"use client";
import React, { useState } from "react";
import PythonDjangoClassType from "./PythonDjangoClassType";
import AWSSolutionClassType from "./AWSSolutionClassType";
const AWSSolutionSyllabus1 = () => {
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
      title: "AWS Fundamentals",
      lectures: [
        "Introduction to AWS",
        "AWS Identity and Access Management (IAM)",
      ],
      info: "6 lectures • 2 hours",
    },
    {
      title: "Compute Services",
      lectures: ["Amazon EC2 (Elastic Compute Cloud)", "AWS Lambda"],
      info: "5 lectures • 1.5 hours",
    },
    {
      title: "Storage Services",
      lectures: [
        "Amazon S3 (Simple Storage Service)",
        "Amazon EBS (Elastic Block Store)",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Database Services",
      lectures: ["Amazon RDS (Relational Database Service)", "Amazon DynamoDB"],
      info: "8 lectures • 2.5 hours",
    },
    {
      title: "Networking Services",
      lectures: ["Amazon VPC (Virtual Private Cloud)", "AWS Direct Connect"],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "Application Integration Services",
      lectures: ["Amazon API Gateway", "Amazon SQS (Simple Queue Service)"],
      info: "3 lectures • 1.5 hours",
    },
    {
      title: "Monitoring and Management Services",
      lectures: ["Amazon CloudWatch", "AWS CloudFormation"],
      info: "8 lectures • 3 hours",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row sm:flex-row ml-20 mb-4 sm:mt-4">
      <div className="w-[65%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl p-[10px] font-Quicksand mb-[37px] text-[#003366]">
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
        <AWSSolutionClassType />
      </div>
    </div>
  );
};
export default AWSSolutionSyllabus1;
