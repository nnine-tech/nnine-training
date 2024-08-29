"use client";

import React, { useState } from "react";
import DataScienceAndMLClassType from "./DataScienceAndMLClassType";


const DataScienceAndMLSyllabus1 = () => {
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
    title: "Getting Started with Tools",
    lectures: [
      "Introduction to Google Colab and Jupyter Notebook/IDE",
      "Basics of Markdown",
    ],
    info: "2 lectures • 1 hour",
  },
  {
    title: "Python Fundamentals",
    lectures: [
      "Python Programs and Statements",
      "Arithmetic Operators",
      "Using Python as a Calculator",
    ],
    info: "3 lectures • 1 hour",
  },
  {
    title: "Variables and Data Types",
    lectures: [
      "Defining Variable Names and Naming Conventions",
      "Operators, Operands, and Operator Precedence",
      "Changing and Updating Variable Values",
      "Assigning Multiple Values to Variables",
      "Data Types: int, float, complex",
    ],
    info: "5 lectures • 1 hour",
  },
  {
    title: "User Input and Type Handling",
    lectures: [
      "Taking Input from Users",
      "Type Casting and Type Checking",
      "Type Validation",
    ],
    info: "3 lectures • 1 hour",
  },
  {
    title: "Control Structure and Functions",
    lectures: [
      "Conditional Execution",
      "Chained and Nested Conditionals",
      "Recursion and Recursive Functions",
      "Stack Diagrams and Infinite Recursion",
      "Multiple Assignments and Updating Variables",
      "The while Statement and for Loop",
      "break and continue Statements",
    ],
    info: "7 lectures • 1 hour",
  },
  {
    title: "Strings",
    lectures: [
      "Introduction to Strings",
      "Single vs Multiline Strings",
      "String Indexing and Slicing",
      "String Methods and Immutable Data Types",
    ],
    info: "4 lectures • 1 hour",
  },
  {
    title: "Advanced Data Types",
    lectures: [
      "Lists",
      "Indexing, Slicing, Looping, and Conditional Statements",
      "List Methods and List Comprehensions",
      "Mutable vs Immutable Data Types",
      "Tuples",
      "Sets",
      "Dictionaries",
    ],
    info: "7 lectures • 1 hour",
  },
  {
    title: "Functions and OOP",
    lectures: [
      "Function Definition and Call",
      "Arguments/Parameters and Return Statements",
      "Handling Multiple Return Values",
      "Default vs Non-default Arguments",
      "Global and Local Variables",
      "*args and **kwargs",
      "Recursion Trees and the pass Keyword",
      "Classes and Objects",
      "Class and Object Attributes",
      "The __init__() Method and self Keyword",
      "Inheritance and Polymorphism",
      "Encapsulation and Exception Handling",
    ],
    info: "12 lectures • 2 hours",
  },
  {
    title: "Exception Handling and File Operations",
    lectures: [
      "Understanding and Handling Exceptions",
      "try-except Blocks",
      "Catching Specific and Multiple Exceptions",
      "The finally Clause and Raising Exceptions",
      "Opening Files and Modes",
      "Reading and Writing Files",
      "Handling CSV Files with DictReader and DictWriter",
      "Exception Handling in File Operations",
    ],
    info: "8 lectures • 2 hours",
  },
  {
    title: "Additional Libraries and SQL",
    lectures: [
      "Lambda Functions",
      "map(), filter()",
      "os, random, and math Libraries",
      "Creating and Managing Databases",
      "SQL Operations: INSERT, SELECT, UPDATE, DELETE",
      "Filtering Data with SQL",
      "Introduction to Git and GitHub",
    ],
    info: "7 lectures • 2 hours",
  },
  {
    title: "Data Analysis with Pandas",
    lectures: [
      "Introduction to Pandas and DataFrames",
      "Reading and Writing CSV Files",
      "Data Manipulation and Basic Visualization",
      "Introduction to Matplotlib, Seaborn, and Plotly",
      "Basic Plotting Techniques",
    ],
    info: "5 lectures • 2 hours",
  },
  {
    title: "Data Science Foundations",
    lectures: [
      "Defining Data Science and Related Fields",
      "Overview of Data Science Tools",
      "Data Description and Distribution",
      "Measures of Central Tendency and Dispersion",
      "Statistical Tests and Correlation Coefficients",
      "Introduction to Numpy",
      "Array Operations and Methods",
    ],
    info: "7 lectures • 2 hours",
  },
  {
    title: "Exploratory Data Analysis and Visualization",
    lectures: [
      "Data Wrangling and Model Development",
      "Visualization with Scipy and Seaborn",
      "Introduction to Tableau for Data Visualization",
    ],
    info: "3 lectures • 1 hour",
  },
  {
    title: "Machine Learning",
    lectures: [
      "Core Concepts and Algorithms",
      "Supervised vs Unsupervised Learning",
      "Linear and Logistic Regression",
      "Support Vector Machines (SVM)",
      "Clustering with K-Means",
    ],
    info: "5 lectures • 2 hours",
  },
  {
    title: "Applied Machine Learning and Projects",
    lectures: [
      "Introduction to Flask and Streamlit",
      "ML Model Deployment",
      "Web Scraping and Database Projects",
      "Data Entry Applications",
    ],
    info: "4 lectures • 1 hour",
  },
  {
    title: "Applied Topics in Data Science",
    lectures: [
      "Natural Language Processing with NLTK",
      "Text Preprocessing and Cleaning",
      "Regex for Text Extraction",
      "Exploratory Data Analysis and Hypothesis Testing",
      "Regression, Classification, and Topic Modeling Projects",
    ],
    info: "5 lectures • 2 hours",
  },
  {
    title: "Assessment and Certification",
    lectures: [
      "Regular Assignments and Quizzes",
      "Final Project and Presentation",
    ],
    info: "2 lectures • 1 hour",
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
      <DataScienceAndMLClassType/>
    </div>
  );
};

export default DataScienceAndMLSyllabus1;
