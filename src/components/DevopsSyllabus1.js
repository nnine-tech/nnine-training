"use client";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ClassType from "./ClassType";

const DevOpsSyllabus = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    fetch("/markdown/syllabus/devops.md")
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      })
      .catch((error) => console.error("Error fetching markdown:", error));
  }, []);

  const toggleTopic = (title) => {
    setActiveTopic((prev) => (prev === title ? null : title));
  };

  const renderList = (listItems = []) => {
    return (
      <ul className="sm:ml-6 mt-2 font-Quicksand list-disc">
        {listItems.map((item, index) => (
          <li key={index} className="py-2 font-Quicksand">
            {item.includes("http") ? (
              <a
                href={item}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
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

  const renderParagraph = (content = []) => {
    return content.map((para, index) => (
      <p
        key={index}
        className="py-2 font-Quicksand flex flex-col gap-5 font-normal"
      >
        {para}
      </p>
    ));
  };

  const renderHeading = (title, content) => {
    // Split the title to separate the heading from the time
    const [headingText, timeText] = title.split(" [");
    const timeString = timeText ? `[${timeText}` : "";

    return (
      <div key={title}>
        <div
          onClick={() => toggleTopic(title)}
          className="cursor-pointer flex items-center gap-2 sm:gap-3 border-2 px-2 w-full sm:px-4 py-2 sm:py-3 border-[#004AAD] border-opacity-[5%] font-Quicksand bg-gray-50"
        >
          <img
            src="/dropdown.svg"
            alt="Toggle Dropdown"
            className={`w-[8px] sm:w-[11px] h-[10px] sm:h-[14px] ${
              activeTopic === title ? "rotate-180" : ""
            } transition-transform`}
          />
          <div className="flex-1">
            <div className="flex items-center justify-between  font-semibold">
              <h2 className="text-sm sm:text-base">{headingText}</h2>
              {timeString && (
                <span className="text-sm text-gray-600">
                  {timeString.replace("[", "").replace("]", "")}
                </span>
              )}
            </div>
          </div>
        </div>
        {activeTopic === title && (
          <div className="pl-4 sm:pl-6 mt-2 font-Quicksand border-l-2 border-[#004AAD] border-opacity-[5%]">
            {renderList(content.listItems)}
            {renderParagraph(content.paragraphs)}
          </div>
        )}
      </div>
    );
  };

  const renderSection = (title, content) => {
    return (
      <div key={title} className="mb-4">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl py-2 font-Quicksand text-[#003366]">
          {title}
        </h1>
        <div className="space-y-1">{content}</div>
      </div>
    );
  };

  const renderMarkdown = () => {
    if (!markdownContent) return <div>Loading content...</div>;

    const lines = markdownContent.split("\n");
    const result = [];
    let currentH1 = null;
    let currentH2 = null;
    let currentList = [];
    let currentParagraph = [];
    let h2Contents = [];

    lines.forEach((line) => {
      if (line.startsWith("# ")) {
        // If we have a previous H1 section, add it to results
        if (currentH1) {
          result.push(renderSection(currentH1, h2Contents));
        }
        currentH1 = line.slice(2);
        h2Contents = [];
        currentH2 = null;
        currentList = [];
        currentParagraph = [];
      } else if (line.startsWith("## ")) {
        // If we have a previous H2 section, add it to h2Contents
        if (currentH2) {
          h2Contents.push(
            renderHeading(currentH2, {
              listItems: currentList,
              paragraphs: currentParagraph,
            })
          );
        }
        currentH2 = line.slice(3);
        currentList = [];
        currentParagraph = [];
      } else if (line.startsWith("- ")) {
        currentList.push(line.slice(2));
      } else if (line.trim() !== "") {
        currentParagraph.push(line.trim());
      }
    });

    // Add the last H2 section if it exists
    if (currentH2) {
      h2Contents.push(
        renderHeading(currentH2, {
          listItems: currentList,
          paragraphs: currentParagraph,
        })
      );
    }

    // Add the last H1 section if it exists
    if (currentH1) {
      result.push(renderSection(currentH1, h2Contents));
    }

    return result;
  };

  return (
    <div className="flex flex-col md:flex-row lg:ml-20 ml-3 mb-10">
      <div className="w-full flex flex-col sm:mt-4">
        <div className="w-full flex flex-col mt-10 px-3 sm:px-6">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl -ml-4 p-2 sm:p-4 font-Quicksand mb-4 sm:mb-6 text-[#003366]">
            Course Syllabus
          </h1>

          <div className="relative w-full lg:w-[500px] xl:w-[700px] mx-auto lg:mx-0 mb-2">
            {renderMarkdown() || <div>Error rendering content</div>}
          </div>
        </div>
      </div>
      <div className="lg:mr-[100px] lg:mt-[20px] mx-auto">
        <ClassType />
      </div>
    </div>
  );
};

export default DevOpsSyllabus;