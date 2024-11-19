"use client";
import React, { useState } from "react";
import AWSDevelopmentClassType from "./AWSDevelopmentClassType";



const AWSDevelopmentSyllabus1 = () => {
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
      title: "CHAPTER 1 Introduction",
      lectures: [
        "Introduction",
        "What Can I Skip?",
        "The DVA-C02 Exam Blueprint",
        "Course Updates and Changelogs",
      ],
      info: "6 lectures • 2 hours",
    },
    {
      title: "CHAPTER 2 Beginner's Guide to IAM",
      lectures: [
        "IAM 101",
        "IAM Demo",
        "HANDS-ON LAB: Introduction to AWS Identity and Access Management (IAM)",
        "Testing IAM Policy Permissions",
        "IAM 101 Summary",
        "QUIZ: AWS Certified Developer - Associate - Beginners Guide to IAM Quiz",
      ],
      info: "5 lectures • 1.5 hours",
    },
    {
      title: "CHAPTER 3 Beginner's Guide to EC2",
      lectures: [
        "Introducing EC2",
        "EC2 Pricing Options",
        "Exploring EC2 Instance Types",
        "Launching an EC2 Instance - Demo",
        "Using EC2 Instance Connect - Demo",
        "Understanding EBS Volumes",
        "Creating an EBS Volume - Demo",
        "Exploring Elastic Load Balancer",
        "Route 53 Demo",
        "CLI Demo Lab",
        "CLI Pagination",
        "Working With The AWS CloudShell - Demo",
        "EC2 with S3 Role Demo",
        "RDS 101",
        "RDS Demo",
        "RDS Multi-AZ and Read Replicas",
        "RDS Backups and Snapshots",
        "Increasing Scalability Using RDS Proxy",
        "Elasticache 101",
        "Introducing MemoryDB For Redis",
        "Demo: Systems Manager Parameter Store",
        "Demo: Securely Storing Secrets With AWS Secrets Manager",
        "Discovering EC2 Image Builder",
        "Creating an AMI Using EC2 Image Builder - Demo",
        "Using AMIs in a Different Region",
        "EC2 Summary",
        "QUIZ: AWS Certified Developer - Associate - Beginner's Guide to EC2 Quiz",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "CHAPTER 4 S3",
      lectures: [
        "Reviewing S3 Storage Classes",
        "Securing S3 Buckets",
        "S3 Bucket Policies Demo",
        "HANDS-ON LAB: Create a Static Website Using Amazon S3",
        "S3 Encryption",
        "Configuring Encryption on an S3 Bucket - Demo",
        "CORS Configuration - Demo",
        "Overview of CloudFront",
        "Configuring Amazon CloudFront Demo",
        "Configuring CloudFront With Origin Access Identity",
        "Understanding CloudFront AllowedMethods",
        "Introducing Athena",
        "Demo: Working with Athena",
        "S3 Summary",
        "QUIZ: AWS Certified Developer - Associate - S3 Quiz",
      ],
      info: "8 lectures • 2.5 hours",
    },
    {
      title: "CHAPTER 5 Introduction to Serverless Computing",
      lectures: [
        "Serverless 101",
        "Introducing Lambda",
        "HANDS-ON LAB: Creating a Lambda Function Using the AWS Console",
        "API Gateway",
        "Building a Serverless Website - Demo",
        "Version Control With Lambda - Demo",
        "Lambda Concurrent Executions Limit",
        "Lambda and VPC Access",
        "Example Serverless Architectures",
        "Step Functions - Demo",
        "HANDS-ON LAB: Building a Serverless Application Using Step Functions, API",
        "Gateway, Lambda, and S3 in AWS",
        "HANDS-ON LAB: Building and Troubleshooting a Serverless Web Application",
        "Comparing Step Functions Workflows",
        "Understanding Ephemeral and Persistent Data Storage Patterns",
        "Lambda Environment Variables and Parameters",
        "Configuring a Lambda Function Using Environment Variables and Parameters - Demo",
        "Handling Lambda Event Lifecycle and Errors",
        "Lambda Deployment Packaging Options",
        "Using Lambda Destinations and Dead-Letter Queues - Demo",
        "Advanced API Gateway",
        "Using API Gateway Mock Endpoints for Integration Testing and Resolving",
        "Integration Dependencies",
        "Using API Gateway Stages for Testing Deployed Code",
        "Creating Dynamic Lambda Deployments Using API Gateway Staging Variables",
        "API Response and Request Transformations",
        "API Gateway Caching and Throttling",
        "Understanding X-Ray",
        "X-Ray Configuration",
        "X-Ray Demo",
        "Serverless Summary",
        "QUIZ: AWS Certified Developer - Associate - Introduction to Serverless Computing Quiz",
      ],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "CHAPTER 6 DynamoDB",
      lectures: [
        "Introduction to DynamoDB",
        "Creating a DynamoDB Table - Demo",
        "DynamoDB Access Control",
        "Indexes Deepdive",
        "HANDS-ON LAB: AWS DynamoDB in the Console - Creating Tables, Items, and Indexes",
        "Scan vs Query API Call - Demo",
        "Using DynamoDB API Calls",
        "DynamoDB Provisioned Throughput",
        "DynamoDB On-Demand Capacity",
        "DynamoDB Accelerator (DAX)",
        "DynamoDB TTL - Demo",
        "DynamoDB Streams",
        "Provisioned Throughput Exceeded and Exponential Backoff",
        "DynamoDB Summary",
        "QUIZ: AWS Certified Developer - Associate - DynamoDB Quiz",
      ],
      info: "3 lectures • 1.5 hours",
    },
    {
      title: "CHAPTER 7 KMS and Encryption on AWS",
      lectures: [
        "KMS",
        "Creating A CMK - Demo",
        "CMK Summary",
        "Understanding KMS API Calls - Demo",
        "Exploring Envelope Encryption",
        "Enabling and Disabling KMS Key Rotation - Demo",
        "Certificate Management in AWS",
        "KMS Summary",
        "QUIZ: AWS Certified Developer - Associate - KMS and Encryption on AWS Quiz",
      ],
      info: "8 lectures • 3 hours",
    },
    {
      title: "CHAPTER 8 Other AWS Services",
      lectures: [
        "SQS",
        "Understanding SQS Queue Types",
        "SQS Settings",
        "SQS Delay Queues & Large Messages",
        "HANDS-ON LAB: Triggering AWS Lambda from Amazon SQS",
        "Simple Notification Service",
        "SES vs SNS",
        "Kinesis",
        "Setting Up A Kinesis Data Stream - Demo",
        "Kinesis Shards and Consumers",
        "Introducing Elastic Beanstalk",
        "Updating Elastic Beanstalk",
        "Deploying An Application With Elastic Beanstalk - Demo",
        "Updating An Application In Elastic Beanstalk - Demo",
        "Advanced Elastic Beanstalk",
        "RDS & Elastic Beanstalk",
        "Migrating Applications to Elastic Beanstalk",
        "Other AWS Services Summary",
        "QUIZ: AWS Certified Developer - Associate - Other AWS ServicesQuiz",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "CHAPTER 9 Developer Theory",
      lectures: [
        "What is CI/CD?",
        "CodeCommit 101",
        "CodeCommit Demo",
        "HANDS-ON LAB: Configure and Work with CodeCommit from the CLI",
        "CodeDeploy 101",
        "The CodeDeploy AppSpec File",
        "CodeDeploy Lifecycle Event Hooks",
        "HANDS-ON LAB: Deploying an Application Using CodeDeploy",
        "CodePipeline 101",
        "CodePipeline Demo",
        "HANDS-ON LAB: Setting Up an AWS CodePipeline with a Manual Approval",
        "HANDS-ON LAB: Working with a DevOps CI/CD Pipeline in AWS",
        "Introducing CodeArtifact",
        "Demo - Creating a CodeArtifact Repository",
        "Elastic Container Service",
        "Introduction To CloudFormation",
        "Provisioning Resources Using CloudFormation Demo",
        "HANDS-ON LAB: Create a DynamoDB Table Using CloudFormation",
        "Exporting CloudFormation Stack Values",
        "The Serverless Application Model (SAM)",
        "CloudFormation and SAM Demo",
        "CloudFormation Nested Stacks",
        "HANDS-ON LAB: Working with CloudFormation Nested Stacks",
        "Introducing The Cloud Development Kit (CDK)",
        "CDK Demo",
        "Introducing Amplify",
        "Amplify Demo",
        "Developer Theory Summary",
        "QUIZ: AWS Certified Developer - Associate - Developer Theory Quiz",
      ],
      info: "3 lectures • 4 hours",
    },
    {
      title: "CHAPTER 10 Advanced IAM",
      lectures: [
        "Web Identity Federation",
        "Cognito User Pools Demo",
        "Cognito Identity Pools Demo",
        "Inline Policies vs Managed Policies vs Customer Managed Policies",
        "HANDS-ON LAB: Working With AWS Managed Policies, Customer Managed Policies, and Inline Policies",
        "STS AssumeRoleWithWebIdentity",
        "Configuring Cross Account Access - Demo",
        "Advanced IAM Summary",
        "QUIZ: AWS Certified Developer - Associate - Advanced IAM Quiz",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "CHAPTER 11 Monitoring",
      lectures: [
        "Introduction to CloudWatch",
        "CloudWatch Demo",
        "Creating CloudWatch Dashboards Demo",
        "Understanding CloudWatch Concepts",
        "CloudWatch vs CloudTrail",
        "HANDS-ON LAB: Using CloudWatch for Resource Monitoring",
        "Using CloudWatch Actions",
        "Exploring CloudWatch Logs Insights Demo",
        "Receiving Notifications with CloudWatch - Demo",
        "What is EventBridge?",
        "Using EventBridge - Demo",
        "Recognizing Common HTTP Error Codes",
        "Recognizing Common SDK Exceptions",
        "Monitoring Summary",
        "QUIZ: AWS Certified Developer - Associate - Monitoring Quiz",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "CHAPTER 12 Additional Resources to Help You Prepare for the Exam",
      lectures: ["Additional Resources"],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Practice Exam",
      lectures:["exams"],
      info:"2 hr"
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row sm:flex-row sm:mt-4">
      <div className="w-[80%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl ml-8 p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div
              key={index}
              className={`relative w-full max-w-[800px]`}
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
      <AWSDevelopmentClassType/>
    </div>
  );
};
export default AWSDevelopmentSyllabus1;
