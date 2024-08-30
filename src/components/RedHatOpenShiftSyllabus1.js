"use client";

import React, { useState } from "react";

import GraphicDesignClassType from "./GraphicDesignClassType";

const RedHatOpenShiftSyllabus1 = () => {
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
      title: "Course Introduction",
      lectures: [
        "Welcome to Hands-on with Podman Containers on Linux",
      ],
      info: "1 lecture",
    },
    {
      title: "Introduction to Containers and Podman",
      lectures: [
        "Understanding Containers and Pods",
        "Introducing Podman, Skopeo, and Buildah",
      ],
      info: "2 lectures",
    },
    {
      title: "Managing Container Images Using Podman",
      lectures: [
        "Understanding Container Images",
        "Installing and Configuring Podman on RHEL",
        "Working with Container Images Using Podman and Skopeo - Part 1",
        "Working with Container Images Using Podman and Skopeo - Part 2",
        "HANDS-ON LAB: Managing Container Images Using Podman and Skopeo on RHEL",
      ],
      info: "5 lectures",
    },
    {
      title: "Managing Containers Using Podman",
      lectures: [
        "Running Your First Podman Container",
        "Managing Containers Using Podman",
        "Managing Container Storage Using Podman",
        "Managing Container Networking Using Podman",
        "Monitoring Containers Using Podman",
        "HANDS-ON LAB: Running Your First Podman Container on RHEL",
        "HANDS-ON LAB: Advanced Container Management Using Podman on RHEL",
      ],
      info: "7 lectures",
    },
    {
      title: "Managing Pods Using Podman",
      lectures: [
        "Understanding Pods",
        "Creating Your First Podman Pod",
        "Managing Pods Using Podman",
        "HANDS-ON LAB: Managing Pods Using Podman on RHEL",
      ],
      info: "4 lectures",
    },
    {
      title: "Creating Container Images Using Buildah",
      lectures: [
        "Introducing Buildah and Dockerfiles",
        "Creating a Container Image Using Buildah and a Dockerfile",
        "Creating a Container Image Using Buildah Native Commands",
        "Using Buildah to Manage Container Images - Part 1",
        "Using Buildah to Manage Container Images - Part 2",
        "HANDS-ON LAB: Customizing Container Images Using Podman and Buildah on RHEL",
      ],
      info: "6 lectures",
    },
    {
      title: "Exploring Podman and Kubernetes Interoperability",
      lectures: [
        "Introduction to Kubernetes YAML Files",
        "Using Podman to Create a Kubernetes YAML File",
        "Running a Pod from a Podman-Generated Kubernetes YAML File Using Podman",
        "Running a Pod from a Podman-Generated Kubernetes YAML File Using Kubernetes",
        "HANDS-ON LAB: Exploring Podman and Kubernetes Interoperability on RHEL",
      ],
      info: "5 lectures",
    },
    {
      title: "Using Podman to Create systemd Containers and Pods",
      lectures: [
        "Introduction to systemd Containers",
        "Configuring Persistent systemd Containers and Pods",
        "HANDS-ON LAB: Use Podman to Create Persistent systemd Containers and Pods on RHEL",
      ],
      info: "3 lectures",
    },
    {
      title: "Managing Podman Containers Using Cockpit",
      lectures: [
        "Introduction to Cockpit",
        "Managing Podman Containers Using Cockpit",
        "HANDS-ON LAB: Manage Podman Containers Using Cockpit on RHEL",
      ],
      info: "3 lectures",
    },
    {
      title: "Conclusion",
      lectures: [
        "Hands-on with Podman Containers on Linux - A Review",
        "Conclusion and What’s Next",
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
      <GraphicDesignClassType/>
    </div>
  );
};

export default RedHatOpenShiftSyllabus1;