import React from "react";
// import Footer from "../components/Footer";

const MERNStackSyllabus = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl font-bold mb-4">
            MERN STACK SYLLABUS
          </h1>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">
            MERN Stack Development - JavaScript
          </h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Introduction:</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction to MERN stack</li>
                <li className="list-disc">
                  Introduction to JavaScript programming language
                </li>
                <li className="list-disc">Technologies around JavaScript.</li>
              </div>
            </ul>

            <li className="font-semibold">Environment Setup:</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction to development tools</li>
                <li className="list-disc">Text Editor, IDE</li>
                <li className="list-disc">Command Prompt(command line)</li>
                <li className="list-disc">Node setup</li>
                <li className="list-disc">Postman</li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">JavaScript</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Overview of JavaScript</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Brief History of Javascript</li>
                <li className="list-disc">Variables</li>
                <li className="list-disc">Operator and Operands</li>
                <li className="list-disc">Conditionals and Iterations</li>
                <li className="list-disc">Data types and coercion</li>
                <li className="list-disc">
                  A brief introduction to data structures like stack, queues,
                  array, and objects Debugging a JS code
                </li>
                <li className="list-disc">JS naming conventions</li>
                <li className="list-disc">
                  A brief introduction to javascript functions and classes
                </li>
              </div>
            </ul>

            <li className="font-semibold">EcmaScripts and Modern JavaScript</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Need of ES language specification Understanding of transpilers
                  and polyfills
                </li>
                <li className="list-disc">CommonJs vs ES modules</li>
                <li className="list-disc">
                  Deep guide to modern ES6+ features
                </li>
                <li className="list-disc">Brief introduction to Typescript</li>
                <li className="list-disc">TypeScript Vs JavaScript</li>
              </div>
            </ul>
            <li className="font-semibold">Js- Under the Hood</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Hoisting</li>
                <li className="list-disc">
                  Block/Global/Local Scopes and Temporal Dead Zones Scopes and
                  Closures
                </li>
                <li className="list-disc">Prototypes</li>
                <li className="list-disc">
                  Asynchronous javascript and WebAPIs usages
                </li>
                <li className="list-disc">Global execution context</li>
                <li className="list-disc">Event loops</li>
              </div>
            </ul>
            <li className="font-semibold">JavaScript Functions</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Arguments and Parameters</li>
                <li className="list-disc">
                  Functions declaration and executions
                </li>
                <li className="list-disc">ES6 arrow functions</li>
                <li className="list-disc">Callback functions</li>
                <li className="list-disc">Higher Order Functions</li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">Git and Versioning</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Github And Version Controlling</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to version control and usage Github, Bitbucket
                  and Gitlab
                </li>
                <li className="list-disc">
                  Initializing and cloning git projects
                </li>
                <li className="list-disc">Git commit/push</li>
                <li className="list-disc">Branches and Pull Requests</li>
                <li className="list-disc">
                  Standard practices for naming GitHub branches
                </li>
                <li className="list-disc">The .gitignore file</li>
                <li className="list-disc">
                  Github exercises: Collaborating in the same repo and handling
                  merge conflicts live.
                </li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">Web Technology</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">
              Introduction to web flow and Architecture
            </li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to web and how it works
                </li>
                <li className="list-disc">
                  Client-server architecture definition
                </li>
                <li className="list-disc">Introduction to API and it’s need</li>
                <li className="list-disc">Introduction to REST API</li>
                <li className="list-disc">
                  The software development/design pattern
                </li>
                <li className="list-disc">The famous - MVC pattern</li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">Node js</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Nodejs</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction to nodejs</li>
                <li className="list-disc">Requirements for nodejs</li>
                <li className="list-disc">Nodejs and it’s usages</li>
                <li className="list-disc">Setup nodejs</li>
              </div>
            </ul>
            <li className="font-semibold">NPM (Node package Manager)</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction to NPM</li>
                <li className="list-disc">Global Vs Local Installation</li>
                <li className="list-disc">The package.json file</li>
                <li className="list-disc">Attributes of Package.json</li>
                <li className="list-disc">
                  Installing and uninstalling packages using npm
                </li>
                <li className="list-disc">
                  Introduction to dependency and dev-dependency
                </li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">
            Introduction to Node builtin modules
          </h3>
          <h3 className="text-blue-500 font-bold mb-4">Express JS</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Introduction to Express JS</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to framework and Express
                </li>
                <li className="list-disc">Setting up an express application</li>
                <li className="list-disc">
                  Express exercise: Creating a hello world application using
                  express
                </li>
              </div>
            </ul>
            <li className="font-semibold">
              Architecturing the Express js application
            </li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Express flow and how it works</li>
                <li className="list-disc">
                  Introduction to express application and usages
                </li>
                <li className="list-disc">The HTTP protocol</li>
                <li className="list-disc">Introduction to express routing</li>
                <li className="list-disc">Express request, response object</li>
              </div>
            </ul>
            <li className="font-semibold">Express Middlewares</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction to middlewares</li>
                <li className="list-disc">Types of middlewares</li>
                <li className="list-disc">Usages of middlewares</li>
                <li className="list-disc">The next scope</li>
                <li className="list-disc">Error handling using middlewares</li>
                <li className="list-disc">
                  Serving the static files using static
                </li>
                <li className="list-disc">File handling using middlewares</li>
              </div>
            </ul>
            <li className="font-semibold">
              Authorization and Authentication in Express
            </li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to auth and authorization
                </li>
                <li className="list-disc">Introduction to json web token</li>
                <li className="list-disc">Authorization using jwt</li>
                <li className="list-disc">API protection</li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">MongoDB</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Detail of MongoDB</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to database and existing database around
                </li>
                <li className="list-disc">
                  Understanding NoSQL (schema less database)
                </li>
                <li className="list-disc">
                  Introduction to MongoDB (collection and documents)
                </li>
                <li className="list-disc">
                  CRUD operations using shell command
                </li>
                <li className="list-disc">
                  Using Mongodb Native driver with Node
                </li>
                <li className="list-disc">Database modeling using ODM</li>
                <li className="list-disc">
                  Using mongodb-compass (ui based database system)
                </li>
                <li className="list-disc">
                  Update, insert delete and upsert documents
                </li>
                <li className="list-disc">Aggregation in mongodb</li>
                <li className="list-disc">Map reduce</li>
              </div>
            </ul>
            <li className="font-semibold">Express with MongoDB</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Building APIs with express js and mongodb
                </li>
                <li className="list-disc">
                  Using MongoDB as data store in express app with Mongoose.
                </li>
                <li>
                  Backend Project: API development using node js, express js and
                  mongodb
                </li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">Frontend Technology</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Basic Web Overview</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction to HTML</li>
                <li className="list-disc">
                  Introduction to html tags, attributes and properties
                </li>
                <li className="list-disc">Introduction to css</li>
                <li className="list-disc">
                  Importance and uses of css in a web design
                </li>
                <li className="list-disc">
                  HTML/CSS Practice: Creating and designing basic web designs
                </li>
              </div>
            </ul>
            <li className="font-semibold">Responsive Web design tools</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to responsive vs non-responsive design
                </li>
                <li className="list-disc">Bootstrap, a css based framework</li>
                <li className="list-disc">Alternatives of bootstrap</li>
              </div>
            </ul>
          </ul>
          <br />
          <h3 className="text-blue-500 font-bold mb-4">The React js</h3>
          <ul className="list-disc ml-8">
            <li className="font-semibold">Introduction</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">The objective of this training</li>
                <li className="list-disc">
                  Present scenario/Scopes of this technology.
                </li>
                <li className="list-disc">Environment setup</li>
                <li className="list-disc">Node and npm</li>
                <li className="list-disc">Vscode</li>
              </div>
            </ul>
            <li className="font-semibold">Overview of Javascript</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Brief History of Javascript</li>
                <li className="list-disc">Variables</li>
                <li className="list-disc">Operator and Operands</li>
                <li className="list-disc">Conditionals and Iterations</li>
                <li className="list-disc">Data types and coercion</li>
                <li className="list-disc">
                  A brief introduction to data structures like stack, queues,
                  array, and objects
                </li>
                <li className="list-disc">Debugging a JS code</li>
                <li className="list-disc">JS naming conventions</li>
                <li className="list-disc">
                  A brief introduction to javascript functions and classes
                </li>
              </div>
            </ul>
            <li className="font-semibold">EcmaScript and modern javascript</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Need of ES language specification</li>
                <li className="list-disc">
                  Understanding of transpilers and polyfills
                </li>
                <li className="list-disc">CommonJs vs ES modules</li>
                <li className="list-disc">
                  Deep guide to modern ES6+ features
                </li>
              </div>
            </ul>
            <li className="font-semibold">JS- under the hood</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Hoisting</li>
                <li className="list-disc">
                  Block/Global/Local Scopes and Temporal Dead Zones
                </li>
                <li className="list-disc">Scopes and Closures</li>
                <li className="list-disc">Prototypes</li>
                <li className="list-disc">
                  Asynchronous javascript and WebAPIs usages
                </li>
                <li className="list-disc">Global execution context</li>
                <li className="list-disc">Event loops</li>
              </div>
            </ul>
            <li className="font-semibold">Functions</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Arguments and Parameters</li>
                <li className="list-disc">
                  Functions declaration and execution
                </li>
                <li className="list-disc">Pure and Impure Functions</li>
                <li className="list-disc">ES6 arrow functions</li>
                <li className="list-disc">IIFE and anonymous functions</li>
                <li className="list-disc">Callback functions</li>
                <li className="list-disc">Higher Order Functions</li>
              </div>
            </ul>
            <li className="font-semibold">Github</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to version control and usage
                </li>
                <li className="list-disc">Github, Bitbucket and Gitlab</li>
                <li className="list-disc">
                  Initializing and cloning git projects
                </li>
                <li className="list-disc">Git commit/push</li>
                <li className="list-disc">Branches and Pull Requests</li>
                <li className="list-disc">
                  Standard practices for naming GitHub branches
                </li>
                <li className="list-disc">
                  Github exercises: Collaborating in the same repo and handling
                  merge conflicts live.
                </li>
              </div>
            </ul>
            <li className="font-semibold">Overview of React</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Understanding react as a library and its ecosystem
                </li>
                <li className="list-disc">
                  Difference between libraries and frameworks
                </li>
                <li className="list-disc">
                  Setting up react with CDN without using any frameworks
                </li>
                <li className="list-disc">
                  A brief overview of how react library can be used in web
                  frameworks such as create- react-app, Gatsby, next.js, etc and
                  mobile frameworks like react-native
                </li>
                <li className="list-disc">
                  Introduction to react components, folder structure, and
                  architecture
                </li>
                <li className="list-disc">
                  Functional and Class based Components in react
                </li>
                <li className="list-disc">React Component Lifecycle Methods</li>
                <li className="list-disc">Styling a react component</li>
                <li className="list-disc">Introduction to SPAs</li>
                <li className="list-disc">Virtual DOM in react</li>
              </div>
            </ul>
            <li className="font-semibold">
              Getting started with react fundamentals
            </li>
            <ul>
              <div className="px-10">
                <li className="list-disc">State</li>
                <li className="list-disc">
                  State exercise: Build a like button, counter apps, etc using
                  react state and useState hooks
                </li>
                <li className="list-disc">Props</li>
                <li className="list-disc">
                  Props exercise: pass data from parents to child, child to
                  parent, and from one child to its siblings
                </li>
                <li className="list-disc">Refs</li>
                <li className="list-disc">
                  Refs exercise: Targeting a particular DOM, scrolling to a
                  particular DOM, auto focusing an input field programmatically,
                  etc using useRef hooks
                </li>
                <li className="list-disc">Higher-Order Components</li>
                <li className="list-disc">
                  HOC exercise: Building reusable components using Recompose
                </li>
              </div>
            </ul>
            <li className="font-semibold">React Router</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Introduction</li>
                <li className="list-disc">
                  Setup react-router to handle routes
                </li>
                <li className="list-disc">Protected and nested routes</li>
              </div>
            </ul>
            <li className="font-semibold">React Forms</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Basics of react forms and handling various types of form
                  fields and events
                </li>
                <li className="list-disc">Client-side form validation</li>
                <li className="list-disc">
                  Advanced form handling with Formik and schema validators like
                  Yup or regex
                </li>
              </div>
            </ul>
            <li className="font-semibold">REST API</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Understanding of REST API</li>
                <li className="list-disc">HTTP methods and protocols</li>
                <li className="list-disc">
                  Understanding of Fetch API, axios, and interceptors
                </li>
              </div>
            </ul>
            <li className="font-semibold">NEXT JS</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to Next.js and its benefits.
                </li>
                <li className="list-disc">
                  Intro to nextjs page router and app router
                </li>
                <li className="list-disc">
                  Creating API endpoints with Next.js.
                </li>
                <li className="list-disc">
                  Understanding of Server-Side Rendering (SSR) and Static Site
                  Generation (SSG) with next js
                </li>
                <li className="list-disc">Fetching data from API routes.</li>
                <li className="list-disc">
                  Integrating API routes into a Next.js app.
                </li>
                <li className="list-disc">
                  Implementing user authentication and handling cookies storages
                </li>
                <li className="list-disc">
                  Handling user sessions and access control.
                </li>
                <li className="list-disc">
                  Introduction to serverless functions in Next.js.
                </li>
                <li className="list-disc">
                  Implementing OAuth-based authentication (e.g., using OAuth
                  providers like Google, Facebook, or GitHub).
                </li>
              </div>
            </ul>
            <li className="font-semibold">Redux</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Flux Architecture</li>
                <li className="list-disc">State management using Redux</li>
                <li className="list-disc">Reducers</li>
                <li className="list-disc">Action Creators and action types</li>
                <li className="list-disc">
                  Using redux middleware libraries such as sagas, thunks, and
                  Rxjs to handle asynchronous side effects
                </li>
                <li className="list-disc">
                  Using redux logger middlewares and redux dev tools to track
                  state changes
                </li>
                <li className="list-disc">
                  Using redux persist to handle storage in the react application
                </li>
              </div>
            </ul>
            <li className="font-semibold">GRAPHQL</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">Understanding of GraphQL</li>
                <li className="list-disc">
                  Understanding of data under-fetching and over-fetching
                </li>
                <li className="list-disc">Query, arguments, and mutation</li>
                <li className="list-disc">Variables in graphql</li>
                <li className="list-disc">Graphql fragments</li>
                <li className="list-disc">
                  Setting up client side graphql in react with Apollo
                </li>
              </div>
            </ul>
            <li className="font-semibold">WebSockets</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Introduction to real-time web socket communication
                </li>
                <li className="list-disc">Socket io client setup in react</li>
                <li className="list-disc">
                  Getting connected to sockets and disconnecting a web socket
                </li>
                <li className="list-disc">
                  Emitting data and retrieving data to and from a connected
                  socket
                </li>
              </div>
            </ul>
            <li className="font-semibold">
              Test Driven Development with React
            </li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Overview of various types of software testing
                </li>
                <li className="list-disc">
                  Introduction to Unit testing a web application
                </li>
                <li className="list-disc">Setting up Jest</li>
                <li className="list-disc">
                  UI testing, writing tests for mocked APIs
                </li>
                <li className="list-disc">Code coverage with jest</li>
              </div>
            </ul>
            <li className="font-semibold">React Performance</li>
            <ul>
              <div className="px-10">
                <li className="list-disc">
                  Understanding of how a react component renders and re-renders
                </li>
                <li className="list-disc">
                  An in-depth guide to memoization in react and using
                  performance optimization hooks such as useMemo and useCallback
                </li>
                <li className="list-disc">
                  Guide to using dev tools and react Profiler
                </li>
                <li className="list-disc">Lazy loading and code splitting</li>
                <li className="list-disc">
                  Setting up webpack configs, compressing the react app build
                  size
                </li>
              </div>
            </ul>
          </ul>
          <br />
          <h2 className="text-blue-500 font-bold mb-4">Projects</h2>
          <ul className="list-disc ml-8">
            <div className="px-10">
              <li className="list-disc">Online Reservation System</li>
              <li className="list-disc">E-commerce Website</li>
              <li className="list-disc">Project Management System</li>
              <li className="list-disc">Online Inventory</li>
              <li className="list-disc">Ride Sharing Application</li>
            </div>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MERNStackSyllabus;
