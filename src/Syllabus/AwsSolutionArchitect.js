import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const AWSSolutionsArchitect= () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">AWS Solutions Architect Associate Syllabus</h1>

            <h2 className="text-xl text-red-500 font-bold mb-4">1. AWS Fundamentals</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.1 Introduction to AWS</h3>
            <p className="text-black ml-8">
              Overview of AWS services and infrastructure, AWS Global Infrastructure, Regions, Availability Zones.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">1.2 AWS Identity and Access Management (IAM)</h3>
            <p className="text-black ml-8">
              Managing IAM users, groups, roles, policies, and permissions. Understanding IAM best practices.
            </p>
            {/* Continue with more topics under AWS Fundamentals */}

            <h2 className="text-xl text-red-500 font-bold mb-4">2. Compute Services</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.1 Amazon EC2 (Elastic Compute Cloud)</h3>
            <p className="text-black ml-8">
              Launching EC2 instances, instance types, AMIs, security groups, key pairs, connecting to instances.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">2.2 AWS Lambda</h3>
            <p className="text-black ml-8">
              Serverless computing, creating Lambda functions, triggers, monitoring and debugging.
            </p>
            {/* Continue with more topics under Compute Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">3. Storage Services</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">3.1 Amazon S3 (Simple Storage Service)</h3>
            <p className="text-black ml-8">
              Creating buckets, uploading objects, versioning, lifecycle policies, bucket policies, S3 security.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">3.2 Amazon EBS (Elastic Block Store)</h3>
            <p className="text-black ml-8">
              Creating and attaching EBS volumes to EC2 instances, snapshots, encryption, performance.
            </p>
            {/* Continue with more topics under Storage Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">4. Database Services</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">4.1 Amazon RDS (Relational Database Service)</h3>
            <p className="text-black ml-8">
              Launching RDS instances, database engines (MySQL, PostgreSQL, SQL Server, etc.), backups, read replicas.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">4.2 Amazon DynamoDB</h3>
            <p className="text-black ml-8">
              NoSQL database service, creating tables, partition keys, indexes, querying data.
            </p>
            {/* Continue with more topics under Database Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">5. Networking Services</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">5.1 Amazon VPC (Virtual Private Cloud)</h3>
            <p className="text-black ml-8">
              VPC basics, subnets, route tables, internet gateways, NAT gateways, security groups, network ACLs.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">5.2 AWS Direct Connect</h3>
            <p className="text-black ml-8">
              Establishing dedicated network connections between on-premises data centers and AWS.
            </p>
            {/* Continue with more topics under Networking Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">6. Application Integration Services</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">6.1 Amazon API Gateway</h3>
            <p className="text-black ml-8">
              Building and deploying APIs, integrating with AWS Lambda, monitoring and logging.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">6.2 Amazon SQS (Simple Queue Service)</h3>
            <p className="text-black ml-8">
              Message queuing service, creating queues, sending and receiving messages, message visibility.
            </p>
            {/* Continue with more topics under Application Integration Services */}

            <h2 className="text-xl text-red-500 font-bold mb-4">7. Monitoring and Management Services</h2>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">7.1 Amazon CloudWatch</h3>
            <p className="text-black ml-8">
              Monitoring AWS resources, setting alarms, creating custom metrics, logging.
            </p>
            <h3 className="text-lg text-blue-500 font-semibold mb-2">7.2 AWS CloudFormation</h3>
            <p className="text-black ml-8">
              Infrastructure as code, creating and managing AWS resources using templates.
            </p>
            {/* Continue with more topics under Monitoring and Management Services */}

            {/* Add more sections and topics as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AWSSolutionsArchitect;
