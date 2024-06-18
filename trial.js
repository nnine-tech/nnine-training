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
            <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">
              Module 1: Introduction to Python Programming
            </h1>
            <h2 className="text-xl text-red-500 font-bold mb-4">
              1.1 Getting Started with Tools
            </h2>
            <ul className="list-disc text-black ml-8">
              <li>Introduction to Google Colab and Jupyter Notebook/IDE</li>
              <li>Basics of Markdown</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">
              1.2 Python Fundamentals
            </h2>
            <ul className="list-disc text-black ml-8">
              <li>Python Programs and Statements</li>
              <li>Arithmetic Operators</li>
              <li>Using Python as a Calculator</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">
              1.3 Variables and Data Types
            </h2>
            <ul className="list-disc text-black ml-8">
              <li>Defining Variable Names and Naming Conventions</li>
              <li>Operators, Operands, and Operator Precedence</li>
              <li>Changing and Updating Variable Values</li>
              <li>Assigning Multiple Values to Variables</li>
              <li>Data Types: int, float, complex</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-red-500 font-bold mb-4">
              1.4 User Input and Type Handling
            </h2>
            <ul className="list-disc text-black ml-8">
              <li>Taking Input from Users</li>
              <li>Type Casting and Type Checking</li>
              <li>Type Validation</li>
            </ul>
          </div>
          <h1>Module 2: Control Structures and Functions</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            2.1 Conditional Statements and Recursion
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Conditional Execution</li>
            <li>Chained and Nested Conditionals</li>
            <li>Recursion and Recursive Functions</li>
            <li>Stack Diagrams and Infinite Recursion</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">2.2 Iteration</h2>
          <ul className="list-disc text-black ml-8">
            <li>Multiple Assignments and Updating Variables</li>
            <li>The while Statement and for Loop</li>
            <li>break and continue Statements</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">2.3 Strings</h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Strings</li>
            <li>Single vs Multiline Strings</li>
            <li>String Indexing and Slicing</li>
            <li>String Methods and Immutable Data Types</li>
          </ul>
          <h1>Module 3: Advanced Data Types</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">3.1 Lists</h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Lists</li>
            <li>Indexing, Slicing, Looping, and Conditional Statements</li>
            <li>List Methods and List Comprehensions</li>
            <li>Mutable vs Immutable Data Types</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">3.2 Tuples</h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Tuples</li>
            <li>Indexing, Slicing, and Looping</li>
            <li>Tuples vs Lists</li>
            <li>Tuple Unpacking and Typecasting</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">3.3 Sets</h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Sets</li>
            <li>Set Methods and Operations</li>
            <li>Frozenset vs Set</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            3.4 Dictionaries
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Dictionaries</li>
            <li>Dictionary Methods and Comprehensions</li>
            <li>Nested Dictionaries and None Type</li>
            <li>Identity Operators</li>
          </ul>
          <h1>Module 4: Functions and OOP</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">4.1 Functions</h2>
          <ul className="list-disc text-black ml-8">
            <li>Function Definition and Call</li>
            <li>Arguments/Parameters and Return Statements</li>
            <li>Handling Multiple Return Values</li>
            <li>Default vs Non-default Arguments</li>
            <li>Global and Local Variables</li>
            <li>*args and **kwargs</li>
            <li>Recursion Trees and the pass Keyword</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            4.2 Object-Oriented Programming
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Classes and Objects</li>
            <li>Class and Object Attributes</li>
            <li>The __init__() Method and self Keyword</li>
            <li>Inheritance and Polymorphism</li>
            <li>Encapsulation and Exception Handling</li>
          </ul>
          <h1>Module 5: Exception Handling and File Operations</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            5.1 Exception Handling
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Understanding and Handling Exceptions</li>
            <li>try-except Blocks</li>
            <li>Catching Specific and Multiple Exceptions</li>
            <li>The finally Clause and Raising Exceptions</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            5.2 File Handling
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Opening Files and Modes</li>
            <li>Reading and Writing Files</li>
            <li>Handling CSV Files with DictReader and DictWriter</li>
            <li>Exception Handling in File Operations</li>
          </ul>
          <h1>Module 6: Additional Libraries and SQL</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            6.1 Essential Libraries
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Lambda Functions</li>
            <li>map(), filter()</li>
            <li>os, random, and math Libraries</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            6.2 SQL Integration
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Creating and Managing Databases</li>
            <li>SQL Operations: INSERT, SELECT, UPDATE, DELETE</li>
            <li>Filtering Data with SQL</li>
            <li>Introduction to Git and GitHub</li>
          </ul>
          <h1>Module 7: Data Analysis with Pandas</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            7.1 Pandas Basics
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Pandas and DataFrames</li>
            <li>Reading and Writing CSV Files</li>
            <li>Data Manipulation and Basic Visualization</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            7.2 Advanced Visualization
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Matplotlib, Seaborn, and Plotly</li>
            <li>Basic Plotting Techniques</li>
          </ul>
          <h1>Module 8: Data Science Foundations</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            8.1 Introduction to Data Science
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Defining Data Science and Related Fields</li>
            <li>Overview of Data Science Tools</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            8.2 Statistics and Probability
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Data Description and Distribution</li>
            <li>Measures of Central Tendency and Dispersion</li>
            <li>Statistical Tests and Correlation Coefficients</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">8.3 Numpy</h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Numpy</li>
            <li>Array Operations and Methods</li>
          </ul>
          <h1>Module 9: Exploratory Data Analysis and Visualization</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            9.1 Pandas and EDA
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Data Wrangling and Model Development</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            9.2 Visualization with Scipy and Seaborn
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Basic and Applied Visualizations</li>
            <li>Introduction to Tableau for Data Visualization</li>
          </ul>
          <h1>Module 10: Machine Learning</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            10.1 Machine Learning Fundamentals
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Core Concepts and Algorithms</li>
            <li>Supervised vs Unsupervised Learning</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            10.2 Supervised Learning
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Linear and Logistic Regression</li>
            <li>Support Vector Machines (SVM)</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            10.3 Unsupervised Learning
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Clustering with K-Means</li>
          </ul>
          <h1>Module 11: Applied Machine Learning and Projects</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            11.1 Machine Learning Web Apps
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Introduction to Flask and Streamlit</li>
            <li>ML Model Deployment</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            11.2 Capstone Projects
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Web Scraping and Database Projects</li>
            <li>Data Entry Applications</li>
          </ul>
          <h1>Module 12: Advanced Topics in Data Science</h1>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            12.1 Text Mining and NLP
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Natural Language Processing with NLTK</li>
            <li>Text Preprocessing and Cleaning</li>
            <li>Regex for Text Extraction</li>
          </ul>
          <h2 className="text-xl text-red-500 font-bold mb-4">
            12.2 Applied Machine Learning
          </h2>
          <ul className="list-disc text-black ml-8">
            <li>Exploratory Data Analysis and Hypothesis Testing</li>
            <li>Regression, Classification, and Topic Modeling Projects</li>
          </ul>
          <h1>Assessment and Certification</h1>
          <ul className="list-disc text-black ml-8">
            <li>Regular Assignments and Quizzes</li>
            <li>Final Project Submission and Presentation</li>
          </ul>
          <p>
            This syllabus provides a comprehensive guide to mastering Python and
            its applications in data science, ensuring a thorough understanding
            of both basic and advanced concepts.
          </p>
        </div>
      </div>
    </>
  );
};
export default DataAnalytics;
