import React from "react";

const QATrainingSyllabus = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl text-center font-bold mb-4">
            QA Training Syllabus
          </h1>
          <br />
          <h2 className="text-blue-900 text-2xl font-bold mb-4">
            Manual Testing
          </h2>

          <h3 className="font-semibold text-blue-500 text-xl">
            Fundamentals of Testing
          </h3>
          <ul className="list-disc ml-8">
            <li>Understanding QA/QC/Testing</li>
            <li>Human Errors and Their Impact</li>
            <li>Testing vs. Debugging</li>
            <li>Importance of Software Quality</li>
          </ul>
          <h3 className="font-semibold text-blue-500 text-xl">
            Software Requirements and Testing Process
          </h3>
          <ul className="list-disc ml-8">
            <li>Characteristics of Good Requirements</li>
            <li>Testing Objectives and Correctness</li>
            <li>Software Requirement Types</li>
            <li>Testing Process Overview</li>
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Testing Techniques
          </h2>
          <ul className="list-disc ml-8">
            <li>Input Space Analysis</li>
            <li>Psychology and Principles of Testing</li>
            <li>Test Metrics and Measurement</li>
            <li>Software Development Life Cycle (SDLC) and Models</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Black Box Testing
          </h2>
          <ul className="list-disc ml-8">
            <li>
              Techniques: Equivalence Class Partitioning, Boundary Value
              Analysis
            </li>
            <li>State Transition, Cause Effect Graphing, Decision Table</li>
            <li>Use Case Testing and Advanced Techniques</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            White Box Testing
          </h2>
          <ul className="list-disc ml-8">
            <li>Coverage: Statement, Branch, Condition, Path</li>
            <li>Advanced Techniques and Tool Support</li>
            <li>Gray Box, Intuitive, and Experience-Based Testing</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Verification and Validation
          </h2>
          <ul className="list-disc ml-8">
            <li>Inspection, Walkthrough, Reviews</li>
            <li>
              Validation: Unit, Integration, Functional, System, Acceptance
            </li>
            <li>Alpha and Beta Testing</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Types and Levels of Testing
          </h2>
          <ul className="list-disc ml-8">
            <li>Usability, Performance, Load, Stress, Security Testing</li>
            <li>Alpha, Beta, Sanity, Smoke, Regression, Mutation Testing</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Test Cases and Management
          </h2>
          <ul className="list-disc ml-8">
            <li>Test Case Design and Templates</li>
            <li>Test Scenario vs. Test Case</li>
            <li>Test Management, Strategy, and Activity</li>
            <li>Incident, Configuration, and Bug Management</li>
            {/* Continue adding other sections similarly */}
          </ul>
          <br />
          <h2 className="text-blue-900 text-2xl font-bold mb-4">
            Automation Testing
          </h2>
          <h3 className="font-semibold text-xl text-blue-500">
            Introduction to Automation Testing
          </h3>
          <ul className="list-disc ml-8">
            <li>Benefits and Drawbacks</li>
            <li>Factors and Tools Selection</li>
          </ul>
          <h3 className="font-semibold text-xl text-blue-500">
            Selenium WebDriver
          </h3>
          <ul className="list-disc ml-8">
            <li>Components Overview</li>
            <li>Installation and Configuration</li>
            <li>Object Identification and Locators</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            API Testing with Postman
          </h2>
          <ul className="list-disc ml-8">
            <li>Basics and Navigation</li>
            <li>REST and SOAP Introduction</li>
            <li>Creating and Testing Requests</li>
            <li>Collections, Environments, and Workflows</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Performance Testing with JMeter
          </h2>
          <ul className="list-disc ml-8">
            <li>Core Concepts and Components</li>
            <li>Recording and Execution</li>
            <li>Parameterization and Correlation</li>
            <li>Dashboard Reporting and Plugins</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Mobile App Testing
          </h2>
          <ul className="list-disc ml-8">
            <li>Overview and Types of Mobile Apps</li>
            <li>Challenges and Testing Tours</li>
            <li>Android Automation with Appium</li>
            <li>Testing on Real and Virtual Devices</li>
            {/* Continue adding other sections similarly */}
          </ul>

          <h2 className="text-blue-500 text-xl font-bold mb-4">
            Bug Reporting with JIRA
          </h2>
          <ul className="list-disc ml-8">
            <li>Project Setup and Configuration</li>
            <li>Adding Users and Issues</li>
            <li>Managing Bugs and Defects</li>
            <li>Classification and Prioritization</li>
            {/* Continue adding other sections similarly */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default QATrainingSyllabus;
