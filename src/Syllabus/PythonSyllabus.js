import React from "react";

const PythonSyllabus = () => {
  return (
    <>
      <br />
      <br />
      <br />

      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl font-bold mb-4 text-center">
            Python Programming Language
          </h1>

          <h3 className="text-blue-500 text-xl font-bold mb-4">
            Introduction to Python Programming
          </h3>
          <ul className="list-disc ml-4 mb-4">
            <li>Installation of Python and pip package manager</li>
            <li>Introduction to Google Colab, Jupyter Notebook / IDE</li>
            <li>Python Program Structure and Statements</li>
            <li>Arithmetic Operators and Expressions</li>
            <li>Variable Declaration and Naming Conventions</li>
            <li>Data Types: int, float, complex</li>
            <li>Conditional Statements and Recursion</li>
            <li>Iteration and Looping Constructs</li>
            <li>String Manipulation in Python</li>
            <li>Built-in Data Types: Lists, Tuples, Dictionaries</li>
            <li>Functions and Modular Programming</li>
            <li>Object-Oriented Programming (OOP) Concepts</li>
          </ul>

          <h3 className="text-blue-500  text-xl font-bold mb-4">
            Handling Exceptions and File Operations
          </h3>
          <ul className="list-disc ml-4 mb-4">
            <li>Introduction to Exceptions Handling</li>
            <li>File Input and Output Operations</li>
          </ul>

          <h3 className="text-blue-500 text-xl font-bold mb-4">
            Introduction to SQL in Python
          </h3>
          <ul className="list-disc ml-4 mb-4">
            <li>Creating and Managing Databases</li>
            <li>Defining Table Structures and Constraints</li>
            <li>SQL Data Manipulation Language (DML):</li>
            <ul className="list-disc ml-6 ">
              <li>INSERT, SELECT, UPDATE, DELETE statements</li>
            </ul>
            <li>Filtering Data with WHERE clause</li>
          </ul>

          <h3 className="text-blue-500 text-xl font-bold mb-4">
            Version Control with Git and GitHub
          </h3>
          <ul className="list-disc ml-4 mb-4">
            <li>Installation and Configuration of Git Bash</li>
            <li>Introduction to Git Version Control System</li>
            <li>Setting up a GitHub Account and Profile</li>
            <li>
              Repository Management:
              <ul className="list-disc ml-6 mb-4">
                <li>Creating, Initializing, and Cloning Repositories</li>
                <li>Working with Branches and Merging Changes</li>
                <li>
                  Remote Repository Management: Pushing and Pulling Changes
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-blue-500 text-xl font-bold mb-4">
            Data Analysis with Pandas
          </h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Introduction to Pandas Library</li>
            <li>DataFrame Data Structure</li>
            <li>Reading and Writing CSV Files</li>
            <li>Data Manipulation and Analysis with Pandas</li>
            <li>
              Basic Data Visualization with Matplotlib, Seaborn, and Plotly
            </li>
          </ul>

          <h3 className="text-blue-500 font-bold text-xl mb-4">Project Work</h3>
          <ul className="list-disc ml-4 mb-4">
            <li>
              Apply learned concepts to real-world projects:
              <ul className="list-disc ml-4 mb-4">
                <li>Data analysis and visualization</li>
                <li>Web development with Flask or Django</li>
                <li>Automation scripts</li>
                <li>Machine Learning projects</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PythonSyllabus;
