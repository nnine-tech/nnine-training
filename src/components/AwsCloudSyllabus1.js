"use client";

import React, { useState } from "react";
import PythonClassType from "./PythonClassType";
import AwsCloudClassType from "./AwsCloudClassType";


const AwsCloudSyllabus1 = () => {
  // State to manage dropdown visibility for each section
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

 // Array of syllabus sections
const syllabusSections = [
    {
      title: "Course Introduction",
      lectures: [
        "Course Introduction",
      ],
      info: "1 lecture",
    },
    {
      title: "Foundation of Cloud Computing",
      lectures: [
        "Getting Your Head in the Cloud",
        "Introducing Cloud Computing and Deployment Models",
        "Exploring Regions and Availability Zones",
        "Reviewing Edge Locations and Local Zones",
        "Introducing the Frameworks",
        "Meeting the AWS Management Console and Accessing AWS",
        "Demo: Exploring Your Amazon Web Services (AWS) Account",
        "Foundations of Cloud Computing Exam Tips",
        "QUIZ: Foundations of Cloud Computing Quiz",
      ],
      info: "9 lectures",
    },
    {
      title: "Compute Technology and Services",
      lectures: [
        "Compute: The Bigger Picture",
        "Reviewing EC2 Features",
        "Demo: Exploring Compute Services - EC2 in Action",
        "Containers: The Bigger Picture",
        "Serverless Services: The Bigger Picture",
        "Understanding Serverless Services: Pricing and Features",
        "Demo: Exploring Compute Services - Lambda in Action",
        "HANDS-ON-LAB: Create a Lambda Function Using the AWS Management Console",
        "Introducing Additional Compute Services",
        "Compute Technology and Services Exam Tips",
        "QUIZ: Compute Technology and Services Quiz",
      ],
      info: "11 lectures",
    },
    {
      title: "Storage Technology and Services",
      lectures: [
        "Exploring Amazon EC2 Storage",
        "Amazon Simple Storage Services (S3): The Bigger Picture",
        "Exploring S3 Storage Classes",
        "Demo: Exploring Storage Services - S3 in Action",
        "HANDS-ON-LAB: Creating S3 Buckets with Versioning and Encryption",
        "Introducing Additional Storage Services",
        "Amazon Elastic Block Store (EBS)",
        "AWS Storage Gateway",
        "Overview of AWS Backup",
        "Storage Exam Tips",
        "QUIZ: Storage Technology and Services Quiz",
      ],
      info: "11 lectures",
    },
    {
      title: "Content Delivery and Networking Technology and Services",
      lectures: [
        "Content Delivery: The Bigger Picture",
        "AWS Global Accelerator",
        "Networking: The Bigger Picture",
        "Demo: Exploring Networking Services - VPC in Action",
        "HANDS-ON LAB: Launch an EC2 Instance in a Virtual Private Cloud (VPC)",
        "DNS: The Bigger Picture",
        "Applying Hybrid Models with Networking Services",
        "Content Delivery and Networking Exam Tips",
        "QUIZ: Content Delivery and Networking Technology and Services Quiz",
      ],
      info: "9 lectures",
    },
    {
      title: "Database Technology and Services",
      lectures: [
        "Databases: The Bigger Picture",
        "Understanding AWS Database Migration Services",
        "Amazon DynamoDB",
        "Overview of Memory-Based Databases in AWS",
        "QUIZ: Database Technology and Services Quiz",
      ],
      info: "5 lectures",
    },
    {
      title: "Development, Messaging, and Deployment Technology and Services",
      lectures: [
        "What is CI/CD?",
        "AWS Development Tools",
        "Demo: Working with AWS CloudShell and the AWS Command Line Interface (AWS CLI)",
        "Demo: Using AWS Cloud9",
        "Understanding AWS CodeArtifact",
        "Decoupling Application Components",
        "Introducing Amazon Simple Notification Service (SNS)",
        "HANDS-ON-LAB: Create and Subscribe to an AWS SNS Topic",
        "Introducing Amazon Simple Queue Service (SQS)",
        "Standard and FIFO Queues",
        "Short Polling vs Long Polling",
        "What Is Amazon Simple Email Service (SES)?",
        "Introducing Amazon EventBridge",
        "Understanding Step Functions",
        "Deploying Infrastructure as Code with AWS CloudFormation",
        "HANDS-ON LAB: Create a DynamoDB Table Using CloudFormation",
        "What Is AWS Elastic Beanstalk?",
        "Demo: Deploying an Application Using Elastic Beanstalk",
        "Demo: Using AWS X-Ray to Identify Performance Issues",
        "Development, Messaging, and Deployment Exam Tips - Part 1",
        "Development, Messaging, and Deployment Exam Tips - Part 2",
        "QUIZ: Development, Messaging, and Deployment Technology and Services Quiz",
      ],
      info: "21 lectures",
    },
    {
      title: "Migration and Transfer Technology and Services",
      lectures: [
        "Introducing the AWS Snow Family",
        "Identifying Database Migration Tools",
        "Exploring the AWS Transfer Family",
        "AWS DataSync",
        "Understanding AWS Application Discovery Service",
        "Introducing AWS Application Migration Service",
        "Discovering AWS Migration Hub",
        "QUIZ: Migration and Transfer Technology and Services Quiz",
      ],
      info: "8 lectures",
    },
    {
      title: "Artificial Intelligence, Machine Learning, and Analytics Technology and Services",
      lectures: [
        "Amazon Redshift and Redshift Serverless",
        "What is Amazon Kinesis?",
        "Exploring Kinesis Data Firehouse",
        "What Is Amazon Athena?",
        "Demo: Using Athena to Query Data",
        "Introducing AWS Glue",
        "Exploring AWS Data Exchange",
        "Understanding Amazon Elastic MapReduce (EMR)",
        "What is Amazon OpenSearch?",
        "Exploring Managed Streaming for Apache Kafka (Amazon MSK)",
        "Understanding Amazon QuickSight",
        "Machine Learning With Amazon SageMaker",
        "What Is Amazon Kendra?",
        "Understanding Amazon Lex",
        "Demo: Using Amazon Polly",
        "Introducing Amazon Comprehend",
        "Amazon Textract, Amazon Transcribe, and Amazon Translate",
        "Demo: Using Amazon Transcribe",
        "Demo: Amazon Rekognition in Action",
        "Artificial Intelligence, Machine Learning, and Analytics Exam Tips - Part 1",
        "Artificial Intelligence, Machine Learning, and Analytics Exam Tips - Part 2",
        "QUIZ: Artificial Intelligence and Machine Learning Technology and Services Quiz",
      ],
      info: "22 lectures",
    },
    {
      title: "Auditing, Monitoring, Logging and Additional Technology and Services",
      lectures: [
        "Introducing Monitoring and Logging on AWS",
        "Exploring Amazon CloudWatch and AWS CloudTrail",
        "Demo: Getting to Know CloudWatch Dashboards",
        "Managing Many Resources on AWS",
        "Monitoring Service Health and Best Practices",
        "Understanding Auditing on AWS",
        "Identifying Business and End User Services",
        "Auditing, Monitoring, and Logging Exam Tips",
        "Auditing, Monitoring, Logging, and Additional Technology and Services Exam Preparation",
      ],
      info: "9 lectures",
    },
    {
      title: "Security, Compliance and Support",
      lectures: [
        "Security: The Bigger Picture",
        "What Do We Need To Secure on AWS?",
        "Illustrating the Principle of Least Privilege",
        "What Is IAM?",
        "Leveraging Existing Identity Providers",
        "Keeping Secrets Safe",
        "Exploring Network Security Services",
        "What Is Security Hub?",
        "Demo: Exploring Security Hub",
        "Responding to Security Events",
        "Growing Your Security Muscles",
        "Governing Multiple Accounts on AWS",
        "Understanding Compliance on AWS",
        "Security, Compliance, and Governance Exam Tips",
      ],
      info: "14 lectures",
    },
    {
      title: "Price, Billing and Support",
      lectures: [
        "Cloud Costs: The Bigger Picture",
        "Optimizing the Cost of Compute",
        "Understanding Data Storage Costs",
        "Understanding Data Transfer Costs",
        "Monitoring and Predicting Costs on AWS",
        "Demo: Setting a Budget Alert in Your AWS Account",
        "Managing Costs in a Multi-Account Environment",
        "Monitoring The Cost of Resource Groups",
        "Seeking Support From AWS",
        "Exploring Other Sources of Support",
      ],
      info: "10 lectures",
    },
    {
      title: "Exam Preparation",
      lectures: [
        "Exam Preparation",
      ],
      info: "1 lecture",
    },
  ];
  
  
  return (
    <div className=" flex flex-col md:flex-row sm:flex-row sm:mt-4 ml-20 mb-10">
      <div className="w-[60%] flex flex-col mt-14 ">
        <div className="w-full">
          <h1 className="font-bold text-3xl ml-8 p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div
              key={index}
              className={`relative lg:w-full max-w-[800px] w-[250px]`}
            >
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all ${
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
                  <ul className="p-2">
                    {section.lectures.map((lecture, idx) => (
                      <li key={idx} className="py-1 font-Quicksand">
                        <span className="mx-1">•</span>
                        {lecture}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div  className="ml-[-65px] md:ml-12">
      <AwsCloudClassType/>
      </div>
    </div>
  );
};

export default AwsCloudSyllabus1;
