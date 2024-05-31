import React from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../../components/Footer";

const DigitalMarketingSyllabus = () => {
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
              Digital Marketing Syllabus
            </h1>

            <h2 className="text-blue-500 font-bold mb-4">
              Digital Marketing Basics
            </h2>
            <ul className="list-disc ml-8">
              <li>Principles of digital marketing</li>
              <li>Latest Digital Marketing Trends</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              Search Engine Optimization
            </h2>
            <ul className="list-disc ml-8">
              <li>SEM (Search Engine Marketing)</li>
              <li>Search Engine Marketing Principles & Overview</li>
              <li>Understanding Google Ads (Previously Adwords) Tool</li>
              <li>Campaign Management</li>
              <li>Ad writing / Creation Techniques</li>
              <li>Understanding of Ad Targeting & Remarketing</li>
              <li>Understanding of Landing Pages</li>
              <li>Understanding of Conversion Tracking</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              Social Media Marketing
            </h2>
            <ul className="list-disc ml-8">
              <li>Social Media Marketing Principles & Overview</li>
              <li>Understanding of Core Optimization</li>
              <li>Understanding of Content Development & Marketing</li>
              <li>Understanding of Social Media Advertisement</li>
              <li>Facebook / Instagram Marketing</li>
              <li>Twitter Marketing</li>
              <li>Linkedin Marketing</li>
              <li>Youtube Marketing</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Email Marketing</h2>
            <ul className="list-disc ml-8">
              <li>Email Marketing Principles & Overview</li>
              <li>Understanding of Lead Email Generation Methods</li>
              <li>Understanding of Bulk Email Tools</li>
              <li>Understanding of Frequency & Measurement</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              Web Analytics & Conversion Rate Optimization
            </h2>
            <ul className="list-disc ml-8">
              <li>Web Analytics Principles & Overview</li>
              <li>Understanding & Configuration of Google Analytics</li>
              <li>Understanding of Key Metrics & Dimensions</li>
              <li>Learning of Event tracking</li>
              <li>Learning of Goals set up & funnel visualization</li>
              <li>Understanding & Configuration of Google Optimize</li>
              <li>
                Learning of Conversion Rate Optimization including AB / Split
                Testing (s)
              </li>
              <li>
                Learning of custom dashboard / segments/ reports generation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingSyllabus;
