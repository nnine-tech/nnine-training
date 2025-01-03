

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