import React from "react";

const FlutterSyllabus = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen  p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl text-center font-bold mb-8">
            Flutter Syllabus
          </h1>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 1: Introduction to Flutter & Dart (8 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              1. Introduction to Flutter and Dart (2 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Overview of Flutter and its advantages</li>
              <li>Setting up the development environment</li>
              <li>Overview of Dart language</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              2. Dart Basics (2 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Variables, Data Types, and Functions</li>
              <li>Control Flow (if-else, switch-case)</li>
              <li>Loops (for, while, do-while)</li>
              <li>Ternary Operator: Syntax and usage</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              3. Flutter Basics (4 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Creating a new Flutter project</li>
              <li>Understanding the main function</li>
              <li>Introduction to Widgets: Stateless vs Stateful Widgets</li>
              <li>Hot Reload and Hot Restart</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 2: Flutter & Dart Basics II (15 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              4. Flutter Layouts (6 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Understanding the Widget Tree</li>
              <li>Common Layout Widgets (Container, Column, Row, Stack)</li>
              <li>Advanced Layout Widgets (Expanded, Flex, Spacer)</li>
              <li>Using Padding and Margin</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              5. Interactive Widgets (6 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Handling User Input (TextField, Buttons)</li>
              <li>Gesture Detection (Tap, Long Press, Swipe)</li>
              <li>Stateful Widgets and State Management</li>
              <li>Introduction to Forms and Validation</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              6. Navigation and Routing (3 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Basic Navigation (Navigator, Routes)</li>
              <li>Named Routes</li>
              <li>Passing Data between Screens</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 3: Building Beautiful UIs (18 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              7. Material Design and Cupertino Widgets (7 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Material Design principles</li>
              <li>Common Material Widgets (AppBar, Scaffold, Drawer, etc.)</li>
              <li>Cupertino Widgets for iOS design</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              8. Styling and Theming (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Customizing Widgets with Styles</li>
              <li>Creating Themes</li>
              <li>Using ThemeData and TextStyle</li>
              <li>Dark Mode Support</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              9. Animations and Transitions (6 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Basic Animations (Implicit and Explicit)</li>
              <li>Animation Controllers</li>
              <li>Tween Animations</li>
              <li>Hero Animations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 4: State Management (19 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              10. State Management Basics (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>setState</li>
              <li>Lifting State Up</li>
              <li>InheritedWidget and InheritedModel</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              11. Provider for State Management (10 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Introduction to Provider</li>
              <li>ChangeNotifier and ChangeNotifierProvider</li>
              <li>Consumer and Selector</li>
              <li>Practical Examples</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              12. Advanced State Management (4 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Riverpod</li>
              <li>Bloc Pattern</li>
              <li>Redux</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 5: Networking & APIs (10 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              13. Networking Basics (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>HTTP Requests with http package</li>
              <li>Parsing JSON</li>
              <li>Handling Errors</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              14. Working with RESTful APIs (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>GET, POST, PUT, DELETE Methods</li>
              <li>Authentication and Authorization</li>
              <li>Integrating with a backend API</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 6: Data Persistence (10 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              15. Local Storage (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Shared Preferences</li>
              <li>File Storage</li>
              <li>CRUD Operations</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">16. Databases (5 hours)</h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>SQLite</li>
              <li>Using sqflite package</li>
              <li>CRUD Operations</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 7: Firebase Integration (10 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              17. Firebase Setup and Authentication (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Setting up Firebase project</li>
              <li>Firebase Authentication</li>
              <li>Email/Password, Google Sign-In</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              18. Cloud Firestore and Storage (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Introduction to Cloud Firestore</li>
              <li>CRUD Operations</li>
              <li>Using Firebase Storage for file uploads</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 8: Testing and Deployment (10 hours)
            </h2>
            <h3 className=" text-xl font-bold mb-2">
              19. Testing Flutter Apps (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Unit Testing</li>
              <li>Widget Testing</li>
              <li>Integration Testing</li>
            </ul>
            <h3 className=" text-xl font-bold mb-2">
              20. Deployment (5 hours)
            </h3>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Preparing for Release</li>
              <li>Publishing to Google Play Store</li>
              <li>Publishing to Apple App Store</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-blue-500 text-2xl font-bold mb-4">
              Section 9: Project (10 hours)
            </h2>
            <ul className="list-disc ml-8 mb-4 pl-2">
              <li>Planning and Designing the Project</li>
              <li>Implementing Features</li>
              <li>Testing and Debugging</li>
              <li>Final Presentation and Evaluation</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlutterSyllabus;
