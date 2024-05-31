import React from "react";
const ASPDotNet = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4">
              ASP.NET MVC Course Syllabus:
            </h1>
            <br></br>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 1: Introduction to ASP.NET Framework
            </h2>
            <ul className="list-disc ml-8">
              <li>Overview of ASP.NET Framework</li>
              <li>
                Understanding the MVC (Model-View-Controller) architecture
              </li>
              <li>
                Setting up the development environment (Visual Studio, .NET
                Framework)
              </li>
              <li>Creating a new ASP.NET MVC project</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 2: Building Models
            </h2>
            <ul className="list-disc ml-8">
              <li>Introduction to Models in ASP.NET MVC</li>
              <li>Creating Entity Classes</li>
              <li>Data Annotations for Validation</li>
              <li>Working with Entity Framework for Database Connectivity</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 3: Creating Views
            </h2>
            <ul className="list-disc ml-8">
              <li>Introduction to Views in ASP.NET MVC</li>
              <li>Using Razor Syntax for Dynamic Content</li>
              <li>Layouts and Partial Views</li>
              <li>HTML Helpers for Form Elements</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 4: Controller and Routing
            </h2>
            <ul className="list-disc ml-8">
              <li>Understanding Controllers and Actions</li>
              <li>Defining Routes in ASP.NET MVC</li>
              <li>Handling HTTP Requests (GET, POST, PUT, DELETE)</li>
              <li>Implementing CRUD Operations in Controllers</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 5: Working with Data
            </h2>
            <ul className="list-disc ml-8">
              <li>Integrating Entity Framework for Data Access</li>
              <li>Repository Pattern for Data Layer Abstraction</li>
              <li>LINQ (Language Integrated Query) for Data Manipulation</li>
              <li>Database Migrations and Code-First Approach</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 6: Implementing CRUD Operations
            </h2>
            <ul className="list-disc ml-8">
              <li>Creating Views for CRUD Operations</li>
              <li>
                Implementing Create, Read, Update, and Delete actions in
                Controllers
              </li>
              <li>Form Validation and Error Handling</li>
              <li>Displaying Data in Views</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 7: Security and Authentication
            </h2>
            <ul className="list-disc ml-8">
              <li>Authentication and Authorization in ASP.NET MVC</li>
              <li>Implementing User Registration and Login Functionality</li>
              <li>Role-Based Access Control (RBAC)</li>
              <li>Securing Controllers and Actions</li>
            </ul>
            <h2 className="text-blue-500  font-bold mb-4">
              Module 8: Advanced Topics
            </h2>
            <ul className="list-disc ml-8">
              <li>Working with Ajax and jQuery for Asynchronous Operations</li>
              <li>Implementing Search and Pagination Functionality</li>
              <li>Error Logging and Exception Handling</li>
              <li>Performance Optimization Techniques</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ASPDotNet;
