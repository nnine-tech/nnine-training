"use client";
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import JobDescription from '@/components/Description';

const JobTitle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="max-w-2xl mx-auto p-4">
        <div 
          className="cursor-pointer border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
          onClick={toggleDescription}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-600">Job Title</h2>
              <p>Nnine Solution Private Limited, Chabahil-Kathmandu</p>
              <div className="flex space-x-2 mt-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Front Desk Officer</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Full Time</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Opening Date: 2024-06-01</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">End Date: 2024-06-08</span>
                
              </div>
              <div className="flex items-center mt-2">
                <span className="text-blue-600 font-bold">Details </span>
                <ChevronDownIcon className={`w-5 h-5 ml-1 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
              </div>
            </div>
          </div>
        </div>
        {isOpen && <JobDescription />}
      </div>
    </>
  );
};

export default JobTitle;
