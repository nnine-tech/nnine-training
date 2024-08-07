import React from "react";
import NavBar from "../components/Navbar/NavBar";

const QualityAssuranceSyllabus = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />

      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl font-bold mb-4">
            Quality Assurance Syllabus
          </h1>
          <br />

          <h3 className="text-blue-500 font-bold mb-4">
            Software Testing Fundamentals: Week 1
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Software Quality Assurance Basic Concepts</li>
            <li>Definition of software testing and quality assurance</li>
            <li>Understanding bugs, defects, and the necessity of QA</li>
            <li>Determining the appropriate timing for testing</li>
            <li>Software Testing Life Cycle (STLC)</li>
            <li>Overview of STLC phases</li>
            <li>
              Introduction to Agile Methodology and its relevance to testing
            </li>
            <li>
              Understanding the V Model of Software Development and Testing
            </li>
            <li>Test Strategies and their importance in the testing process</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            Test Artifacts: Week 2
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Functional Requirements and Technical Requirement Documents</li>
            <li>
              Roles in Software Development Lifecycle (BA, Technical Architect,
              Developer, Tester)
            </li>
            <li>Various SDLC models</li>
            <li>
              Writing Business Requirement Document (BRD), Functional
              Requirement Document (FRD), and System Requirement Specification
              (SRS)
            </li>
            <li>Test Scenarios and Test Cases</li>
            <li>Test case Design</li>
            <li>Building test cases with practical examples</li>
            <li>Test Execution and Project Management using Trello</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            Version Control: Week 3
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Defect Management, Change Management, and Version Control</li>
            <li>Overview of Test Management and Bug Tracking Tools</li>
            <li>Reporting Bugs using Bugzilla and JIRA</li>
            <li>Understanding JIRA:</li>
            <li>Installation and setup</li>
            <li>Creating projects and managing boards</li>
            <li>Defect lifecycle management in JIRA</li>
            <li>Importance of JIRA dashboard</li>
            <li>Classifying defects</li>
            <li>Introduction to JIRA Agile, Epics, Scrum, and Kanban</li>
            <li>Using GIT for Version Control:</li>
            <li>Repository management</li>
            <li>Basic and advanced GIT commands</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">Automation: Week 4</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Performance / Load Testing with JMeter</li>
            <li>Introduction, Installation, and Configuration</li>
            <li>Recording and executing JMeter Scripts</li>
            <li>
              Advanced topics: Timers, Assertions, Regular expressions,
              Beanshell Scripting, REST API Load Testing
            </li>
            <li>Introduction to Selenium IDE</li>
            <li>Installation and Configuration</li>
            <li>Scripting with Selenium IDE</li>
            <li>Enhancing scripts and transitioning beyond Selenium IDE</li>
            <li>API Testing with RequestBin and Runscope</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">Practical Workshop</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>
              Hands-on exercises using Trello, Bugzilla, JIRA, JMeter, Selenium
              IDE, RequestBin, Runscope, and GIT
            </li>
            <li>Practical application of Firebug</li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default QualityAssuranceSyllabus;
