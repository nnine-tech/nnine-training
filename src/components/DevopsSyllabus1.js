"use client";

import React, { useState } from "react";
import DevopsClassType from "./DevopsClassType";

const DevopsSyllabus1 = () => {
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
      title: "Introduction",
      lectures: [
        "Course Features and Tools",
        "What is DevOps?",
        "A brief overview of the history of DevOps",
      ],
      info: "3 lectures,  1 hrs",
    },
    {
      title: "DevOps Culture",
      lectures: [
        "The Goals of DevOps",
        "DevOps vs Traditional Silos",
      ],
      info: "2 lectures, 1 hrs",
    },
    {
      title: "DevOps Concepts and Practices",
      lectures: [
        "Build Automation",
        "Continuous Integration",
        "Continuous Delivery and Continuous Deployment",
        "Infrastructure as Code",
        "Configuration Management",
        "Container Orchestration",
        "Monitoring",
        "Microservices",
      ],
      info: "8 lectures,  6 hr",
    },
    {
      title: "DevOps Tools",
      lectures: [
        "Introduction to DevOps Tools",
        "Tools for Build Automation and Continuous Integration",
        "Tools for Configuration Management",
        "Tools for Virtualization and Containerization",
        "Tools for Monitoring",
        "Tools for Orchestration",
      ],
      info: "6 lectures, 5 hr 30 min",
    },
    {
      title: "Source Code Management",
      lectures: [
        "Git Basics",
        "The Basics of Using Git",
        "Understanding the Git Filesystem",
        "Creating a Local Repository (Empty)",
        "Basic Configuration of Git",
        "Adding Files to Project",
        "The Status of your project",
        "Committing to Git",
        "Ignoring Certain File Types",
        "HOL: Creating Local Repositories with Git and Adding/Checking in Files",
      ],
      info: "10 lectures, 5 hr",
    },
    {
      title: "Tags, Branching, Merging and Reverting",
      lectures: [
        "Using Tags",
        "Using Branches",
        "Merging Branches",
        "Rebasing",
        "Reverting a Commit",
        "Using the 'diff' Command",
      ],
      info: "6 lectures,  4 hr ",
    },
    {
      title: "Git's Logs and Auditing",
      lectures: [
        "Using Git's Logs",
      ],
      info: "1 lecture, 15 min",
    },
    {
      title: "Cloning Repositories",
      lectures: [
        "Cloning Local Repositories",
        "Cloning Remote Repositories over HTTPS, SSH",
        "Forking",
        "HOL: Securing Your Github Account with SSH Keys",
        "HOL: Cloning a Remote GitHub Repository",
      ],
      info: "5 lectures, 5 hr",
    },
    {
      title: "Push, Pull, and Tracking Remote Repositories",
      lectures: [
        "Tracking Remote Repositories",
        "Pushing to Remote Repositories",
        "Pull Requests",
      ],
      info: "3 lectures,  2 hr",
    },
    {
      title: "Git Branching Strategy",
      lectures: [
        "What is a branching strategy?",
        "Why you need a branching strategy",
        "What are some common Git branching strategies?",
        "GitFlow",
        "GitHub Flow",
        "GitLab Flow",
        "Trunk-based Development",
      ],
      info: "7 lectures, 3 hr ",
    },
    {
      title: "Build Automation and Continuous Integration",
     lectures: [
        
         
            "Introducing Build Automation",
            "Build Automation Tools",
            "gradle",
            "npm",
            "make",
            "Packer",
            "HOL: Creating Build Automation with Gradle",
            "HOL: Automate AMI image creation with Packer",
            "CI Overview",
            "Installing Jenkins",
            "Scripted vs. Declarative Pipelines",
            "Scripted Pipelines",
            "Declarative Pipelines",
            "Groovy and DSL",
            "Jenkinsfile Basics",
            "Upstream, Downstream, and Triggers",
            "Artifacts and Fingerprints",
            "Linking Jobs",
            "Automating Jobs",
            "HOL: Linking Jobs in Jenkins",
            "HOL: Building multibranch build job with dependency between multiple job FreeStyle Jobs",
            "Basic Job Structure",
            "Parameters",
            "Notifications",
            "HOL: Building a Freestyle Job in Jenkins",
            "Agents and Distributed Builds",
            "Setting up a Build Agent",
            "Distributing a Build",
            "HOL: Distributing a Jenkins Build",
            "Jenkins on the Command Line",
            "Using the Jenkins API",
            "Using the Jenkins CLI",
          ],
          info: "7 lectures, 7 hr",
    

      
    },
    {
      title: "Continuous Delivery and Continuous Deployment",
      lectures: [
        "What is Continuous Delivery and Continuous Deployment?",
        "Continuous Delivery vs. Continuous Deployment",
        "Bringing CI and CD (and CD) Together",
        "Continuous Delivery Release Automation",
        "Automated Deployment",
        "Configuration Management",
        "HOL: Implementing Automated Deployment Through a Jenkins Pipeline",
        "HOL: Provide Continuous Delivery with GitHub and Terraform Cloud for AWS",
        "Infrastructure Provisioning",
        "Configuration Management",
        "Continuous Integration/Deployment",
        "Config/Secret Management",
        "Logging and Monitoring",
        "IaC and Its Benefits",
            "Cloud Agnostic IaC with Terraform",
            "What is the Terraform Workflow?",
            "Terraform Key Concepts: Plan, Apply, and Destroy",
            "Resource Addressing in Terraform: Understanding Terraform Code",
            "Terraform Fundamentals",
            "Terraform State",
            "Terraform Variables and Outputs",
            "Terraform Provisioners",
            "HOL: Deploying a VM in AWS Using the Terraform Workflow",
            "HOL: Using Terraform Provisioner to Setup an Nginx Proxy on AWS",
            "Terraform Modules",
            "Accessing and Using Terraform Modules",
            "Interacting with Terraform Module Inputs and Outputs",
            "HOL: Building and Testing a Basic Terraform Module",
            "Built-in Functions and Dynamic Blocks",
            "Terraform Built-in Functions",
            "Terraform Dynamic Blocks",
            "HOL: Using Terraform Dynamic Blocks and Built-in Functions to Deploy to AWS",
      ],
      info: "8 lectures, 8 hr",
    },
    {
      title: "Configuration Management with Ansible",
      lectures: [
        "What is Configuration Management?",
        "What is Ansible?",
        "Installation and Configuration",
        "HOL: Deploying Ansible",
        "HOL: Getting Started with Ansible",
        "HOL: Ad-Hoc Ansible Commands",
        "HOL: Working with Ansible Inventories",
        "Ansible Tasks",
        "Plays and Playbooks",
        "HOL: Ansible Playbooks: The Basics",
        "HOL: Working with Ansible Templates, Variables, and Facts",
        "HOL: Deploying Services Using Ansible",
        "HOL: Advanced Features in Ansible Playbooks",
        "Roles",
        "HOL: Working with Ansible Roles",
        "Ansible Vault",
        "HOL: Working with Confidential Data in Ansible",
        "Building Playbooks for Jenkins Master Setup",
        "Building Playbooks for Jenkins Worker Setup",
        "Building Jinja2 Templates for Ansible Playbooks",
      ],
      info: "19 lectures,  9 hr",
    },
    {
      title: "Containers and Orchestration",
      lectures: 
        
          [
            "Installing Docker Community Edition",
            "Docker Basics",
            "Docker Commands",
            "Creating Containers",
            "Exposing Container Ports",
            "Executing Container Commands",
            "Docker Logging",
            "Networking",
            "Storage and Volumes",
            "Selecting a Storage Driver",
            "Running a Container",
            "Namespaces and Cgroups",
            "HOL: Installing and Configuring the Docker Engine",
            "Introduction to Docker Images",
            "The Components of a Dockerfile",
            "More Dockerfile Directives",
            "Building Efficient Images",
            "Managing Images",
            "Flattening a Docker Image to a Single Layer",
            "Docker Registry",
            "Docker Hub",
            "Creating Custom Docker Images",
            "HOL: Creating Dockerfiles",
            "HOL: Customizing Docker Images",
          ],
          info: "12 lectures, 12 hr",
    },  
    {
      title: "Monitoring",
      lectures: [
      
            "Monitoring Principles",
            "What is Monitoring?",
            "Why Monitor?",
            "What to Monitor?",
      ],
          info: "4 lectures,  2 hr",
      
      
    },
    {
      title: "Testing",
      lectures: [
      
            "Why Testing Matters",
            "Testing Methods",
            "Test Automation",
            "JUnit",
            "Selenium",
            "TestNG",
            "HOL: Writing Unit Tests with JUnit",
            "HOL: Writing End-to-End Tests with Selenium",
          ],
          info: "3 lectures,  Total: 1 hr 30 min",
      
       
    
    },
    {
      title: "Course Conclusion",
      lectures: [
        "Course Recap",
        "Final Project Instructions",
        "Additional Resources",
      ],
      info: "3 lectures,  15 min",
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
      <DevopsClassType/>
    </div>
  );
};

export default DevopsSyllabus1;
