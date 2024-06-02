import React from "react";
import Navbar from "../components/Navbar";
// import Footer from '../components/Footer';

const DevOpsSyllabus = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4">DevOps Syllabus</h1>

            <h2 className="text-blue-500 font-bold mb-4">COURSE OUTLINE</h2>

            <h2 className="text-blue-500 font-bold mb-4">Introduction [15 Min]</h2>
            <ul className="list-disc ml-8">
              <li>Course Features and Tools</li>
              <li>What is DevOps?</li>
              <li>A brief overview of the history of DevOps</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Culture [15 Min]</h2>
            <ul className="list-disc ml-8">
              <li>The Goals of DevOps</li>
              <li>DevOps vs Traditional Silos</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Concepts and Practices [45 Min]</h2>
            <ul className="list-disc ml-8">
              <li>Build Automation</li>
              <li>Continuous Integration</li>
              <li>Continuous Delivery and Continuous Deployment</li>
              <li>Infrastructure as Code</li>
              <li>Configuration Management</li>
              <li>Container Orchestration</li>
              <li>Monitoring</li>
              <li>Microservices</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">DevOps Tools [45 Min]</h2>
            <ul className="list-disc ml-8">
              <li>Introduction to DevOps Tools</li>
              <li>Tools for Build Automation and Continuous Integration</li>
              <li>Tools for Configuration Management</li>
              <li>Tools for Virtualization and Containerization</li>
              <li>Tools for Monitoring</li>
              <li>Tools for Orchestration</li>
              <li>Source Code Management</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Git Basics</h2>
            <h3 className="text-blue-500 font-bold mb-4">The Basics of Using Git [1 Hr 30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Understanding the Git Filesystem</li>
              <li>Creating a Local Repository (Empty)</li>
              <li>Basic Configuration of Git</li>
              <li>Adding Files to Project</li>
              <li>The Status of your project</li>
              <li>Committing to Git</li>
              <li>Ignoring Certain File Types</li>
              <li>HOL: Creating Local Repositories with Git and Adding/Checking in Files</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Tags, Branching, Merging and Reverting [45 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Using Tags</li>
              <li>Using Branches</li>
              <li>Merging Branches</li>
              <li>Rebasing</li>
              <li>Reverting a Commit</li>
              <li>Using the 'diff' Command</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Git's Logs and Auditing [15 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Using Git's Logs</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Cloning Repositories [1 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Cloning Local Repositories</li>
              <li>Cloning Remote Repositories over HTTPS, SSH</li>
              <li>Forking</li>
              <li>HOL: Securing Your Github Account with SSH Keys</li>
              <li>HOL: Cloning a Remote GitHub Repository</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Push, Pull, and Tracking Remote Repositories [30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>Tracking Remote Repositories</li>
              <li>Pushing to Remote Repositories</li>
              <li>Pull Requests</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Git Branching Strategy [30 Min]</h3>
            <ul className="list-disc ml-8">
              <li>What is a branching strategy?</li>
              <li>Why you need a branching strategy</li>
              <li>
                What are some common Git branching strategies?
                <ul className="list-disc ml-8">
                  <li>GitFlow</li>
                  <li>GitHub Flow</li>
                  <li>GitLab Flow</li>
                  <li>Trunk-based Development</li>
                </ul>
              </li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Build Automation and Continuous Integration</h2>
            <h3 className="text-blue-500 font-bold mb-4">Build Automation [2 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>Introducing Build Automation</li>
              <li>Build Automation Tools</li>
              <ul className="list-disc ml-8">
                <li>gradle</li>
                <li>npm</li>
                <li>make</li>
                <li>Packer</li>
              </ul>
              <li>HOL: Creating Build Automation with Gradle</li>
              <li>HOL: Automate AMI image creation with Packer</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">Continuous Integration & Jenkins Pipelines [3 Hr]</h3>
            <ul className="list-disc ml-8">
              <li>CI Overview</li>
              <li>Installing Jenkins</li>
              <li>Scripted vs. Declarative Pipelines</li>
              <ul className="list-disc ml-8">
                <li>Scripted Pipelines</li>
                <li>Declarative Pipelines</li>
                <li>Groovy and DSL</li>
              </ul>
              <li>Jenkinsfile Basics</li>
              <li>Upstream, Downstream, and Triggers</li>
              <ul className="list-disc ml-8">
                <li>Artifacts and Fingerprints</li>
                <li>Linking Jobs</li>
                <li>Automating Jobs</li>
                <li>HOL: Linking Jobs in Jenkins</li>
                <li>HOL: Building multibranch build job with dependency between multiple job FreeStyle Jobs</li>
                <li>Basic Job Structure</li>
                <li>Parameters</li>
                <li>Notifications</li>
                <li>HOL: Building a Freestyle Job in Jenkins</li>
              </ul>
              <li>Agents and Distributed Builds</li>
              <ul className="list-disc ml-8">
                <li>Setting up a Build Agent</li>
                <li>Distributing a Build</li>
                <ul className="list-disc ml-8">
                  <li>HOL: Distributing a Jenkins Build Jenkins on the Command Line</li>
                </ul>
                <li>Using the Jenkins API</li>
                <li>Using the Jenkins CLI</li>
              </ul>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Continuous Delivery and Continuous Deployment [3 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>What is Continuous Delivery and Continuous Deployment?</li>
              <li>Continuous Delivery vs. Continuous Deployment</li>
              <li>Containers vs. Configuration Management</li>
              <li>Strategies for Continuous Delivery and Continuous Deployment</li>
              <li>Common Deployment Patterns</li>
              <li>HOL: Implementing Blue-Green Deployment</li>
              <li>HOL: Implementing Canary Releases</li>
              <li>HOL: Implementing A/B Testing</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Infrastructure as Code [3 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>What is Infrastructure as Code (IaC)?</li>
              <li>Idempotency</li>
              <li>IaC Tools</li>
              <ul className="list-disc ml-8">
                <li>Ansible</li>
                <li>Terraform</li>
                <li>Chef</li>
                <li>Puppet</li>
              </ul>
              <li>HOL: Using Ansible to Provision a Web Server</li>
              <li>HOL: Using Terraform to Provision Cloud Infrastructure</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Configuration Management [3 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>What is Configuration Management?</li>
              <li>Configuration Management Tools</li>
              <ul className="list-disc ml-8">
                <li>Ansible</li>
                <li>Chef</li>
                <li>Puppet</li>
              </ul>
              <li>HOL: Using Ansible to Configure a Web Server</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Virtualization, Containers, and Orchestration [3 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>Virtualization Concepts</li>
              <li>Containers</li>
              <li>Orchestration</li>
              <li>Container Orchestration Tools</li>
              <ul className="list-disc ml-8">
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
              <li>HOL: Using Docker to Create Containers</li>
              <li>HOL: Using Kubernetes to Orchestrate Containers</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Monitoring [2 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>Monitoring Concepts</li>
              <li>Monitoring Tools</li>
              <ul className="list-disc ml-8">
                <li>Prometheus</li>
                <li>Grafana</li>
                <li>ELK Stack</li>
              </ul>
              <li>HOL: Using Prometheus to Monitor a Web Server</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Microservices [2 Hr]</h2>
            <ul className="list-disc ml-8">
              <li>Microservices Concepts</li>
              <li>Advantages and Challenges of Microservices</li>
              <li>Tools for Microservices</li>
              <li>HOL: Deploying a Microservice</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default DevOpsSyllabus;
