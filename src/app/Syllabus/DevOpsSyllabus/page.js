// src/app/Syllabus/Page.js

import React from "react";
import DevOpsSyllabus from "@/Syllabus/DevOps";
import CourseDetails from "@/components/CourseDetails"; // Import the CourseDetails component

const Page = () => {
  const upcomingClasses = [
    { id: 1, title: "Class 1", dateTime: "June 25, 2024 - 10:00 AM", duration: "2 hours" },
    { id: 2, title: "Class 2", dateTime: "June 27, 2024 - 2:00 PM", duration: "1.5 hours" },
    { id: 3, title: "Class 3", dateTime: "June 30, 2024 - 4:00 PM", duration: "3 hours" },
    { id: 4, title: "Class 4", dateTime: "July 2, 2024 - 3:00 PM", duration: "2.5 hours" },
    { id: 5, title: "Class 5", dateTime: "July 5, 2024 - 11:00 AM", duration: "2 hours" },
  ];

  return (
    <>
 
    
       <div className="mt-20">
        <CourseDetails/>
       </div>
    <div className="flex justify-between">

      <div className="flex-1 pr-4">
        <DevOpsSyllabus />
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Duration</h2>
          <p className="text-gray-700">Average duration per class: 2.4 hours</p>
        </div>
      </div>

      <div className="flex-1 mt-40 pl-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Upcoming Classes</h2>
          <div className="divide-y divide-gray-200">
            {upcomingClasses.map((classItem) => (
              <div key={classItem.id} className="py-2">
                <p className="font-bold">{classItem.title}</p>
                <p className="text-sm text-gray-600">{classItem.dateTime}</p>
                <p className="text-sm text-gray-600">Duration: {classItem.duration}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
