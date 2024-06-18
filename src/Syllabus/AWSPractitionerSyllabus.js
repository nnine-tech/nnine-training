import React from "react";

const AWSCloudPractitioner = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4">
              AWS Cloud Practitioner (CLF-C02) <br />
            </h1>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 1: Course Introduction
            </h2>

            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 2: Foundation of Cloud Computing
            </h2>
            <ul className="list-disc ml-8">
              <li>Getting Your Head in the Cloud</li>
              <li>Introducing Cloud Computing and Deployment Models</li>
              <li>Exploring Regions and Availability Zones</li>
              <li>Reviewing Edge Locations and Local Zones</li>
              <li>Introducing the Frameworks </li>
              <li>Meeting the AWS Management Console and Accessing AWS</li>
              <li>Demo: Exploring Your Amazon Web Services (AWS) Account</li>
              <li>Foundations of Cloud Computing Exam Tips </li>
              <li>QUIZ</li>
              <li>Foundations of Cloud Computing Quiz </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 3: Compute Technology and Services
            </h2>
            <ul className="list-disc ml-8">
              <li>Compute: The Bigger Picture</li>
              <li>Reviewing EC2 Features</li>
              <li>Demo: Exploring Compute Services - EC2 in Action</li>
              <li>Containers: The Bigger Picture</li>
              <li>Serverless Services: The Bigger Picture</li>
              <li>Understanding Serverless Services: Pricing and Features</li>
              <li>Demo: Exploring Compute Services - Lambda in Action</li>
              <li>
                HANDS-ON-LAB Create a Lambda Function Using the AWS Management
                Console
              </li>
              <li>Introducing Additional Compute Services</li>
              <li>Compute Technology and Services Exam Tips</li>
              <li>QUIZ Compute Technology and Services Quiz</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 4: Storage Technology and Services
            </h2>
            <ul className="list-disc ml-8">
              <li>Exploring Amazon EC2 Storage</li>
              <li>Amazon Simple Storage Services (S3): The Bigger Picture</li>
              <li>Exploring S3 Storage Classes</li>
              <li>Demo: Exploring Storage Services - S3 in Action</li>
              <li>
                HANDS-ON-LAB Creating S3 Buckles with Versioning and Encryption
              </li>
              <li>Introducing Additional Storage Services</li>
              <li>Amazon Elastic Block Store (EBS)</li>
              <li>AWS Storage Gateway</li>
              <li>Overview of AWS Backup</li>
              <li>Storage Exam Tips</li>
              <li>QUIZ Storage Technology and Services Quiz</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 5: Content Delivery and Networking Technology and Services
            </h2>
            <ul className="list-disc ml-8">
              <li>Content Delivery: The Bigger Picture</li>
              <li>AWS Global Accelerator</li>
              <li>Networking: The Bigger Picture</li>
              <li>Demo: Exploring Networking Services - VPC in Action </li>
              <li>
                HANDS-ON LAB Launch an EC2 Instance in a Virtual Private Cloud
                (VPC) DNS: The Bigger Picture
              </li>
              <li>DNS: The Bigger Picture </li>
              <li>Applying Hybrid Models with Networking Services</li>
              <li>Content Delivery and Networking Exam Tips </li>
              <li>
                QUIZ Content Delivery and Networking Technology and Services
                Quiz{" "}
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 6: Database Technology and Services{" "}
            </h2>
            <ul className="list-disc ml-8">
              <li>Databases: The Bigger Picture</li>
              <li>Understanding AWS Datbaase Migration Services</li>
              <li>Amazon DynamoDB</li>
              <li>Overview of Memory-Based Databases in AWS</li>
              <li>QUIZ Database Technology and Services Quiz</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 7: Developement, Messaging, and Deployment Technology and
              Services
            </h2>
            <ul className="list-disc ml-8">
              <li>What is CI/CD?</li>
              <li>AWS Developement Tools</li>
              <li>
                Demo: Working with AWS CloudShell and the AWS Command Line
                Interface(AWS CLI)
              </li>
              <li>Demo: Using AWS Cloud9</li>
              <li>Understanding AWS CodeArtifact</li>
              <li>Decoupling Application Components</li>
              <li>Inroducing Amazon Simple Notification Service(SNS)</li>
              <li>HANDS-ON-LAB Create and Subscribe to an AWS SNS Topic</li>
              <li>Introducing Amazon Simple Queue Service (SQS)</li>
              <li>Standard And FIFO Queues</li>
              <li>Short Polling vs Long Polling</li>
              <li>What Is Amazon Simple Email Service (SES)?</li>
              <li>Introducing Amazon EventBridge</li>
              <li>Understanding Step Functions</li>
              <li>Deploying Infrastructure as Code with AWS CloudFormation</li>
              <li>HANDS-ON LAB Create a DynamoDB Table Using CloudFormation</li>
              <li>What Is AWS Elastic Beanstalk?</li>
              <li>Demo: Deploying an Application Using Elastic Beanstalk</li>
              <li>Demo: Using AWS X-Ray to Identify Performance Issues</li>
              <li>Development, Messaging, and Deployment Exam Tips - Part 1</li>
              <li>Development, Messaging, and Deployment Exam Tips - Part 2</li>
              <li>
                QUIZ Development, Messaging, and Deployment Technology and
                Services Quiz
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 8: Migration and Transfer Technology and Services
            </h2>
            <ul className="list-disc ml-8">
              <li>Introducing the AWS Snow Family</li>
              <li>Identifying Database Migration Tools</li>
              <li>Exploring the AWS Transfer Family</li>
              <li>AWS DataSync</li>
              <li>Understanding AWS Application Discovery Service</li>
              <li>Introducing AWS Application Migration Service</li>
              <li>Discovering AWS Migration Hub</li>
              <li>QUIZ Migration and Transfer Technology and Services Quiz</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 9: Artificial Intelligence, Machine Learning, and
              Analytics Technology and Amazon Redshift and Redshift Serverless
            </h2>
            <ul className="list-disc ml-8">
              <li>What is Amazon Kinesis?</li>
              <li>Exploring Kinesis Data Firehouse</li>
              <li>What Is Amazon Athena?</li>
              <li>Demo: Using Athena to Query Data</li>
              <li>Introducing AWS Glue</li>
              <li>Exploring AWS Data Exchange</li>
              <li>Understanding Amazon Elastic Map Reduce (EMR)</li>
              <li>What is Amazon OpenSearch?</li>
              <li>Exploring Managed Streaming for Apache Kafka (Amazon MSK)</li>
              <li>Understanding Amazon QuichSight</li>
              <li>Machine Learning With Amazon SageMaker</li>
              <li>What Is Amazon Kendra?</li>
              <li>understanding Amazon Lex</li>
              <li>Demo: Using Amazon Kolly</li>
              <li>Introducing Amazon Comprehend</li>
              <li>Amazon Textract, Amazon Transcribe, and Amazon Translate</li>
              <li>Demo: Using Amazon Transcribe</li>
              <li>Demo: Amazon Recognition in Action</li>
              <li>
                Artificial Intelligence, Machine Learning, and Analysis Exam
                tips-Part 1
              </li>
              <li>
                Artificial Intelligence, Machine Learning, and Analysis Exam
                tips-Part 2
              </li>
              <li>
                QUIZ Artificial Intelligence and Machine Learning Technology and
                Services Quiz
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 10: Auditing, Monitoring, Logging and Additional
              Technology and Services
            </h2>
            <ul className="list-disc ml-8">
              <li>Introducing Monitoring and Logging on AWS</li>
              <li>Exploring Amazon CloudWatch and AWS CloudTrail</li>
              <li>Demo: Getting to Know CloudWatch Dashboards</li>
              <li>Managing Many Resources on AWS</li>
              <li>Monitoring Service Health and Best Practices</li>
              <li>Understanding Auditing on AWS</li>
              <li>Identifying Business and End User Services</li>
              <li>Auditing, Monitoring, and Logging Exam Tips</li>
              <li>
                Auditing, Monitoring, Logging, and Additional Technology and
                Services n and Exam Preparation
              </li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 11: Security, Compliance and Support
            </h2>
            <ul className="list-disc ml-8">
              <li>Security: The Bigger Picture</li>
              <li>What Do We Need To Secure on AWS?</li>
              <li>Illustrating the Principle of Least Privilege</li>
              <li>What Is IAM?</li>
              <li>Leveraging Existing Identity Providers</li>
              <li>Keeping Secrets Safe</li>
              <li>Exploring Network Security Services</li>
              <li>What Is Security Hub?</li>
              <li>Demo: Exploring Security Hub</li>
              <li>Responding to Security Events</li>
              <li>Growing Your Security Muscles</li>
              <li>Governing Multiple Accounts on AWS</li>
              <li>Understanding Compliance on AWS</li>
              <li>Security, Compliance, and Governance Exam Tips</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 12: Price, Billing and Support
            </h2>
            <ul className="list-disc ml-8">
              <li>Cloud Costs: The Bigger Picture</li>
              <li>Optimizing the Cost of Compute</li>
              <li>Understanding Data Storage Costs</li>
              <li>Understanding Data Transfer Costs</li>
              <li>Monitoring and Predicting Costs on AWS</li>
              <li>Demo: Setting a Budget Alert in Your AWS Account</li>
              <li>Managing Costs in a Multi-Account Environment</li>
              <li>Monitoring The Cost of Resource Groups</li>
              <li>Seeking Support From AWS</li>
              <li>Exploring Otehr Sources of Support</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">
              Chapter 13: Exam Preparation
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSCloudPractitioner;
