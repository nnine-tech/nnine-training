import React from "react";
import NavBar from "../components/Navbar/NavBar";
// import Footer from "../components/Footer";

const GraphicDesignSyllabus = () => {
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
            <h1 className="text-blue-500 text-3xl font-bold mb-4">
              Graphic Design Syllabus
            </h1>
            <br />
            <h2 className="text-blue-500 font-bold mb-4">
              Graphic Design Fundamentals
            </h2>
            <ul className="list-disc ml-8">
              <li>Design Principles</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">
                    Using Frames for Document Design
                  </li>
                  <li className="list-disc">Formatting with Styles</li>
                  <li className="list-disc">
                    Color Theory: Colors, Swatches, and Gradients
                  </li>
                  <li className="list-disc">Managing Fonts and Linked Files</li>
                </div>
              </ul>
              <li>Document Preparation</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Creating Acrobat PDF Files</li>
                  <li className="list-disc">
                    Workflow Automation with Master Pages
                  </li>
                </div>
              </ul>
            </ul>
            <br />
            <h2 className="text-blue-500 font-bold mb-4">
              Adobe Illustrator CC
            </h2>
            <ul className="list-disc ml-8">
              <li>Overview</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">
                    Introduction to Vector-Based Graphics
                  </li>
                </div>
              </ul>
              <li>Course Objectives</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Understanding Bezier Curves</li>
                  <li className="list-disc">Managing Layers</li>
                  <li className="list-disc">Creating Type Effects</li>
                </div>
              </ul>
              <li>Getting Started</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Custom Workspace</li>
                  <li className="list-disc">Control Palettes & Menus</li>
                  <li className="list-disc">Navigation & Shortcuts</li>
                </div>
              </ul>
              <li>Drawing and Editing</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Shape Tools</li>
                  <li className="list-disc">Transforming Tools</li>
                  <li className="list-disc">Drawing with Line Tools</li>
                </div>
              </ul>
              <li>Color and Typography</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Fills, Strokes, and Colors</li>
                  <li className="list-disc">Text Creation and Effects</li>
                </div>
              </ul>
              <li>Working with Paths</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Pen Tool Techniques</li>
                  <li className="list-disc">Editing Paths</li>
                </div>
              </ul>
              <li>Printing and Saving</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Print Setup</li>
                  <li className="list-disc">Exporting in Various Formats</li>
                </div>
              </ul>
            </ul>
            <br />

            <h2 className="text-blue-500 font-bold mb-4">Adobe Photoshop CC</h2>
            <ul className="list-disc ml-8">
              <li>Overview</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">
                    Introduction to Image Manipulation
                  </li>
                </div>
              </ul>
              <li>Course Objectives</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">
                    Understanding Tools and Terminology
                  </li>
                  <li className="list-disc">
                    Selection Methods and Techniques
                  </li>
                </div>
              </ul>
              <li>Image Correction</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">
                    Using Histogram and Color Correction Tools
                  </li>
                  <li className="list-disc">Retouching Techniques</li>
                </div>
              </ul>
              <li>Drawing and Painting</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Brush Tools and Filters</li>
                  <li className="list-disc">Painting and Drawing Techniques</li>
                </div>
              </ul>
              <li>Working with Layers</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Layer Creation and Management</li>
                  <li className="list-disc">Layer Blending and Effects</li>
                </div>
              </ul>
              <li>Text and Typography</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Text Layer Creation</li>
                  <li className="list-disc">Text Effects and Formatting</li>
                </div>
              </ul>
              <li>Special Effects and Export</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">Filters and Plug-ins</li>
                  <li className="list-disc">File Saving and Optimization</li>
                </div>
              </ul>
            </ul>
            <br />
            <h2 className="text-blue-500 font-bold mb-4">Project Work</h2>
            <ul className="list-disc ml-8">
              <li>Practical Assignments</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">
                    Designing Logos, Advertisements, and Document Layouts
                  </li>
                </div>
              </ul>
              <li>Final Projects</li>
              <ul>
                <div className="px-10">
                  <li className="list-disc">E-commerce Website Design</li>
                  <li className="list-disc">Corporate Branding Package</li>
                  <li className="list-disc">News Portal Layout</li>
                  <li className="list-disc">NGO Website Design</li>
                </div>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default GraphicDesignSyllabus;
