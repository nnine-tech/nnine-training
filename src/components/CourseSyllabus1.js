"use client";

import React, { useState } from "react";
import MernSchedule from "./MernSchedule";
import MernClassType from "./MernClassType";

const CourseSyllabus1 = () => {
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
      title: "Introduction",
      lectures: [
        "Introduction to MERN stack",
        "Introduction to JavaScript programming language",
        "Technologies around JavaScript",
      ],
      info: "3 lectures",
    },
    {
      title: "Environment Setup",
      lectures: [
        "Introduction to development tools",
        "Text Editor, IDE",
        "Command Prompt(command line)",
        "Node setup",
        "Postman",
      ],
      info: "5 lectures",
    },
    {
      title: "JavaScript Basics",
      lectures: [
        "Overview of JavaScript",
        "Brief History of JavaScript",
        "Variables",
        "Operator and Operands",
        "Conditionals and Iterations",
        "Data types and coercion",
        "Introduction to data structures like stack, queues, array, and objects",
        "Debugging JavaScript code",
        "JavaScript naming conventions",
        "Introduction to JavaScript functions and classes",
      ],
      info: "10 lectures",
    },
    {
      title: "Advanced JavaScript",
      lectures: [
        "EcmaScript and Modern JavaScript",
        "Need of ES language specification",
        "Understanding transpilers and polyfills",
        "CommonJS vs ES modules",
        "Modern ES6+ features",
        "Introduction to TypeScript",
        "TypeScript vs JavaScript",
        "JavaScript under the Hood",
        "Hoisting",
        "Block/Global/Local Scopes and Temporal Dead Zones",
        "Scopes and Closures",
        "Prototypes",
        "Asynchronous JavaScript and Web APIs usages",
        "Global execution context",
        "Event loops",
      ],
      info: "14 lectures",
    },
    {
      title: "JavaScript Functions",
      lectures: [
        "Arguments and Parameters",
        "Functions declaration and execution",
        "ES6 arrow functions",
        "Callback functions",
        "Higher Order Functions",
      ],
      info: "5 lectures",
    },
    {
      title: "Git and Versioning",
      lectures: [
        "Introduction to version control and usage",
        "GitHub, Bitbucket, and GitLab",
        "Initializing and cloning git projects",
        "Git commit/push",
        "Branches and Pull Requests",
        "Standard practices for naming GitHub branches",
        "The .gitignore file",
        "GitHub exercises: Collaborating in the same repo and handling merge conflicts live",
      ],
      info: "8 lectures",
    },
    {
      title: "Web Technology",
      lectures: [
        "Introduction to web flow and architecture",
        "Introduction to web and how it works",
        "Client-server architecture definition",
        "Introduction to API and its need",
        "Introduction to REST API",
        "Software development/design patterns",
        "MVC pattern",
      ],
      info: "7 lectures",
    },
    {
      title: "Node.js",
      lectures: [
        "Introduction to Node.js",
        "Requirements for Node.js",
        "Node.js and its usages",
        "Setup Node.js",
        "NPM (Node Package Manager)",
        "Introduction to NPM",
        "Global vs Local Installation",
        "The package.json file",
        "Attributes of package.json",
        "Installing and uninstalling packages using npm",
        "Introduction to dependency and dev-dependency",
      ],
      info: "11 lectures",
    },
    {
      title: "Express.js",
      lectures: [
        "Introduction to Express.js",
        "Introduction to framework and Express",
        "Setting up an Express application",
        "Creating a Hello World application using Express",
        "Architecturing the Express.js application",
        "Express flow and how it works",
        "Introduction to Express application and usages",
        "The HTTP protocol",
        "Introduction to Express routing",
        "Express request and response objects",
        "Express Middlewares",
        "Introduction to middlewares",
        "Types of middlewares",
        "Usages of middlewares",
        "Error handling using middlewares",
        "Serving static files using static",
        "File handling using middlewares",
        "Authorization and Authentication in Express",
        "Introduction to auth and authorization",
        "Introduction to JSON Web Token",
        "Authorization using JWT",
        "API protection",
      ],
      info: "18 lectures",
    },
    {
      title: "MongoDB",
      lectures: [
        "Detail of MongoDB",
        "Introduction to database and existing databases",
        "Understanding NoSQL (schema-less database)",
        "Introduction to MongoDB (collection and documents)",
        "CRUD operations using shell command",
        "Using MongoDB Native driver with Node",
        "Database modeling using ODM",
        "Using MongoDB Compass (UI-based database system)",
        "Update, insert, delete, and upsert documents",
        "Aggregation in MongoDB",
        "Map reduce",
      ],
      info: "11 lectures",
    },
    {
      title: "Express with MongoDB",
      lectures: [
        "Building APIs with Express.js and MongoDB",
        "Using MongoDB as a data store in Express app with Mongoose",
        "Backend Project: API development using Node.js, Express.js, and MongoDB",
      ],
      info: "3 lectures",
    },
    {
      title: "Frontend Technology",
      lectures: [
        "Basic Web Overview",
        "Introduction to HTML",
        "Introduction to HTML tags, attributes, and properties",
        "Introduction to CSS",
        "Importance and uses of CSS in web design",
        "HTML/CSS Practice: Creating and designing basic web designs",
        "Responsive Web Design tools",
        "Introduction to responsive vs non-responsive design",
        "Bootstrap, a CSS-based framework",
        "Alternatives to Bootstrap",
      ],
      info: "10 lectures",
    },
    {
      title: "React.js Fundamentals",
      lectures: [
        "Introduction to React.js",
        "The objective of this training",
        "Present scenario/Scopes of this technology",
        "Environment setup",
        "Node and npm",
        "VS Code",
        "Overview of JavaScript",
        "Brief History of JavaScript",
        "Variables",
        "Operator and Operands",
        "Conditionals and Iterations",
        "Data types and coercion",
        "Introduction to data structures like stack, queues, array, and objects",
        "Debugging JavaScript code",
        "JavaScript naming conventions",
        "Introduction to JavaScript functions and classes",
        "EcmaScript and modern JavaScript",
        "Need of ES language specification",
        "Understanding of transpilers and polyfills",
        "CommonJS vs ES modules",
        "Modern ES6+ features",
        "JavaScript under the Hood",
        "Hoisting",
        "Block/Global/Local Scopes and Temporal Dead Zones",
        "Scopes and Closures",
        "Prototypes",
        "Asynchronous JavaScript and Web APIs usages",
        "Global execution context",
        "Event loops",
      ],
      info: "21 lectures",
    },
    {
      title: "React.js Functions",
      lectures: [
        "Arguments and Parameters",
        "Functions declaration and execution",
        "Pure and Impure Functions",
        "ES6 arrow functions",
        "IIFE and anonymous functions",
        "Callback functions",
        "Higher Order Functions",
      ],
      info: "7 lectures",
    },
    {
      title: "React Components and Routing",
      lectures: [
        "Understanding React as a library and its ecosystem",
        "Difference between libraries and frameworks",
        "Setting up React with CDN without using any frameworks",
        "React components: Folder structure and architecture",
        "Functional and Class-based Components in React",
        "React Component Lifecycle Methods",
        "Styling a React component",
        "Introduction to SPAs",
        "Virtual DOM in React",
        "State",
        "State exercise: Build a like button, counter apps, etc. using React state and useState hooks",
        "Props",
        "Props exercise: Pass data from parent to child, child to parent, and from one child to its siblings",
        "Refs",
        "Refs exercise: Targeting a particular DOM, scrolling to a particular DOM, auto-focusing an input field programmatically, etc. using useRef hooks",
        "Higher-Order Components",
        "HOC exercise: Building reusable components using Recompose",
        "React Router",
        "Setup React Router to handle routes",
        "Protected and nested routes",
      ],
      info: "21 lectures",
    },
    {
      title: "React Forms and Validation",
      lectures: [
        "Basics of React forms and handling various types of form fields and events",
        "Client-side form validation",
        "Advanced form handling with Formik and schema validators like Yup or regex",
      ],
      info: "4 lectures",
    },
    {
      title: "Advanced React",
      lectures: [
        "Understanding React as a library and its ecosystem",
        "Introduction to Next.js and its benefits",
        "Intro to Next.js page router and app router",
        "Creating API endpoints with Next.js",
        "Understanding Server-Side Rendering (SSR) and Static Site Generation (SSG) with Next.js",
        "Fetching data from API routes",
        "Integrating API routes into a Next.js app",
        "Implementing user authentication and handling cookies storage",
        "Handling user sessions and access control",
        "Introduction to serverless functions in Next.js",
        "Implementing OAuth-based authentication (e.g., using OAuth providers like Google, Facebook, or GitHub)",
      ],
      info: "11 lectures",
    },
    {
      title: "Redux",
      lectures: [
        "Flux Architecture",
        "State management using Redux",
        "Reducers",
        "Actions",
        "Store",
        "Middleware",
        "React-Redux library",
        "Setting up Redux in a React application",
        "Connecting React components with Redux",
        "Asynchronous actions with Redux Thunk or Saga",
        "Redux Toolkit",
        "Project using Redux: Implementing state management in a React application",
      ],
      info: "12 lectures",
    },
    {
      title: "Testing",
      lectures: [
        "Introduction to testing in JavaScript",
        "Types of testing: Unit, Integration, End-to-End",
        "Testing frameworks: Jest, Mocha, Chai",
        "Testing React components with Jest and React Testing Library",
        "Mocking and spying",
        "Writing test cases for Redux actions and reducers",
        "API testing with Postman",
        "End-to-End testing with tools like Cypress",
      ],
      info: "8 lectures",
    },
    {
      title: "Deployment",
      lectures: [
        "Introduction to deployment",
        "Deployment options for Node.js applications",
        "Deployment with services like Heroku, Vercel, Netlify, and AWS",
        "Continuous Integration/Continuous Deployment (CI/CD) concepts",
        "Setting up CI/CD pipelines",
        "Monitoring and logging",
        "Environment variables and configuration management",
      ],
      info: "6 lectures",
    },
    {
      title: "Final Project",
      lectures: [
        "Project requirements and planning",
        "Design and architecture",
        "Implementation",
        "Testing and Debugging",
        "Deployment and presentation",
        "Code review and feedback",
      ],
      info: "5 lectures",
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
            <div
              key={index}
              className={`relative w-full max-w-[800px]`}
            >
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all ${
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
                  <span className="font-semibold font-poppins">
                    {section.title}
                  </span>
                  <span className="hidden md:block text-right ml-auto font-poppins">
                    {section.info}
                  </span>
                </div>
              </div>
              {openDropdowns[section.title] && (
                <div className="w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
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
      <MernClassType />
    </div>
  );
};

export default CourseSyllabus1;
