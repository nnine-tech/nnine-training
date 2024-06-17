"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import course from "@/app/Popularcourses/page";

const Card = (props) => {
  const router = useRouter(); // Use useRouter hook
  const handleViewSyllabus = () => {
    router.push(`${props.syllabusUrl}`);
    // const pdfUrl = props.syllabusPdfUrl; // Get the syllabus PDF URL
    // const width = screen.availWidth;
    // const height = screen.availHeight;
    // const windowFeatures = `width=${width}, height=${height}`;
    // window.open(pdfUrl, windowFeatures);
    // Navigate user to the syllabus page
    // router.push(`/Popularcourses/${course.id}/syllabus`); // Use router.push for navigation
  };


  // Function to handle enrollment
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-3 my-5">
      <div className="relative group">
        <img
          src={props.imageUrl}
          alt={props.imageAlt}
          className="w-full h-40 object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300">
          <a
           onClick={handleViewSyllabus}

            className="text-white text-center py-2 px-4 bg-gray-800 hover:bg-gray-600 transition duration-300 ease-in-out rounded"
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="mt-4">
          <p className="text-green-900 text-base">Duration: {props.courseDuration}</p>
        </div>
      </div>
    </div>  
  
  );
};

export default Card;
