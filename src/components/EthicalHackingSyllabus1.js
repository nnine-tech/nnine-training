"use client";
import { useState, useEffect } from "react";
import ClassType from "./ClassType";

const EthicalHackingSyllabus = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);

  useEffect(() => {
    fetch("/markdown/syllabus/ethicalhacking.md")
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

  const renderLesson = (title, content) => {
    return (
      <div key={title} className="ml-6 mt-4">
        <div className="font-Quicksand">
          <h3 className="text-sm sm:text-base font-semibold mb-2">{title}</h3>
          <div className="pl-4">
            {renderList(content.listItems)}
            {renderParagraph(content.paragraphs)}
          </div>
        </div>
      </div>
    );
  };

  const renderHeading = (title, content) => {
    // Split the title to separate the heading from the time
    const [headingText, timeText] = title.split(" [");
    const timeString = timeText ? `[${timeText}` : "";

    return (
      <div key={title} className="space-y-1">
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
            <div className="flex items-center justify-between py-2 font-semibold">
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
            {content.lessons ? (
              content.lessons.map((lesson) =>
                renderLesson(lesson.title, lesson)
              )
            ) : (
              <>
                {renderList(content.listItems)}
                {renderParagraph(content.paragraphs)}
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderMarkdown = () => {
    if (!markdownContent) return <div>Loading content...</div>;

    const lines = markdownContent.split("\n");
    const result = [];
    let currentH2 = null;
    let currentH3 = null;
    let currentList = [];
    let currentParagraph = [];
    let lessons = [];

    lines.forEach((line) => {
      if (line.startsWith("## ")) {
        // If we have a previous H2 section, add it to results
        if (currentH2) {
          result.push(
            renderHeading(currentH2, {
              lessons: lessons.length > 0 ? lessons : undefined,
              listItems: lessons.length === 0 ? currentList : undefined,
              paragraphs: lessons.length === 0 ? currentParagraph : undefined,
            })
          );
        }
        currentH2 = line.slice(3);
        lessons = [];
        currentList = [];
        currentParagraph = [];
        currentH3 = null;
      } else if (line.startsWith("### ")) {
        // If we have a previous H3 section, add it to lessons
        if (currentH3) {
          lessons.push({
            title: currentH3,
            listItems: currentList,
            paragraphs: currentParagraph,
          });
        }
        currentH3 = line.slice(4);
        currentList = [];
        currentParagraph = [];
      } else if (line.startsWith("- ")) {
        currentList.push(line.slice(2));
      } else if (line.trim() !== "") {
        currentParagraph.push(line.trim());
      }
    });

    // Add the last H3 section if it exists
    if (currentH3) {
      lessons.push({
        title: currentH3,
        listItems: currentList,
        paragraphs: currentParagraph,
      });
    }

    // Add the last H2 section if it exists
    if (currentH2) {
      result.push(
        renderHeading(currentH2, {
          lessons: lessons.length > 0 ? lessons : undefined,
          listItems: lessons.length === 0 ? currentList : undefined,
          paragraphs: lessons.length === 0 ? currentParagraph : undefined,
        })
      );
    }

    return <div className="space-y-1">{result}</div>;
  };

  return (
    <div className="flex flex-col md:flex-row lg:ml-20 ml-3 mb-10">
      <div className="w-full flex flex-col sm:mt-4">
        <div className="w-full flex flex-col mt-10 px-3 sm:px-6">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl p-2 sm:p-4 font-Quicksand mb-4 sm:mb-6 text-[#003366]">
            Ethical Hacking Course Syllabus
          </h1>

          <div className="relative w-full lg:w-[500px] xl:w-[700px] mx-auto lg:mx-0 mb-4 font-Quicksand">
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

export default EthicalHackingSyllabus;
