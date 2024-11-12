"use client"; // This marks the file as a client component

// import { fetchMarkdownFile } from "../utils/fetchMarkdown";
// import ReviewLanding from "@/components/ReviewLanding";
// import Hero2 from "@/components/Hero2";
// import CourseSlide from "@/components/CourseSlide";
// import WhyUs from "@/components/WhyUs";
import { useEffect, useState } from "react";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< Updated upstream
=======

import CourseList from "../components/CourseList";

>>>>>>> Stashed changes
=======

import CourseList from "../components/CourseList";

>>>>>>> 2250833a24d38114f3c9c958e419f9e80edfc822
import { fetchMarkdownFile } from "../utils/fetchMarkdown";
import ReviewLanding from "@/components/ReviewLanding";
import Hero2 from "@/components/Hero2";
import CourseSlide from "@/components/CourseSlide";
import WhyUs from "@/components/WhyUs";
import Gifpage from "@/components/Gifpage";
<<<<<<< HEAD
import LandingTrainers from "@/components/LandingTrainers";
=======
>>>>>>> 2250833a24d38114f3c9c958e419f9e80edfc822
>>>>>>> abc626b3645c2b0cc23d99fe202830f2ddf35af4
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
<<<<<<< HEAD
    <div>
      <br />
      {/* <Hero2 /> */}
      {/* <CourseList courseData={courseData} /> */}
      {/* <CourseSlide course={courseData} /> */}

      {/* <CourseList courseData={courseData} /> */}
      {/* <WhyUs />
      <ReviewLanding /> */}
      
=======

    <div className="bg-[#F6F8FC] ">
    
      <Hero2 />
      <Gifpage />

      {/* <CourseList courseData={courseData} /> */}
      <CourseSlide course={courseData} />
     

      {/* <CourseList courseData={courseData} /> */}
      <WhyUs />
      <LandingTrainers />
      <ReviewLanding />
>>>>>>> abc626b3645c2b0cc23d99fe202830f2ddf35af4
    </div>
  );
}
