"use client";

import React, { useState } from "react";
import GraphicDesignClassType from "./GraphicDesignClassType";

const GraphicDesignSyllabus1 = () => {
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
      title: "Photoshop Course Overview",
      lectures: [
        "Course Introduction",
        "Overview of Photoshop capabilities and uses",
        "Introduction to course structure and materials",
      ],
      info: "3 lectures",
    },
    {
      title: "Photoshop Interface",
      lectures: [
        "Exploring the workspace",
        "Customizing the workspace",
        "Toolbars and panels",
      ],
      info: "3 lectures",
    },
    {
      title: "Basic Navigation",
      lectures: [
        "Opening and saving files",
        "Zooming and navigating around an image",
        "Basic shortcuts",
      ],
      info: "3 lectures",
    },
    {
      title: "Basic Tools and Techniques",
      lectures: [
        "Selection Tools: Marquee tools, Lasso tools, Magic Wand and Quick Selection tools",
        "Basic Editing Tools: Crop and straighten, Move tool, Transform tools (scale, rotate, skew)",
        "Brush Tools: Brush settings, Eraser tool, Clone Stamp tool",
      ],
      info: "3 lectures",
    },
    {
      title: "Working with Layers",
      lectures: [
        "Introduction to Layers: Understanding layers, Creating and managing layers, Layer styles and effects",
        "Layer Masks: Creating and using layer masks, Non-destructive editing, Clipping masks",
        "Adjustment Layers: Brightness/Contrast, Levels and Curves, Hue/Saturation",
      ],
      info: "3 lectures",
    },
    {
      title: "Text and Shapes",
      lectures: [
        "Text Tools: Creating and formatting text, Text effects, Text on a path",
        "Shape Tools: Drawing basic shapes, Custom shapes, Shape layers and paths",
      ],
      info: "2 lectures",
    },
    {
      title: "Filters and Effects",
      lectures: [
        "Applying Filters: Filter Gallery, Smart Filters",
        "Special Effects: Blur effects, Sharpening images, Distort and Stylize effects",
        "Creative Effects: Drop shadows, Glows, Bevel and Emboss",
      ],
      info: "3 lectures",
    },
    {
      title: "Color Correction and Retouching",
      lectures: [
        "Color Correction Techniques: Using the Color Balance tool, Adjusting color with Curves, Gradient maps",
        "Retouching Tools: Healing Brush and Spot Healing Brush, Patch tool, Content-Aware Fill",
        "Brushes & Blending effects: Using brushes and custom brushes, Blending modes",
      ],
      info: "3 lectures",
    },
    {
      title: "Photo Manipulation",
      lectures: [
        "Combining multiple images",
        "Using blend modes for creative effects",
      ],
      info: "2 lectures",
    },
    {
      title: "Final Project and Review",
      lectures: [
        "Final Project: Project planning and concept, Execution and presentation",
        "Review and Feedback: Review of key concepts, Individual feedback sessions, Q&A and troubleshooting",
      ],
      info: "2 lectures",
    },
    {
      title: "Illustrator Course Overview",
      lectures: [
        "Interface Basics: Workspace, toolbars, panels",
        "Basic Tools: Selection, direct selection, and shape tools",
      ],
      info: "2 lectures",
    },
    {
      title: "Working with Shapes and Paths",
      lectures: [
        "Shapes: Drawing and combining shapes",
        "Paths: Pen tool, curvature tool, and pathfinder",
      ],
      info: "2 lectures",
    },
    {
      title: "Layers and Artboards",
      lectures: [
        "Layers: Creating, managing, and organizing",
        "Artboards: Setting up and managing multiple artboards",
      ],
      info: "2 lectures",
    },
    {
      title: "Colors, Gradients, and Patterns",
      lectures: [
        "Colors: Using swatches, color picker, and color guides",
        "Gradients: Creating and applying gradients",
        "Patterns: Designing and applying patterns",
      ],
      info: "3 lectures",
    },
    {
      title: "Text and Typography",
      lectures: [
        "Text Tools: Creating and formatting text",
        "Typography: Advanced text options and effects",
      ],
      info: "2 lectures",
    },
    {
      title: "Advanced Techniques",
      lectures: [
        "Effects: Applying and editing effects",
        "Brushes: Using and creating custom brushes",
        "Symbols: Creating and using symbols",
      ],
      info: "3 lectures",
    },
    {
      title: "Projects and Design",
      lectures: [
        "Logo Design: Principles and creation",
        "Icon Design: Simplification and clarity",
        "Illustrations: Combining techniques for complex designs",
      ],
      info: "3 lectures",
    },
    {
      title: "Final Project and Review",
      lectures: [
        "Final Project: Planning, execution, and presentation",
        "Review: Key concepts and Q&A",
      ],
      info: "2 lectures",
    },
    {
      title: "Premiere Pro Introduction",
      lectures: [
        "Introduction to Adobe Premiere Pro",
        "Setting up a video project",
        "Introduction to Users Interface, Workspaces, panels, and Tools",
        "Starting a New Project and Importing Media Files",
        "Adding Graphics, Text, and Music",
      ],
      info: "5 lectures",
    },
    {
      title: "Working with Video Footage",
      lectures: [
        "Basic Video Editing Tools and Techniques",
        "Audio Editing",
        "Maintaining Video Clips Speed and Editing Speed",
      ],
      info: "3 lectures",
    },
    {
      title: "Color Correction and Grading",
      lectures: ["Color Correction and Grading Techniques"],
      info: "1 lecture",
    },
    {
      title: "Video Effects and Transitions",
      lectures: [
        "Applying Video Effects",
        "Working with Green Screen Video",
        "Using Transitions in Video Editing",
      ],
      info: "3 lectures",
    },
    {
      title: "Texts, Shapes, and Titles",
      lectures: ["Creating and Editing Text", "Using Shapes and Titles"],
      info: "2 lectures",
    },
    {
      title: "Post Production Workflow",
      lectures: ["Overview of Post Production Workflow"],
      info: "1 lecture",
    },
    {
      title: "Project Work",
      lectures: [
        "Practical Assignments: Designing Logos, Advertisements, and Document Layouts",
        "Final Projects: E-commerce Website Design, Corporate Branding Package, News Portal Layout, NGO Website Design",
      ],
      info: "2 lectures",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row sm:flex-row sm:mt-4">
      <div className="w-[80%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl ml-8 p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div key={index} className={`relative w-full max-w-[800px]`}>
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all mt-1 ${
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
      <GraphicDesignClassType />
    </div>
  );
};

export default GraphicDesignSyllabus1;
