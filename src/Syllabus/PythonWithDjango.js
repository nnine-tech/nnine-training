import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const PythonDjangoSyllabus = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">Python with Django Syllabus</h1>

            <h2 className="text-xl text-red-500 font-bold mb-4">1. Python Basics</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.1 Introduction to Python</h3>
            <p className="text-black ml-8">
              Overview of Python, installation, basic syntax, data types, variables, and operators.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.2 Control Flow and Functions</h3>
            <p className="text-black ml-8">
              Conditional statements, loops, functions, parameters, return values, and scope.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.3 Data Structures and Algorithms</h3>
            <p className="text-black ml-8">
              Lists, tuples, dictionaries, sets, comprehensions, sorting algorithms, searching algorithms.
            </p>
            {/* Continue with more topics under Python Basics */}

            <h2 className="text-xl text-red-500 font-bold mb-4">2. Object-Oriented Programming (OOP) in Python</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.1 Classes and Objects</h3>
            <p className="text-black ml-8">
              Defining classes, creating objects, attributes, methods, constructors, and inheritance.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.2 Advanced OOP Concepts</h3>
            <p className="text-black ml-8">
              Encapsulation, polymorphism, method overriding, class and static methods.
            </p>
            {/* Continue with more topics under Object-Oriented Programming (OOP) in Python */}

            <h2 className="text-xl text-red-500 font-bold mb-4">3. Introduction to Django</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">3.1 Setting up Django</h3>
            <p className="text-black ml-8">
              Installation, project structure, understanding Django settings, and managing applications.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">3.2 Django Models and ORM</h3>
            <p className="text-black ml-8">
              Defining models, database migrations, querying data using Django ORM.
            </p>
            {/* Continue with more topics under Introduction to Django */}

            <h2 className="text-xl text-red-500 font-bold mb-4">4. Building Web Applications with Django</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">4.1 Views and Templates</h3>
            <p className="text-black ml-8">
              Creating views, rendering templates, passing data to templates, URL routing.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">4.2 Forms and Form Handling</h3>
            <p className="text-black ml-8">
              Creating HTML forms, form validation, handling form submissions, form widgets.
            </p>
            {/* Continue with more topics under Building Web Applications with Django */}

            <h2 className="text-xl text-red-500 font-bold mb-4">5. Advanced Django Concepts</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">5.1 Authentication and Authorization</h3>
            <p className="text-black ml-8">
              User authentication, session management, permissions, and role-based access control.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">5.2 Django REST Framework</h3>
            <p className="text-black ml-8">
              Building RESTful APIs, serializers, views, authentication, and testing.
            </p>
            {/* Continue with more advanced topics */}

            <h2 className="text-xl text-red-500 font-bold mb-4">6. Deployment and Project</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">6.1 Deploying Django Applications</h3>
            <p className="text-black ml-8">
              Hosting options, deploying Django applications on platforms like Heroku, AWS, or DigitalOcean.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">6.2 Capstone Project</h3>
            <p className="text-black ml-8">
              Building a real-world Django application from scratch, integrating various Django concepts.
            </p>
            {/* Continue with more deployment and project-related topics */}

            {/* Add more sections and topics as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PythonDjangoSyllabus;
