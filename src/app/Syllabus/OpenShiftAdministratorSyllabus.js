import React from "react";
import NavBar from "../components/Navbar/NavBar";

const OpenShiftAdministratorSyllabus = () => {
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
            Red Hat Certified OpenShift Administrator Exam (EX280)
          </h1>
          <div className="flex justify-between mb-4">
            <div className="w-52 flex gap-4">
              <div className="w-1/2">
                <p className="font-bold underline">Skill Level</p>
                <p className="font-bold underline">Duration</p>

                <p className="font-bold underline">Labs</p>
              </div>
              <div className="w-1/2">
                <p>Advance</p>
                <p>10hr</p>
                <p>15</p>
              </div>
            </div>
          </div>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 1: Getting Started
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Course Introduction</li>
            <li>About the Training Architect</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 2: Installation
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Getting Started with OpenShift on CodeReady Containers</li>
            <li>Prerequisites</li>
            <li>Installation and Upgrade</li>
            <li>Accessing OpenShift</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 3: Manage OpenShift Container Platform
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Understand and Use the Command Line and Web Console</li>
            <li>Create and Delete Projects</li>
            <li>Import, Export, and Configure Kubernetes Resources</li>
            <li>Examine Resources and Cluster Status</li>
            <li>View Logs</li>
            <li>Monitor Cluster Events and Alerts</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 4: Manage Users and Policies
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Configure the HTPasswd Identity Provider for Authentication</li>
            <li>Create and Delete Users</li>
            <li>Modify User Passwords</li>
            <li>Modify User and Group Permissions</li>
            <li>Create and Manage Groups</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 5: Control Access to Resources
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Define Role-Based Access Controls</li>
            <li>Apply Permissions to Users</li>
            <li>Create and Apply Secrets to Manage Sensitive Information</li>
            <li>
              Create Service Accounts and Apply Permissions Using Security
              Context Constraints
            </li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 6: Configure Networking Components
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Troubleshoot Software Defined Networking</li>
            <li>Create and Edit External Routes</li>
            <li>Control Cluster Network Ingress</li>
            <li>Create a Self Signed Certificate</li>
            <li>Secure Routes Using TLS Certificates</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 7: Configure Pod Scheduling
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Limit Resource Usage</li>
            <li>Scale Applications to Meet Increased Demand</li>
            <li>Control Pod Placement Across Cluster Nodes</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">
            CHAPTER 8: Configure Cluster Scaling
          </h3>
          <ul className="list-disc ml-8 mb-4">
            <li>Manually Control the Number of Cluster Workers</li>
            <li>Automatically Scale the Number of Cluster Workers</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">CHAPTER 9: Exam</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>How to Prepare for the Exam</li>
          </ul>

          <h3 className="text-blue-500 font-bold mb-4">HANDS-ON LAB</h3>
          <ul className="list-disc ml-8 mb-4">
            <li>EX280 Practice Exam</li>
          </ul>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default OpenShiftAdministratorSyllabus;
