"use client"; // This marks the file as a client component

import { useEffect, useState } from "react";
import CourseList from "../components/CourseList";
import { fetchMarkdownFile } from "../utils/fetchMarkdown";
import ReviewLanding from "@/components/ReviewLanding";
import Hero2 from "@/components/Hero2";
import CourseSlide from "@/components/CourseSlide";
import WhyUs from "@/components/WhyUs";
// import Banner from '@/components/Ads';

export default function Home() {
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

  return (
    <div>
      <br />
      <Hero2 />
      {/* <CourseList courseData={courseData} /> */}
      <CourseSlide course={courseData} />
      <ReviewLanding />
      {/* <CourseList courseData={courseData} /> */}
      <WhyUs />
    </div>
  );
}
