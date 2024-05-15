// CardList.js
import React from 'react';
// import Card from '../components/card';


const CourseList = () => {
  const cardsData = [
    {
      imageUrl: process.env.PUBLIC_URL + '/DevOps.jpg',
      imageAlt: 'DevOps',
      title: 'DeVOps',
      description: '',
      //price: 'Rs 25000',
      courseDuration: '2 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link',
      syllabusUrl: '/Syllabus/DevOps'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/cplusplus.jpeg',
      imageAlt: 'C++',
      title: 'C++',
      description: '',
      //price: 'Rs 25000',
      courseDuration: '2 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link',
      syllabusUrl: '/Syllabus/CPlusPlusSyllabus'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/AWSCloudPractitioner.jpeg',
      imageAlt: 'AWS-Cloud-Practitioner',
      title: 'AWS Cloud Practitioner',
      //description: 'Coming Soon',
      price: 'Rs 5000',
      courseDuration: '15 Hours (online)',
      syllabusUrl: '/Syllabus/AWSPractitionerSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/mern.jpg',
      imageAlt: 'mern',
      title: 'Full Stack MERN',
      //description: 'Coming Soon',
     // price: 'Rs 40000',
      courseDuration: '2.5 Months',
      syllabusUrl: '/Syllabus/MernSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/dotnet.jpg',
      imageAlt: 'dotnet',
      title: 'ASP .NET',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: '2.5 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/datascience.jpg',
      imageAlt: 'datascience',
      title: 'Data Analytics and ML',
      //description: 'Coming Soon',
      //price: 'Rs 25000',
      courseDuration: '2 Months',
      syllabusUrl: '/Syllabus/DataAnalytics',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },

    {
      imageUrl: process.env.PUBLIC_URL + '/AWS-Developer-Associate-Courses.png',
      imageAlt: 'AWS-Developer Associate',
      title: 'AWS-Developer-Associate',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: '2 Months',
      syllabusUrl: '/Syllabus/AwsDeveloperAssociate',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    
    {
      imageUrl: process.env.PUBLIC_URL + '/AWS_solution_associate.png',
      imageAlt: 'AWS-Solution-Associate',
      title: 'AWS-Solution-Associate',
      //description: 'Coming Soon',
     // price: 'Rs 30000',
     courseDuration: '2 Months',
      syllabusUrl: '/Syllabus/AwsSolutionArchitect',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
  
    {
      imageUrl: process.env.PUBLIC_URL + '/rhel.jpg',
      imageAlt: 'rhel',
      title: 'RHEL',
      //description: 'Coming Soon',
      //price: 'Rs 25000',
      courseDuration: '2 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    
   
    {
      imageUrl: process.env.PUBLIC_URL + '/digitalmarketing.jpg',
      imageAlt: 'digitalmarketing',
      title: 'Digital Marketing',
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      courseDuration: '2 Months',
      syllabusUrl: '/Syllabus/DigitalMArketingSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/ethical.jpeg',
      imageAlt: 'EthicalHacking',
      title: 'Ethical Hacking',
      //description: 'Coming Soon',
      //price: 'Rs 20000',
      courseDuration: '1.5 Months',  
      syllabusUrl: '/Syllabus/EthicalHackingSyllabus',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link' 
       },
         {
          imageUrl: process.env.PUBLIC_URL + '/computerbasics.png',
          imageAlt: 'computerbasics',
          title: 'Computer Basics',
          //description: 'Coming Soon',
          //price: 'Rs 20000',
          courseDuration: '1.5 Months',  
          syllabusUrl: '/Syllabus/ComputerBasicsSyllabus',
          googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link' 
           },
           {
            imageUrl: process.env.PUBLIC_URL + '/redhatopenshiftdevI.png',
            imageAlt: 'redhatopen',
            title: 'Redhat Openshift Dev-I',
            //description: 'Coming Soon',
            //price: 'Rs 20000',
            courseDuration: '1.5 Months',  
            syllabusUrl: '/Syllabus/RedHatOpenShiftDevISyllabus',
            googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link' 
             },
      {
      imageUrl: process.env.PUBLIC_URL + '/java.jpg',
      imageAlt: 'java',
      title: 'Java',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: '2 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    
    
    {
      imageUrl: process.env.PUBLIC_URL + '/django.png',
      imageAlt: 'django',
      title: 'Python with Django',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: '2.5 Months',
      syllabusUrl: '/Syllabus/PythonWithDjango',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/laravel.png',
      imageAlt: 'laravel',
      title: 'Laravel',
      //description: 'Coming Soon',
      //price: 'Rs 30000',
      courseDuration: '2.5 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/php.png',
      imageAlt: 'php',
      title: 'PHP MySQL',
      //description: 'Coming Soon',
     // price: 'Rs 30000',
     courseDuration: '2 Months',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },

    {
      imageUrl: process.env.PUBLIC_URL + '/aws.jpg',
      imageAlt: 'Amazon AWS',
      title: 'AWS',
      //description: 'Coming Soon',
     // price: 'Rs 25000',
     courseDuration: '1.5 Months',
      syllabusUrl: '/Syllabus/Aws',
      googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link'
    },
    {
      imageUrl: process.env.PUBLIC_URL + "/BasicComputerCourse.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/OpenShift.jpg",
      imageAlt: "OpenShift",
      title: "Open Shift",
      description: "",
      courseDuration: "2 Months",
      googleFormUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link",
      syllabusUrl: "/Syllabus/OpenShiftSyllabus",
    },
    {
      imageUrl: process.env.PUBLIC_URL + "/C++.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/OpenShiftAdministrator.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/python.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/QualityAssuarance.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/WebDesign.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/VideoEditing.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/WebDevelopment.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/DevOpsMaster.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/OracleDBA.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/CProgramming.jpg",
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
      imageUrl: process.env.PUBLIC_URL + "/GraphicDesign.jpg",
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
    {/* <NavBar/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div> */}
    </>
  );
};

export default CourseList;