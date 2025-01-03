// "use client";

// import React, { useState } from "react";
// import MernSchedule from "./MernSchedule";
// import MernClassType from "./MernClassType";

// const CourseSyllabus1 = () => {
//   // State to track which numbered topic is open
//   const [openTopics, setOpenTopics] = useState({});

//   // Function to toggle dropdown visibility
//   const toggleTopic = (title) => {
//     setOpenTopics((prev) => ({
//       ...prev,
//       [title]: !prev[title],
//     }));
//   };

//   // Array of syllabus sections
//   const lectures = [
//     {
//       content: "Introduction",
//       subLectures: [
//         { content: "Introduction to MERN stack" },
//         { content: "Introduction to JavaScript programming language" },
//         { content: "Technologies around JavaScript" },
//       ],
//     },
//     {
//       content: "Environment Setup",
//       subLectures: [
//         { content: "Introduction to development tools" },
//         { content: "Text Editor, IDE" },
//         { content: "Command Prompt(command line)" },
//         { content: "Node setup" },
//         { content: "Postman" },
//       ],
//     },
//     {
//       content: "JavaScript Basics",
//       subLectures: [
//         { content: "Overview of JavaScript" },
//         { content: "Brief History of JavaScript" },
//         { content: "Variables" },
//         { content: "Operator and Operands" },
//         { content: "Conditionals and Iterations" },
//         { content: "Data types and coercion" },
//         {
//           content:
//             "Introduction to data structures like stack, queues, array, and objects",
//         },
//         { content: "Debugging JavaScript code" },
//         { content: "JavaScript naming conventions" },
//         { content: "Introduction to JavaScript functions and classes" },
//       ],
//     },
//     {
//       content: "Advanced JavaScript",
//       subLectures: [
//         { content: "EcmaScript and Modern JavaScript" },
//         { content: "Need of ES language specification" },
//         { content: "Understanding transpilers and polyfills" },
//         { content: "CommonJS vs ES modules" },
//         { content: "Modern ES6+ features" },
//         { content: "Introduction to TypeScript" },
//         { content: "TypeScript vs JavaScript" },
//         { content: "JavaScript under the Hood" },
//         { content: "Hoisting" },
//         { content: "Block/Global/Local Scopes and Temporal Dead Zones" },
//         { content: "Scopes and Closures" },
//         { content: "Prototypes" },
//         { content: "Asynchronous JavaScript and Web APIs usages" },
//         { content: "Global execution context" },
//         { content: "Event loops" },
//       ],
//     },
//     {
//       content: "JavaScript Functions",
//       subLectures: [
//         { content: "Arguments and Parameters" },
//         { content: "Functions declaration and execution" },
//         { content: "ES6 arrow functions" },
//         { content: "Callback functions" },
//         { content: "Higher Order Functions" },
//       ],
//     },
//     {
//       content: "Git and Versioning",
//       subLectures: [
//         { content: "Introduction to version control and usage" },
//         { content: "GitHub, Bitbucket, and GitLab" },
//         { content: "Initializing and cloning git projects" },
//         { content: "Git commit/push" },
//         { content: "Branches and Pull Requests" },
//         { content: "Standard practices for naming GitHub branches" },
//         { content: "The .gitignore file" },
//         {
//           content:
//             "GitHub exercises: Collaborating in the same repo and handling merge conflicts live",
//         },
//       ],
//     },
//     {
//       content: "Web Technology",
//       subLectures: [
//         { content: "Introduction to web flow and architecture" },
//         { content: "Introduction to web and how it works" },
//         { content: "Client-server architecture definition" },
//         { content: "Introduction to API and its need" },
//         { content: "Introduction to REST API" },
//         { content: "Software development/design patterns" },
//         { content: "MVC pattern" },
//       ],
//     },
//     {
//       content: "Node.js",
//       subLectures: [
//         { content: "Introduction to Node.js" },
//         { content: "Requirements for Node.js" },
//         { content: "Node.js and its usages" },
//         { content: "Setup Node.js" },
//         { content: "NPM (Node Package Manager)" },
//         { content: "Introduction to NPM" },
//         { content: "Global vs Local Installation" },
//         { content: "The package.json file" },
//         { content: "Attributes of package.json" },
//         { content: "Installing and uninstalling packages using npm" },
//         { content: "Introduction to dependency and dev-dependency" },
//       ],
//     },
//     {
//       content: "Express.js",
//       subLectures: [
//         { content: "Introduction to Express.js" },
//         { content: "Introduction to framework and Express" },
//         { content: "Setting up an Express application" },
//         { content: "Creating a Hello World application using Express" },
//         { content: "Architecturing the Express.js application" },
//         { content: "Express flow and how it works" },
//         { content: "Introduction to Express application and usages" },
//         { content: "The HTTP protocol" },
//         { content: "Introduction to Express routing" },
//         { content: "Express request and response objects" },
//         { content: "Express Middlewares" },
//         { content: "Introduction to middlewares" },
//         { content: "Types of middlewares" },
//         { content: "Usages of middlewares" },
//         { content: "Error handling using middlewares" },
//         { content: "Serving static files using static" },
//         { content: "File handling using middlewares" },
//         { content: "Authorization and Authentication in Express" },
//         { content: "Introduction to auth and authorization" },
//         { content: "Introduction to JSON Web Token" },
//         { content: "Authorization using JWT" },
//         { content: "API protection" },
//       ],
//     },
//     {
//       content: "MongoDB",
//       subLectures: [
//         { content: "Detail of MongoDB" },
//         { content: "Introduction to database and existing databases" },
//         { content: "Understanding NoSQL (schema-less database)" },
//         { content: "Introduction to MongoDB (collection and documents)" },
//         { content: "CRUD operations using shell command" },
//         { content: "Using MongoDB Native driver with Node" },
//         { content: "Database modeling using ODM" },
//         { content: "Using MongoDB Compass (UI-based database system)" },
//         { content: "Update, insert, delete, and upsert documents" },
//         { content: "Aggregation in MongoDB" },
//         { content: "Map reduce" },
//       ],
//     },
//     {
//       content: "Express with MongoDB",
//       subLectures: [
//         { content: "Building APIs with Express.js and MongoDB" },
//         {
//           content: "Using MongoDB as a data store in Express app with Mongoose",
//         },
//         {
//           content:
//             "Backend Project: API development using Node.js, Express.js, and MongoDB",
//         },
//       ],
//     },
//     {
//       content: "Frontend Technology",
//       subLectures: [
//         { content: "Basic Web Overview" },
//         { content: "Introduction to HTML" },
//         { content: "Introduction to HTML tags, attributes, and properties" },
//         { content: "Introduction to CSS" },
//         { content: "Importance and uses of CSS in web design" },
//         {
//           content:
//             "HTML/CSS Practice: Creating and designing basic web designs",
//         },
//         { content: "Responsive Web Design tools" },
//         { content: "Introduction to responsive vs non-responsive design" },
//         { content: "Bootstrap, a CSS-based framework" },
//         { content: "Alternatives to Bootstrap" },
//       ],
//     },
//     {
//       content: "React.js Fundamentals",
//       subLectures: [
//         { content: "Introduction to React.js" },
//         { content: "The objective of this training" },
//         { content: "Present scenario/Scopes of this technology" },
//         { content: "Environment setup" },
//         { content: "Node and npm" },
//         { content: "VS Code" },
//         { content: "Overview of JavaScript" },
//         { content: "Brief History of JavaScript" },
//         { content: "Variables" },
//         { content: "Operator and Operands" },
//         { content: "Conditionals and Iterations" },
//         { content: "Data types and coercion" },
//         {
//           content:
//             "Introduction to data structures like stack, queues, array, and objects",
//         },
//         { content: "Debugging JavaScript code" },
//         { content: "JavaScript naming conventions" },
//         { content: "Introduction to JavaScript functions and classes" },
//         { content: "EcmaScript and modern JavaScript" },
//         { content: "Need of ES language specification" },
//         { content: "Understanding of transpilers and polyfills" },
//         { content: "CommonJS vs ES modules" },
//         { content: "Modern ES6+ features" },
//         { content: "JavaScript under the Hood" },
//         { content: "Hoisting" },
//         { content: "Block/Global/Local Scopes and Temporal Dead Zones" },
//         { content: "Scopes and Closures" },
//         { content: "Prototypes" },
//         { content: "Asynchronous JavaScript and Web APIs usages" },
//         { content: "Global execution context" },
//         { content: "Event loops" },
//       ],
//     },
//     {
//       content: "React.js Functions",
//       subLectures: [
//         { content: "Arguments and Parameters" },
//         { content: "Functions declaration and execution" },
//         { content: "Pure and Impure Functions" },
//         { content: "ES6 arrow functions" },
//         { content: "IIFE and anonymous functions" },
//         { content: "Callback functions" },
//         { content: "Higher Order Functions" },
//       ],
//     },
//     {
//       content: "React Components and Routing",
//       subLectures: [
//         { content: "Understanding React as a library and its ecosystem" },
//         { content: "Difference between libraries and frameworks" },
//         { content: "Setting up React with CDN without using any frameworks" },
//         { content: "React components: Folder structure and architecture" },
//         { content: "Functional and Class-based Components in React" },
//         { content: "React Component Lifecycle Methods" },
//         { content: "Styling a React component" },
//         { content: "Introduction to SPAs" },
//         { content: "Virtual DOM in React" },
//         { content: "State" },
//         {
//           content:
//             "State exercise: Build a like button, counter apps, etc. using React state and useState hooks",
//         },
//         { content: "Props" },
//         {
//           content:
//             "Props exercise: Pass data from parent to child, child to parent, and from one child to its siblings",
//         },
//         { content: "Refs" },
//         {
//           content:
//             "Refs exercise: Targeting a particular DOM, scrolling to a particular DOM, auto-focusing an input field programmatically, etc. using useRef hooks",
//         },
//         { content: "Higher-Order Components" },
//         {
//           content: "HOC exercise: Building reusable components using Recompose",
//         },
//         { content: "React Router" },
//         { content: "Setup React Router to handle routes" },
//         { content: "Protected and nested routes" },
//       ],
//     },
//     {
//       content: "React Forms and Validation",
//       subLectures: [
//         {
//           content:
//             "Basics of React forms and handling various types of form fields and events",
//         },
//         { content: "Client-side form validation" },
//         {
//           content:
//             "Advanced form handling with Formik and schema validators like Yup or regex",
//         },
//       ],
//     },
//     {
//       content: "Advanced React",
//       subLectures: [
//         { content: "Understanding React as a library and its ecosystem" },
//         { content: "Introduction to Next.js and its benefits" },
//         { content: "Intro to Next.js page router and app router" },
//         { content: "Creating API endpoints with Next.js" },
//         {
//           content:
//             "Understanding Server-Side Rendering (SSR) and Static Site Generation (SSG) with Next.js",
//         },
//         { content: "Fetching data from API routes" },
//         { content: "Integrating API routes into a Next.js app" },
//         {
//           content:
//             "Implementing user authentication and handling cookies storage",
//         },
//         { content: "Handling user sessions and access control" },
//         { content: "Introduction to serverless functions in Next.js" },
//         {
//           content:
//             "Implementing OAuth-based authentication (e.g., using OAuth providers like Google, Facebook, or GitHub)",
//         },
//       ],
//     },
//     {
//       content: "Redux",
//       subLectures: [
//         { content: "Flux Architecture" },
//         { content: "State management using Redux" },
//         { content: "Reducers" },
//         { content: "Actions" },
//         { content: "Store" },
//         { content: "Middleware" },
//         { content: "React-Redux library" },
//         { content: "Setting up Redux in a React application" },
//         { content: "Connecting React components with Redux" },
//         { content: "Asynchronous actions with Redux Thunk or Saga" },
//         { content: "Redux Toolkit" },
//         {
//           content:
//             "Project using Redux: Implementing state management in a React application",
//         },
//       ],
//     },
//     {
//       content: "Testing",
//       subLectures: [
//         { content: "Introduction to testing in JavaScript" },
//         { content: "Types of testing: Unit, Integration, End-to-End" },
//         { content: "Testing frameworks: Jest, Mocha, Chai" },
//         {
//           content:
//             "Testing React components with Jest and React Testing Library",
//         },
//         { content: "Mocking and spying" },
//         { content: "Writing test cases for Redux actions and reducers" },
//         { content: "API testing with Postman" },
//         { content: "End-to-End testing with tools like Cypress" },
//       ],
//     },
//     {
//       content: "Deployment",
//       subLectures: [
//         { content: "Introduction to deployment" },
//         { content: "Deployment options for Node.js applications" },
//         {
//           content:
//             "Deployment with services like Heroku, Vercel, Netlify, and AWS",
//         },
//         {
//           content:
//             "Continuous Integration/Continuous Deployment (CI/CD) concepts",
//         },
//         { content: "Setting up CI/CD pipelines" },
//         { content: "Monitoring and logging" },
//         { content: "Environment variables and configuration management" },
//       ],
//     },
//     {
//       content: "Final Project",
//       subLectures: [
//         { content: "Project requirements and planning" },
//         { content: "Design and architecture" },
//         { content: "Implementation" },
//         { content: "Testing and Debugging" },
//         { content: "Deployment and presentation" },
//         { content: "Code review and feedback" },
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row lg:ml-20 ml-3 mb-10">
//       {/* Syllabus Section */}
//       <div className="w-full flex flex-col sm:mt-4">
//         <div className="w-full flex flex-col mt-10 px-3 sm:px-6">
//           <h1 className="font-bold text-xl sm:text-2xl md:text-3xl p-2 sm:p-4 font-Quicksand mb-4 sm:mb-6 text-[#003366]">
//             Course Syllabus
//           </h1>

