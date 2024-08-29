"use client";

import React, { useState } from "react";
import DevopsClassType from "./DevopsClassType";
import FlutterClassType from "./FlutterClassType";

const FlutterSyllabus1 = () => {
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
      "title": "Course Information",
      "lectures": [
        "Nature of the Course: Theory + Practical",
        "Course Duration: 80 Hours",
        "Course Objectives",
        "The Flutter & Dart course provides a comprehensive introduction to mobile app development using Flutter and Dart. You will learn to build and deploy high-performance, cross-platform mobile applications. This course covers everything from the basics of Dart and Flutter to advanced topics like state management and Firebase integration.",
        "Required Textbooks",
        "Eric Windmill, 'Flutter in Action', Manning Publications",
        "Carter Sande, 'Flutter for Beginners', Packt Publishing"
      ],
      "info": "8 lectures • 2 hours"
    },
    {
      "title": "Section 1: Introduction to Flutter & Dart",
      "lectures": [
        "Lesson 1: Introduction to Flutter and Dart",
        "Overview of Flutter and its advantages",
        "Setting up the development environment",
        "Overview of Dart language",
        "Lesson 2: Dart Basics",
        "Variables, Data Types, and Functions",
        "Control Flow (if-else, switch-case)",
        "Loops (for, while, do-while)",
        "Ternary Operator: Syntax and usage",
        "Lesson 3: Flutter Basics",
        "Creating a new Flutter project",
        "Understanding the main function",
        "Introduction to Widgets: Stateless vs Stateful Widgets",
        "Hot Reload and Hot Restart"
      ],
      "info": "3 lectures • 8 hours"
    },
    {
      "title": "Section 2: Flutter & Dart Basics II",
      "lectures": [
        "Lesson 1: Flutter Layouts",
        "Understanding the Widget Tree",
        "Common Layout Widgets (Container, Column, Row, Stack)",
        "Advanced Layout Widgets (Expanded, Flex, Spacer)",
        "Using Padding and Margin",
        "Lesson 2: Interactive Widgets",
        "Handling User Input (TextField, Buttons)",
        "Gesture Detection (Tap, Long Press, Swipe)",
        "Stateful Widgets and State Management",
        "Introduction to Forms and Validation",
        "Lesson 3: Navigation and Routing",
        "Basic Navigation (Navigator, Routes)",
        "Named Routes",
        "Passing Data between Screens"
      ],
      "info": "3 lectures • 15 hours"
    },
    {
      "title": "Section 3: Building Beautiful UIs",
      "lectures": [
        "Lesson 1: Material Design and Cupertino Widgets",
        "Material Design principles",
        "Common Material Widgets (AppBar, Scaffold, Drawer, etc.)",
        "Cupertino Widgets for iOS design",
        "Lesson 2: Styling and Theming",
        "Customizing Widgets with Styles",
        "Creating Themes",
        "Using ThemeData and TextStyle",
        "Dark Mode Support",
        "Lesson 3: Animations and Transitions",
        "Basic Animations (Implicit and Explicit)",
        "Animation Controllers",
        "Tween Animations",
        "Hero Animations"
      ],
      "info": "3 lectures • 18 hours"
    },
    {
      "title": "Section 4: State Management",
      "lectures": [
        "Lesson 1: State Management Basics",
        "setState",
        "Lifting State Up",
        "InheritedWidget and InheritedModel",
        "Lesson 2: Provider for State Management",
        "Introduction to Provider",
        "ChangeNotifier and ChangeNotifierProvider",
        "Consumer and Selector",
        "Practical Examples",
        "Lesson 3: Advanced State Management",
        "Riverpod",
        "Bloc Pattern",
        "Redux"
      ],
      "info": "3 lectures • 19 hours"
    },
    {
      "title": "Section 5: Networking & APIs",
      "lectures": [
        "Lesson 1: Networking Basics",
        "HTTP Requests with http package",
        "Parsing JSON",
        "Handling Errors",
        "Lesson 2: Working with RESTful APIs",
        "GET, POST, PUT, DELETE Methods",
        "Authentication and Authorization",
        "Integrating with a backend API"
      ],
      "info": "2 lectures • 10 hours"
    },
    {
      "title": "Section 6: Data Persistence",
      "lectures": [
        "Lesson 1: Local Storage",
        "Shared Preferences",
        "File Storage",
        "CRUD Operations",
        "Lesson 2: Databases",
        "SQLite",
        "Using sqflite package",
        "CRUD Operations"
      ],
      "info": "2 lectures • 10 hours"
    },
    {
      "title": "Section 7: Firebase Integration",
      "lectures": [
        "Lesson 1: Firebase Setup and Authentication",
        "Setting up Firebase project",
        "Firebase Authentication",
        "Email/Password, Google Sign-In",
        "Lesson 2: Cloud Firestore and Storage",
        "Introduction to Cloud Firestore",
        "CRUD Operations",
        "Using Firebase Storage for file uploads"
      ],
      "info": "2 lectures • 10 hours"
    },
    {
      "title": "Section 8: Testing and Deployment",
      "lectures": [
        "Lesson 1: Testing Flutter Apps",
        "Unit Testing",
        "Widget Testing",
        "Integration Testing",
        "Lesson 2: Deployment",
        "Preparing for Release",
        "Publishing to Google Play Store",
        "Publishing to Apple App Store"
      ],
      "info": "2 lectures • 10 hours"
    },
    {
      "title": "Section 9: Project",
      "lectures": [
        "Planning and Designing the Project",
        "Implementing Features",
        "Testing and Debugging",
        "Final Presentation and Evaluation"
      ],
      "info": "1 lecture • 10 hours"
    }
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
      <FlutterClassType/>
    </div>
  );
};

export default FlutterSyllabus1;
