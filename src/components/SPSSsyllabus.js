"use client";

import React, { useState } from "react";
import SPSSClassType from "./SPSSClassType";

const SPSSsyllabus = () => {
  // State to manage dropdown visibility for each section
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const syllabusSections = [
    {
      title: "Session 1 ",
      lectures: [
        "SPSS installation",
        "Manual data entry",
        "Measurement scale",
        "Run first analysis",
        "Survey design",
        "Import excel data",
      ],
      info: "(2 hours)",
      outcome:
        "By the end of this session, participants will be able to install SPSS, manually enter data, apply measurement scales,run basic analyses,Design surveys, and import Excel data for anaylysis.",
    },
    {
      title: "Session 2",
      lectures: [
        "Data modification",
        "Scale setting",
        "Missing data",
        "Select subset",
        "Compute new variable",
        "Compute different variable",
        "Data visualization",
      ],
      info: "(2 hours)",
      outcome:
        " By the end of this session, participants will be able to modify data, set scales, handle missing data, select data subsets, compute new and different variables, and create data visualizations.",
    },
    {
      title: "Session 3",
      lectures: [
        "Measure of central tendency",
        "Measure of variance",
        "Skewness, kurtosis",
        "Standard scores",
      ],
      info: "(2 hours)",
      outcome:
        " By the end of this session, participants will be able to calculate measures of central tendency and variance, analyze skewness and Kurtosis, and compute standard scores.",
    },
    {
      title: "Session 4",
      lectures: [
        "Pearson’s correlation",
        "Simple linear regression",
        "Multiple liner regression",
        " Binary Logistic Regression",
        "Multivariable Logistic Regression",
      ],
      info: "(2 hours)",
      outcome:
        "By the end of this session, participants will be able to conduct Pearson’s correlation, perform simple and multiple linear regression, and apply binary and multivariable logistic regression analyses.",
    },
    {
      title: "Session 5",
      lectures: [
        "Spearman correlation",
        "Reliability test",
        "Item total analysis",
        "Cronbach’s alpha",
        "Validity test",
      ],
      info: "(2 hours)",
      outcome:
        "By the end of this session, participants will be able to conduct Spearman correlation, perform reliability tests, conduct item-total analysis, calculate Cronbach’s alpha, and perform validity tests.",
    },
    {
      title: "Session 6",
      lectures: [
        "One sample t-test",
        "Paired sample t-test",
        "Independent t- test",
        "One way ANOVA",
        "Post hoc",
      ],
      info: "(2 hours)",
      outcome:
        "By the end of this session, participants will be able to perform one-sample t-tests, paired sample t-tests, and independent t-tests, as well as conduct one-way ANOVA and apply post-hoc analysis.",
    },
    {
      title: "Session 7",
      lectures: [
        "Repeated measure ANOVA",
        "Factorial ANOVA",
        "Mixed Factorial ANOVA",
        "Chi square goodness of fit",
        "Chi-square test of homogeneity",
        "Chi square test of independence",
      ],
      info: "(2 hours)",
      outcome:
        "By the end of this session, participants will be able to perform repeated measures ANOVA, factorial ANOVA, mixed factorial ANOVA, and conduct Chi-square goodness of fit, homogeneity, and independence tests.",
    },
    {
      title: "Session 8",
      lectures: [
        "Normality test",
        "One sample Wilcoxon test",
        "Paired Wilcoxon rank test",
        "Mann Whitney u test",
        "Kruskal Wallis H test",
        "Friedman test",
      ],
      info: "(2 hours)",
      outcome:
        "By the end of this session, participants will be able to perform normality tests, conduct one-sample Wilcoxon tests, paired Wilcoxon rank tests, Mann-Whitney U tests, Kruskal-Wallis H tests, and Friedman tests.",
    },
  ];

  return (
    <>
      <div className=" flex flex-col md:flex-row sm:flex-row  mb-10 select-none">
        <div className=" lg:w-[60%] flex flex-col mt-14 ml-10">
          <div className="w-full">
            <h1 className="font-bold text-3xl  p-[10px] font-Quicksand mb-[37px] text-[#003366]">
              Course Syllabus
            </h1>
            {syllabusSections.map((section, index) => (
              <div
                key={index}
                className={`relative  sm:ml-0 md:w-[350px] lg:w-full w-[90%] `}
              >
                <div
                  className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all bg-gray-50 ${
                    !openDropdowns[section.title] &&
                    index !== syllabusSections.length - 1
                      ? "border-b-5"
                      : ""
                  }`}
                >
                  <div
                    className="flex items-center p-[10px] cursor-pointer"
                    onClick={() => toggleDropdown(section.title)}
                  >
                    <button className="dropdown-button mr-2">
                      <img
                        src="/dropdown.svg"
                        alt="Toggle Dropdown"
                        className="mr-0 w-[11px] h-[14px]"
                      />
                    </button>
                    <span className="font-semibold font-Quicksand">
                      {section.title}
                    </span>
                    <span className="hidden md:block text-right ml-auto font-Quicksand">
                      {section.info}
                    </span>
                  </div>
                </div>
                {openDropdowns[section.title] && (
                  <div className="w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
                    <ul className="p-2 ml-2">
                      {section.lectures.map((lecture, idx) => (
                        <li key={idx} className="py-1 font-Quicksand">
                          <span className="mx-1">•</span>
                          {lecture}
                        </li>
                      ))}
                    </ul>
                    <div className="w-fit mx-5 my-2">
                      <h2 className="text-[15px] md:text-[20px] font-Quicksand">
                        Learning Outcome :
                      </h2>
                      <p className="text-[10px] md:text-[13px] font-Quicksand">
                        {section.outcome}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto md:ml-12">
          <SPSSClassType />
        </div>
      </div>
    </>
  );
};

export default SPSSsyllabus;