//           {lectures.map((lecture, index) => (
//             <div
//               key={index}
//               className="relative w-full lg:w-[500px] xl:w-[700px] mx-auto lg:mx-0 mb-1"
//             >
//               {/* Numbered Topics */}
//               <div
//                 className="cursor-pointer font-semibold flex items-center gap-2 sm:gap-3 border-2 px-2 w-full sm:px-4 py-2 sm:py-3 border-[#004AAD] border-opacity-[5%] font-Quicksand bg-gray-50"
//                 onClick={() => toggleTopic(lecture.content)}
//               >
//                 <img
//                   src="/dropdown.svg"
//                   alt="Toggle Dropdown"
//                   className={`w-[8px] sm:w-[11px] h-[10px] sm:h-[14px] ${
//                     openTopics[lecture.content] ? "rotate-180" : ""
//                   } transition-transform`}
//                 />
//                 <span className="text-sm sm:text-base">{lecture.content}</span>
//               </div>

//               {/* Expandable Content */}
//               {openTopics[lecture.content] && (
//                 <div className="pl-4 sm:pl-6 font-Quicksand border-2 border-[#004AAD] border-opacity-[5%] mt-2">
//                   <ol className="list-decimal">
//                     {lecture.subLectures.map((subLecture, subIdx) => (
//                       <li key={subIdx} className="py-2">
//                         {subLecture.content}
//                         {/* Render subPoints if available */}
//                         {subLecture.subPoints && (
//                           <ul className="ml-4 sm:ml-6 list-disc">
//                             {subLecture.subPoints.map((subPoint, pointIdx) => (
//                               <li key={pointIdx}>{subPoint.content}</li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}
//                   </ol>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* MernClassType Section */}
//       <div className="mt-10 lg:mt-0 flex justify-center lg:mr-[70px]">
//         <MernClassType />
//       </div>
//     </div>
//   );
// };

