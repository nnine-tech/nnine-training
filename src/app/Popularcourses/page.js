// pages/index.js
"use client"; // This marks the file as a client component

import { useEffect, useState } from "react";
import CourseList from "@/components/CourseList";
import { fetchMarkdownFile } from "@/utils/fetchMarkdown";
import Link from "next/link";

export default function Course() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMarkdownFile("/markdown/courselist.md");
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching markdown file:", error);
      }
    };
    fetchData();
  }, []);

  console.log(courseData); // This should now show the data

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full justify-center  h-[800px] lg:h-[600px] bg-cover bg-center bg-[url('/coursesbg1.svg')]  ">
        <div className="w-full md:w-[800px] lg:mt-9 md:mt-0  flex flex-col justify-center items-start px-5 h-[500px]  lg:ml-10">
          <h1 className="text-white  text-4xl md:text-6xl font-Quicksand font-bold">
            Explore Our Courses
          </h1>
          <h3 className="text-white font-Quicksand font-semibold mt-4 text-lg md:text-xl">
            We provide comprehensive training, guaranteed internships, and
            placement support to drive your career forward
          </h3>
        </div>

        <div className="flex items-start flex-col md:flex-row lg:mt-52"></div>
      </div>

      <div className="">
        <CourseList courseData={courseData} />
      </div>

      {/* Second div with WhatsApp Icon */}
      <div className="">
        {/* WhatsApp Icon wrapped in a link */}
        <a
          href="https://wa.me/9779851359759"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatapp.svg"
            alt="WhatsApp Icon"
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] fixed right-5"
            style={{
              top: "50%",
              transform: "translateY(-50%)", // Keeps the icon centered vertically
              zIndex: "9999",
              animation: "spin 4s linear infinite", // Ensures the icon spins
            }}
          />
        </a>
      </div>
      {/* Keyframes for spinning animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
