import React from "react";
import NavBar from "../components/Navbar/NavBar";
// import Footer from '../components/Footer';
const VideoSyllabus = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />

      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4 text-center">
              Video Editing Syllabus
            </h1>
            <h2 className="text-blue-500 font-bold mb-4">
              Course Description:
            </h2>
            <p>
              This course provides a comprehensive overview of Adobe Photoshop
              and Adobe Premiere Pro, two essential tools for graphic design and
              video editing. Students will learn fundamental techniques and
              advanced features to create professional-quality designs and
              videos for print and desktop media.
            </p>
            <br /> <br />
            <h2 className="text-blue-500 font-bold mb-4 text-center">
              Adobe Photoshop Syllabus:
            </h2>
            <br />
            <h2 className="text-blue-500 font-bold mb-4">
              Understanding Work Area & New Files
            </h2>
            <ul className="list-disc ml-8">
              <li>Introduction to the Photoshop Screen</li>
              <li>
                Different techniques for opening new files for print and desktop
                media
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Getting to know the Tools & Palettes
            </h2>
            <ul className="list-disc ml-8">
              <li>Utilizing guides, grids, and rulers</li>
              <li>Zoom shortcuts and convenient navigation</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Working with Layers
            </h2>
            <ul className="list-disc ml-8">
              <li>Multiple layers creation and viewing</li>
              <li>Moving, scaling, and rotating layers</li>
              <li>Linking & aligning layers</li>
              <li>Merging, flattening, and saving layers</li>
              <li>Locking and protecting layers</li>
              <li>Layer groups</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Applying and editing type
            </h2>
            <ul className="list-disc ml-8">
              <li>Converting shape and text layers</li>
              <li>Saving and flattening layered files</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Under Color Palettes and Libraries
            </h2>
            <ul className="list-disc ml-8">
              <li>Understanding foreground and background colors</li>
              <li>Selecting colors and using web colors</li>
              <li>Adding colors to swatches and using color libraries</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Vector drawing techniques
            </h2>
            <ul className="list-disc ml-8">
              <li>Creating and modifying vector shapes</li>
              <li>Working with custom shapes and 3rd party custom shapes</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Introduction to Pen Tool
            </h2>
            <ul className="list-disc ml-8">
              <li>Creating and modifying paths</li>
              <li>Making selections from paths</li>
              <li>Creating curved paths and using curvature pen tool</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Working with Character/Paragraph Text
            </h2>
            <ul className="list-disc ml-8">
              <li>Understanding character and paragraph text</li>
              <li>Creating, modifying, and formatting text</li>
              <li>Adding text effects using blending modes</li>
              <li>Attaching text to a path and warping paragraph text</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Typographic Design</h2>
            <ul className="list-disc ml-8">
              <li>Creating text layouts and adding shapes and elements</li>
              <li>Using different colors and rearranging layouts</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Basic Photo Corrections
            </h2>
            <ul className="list-disc ml-8">
              <li>
                Clone & Heal tools, Healing Brush tools, and Color Replace tool
              </li>
              <li>Dodge and burn tools</li>
              <li>Using Levels and Curves for tone & contrast adjustments</li>
              <li>Hue and saturation controls</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Color Grading using Artificial Intelligence
            </h2>
            <h2>Masking</h2>
            <ul className="list-disc ml-8">
              <li>Understanding Layer Mask and Clipping Mask</li>
              <li>
                Applying masks to images and shapes, detailed hair selection
                techniques
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Working with Filters
            </h2>
            <ul className="list-disc ml-8">
              <li>Using filter gallery, Liquify, and Vanishing point</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Advanced Compositing and Layout
            </h2>
            <ul className="list-disc ml-8">
              <li>
                Understanding design rules, breathing space, and techniques for
                print and desktop media
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Adobe Premiere Pro Syllabus:
            </h2>
            <ul className="list-disc ml-8">
              <li>Introduction to Video Editing</li>
              <li>Introduction to Adobe Premiere Pro</li>
              <li>Setting up a video project</li>
              <li>
                Introduction to Users Interface, Workspaces, panels, and Tools
              </li>
              <li>Starting a New Project and Importing Media Files</li>
              <li>Adding Graphics, Text, and Music</li>
              <li>Working with Video Footage</li>
              <li>Basic Video Editing Tools and Techniques</li>
              <li>Audio Editing</li>
              <li>Maintaining Video Clips Speed and Editing Speed</li>
              <li>Color Correction and Grading</li>
              <li>Video Effects and Transitions</li>
              <li>Working with Green Screen Video</li>
              <li>Texts, Shapes, and Titles</li>
              <li>Post Production Workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSyllabus;
