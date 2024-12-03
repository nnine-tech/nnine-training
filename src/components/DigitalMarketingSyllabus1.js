"use client";

import React, { useState } from "react";

import DigitalMarketingClassType from "./DigitalMarketingClassType";

const DigitalMarketingSyllabus1 = () => {
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
      title: "Introduction to Digital Marketing & Content Marketing Strategy",
      lectures: [
        "What is Digital Marketing?",
        "Purpose of Digital Marketing",
        "Digital Marketing Funnel",
        "Unique Selling Proposition (USP)",
        "Customer Acquisition",
        "What is Content Marketing?",
        "Methods of Effective Content Marketing",
        "Content Marketing Terminology",
        "Developing a Content Marketing Plan",
        "Types of Content Marketing",
        "Content Mapping Based on Customer Journey",
        "Marketing Campaigns: Inbound vs. Digital Marketing",
        "B2B vs. B2C Digital Marketing Strategies",
      ],
      info: "13 lectures",
    },
    {
      title: "Crafting a Digital Advertising Plan & Brand Building",
      lectures: [
        "Paid vs. Organic Traffic",
        "Key Metrics in Digital Advertising",
        "Top Sources of Paid Traffic",
        "Elements of Successful Digital Campaigns",
        "Digital Advertising Terminology",
        "Introduction to SEO",
        "Importance of SEO for Business",
        "Types of SEO",
        "SEO Process and Pre-SEO Checklist",
        "Site Architecture, Sitemap, and Keyword Analysis",
        "Technical SEO, On-Page SEO, Off-Page SEO",
        "Brand Building and Identity",
        "Basics of Branding",
        "Building Brand Awareness in 2022",
        "Importance of Brand Building",
        "Google Analytics",
        "Understanding Audience Analytics",
        "User Acquisition and Behavior",
        "Setting Goals with Google Analytics",
      ],
      info: "19 lectures",
    },
    {
      title:
        "Google My Business (Local SEO) & Developing a Social Media Strategy",
      lectures: [
        "Google My Business",
        "Importance of Google My Business",
        "Creating and Optimizing Google My Business Profile",
        "Social Media Marketing",
        "Effective Social Media Marketing Steps",
        "Benefits and Metrics of Social Media Marketing",
        "Creating a Social Media Strategy",
        "Facebook Marketing",
        "Effective Facebook Marketing Strategies",
        "Facebook Ads Campaign",
        "Using Facebook Analytics and Pixel",
        "Generating Leads and Retargeting on Facebook",
      ],
      info: "12 lectures",
    },
    {
      title: "Instagram Marketing & Email Marketing",
      lectures: [
        "Instagram Marketing",
        "Instagram Content Strategy",
        "Best Practices and Tips for Instagram",
        "Running Instagram Ad Campaigns",
        "Email Marketing",
        "Importance of Email Marketing",
        "Using Opt-Ins and Pop-Ups",
        "Creating Campaigns with Mailchimp",
        "Email Marketing Analytics",
        "Pay-Per-Click: Google Ads",
        "Overview of Google Ads",
        "Types of Google Ads Campaigns",
        "Keyword Research and Campaign Setup",
        "Google Video Ads (YouTube Marketing)",
      ],
      info: "14 lectures",
    },
    {
      title: "TikTok Marketing & Copywriting",
      lectures: [
        "TikTok Marketing",
        "Importance of TikTok for Businesses",
        "Creating a TikTok Marketing Strategy",
        "Managing Brand Presence on TikTok",
        "Copywriting",
        "The 'AIDA' Formula",
        "Writing Magnetic Headlines",
        "Creating Irresistible Calls to Action",
        "LinkedIn Marketing",
        "Understanding Affiliate Marketing",
        "Types and Pros/Cons of Affiliate Marketing",
        "Monetizing through Affiliate Marketing",
      ],
      info: "12 lectures",
    },
    {
      title: "Learning Outcomes",
      lectures: [
        "Be able to set up and manage ad campaigns",
        "Build a career as a Digital Marketing Professional",
        "Develop strategies as a Digital Marketing Strategist",
        "Understand methodologies, tools, and technologies in Digital Marketing",
        "Grasp essential philosophies and practices of marketing and digital marketing technologies",
      ],
      info: "5 lectures",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row sm:flex-row ml-20 sm:mt-4 mb-5">
      <div className="w-[65%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div key={index} className={`relative lg:w-full w-[250px] max-w-[800px]`}>
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all mt-1 ${
                  !openDropdowns[section.title] &&
                  index !== syllabusSections.length - 1
                    ? "border-b-5"
                    : ""
                }`}
              >
                <div
                  className="flex items-center p-[10px] cursor-pointer" // Added cursor-pointer class here
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
                      <li key={idx} className="py-1 font-Quicksand ml-14">
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
      <DigitalMarketingClassType />
      </div>
    </div>
  );
};

export default DigitalMarketingSyllabus1;
