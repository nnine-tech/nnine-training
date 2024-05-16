import React from "react";
import NavBar from "../components/Navbar/NavBar";

const AWSCertifiedDeveloper = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl font-bold mb-4">
            AWS Certified Developer - Associate Syllabus
          </h1>
          <div>
            <p>
              The AWS Certified Developer – Associate course is designed for
              individuals interested in learning how to create applications
              using AWS. Tailored for intermediate-level students, the course
              starts with a comprehensive introduction to cloud computing
              basics. It then progresses into an extensive curriculum covering
              the development, deployment, and management of applications, with
              a focus on serverless architectures, within the AWS environment.
            </p>
            <br />

            <div className="w-52 flex gap-4">
              <div className="w-1/2">
                <p className="underline">Skill Level</p>
                <p className="underline">Duration</p>
                <p className="underline">Quizzes</p>
                <p className="underline">Practices</p>
                <p className="underline">Labs</p>
              </div>
              <div className="w-1/2">
                <p>Intermediate</p>
                <p>50 Hours</p>
                <p>10</p>
                <p>2</p>
                <p>15</p>
              </div>
            </div>
            <br />

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 1 Introduction
            </h2>
            <ul className="list-disc ml-8">
              <li>Introduction</li>
              <li>What Can I Skip?</li>
              <li>The DVA-C02 Exam Blueprint</li>
              <li>Course Updates and Changelogs</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 2 Beginner's Guide to IAM
            </h2>
            <ul className="list-disc ml-8">
              <li>IAM 101</li>
              <li>IAM Demo</li>
              <li>
                HANDS-ON LAB: Introduction to AWS Identity and Access Management
                (IAM)
              </li>
              <li>Testing IAM Policy Permissions</li>
              <li>IAM 101 Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Beginners Guide to
                IAM Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 3 Beginner's Guide to EC2
            </h2>
            <ul className="list-disc ml-8">
              <li>Introducing EC2</li>
              <li>EC2 Pricing Options</li>
              <li>Exploring EC2 Instance Types</li>
              <li>Launching an EC2 Instance - Demo</li>
              <li>Using EC2 Instance Connect - Demo</li>
              <li>Understanding EBS Volumes</li>
              <li>Creating an EBS Volume - Demo</li>
              <li>Exploring Elastic Load Balancer</li>
              <li>Route 53 Demo</li>
              <li>CLI Demo Lab</li>
              <li>CLI Pagination</li>
              <li>Working With The AWS CloudShell - Demo</li>
              <li>EC2 with S3 Role Demo</li>
              <li>RDS 101</li>
              <li>RDS Demo</li>
              <li>RDS Multi-AZ and Read Replicas</li>
              <li>RDS Backups and Snapshots</li>
              <li>Increasing Scalability Using RDS Proxy</li>
              <li>Elasticache 101</li>
              <li>Introducing MemoryDB For Redis</li>
              <li>Demo: Systems Manager Parameter Store</li>
              <li>Demo: Securely Storing Secrets With AWS Secrets Manager</li>
              <li>Discovering EC2 Image Builder</li>
              <li>Creating an AMI Using EC2 Image Builder - Demo</li>
              <li>Using AMIs in a Different Region</li>
              <li>EC2 Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Beginner's Guide to
                EC2 Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">CHAPTER 4 S3</h2>
            <ul className="list-disc ml-8">
              <li>Reviewing S3 Storage Classes</li>
              <li>Securing S3 Buckets</li>
              <li>S3 Bucket Policies Demo</li>
              <li>HANDS-ON LAB: Create a Static Website Using Amazon S3</li>
              <li>S3 Encryption</li>
              <li>Configuring Encryption on an S3 Bucket - Demo</li>
              <li>CORS Configuration - Demo</li>
              <li>Overview of CloudFront</li>
              <li>Configuring Amazon CloudFront Demo</li>
              <li>Configuring CloudFront With Origin Access Identity</li>
              <li>Understanding CloudFront AllowedMethods</li>
              <li>Introducing Athena</li>
              <li>Demo: Working with Athena</li>
              <li>S3 Summary</li>
              <li>QUIZ: AWS Certified Developer - Associate - S3 Quiz</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 5 Introduction to Serverless Computing
            </h2>
            <ul className="list-disc ml-8">
              <li>Serverless 101</li>
              <li>Introducing Lambda</li>
              <li>
                HANDS-ON LAB: Creating a Lambda Function Using the AWS Console
              </li>
              <li>API Gateway</li>
              <li>Building a Serverless Website - Demo</li>
              <li>Version Control With Lambda - Demo</li>
              <li>Lambda Concurrent Executions Limit</li>
              <li>Lambda and VPC Access</li>
              <li>Example Serverless Architectures</li>
              <li>Step Functions - Demo</li>
              <li>
                HANDS-ON LAB: Building a Serverless Application Using Step
                Functions, API Gateway, Lambda, and S3 in AWS
              </li>
              <li>
                HANDS-ON LAB: Building and Troubleshooting a Serverless Web
                Application
              </li>
              <li>Comparing Step Functions Workflows</li>
              <li>
                Understanding Ephemeral and Persistent Data Storage Patterns
              </li>
              <li>Lambda Environment Variables and Parameters</li>
              <li>
                Configuring a Lambda Function Using Environment Variables and
                Parameters - Demo
              </li>
              <li>Handling Lambda Event Lifecycle and Errors</li>
              <li>Lambda Deployment Packaging Options</li>
              <li>Using Lambda Destinations and Dead-Letter Queues - Demo</li>
              <li>Advanced API Gateway</li>
              <li>
                Using API Gateway Mock Endpoints for Integration Testing and
                Resolving Integration Dependencies
              </li>
              <li>Using API Gateway Stages for Testing Deployed Code</li>
              <li>
                Creating Dynamic Lambda Deployments Using API Gateway Staging
                Variables
              </li>
              <li>API Response and Request Transformations</li>
              <li>API Gateway Caching and Throttling</li>
              <li>Understanding X-Ray</li>
              <li>X-Ray Configuration</li>
              <li>X-Ray Demo</li>
              <li>Serverless Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Introduction to
                Serverless Computing Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">CHAPTER 6 DynamoDB</h2>
            <ul className="list-disc ml-8">
              <li>Introduction to DynamoDB</li>
              <li>Creating a DynamoDB Table - Demo</li>
              <li>DynamoDB Access Control</li>
              <li>Indexes Deepdive</li>
              <li>
                HANDS-ON LAB: AWS DynamoDB in the Console - Creating Tables,
                Items, and Indexes
              </li>
              <li>Scan vs Query API Call - Demo</li>
              <li>Using DynamoDB API Calls</li>
              <li>DynamoDB Provisioned Throughput</li>
              <li>DynamoDB On-Demand Capacity</li>
              <li>DynamoDB Accelerator (DAX)</li>
              <li>DynamoDB TTL - Demo</li>
              <li>DynamoDB Streams</li>
              <li>Provisioned Throughput Exceeded and Exponential Backoff</li>
              <li>DynamoDB Summary</li>
              <li>QUIZ: AWS Certified Developer - Associate - DynamoDB Quiz</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 7 KMS and Encryption on AWS
            </h2>
            <ul className="list-disc ml-8">
              <li>KMS</li>
              <li>Creating A CMK - Demo</li>
              <li>CMK Summary</li>
              <li>Understanding KMS API Calls - Demo</li>
              <li>Exploring Envelope Encryption</li>
              <li>Enabling and Disabling KMS Key Rotation - Demo</li>
              <li>Certificate Management in AWS</li>
              <li>KMS Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - KMS and Encryption
                on AWS Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 8 Other AWS Services
            </h2>
            <ul className="list-disc ml-8">
              <li>SQS</li>
              <li>Understanding SQS Queue Types</li>
              <li>SQS Settings</li>
              <li>SQS Delay Queues & Large Messages</li>
              <li>HANDS-ON LAB: Triggering AWS Lambda from Amazon SQS</li>
              <li>Simple Notification Service</li>
              <li>SES vs SNS</li>
              <li>Kinesis</li>
              <li>Setting Up A Kinesis Data Stream - Demo</li>
              <li>Kinesis Shards and Consumers</li>
              <li>Introducing Elastic Beanstalk</li>
              <li>Updating Elastic Beanstalk</li>
              <li>Deploying An Application With Elastic Beanstalk - Demo</li>
              <li>Updating An Application In Elastic Beanstalk - Demo</li>
              <li>Advanced Elastic Beanstalk</li>
              <li>RDS & Elastic Beanstalk</li>
              <li>Migrating Applications to Elastic Beanstalk</li>
              <li>Other AWS Services Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Other AWS Services
                Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 9 Developer Theory
            </h2>
            <ul className="list-disc ml-8">
              <li>What is CI/CD?</li>
              <li>CodeCommit 101</li>
              <li>CodeCommit Demo</li>
              <li>
                HANDS-ON LAB: Configure and Work with CodeCommit from the CLI
              </li>
              <li>CodeDeploy 101</li>
              <li>The CodeDeploy AppSpec File</li>
              <li>CodeDeploy Lifecycle Event Hooks</li>
              <li>HANDS-ON LAB: Deploying an Application Using CodeDeploy</li>
              <li>CodePipeline 101</li>
              <li>CodePipeline Demo</li>
              <li>
                HANDS-ON LAB: Setting Up an AWS CodePipeline with a Manual
                Approval
              </li>
              <li>HANDS-ON LAB: Working with a DevOps CI/CD Pipeline in AWS</li>
              <li>Introducing CodeArtifact</li>
              <li>Demo - Creating a CodeArtifact Repository</li>
              <li>Elastic Container Service</li>
              <li>Introduction To CloudFormation</li>
              <li>Provisioning Resources Using CloudFormation Demo</li>
              <li>
                HANDS-ON LAB: Create a DynamoDB Table Using CloudFormation
              </li>
              <li>Exporting CloudFormation Stack Values</li>
              <li>The Serverless Application Model (SAM)</li>
              <li>CloudFormation and SAM Demo</li>
              <li>CloudFormation Nested Stacks</li>
              <li>HANDS-ON LAB: Working with CloudFormation Nested Stacks</li>
              <li>Introducing The Cloud Development Kit (CDK)</li>
              <li>CDK Demo</li>
              <li>Introducing Amplify</li>
              <li>Amplify Demo</li>
              <li>Developer Theory Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Developer Theory
                Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 10 Advanced IAM
            </h2>
            <ul className="list-disc ml-8">
              <li>Web Identity Federation</li>
              <li>Cognito User Pools Demo</li>
              <li>Cognito Identity Pools Demo</li>
              <li>
                Inline Policies vs Managed Policies vs Customer Managed Policies
              </li>
              <li>
                HANDS-ON LAB: Working With AWS Managed Policies, Customer
                Managed Policies, and Inline Policies
              </li>
              <li>STS AssumeRoleWithWebIdentity</li>
              <li>Configuring Cross Account Access - Demo</li>
              <li>Advanced IAM Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Advanced IAM Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 11 Monitoring
            </h2>
            <ul className="list-disc ml-8">
              <li>Introduction to CloudWatch</li>
              <li>CloudWatch Demo</li>
              <li>Creating CloudWatch Dashboards Demo</li>
              <li>Understanding CloudWatch Concepts</li>
              <li>CloudWatch vs CloudTrail</li>
              <li>HANDS-ON LAB: Using CloudWatch for Resource Monitoring</li>
              <li>Using CloudWatch Actions</li>
              <li>Exploring CloudWatch Logs Insights Demo</li>
              <li>Receiving Notifications with CloudWatch - Demo</li>
              <li>What is EventBridge?</li>
              <li>Using EventBridge - Demo</li>
              <li>Recognizing Common HTTP Error Codes</li>
              <li>Recognizing Common SDK Exceptions</li>
              <li>Monitoring Summary</li>
              <li>
                QUIZ: AWS Certified Developer - Associate - Monitoring Quiz
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">
              CHAPTER 12 Additional Resources to Help You Prepare for the Exam
            </h2>
            <ul className="list-disc ml-8">
              <li>Additional Resources</li>
            </ul>
            <p className="font-bold">Practice Exam</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AWSCertifiedDeveloper;