// export default CourseSyllabus1;

"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ClassType from "./ClassType";

const CourseSyllabus1 = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [activeTopic, setActiveTopic] = useState(null); // Track the active topic

  useEffect(() => {
    fetch("/markdown/syllabus/mernstack.md")
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => console.error("Error fetching markdown:", error));
  }, []);

  // Toggle active topic (only show ul for the clicked topic)
  const toggleTopic = (title) => {
    setActiveTopic((prev) => (prev === title ? null : title)); // If same topic clicked, hide, else show
  };

  // Render List Function
  const renderList = (listItems = []) => {
    return (
      <ul className=" sm:ml-6 mt-2 font-Quicksand list-disc">
        {listItems.map((item, index) => (
          <li key={index} className="py-2  font-Quicksand">
            {item.includes("http") ? (
              <a href={item} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                {item}
              </a>
            ) : (
              item
            )}
          </li>
        ))}
      </ul>
    );
  };

  // Render Paragraph Function
  const renderParagraph = (content = []) => {
    return content.map((para, index) => (
      <p key={index} className="py-2 font-Quicksand flex flex-col gap-5 font-normal">
        {para}
      </p>
    ));
  };

  // Render Heading Function
  const renderHeading = (title, content) => (
    <div key={title}>
      <div
        onClick={() => toggleTopic(title)}
        className="cursor-pointer font-semibold flex items-center gap-2 sm:gap-3 border-2 px-2 w-full sm:px-4 py-2 sm:py-3 border-[#004AAD] border-opacity-[5%] font-Quicksand bg-gray-50"
      >
        <img
          src="/dropdown.svg"
          alt="Toggle Dropdown"
          className={`w-[8px] sm:w-[11px] h-[10px] sm:h-[14px] ${
            activeTopic === title ? "rotate-180" : ""
          } transition-transform`}
        />
        <h2 className="text-sm sm:text-base">{title}</h2>
      </div>
      {activeTopic === title && (
        <div className="pl-4 sm:pl-6 mt-2 font-Quicksand border-l-2 border-[#004AAD] border-opacity-[5%]">
          {/* Render List and Paragraph for this heading */}
          {renderList(content.listItems)}
          {renderParagraph(content.paragraphs)}
        </div>
      )}
    </div>
  );

  // Render Markdown Content
  const renderMarkdown = () => {
    if (!markdownContent) return <div>Loading content...</div>; // Show loading state
    const lines = markdownContent.split("\n");
    const result = [];
    let currentHeading = null;
    let currentList = [];
    let currentParagraph = [];

    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        if (currentHeading) {
          // Push the previous heading's content
          result.push(renderHeading(currentHeading, { listItems: currentList, paragraphs: currentParagraph }));
        }
        currentHeading = line.slice(3);
        currentList = [];
        currentParagraph = [];
      } else if (line.startsWith("- ")) {
        currentList.push(line.slice(2)); // List item
      } else if (line.trim() !== "") {
        currentParagraph.push(line.trim()); // Paragraph content
      }
    });

    // Render the last heading's content if there was any
    if (currentHeading) {
      result.push(renderHeading(currentHeading, { listItems: currentList, paragraphs: currentParagraph }));
    }

    return result;
  };

  return (
    <div className="flex flex-col md:flex-row lg:ml-20 ml-3 mb-10">
      <div className="w-full flex flex-col sm:mt-4">
        <div className="w-full flex flex-col mt-10 px-3 sm:px-6">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl p-2 sm:p-4 font-Quicksand mb-4 sm:mb-6 text-[#003366]">
            Course Syllabus
          </h1>

          <div className="relative w-full lg:w-[500px] xl:w-[700px] mx-auto lg:mx-0 mb-4">
            {/* Render markdown content */}
            {renderMarkdown() || <div>Error rendering content</div>}
          </div>
        </div>
      </div>
      <div className="lg:mr-[100px] lg:mt-[20px] mx-auto">
        <ClassType  />
      </div>
    </div>
  );
};

export default CourseSyllabus1;