import React from "react";

const DataAnalytics = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4 py-8">
              Data Science and Machine Learning
            </h1>

            <h2 className="text-blue-500 font-bold mb-4">COURSE OUTLINE</h2>

            <h2 className="text-blue-500 font-bold mb-4">
              Module 1: Introduction to Python Programming
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              1.1 Getting Started with Tools
            </h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Google Colab and Jupyter Notebook/IDE</li>
              <li>Basics of Markdown</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">
              1.2 Python Fundamentals
            </h3>
            <ul className="list-disc ml-8">
              <li>Python Programs and Statements</li>
              <li>Arithmetic Operators</li>
              <li>Using Python as a Calculator</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">
              1.3 Variables and Data Types
            </h3>
            <ul className="list-disc ml-8">
              <li>Defining Variable Names and Naming Conventions</li>
              <li>Operators, Operands, and Operator Precedence</li>
              <li>Changing and Updating Variable Values</li>
              <li>Assigning Multiple Values to Variables</li>
              <li>Data Types: int, float, complex</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">
              1.4 User Input and Type Handling
            </h3>
            <ul className="list-disc ml-8">
              <li>Taking Input from Users</li>
              <li>Type Casting and Type Checking</li>
              <li>Type Validation</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Moduel 2: Control Structure and Functions
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              2.1 Conditional Statements and Recursion
            </h3>
            <ul className="list-disc ml-8">
              <li>Conditional Execution</li>
              <li>Chained and Nested Conditionals</li>
              <li>Recursion and Recursive Functions</li>
              <li>Stack Diagrams and Infinite Recursion</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">2.2 Iteration</h3>
            <ul className="list-disc ml-8">
              <li>Multiple Assignments and Updating Variables</li>
              <li>The while Statement and for Loop</li>
              <li>break and continue Statements</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">2.3 Strings</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Strings</li>
              <li>Single vs Multiline Strings</li>
              <li>String Indexing and Slicing</li>
              <li>String Methods and Immutable Data Types</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Module 3: Advanced Data Type
            </h2>

            <h3 className="text-blue-500 font-semibold py-2">3.1 Lists</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Lists</li>
              <li>Indexing, Slicing, Looping, and Conditional Statements</li>
              <li>List Methods and List Comprehensions</li>
              <li>Mutable vs Immutable Data Types</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">3.2 Tuples</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Tuples</li>
              <li>Indexing, Slicing, and Looping</li>
              <li>Tuples vs Lists</li>
              <li>Tuple Unpacking and Typecasting</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">3.3 Sets</h3>
            <ul className="list-disc ml-8">
              <li>Introductions to Sets</li>
              <li>Set Methods and Operations</li>
              <li>Frozen Set vs Set</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              3.4 Dictionaries
            </h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Dictionaries</li>
              <li>Dictionary Methods and Comprehensions</li>
              <li>Nested Dictionaries and None Type</li>
              <li>Identity Operators</li>
            </ul>
            <h2 className="text-blue-500 font-bold py-4">
              Module 4: Functions and OOP
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">4.1 Functions</h3>
            <ul className="list-disc ml-8">
              <li>Function Definition and Call</li>
              <li>Arguments/Parameters and Return Statements</li>
              <li>Handling Multiple Return Values</li>
              <li>Default vs Non-default Arguments</li>
              <li>Global and Local Variables</li>
              <li>*args and **kwargs</li>
              <li>Recursion Trees and the pass Keyword</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              4.2 Object-Oriented Programming
            </h3>
            <ul className="list-disc ml-8">
              <li>Classes and Objects</li>
              <li>Class and Object Attributes</li>
              <li>The __init__() Method and self Keyword</li>
              <li>Inheritance and Polymorphism</li>
              <li>Encapsulation and Exception Handling</li>
            </ul>
            <h2 className="text-blue-500 font-bold py-4">
              Module 5: Exception Handling and File Operations
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              5.1 Exception Handling
            </h3>
            <ul className="list-disc ml-8">
              <li>Understanding and Handling Exceptions</li>
              <li>try-except Blocks</li>
              <li>Catching Specific and Multiple Exceptions</li>
              <li>The finally Clause and Raising Exceptions</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              5.2 File Handling
            </h3>
            <ul className="list-disc ml-8">
              <li>Opening Files and Modes</li>
              <li>Reading and Writing Files</li>
              <li>Handling CSV Files with DictReader and DictWriter</li>
              <li>Exception Handling in File Operations</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Module 6: Additional Libraries and SQL
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              6.1 Essential Libraries
            </h3>
            <ul className="list-disc ml-8">
              <li>Lambda Functions</li>
              <li>map(), filter()</li>
              <li>os, random, and math Libraries</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">
              6.2 SQL Integration
            </h3>
            <ul className="list-disc ml-8">
              <li>Creating and Managing Databases</li>
              <li>SQL Operations: INSERT, SELECT, UPDATE, DELETE</li>
              <li>Filtering Data with SQL</li>
              <li>Introduction to Git and GitHub</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Module 7: Data Analysis with Pandas
            </h2>

            <h3 className="text-blue-500 font-semibold py-2">
              7.1 Pandas Basics
            </h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Pandas and DataFrames</li>
              <li>Reading and Writing CSV Files</li>
              <li>Data Manipulation and Basic Visualization</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              7.2 Advanced Visualization
            </h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Matplotlib, Seaborn, and Plotly</li>
              <li>Basic Plotting Techniques</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Module 8: Data Science Foundations
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              8.1 Introduction to Data Science
            </h3>
            <ul className="list-disc ml-8">
              <li>Defining Data Science and Related Fields</li>
              <li>Overview of Data Science Tools</li>
            </ul>

            <h3 className="text-blue-500 font-semibold py-2">
              8.2 Statistics and Probablity
            </h3>
            <ul className="list-disc ml-8">
              <li>Data Description and Distribution</li>
              <li>Measures of Central Tendency and Dispersion</li>
              <li>Statistical Tests and Correlation Coefficients</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">8.3 Numpy</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Numpy</li>
              <li>Array Operations and Methods</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Module 9: Exploratory Data Analysis and Visualization
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              9.1 Pandas and EDA
            </h3>
            <ul className="list-disc ml-8">
              <li>Data Wrangling and Model Developement</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              9.2 Visualization with Scipy and Seaborn
            </h3>
            <ul className="list-disc ml-8">
              <li>Basic and Applied Visualizations</li>
              <li>Introduction to Tableau for Data Visualization</li>
            </ul>

            <h2 className="text-blue-500 font-bold py-4">
              Module 10: Machine Learning
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              10.1 Machine Learning Fundamentals
            </h3>
            <ul className="list-disc ml-8">
              <li>Core Concepts and Algorithms</li>
              <li>Supervised vs Unsupervised Learning</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              10.2 Supervised Learning
            </h3>
            <ul className="list-disc ml-8">
              <li>Linear and Logistic Regression</li>
              <li>Support Vector Machines (SVM)</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              10.3 Unsupervised Learning
            </h3>
            <ul className="list-disc ml-8">
              <li>Clustering with K-Means</li>
            </ul>
            <h2 className="text-blue-500 font-bold py-4">
              Module 11: Applied Machine Learning and Projects
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              11.1 Machine Learning Web Appps
            </h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Flask and Streamlit</li>
              <li>ML Model Deployment</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              11.2 Capstone Project
            </h3>
            <ul className="list-disc ml-8">
              <li>Web Scraping and Database Projects</li>
              <li>Data Entry Applications</li>
            </ul>
            <h2 className="text-blue-500 font-bold py-4">
              Module 12: Applied Topics in Data Science
            </h2>
            <h3 className="text-blue-500 font-semibold py-2">
              12.1 Text Mining and NLP
            </h3>
            <ul className="list-disc ml-8">
              <li>Natural Language Processing with NLTK</li>
              <li>Text Preprocessing and Cleaning</li>
              <li>Regex for Text Extraction</li>
            </ul>
            <h3 className="text-blue-500 font-semibold py-2">
              12.2 Applied Machine Learning
            </h3>
            <ul className="list-disc ml-8">
              <li>Exploratory Data Analysis and Hypothesis Testing</li>
              <li>Regression, Classification, and Topic Modeling Projects</li>
            </ul>
            <h2 className="text-blue-500 font-bold py-4">
              Assesement and Certification
            </h2>
            <ul className="list-disc ml-8">
              <li>Regular Assignments and Quizzes</li>
              <li>Final Project and Presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataAnalytics;
