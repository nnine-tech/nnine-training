// CardList.js
import React from "react";
import Card from "./Card";

const CourseList = () => {
  const cardsData = [
    {
      imageUrl: "/DevOps.jpg",
      imageAlt: "DevOps",
      title: "DeVOps",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/DevOps",
    },
    {
      imageUrl: "/cplusplus.jpeg",
      imageAlt: "C++",
      title: "C++",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/CPlusPlusSyllabus",
    },
    {
      imageUrl: "/AWSCloudPractitioner.jpeg",
      imageAlt: "AWS-Cloud-Practitioner",
      title: "AWS Cloud Practitioner",
      //description: 'Coming Soon',
      price: "Rs 5000",
      courseDuration: "15 Hours (online)",
      syllabusUrl: "/Syllabus/AWSPractitionerSyllabus",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/mern.jpg",
      imageAlt: "mern",
      title: "Full Stack MERN",
      //description: 'Coming Soon',
      // price: 'Rs 40000',
      courseDuration: "2.5 Months",
      syllabusUrl: "/Syllabus/MernSyllabus",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/dotnet.jpg",
      imageAlt: "dotnet",
      title: "ASP .NET",
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/datascience.jpg",
      imageAlt: "datascience",
      title: "Data Analytics and ML",
      //description: 'Coming Soon',
      //price: 'Rs 25000',
      courseDuration: "2 Months",
      syllabusUrl: "/Syllabus/DataAnalytics",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },

    {
      imageUrl: "/AWS-Developer-Associate-Courses.png",
      imageAlt: "AWS-Developer Associate",
      title: "AWS-Developer-Associate",
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: "2 Months",
      syllabusUrl: "/Syllabus/AwsDeveloperAssociate",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },

    {
      imageUrl: "/AWS_solution_associate.png",
      imageAlt: "AWS-Solution-Associate",
      title: "AWS-Solution-Associate",
      //description: 'Coming Soon',
      // price: 'Rs 30000',
      courseDuration: "2 Months",
      syllabusUrl: "/Syllabus/AwsSolutionArchitect",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },

    {
      imageUrl: "/rhel.jpg",
      imageAlt: "rhel",
      title: "RHEL",
      //description: 'Coming Soon',
      //price: 'Rs 25000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },

    {
      imageUrl: "/digitalmarketing.jpg",
      imageAlt: "digitalmarketing",
      title: "Digital Marketing",
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      courseDuration: "2 Months",
      syllabusUrl: "/Syllabus/DigitalMArketingSyllabus",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/ethical.jpeg",
      imageAlt: "EthicalHacking",
      title: "Ethical Hacking",
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      courseDuration: "1.5 Months",
      syllabusUrl: "/Syllabus/EthicalHackingSyllabus",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/computerbasics.png",
      imageAlt: "computerbasics",
      title: "Computer Basics",
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      courseDuration: "1.5 Months",
      syllabusUrl: "/Syllabus/ComputerBasicsSyllabus",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/redhatopenshiftdevI.png",
      imageAlt: "redhatopen",
      title: "Redhat Openshift Dev-I",
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      courseDuration: "1.5 Months",
      syllabusUrl: "/Syllabus/RedHatOpenShiftDevISyllabus",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/java.jpg",
      imageAlt: "java",
      title: "Java",
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },

    {
      imageUrl: "/django.png",
      imageAlt: "django",
      title: "Python with Django",
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: "2.5 Months",
      syllabusUrl: "/Syllabus/PythonWithDjango",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/laravel.png",
      imageAlt: "laravel",
      title: "Laravel",
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/php.png",
      imageAlt: "php",
      title: "PHP MySQL",
      //description: 'Coming Soon',
      // price: 'Rs 30000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },

    {
      imageUrl: "/aws.jpg",
      imageAlt: "Amazon AWS",
      title: "AWS",
      //description: 'Coming Soon',
      // price: 'Rs 25000',
      courseDuration: "1.5 Months",
      syllabusUrl: "/Syllabus/Aws",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
    },
    {
      imageUrl: "/BasicComputerCourse.jpg",
      imageAlt: "Basic Computer Course",
      title: "Basic Computer Course",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "1 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/BasicComputerCourse",
    },
    {
      imageUrl: "/OpenShift.jpg",
      imageAlt: "OpenShift",
      title: "Open Shift",
      description: "",
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/OpenShiftSyllabus",
    },
    {
      imageUrl: "/C++.jpg",
      imageAlt: "C++",
      title: "C++",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/CPlusPlusSyllabus",
    },
    {
      imageUrl: "/OpenShiftAdministrator.jpg",
      imageAlt: "OpenShiftAdministrator",
      title: "Open Shift Administrator",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/OpenShiftAdministratorSyllabus",
    },
    {
      imageUrl: "/python.jpg",
      imageAlt: "python",
      title: "Python",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/PythonSyllabus",
    },
    {
      imageUrl: "/QualityAssuarance.jpg",
      imageAlt: "QualityAssuarance",
      title: "Quality Assuarance",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/QualityAssuranceSyllabus",
    },
    {
      imageUrl: "/WebDesign.jpg",
      imageAlt: "Web Design",
      title: "Web Design",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/WebDesignSyllabus",
    },
    {
      imageUrl: "/VideoEditing.jpg",
      imageAlt: "VideoEditing",
      title: "Video Editing",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/VideoSyllabus",
    },
    {
      imageUrl: "/WebDevelopment.jpg",
      imageAlt: "Web Development",
      title: "Web Development",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/WebdevelopmentSyllabus",
    },
    {
      imageUrl: "/DevOpsMaster.jpg",
      imageAlt: "DevOps Master",
      title: "DevOps Master",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/DevOpsMasterSyllabus",
    },
    {
      imageUrl: "/OracleDBA.jpg",
      imageAlt: "Oracle DBA",
      title: "Oracle DBA",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/OracleDBASyllabus",
    },
    {
      imageUrl: "/CProgramming.jpg",
      imageAlt: "C Programming",
      title: "C Programming",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/CProgrammingSyllabus",
    },
    {
      imageUrl: "/GraphicDesign.jpg",
      imageAlt: "Graphic Design",
      title: "Graphic Design",
      description: "",
      //price: 'Rs 25000',
      courseDuration: "2.5 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/GraphicDesignSyllabus",
    },
    // Add more card data as needed
  ];

  return (
    <>
      {/* <NavBar/> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </>
  );
};

export default CourseList;
