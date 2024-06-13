"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import SoftwareQualityAssurance from "@/components/SQA";
import DigitalMarketing from "@/components/Digitalmarketing";
import GraphicsDesign from "@/components/graphics";
import PythonWithDjango from "@/components/Python&django";
import JobDescription from "@/components/Description";

const jobData = [
  {
    title: "Software Quality Assurance",
    company: "Nnine Solution Private Limited",
    jobexpire: "",
    location: "Chabahil-Kathmandu",
    jobType: "Part Time",
    openingDate: "2081-02-30",
    endDate: "2081-03-10",
    isExpired: false,
    position: "Trainer",
    descriptionComponent: SoftwareQualityAssurance,
  },
  {
    title: "Digital Marketing",
    company: "Nnine Solution Private Limited",
    jobexpire: "",
    location: "Chabahil-Kathmandu",
    jobType: "Part Time",
    openingDate: "2081-02-30",
    endDate: "2081-03-10",
    isExpired: false,
    position: "Trainer",
    descriptionComponent: DigitalMarketing,
  },
  {
    title: "Graphics Design",
    company: "Nnine Solution Private Limited",
    jobexpire: "",
    location: "Chabahil-Kathmandu",
    jobType: "Part Time",
    openingDate: "2081-02-30",
    endDate: "2081-03-10",
    isExpired: false,
    position: "Trainer",
    descriptionComponent: GraphicsDesign,
  },
  {
    title: "Python with Django",
    company: "Nnine Solution Private Limited",
    jobexpire: "",
    location: "Chabahil-Kathmandu",
    jobType: "Part Time",
    openingDate: "2081-02-30",
    endDate: "2081-03-10",
    isExpired: false,
    position: "Trainer",
    descriptionComponent: PythonWithDjango,
  },
  {
    title: "Front Desk Officer",
    company: "Nnine Solution Private Limited",
    jobexpire: "Closed",
    location: "Chabahil-Kathmandu",
    jobType: "Full Time",
    openingDate: "2024-06-01",
    endDate: "2024-06-08",
    isExpired: true,
    position: "FronDesk Officer",
    descriptionComponent: JobDescription,
  },
];

const JobTitle = () => {
  const [openJob, setOpenJob] = useState(null);

  const toggleDescription = (title) => {
    setOpenJob(openJob === title ? null : title);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 pt-[150px]">
      {jobData.map((job) => (
        <div
          key={job.title}
          className={`cursor-pointer border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 my-4 ${
            job.isExpired && job.title !== "Front Desk Officer"
              ? "bg-red-100"
              : ""
          }`}
          onClick={() => toggleDescription(job.title)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2
                className={`text-2xl font-bold ${
                  job.isExpired ? "text-red-600" : "text-blue-600"
                }`}
              >
                {job.title}
              </h2>
              {job.jobexpire && (
                <p
                  className={`${
                    openJob === job.title ? "text-green-600" : "text-red-600"
                  } font-bold`}
                >
                  {job.jobexpire}
                </p>
              )}
              <p
                className={
                  job.isExpired && job.title !== "Front Desk Officer"
                    ? "text-red-600 font-bold"
                    : ""
                }
              >
                {job.company}, {job.location}
              </p>
              <div className="flex space-x-2 mt-2">
                <span
                  className={`${
                    job.isExpired
                      ? job.title === "Front Desk Officer"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  } px-2 py-1 rounded`}
                >
                  {job.position}
                </span>
                <span
                  className={`${
                    job.isExpired
                      ? job.title === "Front Desk Officer"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  } px-2 py-1 rounded`}
                >
                  {job.jobType}
                </span>
                <span
                  className={`${
                    job.isExpired
                      ? job.title === "Front Desk Officer"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  } px-2 py-1 rounded`}
                >
                  Opening Date: {job.openingDate}
                </span>
                <span
                  className={`${
                    job.isExpired
                      ? job.title === "Front Desk Officer"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-800"
                  } px-2 py-1 rounded`}
                >
                  End Date: {job.endDate}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-blue-600 font-bold">Details </span>
                <ChevronDownIcon
                  className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                    openJob === job.title ? "transform rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>
          {openJob === job.title && <job.descriptionComponent />}
        </div>
      ))}
    </div>
  );
};

export default JobTitle;
