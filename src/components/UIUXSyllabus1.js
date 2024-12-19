"use client";

import React, { useState } from "react";
import UIUXClassType from "./UIUXClassType";

const UIUXSyllabus1 = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const syllabusSections = [
    {
      title: "Course Information",
      lectures: [
        "The UI/UX Design course takes a design-centric approach to user interface and user experience design, providing practical, skill-based training focused on visual communications rather than marketing or programming alone. You will learn all aspects of the UI/UX development process, from user research to establishing a project's strategy, scope, and information architecture, to generating sitemaps and wireframes.",
        "Required Textbooks",
        "Joel Marsh, 'UX for Beginners', O’Reilly",
        "Jenifer Tidwell, Charles Brewer, and Aynne Valencia, 'Designing Interfaces', O’Reilly",
      ],
      info: "7 lectures • 1.5 hours",
    },
    {
      title: "Unit 1: Design Fundamentals - User Interface",
      lectures: [
        "Lesson 1: Introduction to User Interface",
        "Relationship between UI and UX",
        "UI vs. Frontend",
        "Roles in UI/UX",
        "Interface Conventions",
        "Lesson 2: Historical Overview of Interface Design",
        "Interface Conventions: Theory and Application",
        "The Golden Rule",
        "Approaches to Screen-Based UI",
        "Formal Elements of an Interface",
        "Lesson 3: Design before Design",
        "Template vs. Content",
        "Aesthetics and Functionality",
        "Look and Feel",
        "Language as a Design Tool",
        "Lesson 4: Colors and Shapes",
        "Imagery, Typography, and Icons",
        "Points of Interaction",
        "Lesson 5: Buttons",
        "Designing Better Buttons",
        "States and Changes",
        "Composing Interaction",
        "Lesson 6: Foundations of User Experience (UX)",
        "Speed and Style",
        "Composition and Structure",
        "Lesson 7: The Basics of User Experience Design",
        "Scopes of User Experience",
        "The Product Development Life Cycle",
      ],
      info: "21 lectures • 8 hours",
    },
    {
      title: "Unit 2: Common Terms, Tools, and Frameworks in UX Design",
      lectures: [
        "Lesson 1: Defining User, End-User, and User Experience",
        "Prioritizing the User",
        "Key Frameworks in UX Design",
        "Designing Across Platforms",
        "Design for Accessibility",
        "Lesson 2: Design Sprints",
        "Introduction to Design Sprints",
        "Phases and Benefits of Design Sprints",
        "Planning Design Sprints",
        "Design Sprint Retrospectives",
        "Lesson 3: Figma: The Interface Design Tool",
        "Introduction to Figma",
        "Web Apps vs. Native Apps",
        "Figma User Interface, Community, Plugins",
        "Lesson 4: Creating New Files and Designing on a Grid",
        "Importing and Cropping Photos",
        "Setting Up Frames",
        "Adding Text and Colored Backgrounds",
        "Importing and Modifying Vector Graphics",
        "Aligning and Distributing Layers",
      ],
      info: "18 lectures • 6 hours",
    },
    {
      title: "Unit 3: Advanced Figma Techniques",
      lectures: [
        "Lesson 1: Text Styles",
        "Local vs. Web Fonts",
        "Handling Missing Fonts",
        "Creating, Editing, and Organizing Text Styles",
        "Lesson 2: Components",
        "Creating and Editing Components",
        "Overriding Content in One Instance vs. Globally Updating All Components",
        "Detaching from a Component",
        "Lesson 3: Auto Layout",
        "Using Auto Layout",
        "Constraints and Resizing",
        "Spacing, Rearranging, Adding Items with Auto Layout",
        "Lesson 4: Variants",
        "Creating and Using Component Variants",
        "Variant Properties and Values",
        "Boolean Values",
        "Lesson 5: Hovers and Overlays",
        "Adding a Hover State to a Button",
        "Opening a Pop-Up",
        "Linking between Frames",
        "Previewing the Prototype",
        "Lesson 6: Figma Animation: Intro to Start Animate",
        "Basics of Smart Animate",
        "Different Kinds of Easing",
        "Lesson 7: Making Links that Scroll Up/Down a Page",
        "Making Navbar Fixed to the Screen",
        "Adjusting Scrollable Area within a Page",
        "Lesson 8: Adding Hyperlinks",
      ],
      info: "25 lectures • 9 hours",
    },
    {
      title: "Unit 4: Exporting and HTML Basics",
      lectures: [
        "Lesson 1: Exporting Assets for Web: JPEG, PNG, and SVG",
        "Exporting Individual Assets",
        "Exporting Frames",
        "Lesson 2: Sharing Figma Files",
        "Commenting on Shared Files",
        "Viewing a Prototype for User Testing",
        "Specs for Developers",
        "Lesson 3: Hypertext Markup Language (HTML)",
        "Introduction to HTML Elements and Attributes",
        "HTML Headings and Paragraphs",
        "HTML Styles and Formatting",
        "HTML Quotation, Comments, and Colors",
        "HTML Links and Images",
        "HTML Tables and Lists",
        "HTML Block and Inline Elements",
        "HTML Responsive Design",
        "HTML Forms",
        "Lesson 4: Cascading Style Sheets (CSS)",
        "Introduction to CSS Rulesets and Selectors",
        "CSS Declarations, Values, and Units",
        "CSS Box Model and Functions",
        "CSS Animations and Media Queries",
        "CSS Library",
      ],
      info: "18 lectures • 7 hours",
    },
    {
      title: "Learning Outcomes",
      lectures: [
        "Using Integrated Development Environments (IDEs) such as Adobe Dreamweaver and Adobe Air Interface, create a web page.",
        "Using Flash MX, create animated web content and applications.",
        "Animate lights and cameras, dynamics page, video effects in 3DS MAX, polygon modeling, mesh modeling, patch modeling, and NURBS modeling.",
        "Perform character animation, free transform animation, motion capture files transition creation, mesh deformation with skin and physique modifiers, crowd animation with system delegate objects, cognitive controller.",
        "Work with analog and digital sound, sound recording, processing, and effects.",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Labs",
      lectures: [
        "Lab assignments will focus on the practice and mastery of content covered in lectures and introduce critical and fundamental problem-solving techniques to the students.",
      ],
      info: "1 lecture • 6 hours",
    },

    // Add additional units here...
  ];

  return (
    <div className=" flex flex-col md:flex-row sm:flex-row mb-10 sm:mt-4  ml-3 md:ml-2 lg:ml-20">
      <div className="w-[65%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl  p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div
              key={index}
              className="relative lg:w-full max-w-[800px] w-[310px]  md:w-[330px] "
            >
              <div
                className={`border-2  border-[#004AAD] border-opacity-[5%] transition-all mt-1 bg-gray-50 ${
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
                  <ul className="p-2 list-disc list-inside">
                    {section.lectures.map((lecture, idx) => (
                      <li
                        key={idx}
                        className={`py-1 font-Quicksand ml-14 ${
                          lecture.startsWith("Lesson")
                            ? "font-bold list-none"
                            : ""
                        }`}
                      >
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
      <div className="sm:ml-[-100px] md:ml-[10px] lg:ml-[20px]">
        <UIUXClassType />
      </div>
    </div>
  );
};

export default UIUXSyllabus1;
