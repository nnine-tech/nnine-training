"use client";
import React, { useState } from "react";
import PythonDjangoClassType from "./PythonDjangoClassType";
import BasicComputerClassType from "./BasicComputerClassType";
const BasicComputerSyllabus1 = () => {
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
      title: "Microsoft Windows",
      lectures: [
        "Introduction to Window Environment",
        "Creating Folders, manage folders structure to store files in order",
        "Searching and Open files",
        "Setting user's privileges as per the users",
        "Installing/ setting application and Uninstalling applications",
        "Configuring devices and installing device drivers",
        "Virus and security threats, Virus scanning and cleaning to avoid virus threats",
        "Creating backups of files",
        "Setting printing options before printing command",
        "Writing files to Removable drives, CD or DVD by using Related Software",
      ],
      info: "6 lectures • 2 hours",
    },
    {
      title: "Microsoft Word 2021",
      lectures: [
        "Create and format text",
        "Create copy and paste; Copy format and paste format",
        "Develop heading and creating format in different styles",
        "Creating styles and formatting documents",
        "Find the desired text and replace with the next",
        "Inserting pictures, format pictures, Adjust colour and Arrange Pictures",
        "Inserting clipart, smart arts, and graphs",
        "Creating hyperlink and comments",
        "Working with Header, footer, textbox, equation, and symbols",
        "Working with Page design and layout",
        "Creating Table of Contents, Footnotes, Endnotes, List of tables, list of figures",
        "Creating bibliography, cross-references, and Captions",
        "Working with Comments and Track Changes",
        "Mail Merge",
        "View window in different ways and comparing between the files",
      ],
      info: "5 lectures • 1.5 hours",
    },
    {
      title: "Microsoft Excel 2021",
      lectures: [
        "Setting Excel File options",
        "Working with Text formats and number formats",
        "Creating tables and Cell Styles",
        "Working with conditional formatting and Table Formats",
        "Sort, Filter, Series Fill, Flash fill and Auto sum",
        "Inserting pictures, smart art graphics, charts, hyperlinks headers/ footer, equation, and symbols",
        "Setting page layout, arranging shapes and printing area set up",
        "Working with basic Excel formulas to perform simple calculations",
        "Working with logical function, Lookup and reference functions",
        "Defining table names and using them in formula",
        "Grouping/ Ungrouping data",
        "Sorting the records",
        "Working with text proofing and Text editing",
        "Protecting Sheets with password",
        "View window in different views",
        "Freezing panes and Splitting sheets",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Microsoft PowerPoint 2021",
      lectures: [
        "Setting PowerPoint 2021 file environment",
        "Building your own slides",
        "Creating Design and Text in attractive Formats",
        "Searching New online templates and themes",
        "Inserting Tables, Symbols, Pictures, Charts and Graphic Smart Arts",
        "Inserting Video, Audio and Screen Recording",
        "Inserting background themes or templates for presentation",
        "Applying attractive Transitions",
        "Applying Attractive Animation to the designed text and objects",
        "Setting Timing with Transitions and Animations",
        "Building up Presentation and Setting Slide Show",
        "Editing Text and Comparing",
        "Printing slides",
        "Presentation Views",
      ],
      info: "8 lectures • 2.5 hours",
    },
    {
      title: "Internet",
      lectures: [
        "Understanding the World Wide Web",
        "Key concepts and terminology",
        "Using search engines effectively",
        "Connecting to the Internet",
        "Evaluating web sources",
      ],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "Email",
      lectures: [
        "Setting up an email account",
        "Sending and receiving emails",
        "Organizing and managing email",
        "Using email for collaboration and group communication",
        "Email etiquette and best practices",
        "Addressing and composing professional emails",
      ],
      info: "3 lectures • 1.5 hours",
    },
    {
      title: "Nepali Typing",
      lectures: ["Tradition and Romanized Unicode", "Preeti and others"],
      info: "8 lectures • 3 hours",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row sm:flex-row ml-20 mb-10 sm:mt-4">
      <div className="w-[65%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl ml-[-10px] p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div key={index} className={`relative lg:w-full max-w-[800px] w-[250px] `}>
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
      <div className="ml-[-65px] md:ml-[-22px]">
        <BasicComputerClassType />
      </div>
    </div>
  );
};
export default BasicComputerSyllabus1;
