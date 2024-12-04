"use client";
import { useState } from "react";
import DevopsClassType from "./DevopsClassType";

const DevOpsSyllabus = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdowns((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };

  const syllabusSections = [
    {
      title: "Introduction to DevOps",
      lectures: [
        // Change Lectures to lectures here
        {
          type: "title",
          content: "1. Introduction [15 Min]",
          subLectures: [
            { type: "bullet", content: "Course Features and Tools" },
            { type: "bullet", content: "What is DevOps?" },
            {
              type: "bullet",
              content: "A brief overview of the history of DevOps",
            },
          ],
        },
        {
          type: "title",
          content: "2. DevOps Culture [15 Min]",
          subLectures: [
            { type: "bullet", content: "The Goals of DevOps" },
            { type: "bullet", content: "DevOps vs Traditional Silos" },
          ],
        },
        {
          type: "title",
          content: "3. DevOps Concepts and Practices [45 Min]",
          subLectures: [
            { type: "bullet", content: "Build Automation" },
            { type: "bullet", content: "Continuous Integration" },
            {
              type: "bullet",
              content: "Continuous Delivery and Continuous Deployment",
            },
            { type: "bullet", content: "Infrastructure as Code" },
            { type: "bullet", content: "Configuration Management" },
            { type: "bullet", content: "Container Orchestration" },
            { type: "bullet", content: "Monitoring" },
            { type: "bullet", content: "Microservices" },
          ],
        },
        {
          type: "title",
          content: "4. DevOps Tools [45 Min]",
          subLectures: [
            { type: "bullet", content: "Introduction to DevOps Tools" },
            {
              type: "bullet",
              content:
                "Tools for Building Automation and Continuous Integration",
            },
            { type: "bullet", content: "Tools for Configuration Management" },
            {
              type: "bullet",
              content: "Tools for Virtualization and Containerization",
            },
            { type: "bullet", content: "Tools for Monitoring" },
            { type: "bullet", content: "Tools for Orchestration" },
          ],
        },
      ],
    },

    {
      title: "Source Code Management",
      lectures: [
        {
          type: "title",
          content: "5. Git Basics / The Basics of Using Git [1 Hr 30 Min]",
          subLectures: [
            { type: "bullet", content: "Understanding the Git Filesystem" },
            { type: "bullet", content: "Creating a Local Repository (Empty)" },
            { type: "bullet", content: "Basic Configuration of Git" },
            { type: "bullet", content: "Adding Files to Project" },
            { type: "bullet", content: "The Status of Your Project" },
            { type: "bullet", content: "Committing to Git" },
            { type: "bullet", content: "Ignoring Certain File Types" },
            {
              type: "subtitle",
              content:
                "HOL: Creating Local Repositories with Git and Adding/Checking in Files",
            },
          ],
        },
        {
          type: "title",
          content: "6. Tags, Branching, Merging and Reverting [45 Min]",
          subLectures: [
            { type: "bullet", content: "Using Tags" },
            { type: "bullet", content: "Using Branches" },
            { type: "bullet", content: "Merging Branches" },
            { type: "bullet", content: "Rebasing" },
            { type: "bullet", content: "Reverting a Commit" },
            { type: "bullet", content: "Using the 'diff' Command" },
          ],
        },
        {
          type: "title",
          content: "7. Git's Logs and Auditing [15 Min]",
          subLectures: [{ type: "bullet", content: "Using Git's Logs" }],
        },
        {
          type: "title",
          content: "8. Cloning Repositories [1 Hr]",
          subLectures: [
            { type: "bullet", content: "Cloning Local Repositories" },
            {
              type: "bullet",
              content: "Cloning Remote Repositories over HTTPS, SSH",
            },
            { type: "bullet", content: "Forking" },
            {
              type: "subtitle",
              content: "HOL: Securing Your GitHub Account with SSH Keys",
            },
            {
              type: "subtitle",
              content: "HOL: Cloning a Remote GitHub Repository",
            },
          ],
        },
        {
          type: "title",
          content: "9. Push, Pull, and Tracking Remote Repositories [30 Min]",
          subLectures: [
            { type: "bullet", content: "Tracking Remote Repositories" },
            { type: "bullet", content: "Pushing to Remote Repositories" },
            { type: "bullet", content: "Pull Requests" },
          ],
        },
        {
          type: "title",
          content: "10. Git Branching Strategy [30 Min]",
          subLectures: [
            { type: "bullet", content: "What is a branching strategy?" },
            { type: "bullet", content: "Why you need a branching strategy" },
            {
              type: "bullet",
              content: "What are some common Git branching strategies?",
            },
            {
              type: "subbullet",
              content: "GitFlow",
            },
            {
              type: "subbullet",
              content: "GitHubFlow",
            },
            {
              type: "subbullet",
              content: "GitLabFlow",
            },
            {
              type: "subbullet",
              content: "Trunk-based Development",
            },
          ],
        },
      ],
    },

    {
      title: "Build Automation and Continuous Integration",
      lectures: [
        {
          type: "title",
          content: "11. Build Automation [2 Hr]",
          subLectures: [
            { type: "bullet", content: "Introducing Build Automation" },
            { type: "bullet", content: "Build Automation Tools" },
            { type: "subbullet", content: "gradle" },
            { type: "subbullet", content: "npm" },
            { type: "subbullet", content: "make" },
            { type: "subbullet", content: "Packer" },
            {
              type: "subtitle",
              content: "HOL: Creating Build Automation with Gradle",
            },
            {
              type: "subtitle",
              content: "HOL: Automate AMI Image Creation with Packer",
            },
          ],
        },
        {
          type: "title",
          content: "12. Continuous Integration & Jenkins Pipelines [3 Hr]",
          subLectures: [
            { type: "bullet", content: "CI Overview" },
            { type: "bullet", content: "Installing Jenkins" },
            { type: "bullet", content: "Scripted vs. Declarative Pipelines" },
            { type: "subbullet", content: "Scripted Pipelines" },
            { type: "subbullet", content: "Declarative Pipelines" },
            { type: "subbullet", content: "Groovy and DSL" },
            { type: "bullet", content: "Jenkinsfile Basics" },
            { type: "bullet", content: "Upstream, Downstream, and Triggers" },
            { type: "subbullet", content: "Artifacts and Fingerprints" },
            { type: "subbullet", content: "Linking Jobs" },
            { type: "subbullet", content: "Automating Jobs" },
            {
              type: "subtitle",
              content: "HOL: Linking Jobs in Jenkins",
            },
            {
              type: "subtitle",
              content:
                "HOL: Building a multibranch build job with dependency between multiple FreeStyle Jobs",
            },
            { type: "subbullet", content: "Basic Job Structure" },
            { type: "subbullet", content: "Parameters" },
            { type: "subbullet", content: "Notifications" },
            {
              type: "subtitle",
              content: "HOL: Building a Freestyle Job in Jenkins",
            },
            { type: "bullet", content: "Agents and Distributed Builds" },
            { type: "subbullet", content: "Setting up a Build Agent" },
            { type: "subbullet", content: "Distributing a Build" },
            {
              type: "subtitle",
              content: "HOL: Distributing a Jenkins Build",
            },
            { type: "bullet", content: "Jenkins on the Command Line" },
            { type: "subbullet", content: "Using the Jenkins API" },
            { type: "subbullet", content: "Using the Jenkins CLI" },
          ],
        },
        {
          type: "title",
          content: "13. Continuous Delivery and Continuous Deployment [3 Hr]",
          subLectures: [
            {
              type: "bullet",
              content: "What is Continuous Delivery and Continuous Deployment?",
            },
            {
              type: "bullet",
              content: "Continuous Delivery vs. Continuous Deployment",
            },
            {
              type: "bullet",
              content: "Bringing CI and CD (and CD) Together",
            },
            {
              type: "bullet",
              content: "Continuous Delivery Release Automation",
            },
            { type: "subbullet", content: "Automated Deployment" },
            { type: "subbullet", content: "Configuration Management" },
            {
              type: "subtitle",
              content:
                "HOL: Implementing Automated Deployment Through a Jenkins Pipeline",
            },
            {
              type: "subtitle",
              content:
                "HOL: Provide Continuous Delivery with GitHub and Terraform Cloud for AWS",
            },
          ],
        },
      ],
    },
    {
      title: "Infrastructure Automation",
      lectures: [
        {
          type: "title",
          content: "14. DevOps Tools for Infrastructure Automation [30 Min]",
          subLectures: [
            { type: "bullet", content: "Infrastructure Provisioning" },
            { type: "bullet", content: "Configuration Management" },
            { type: "bullet", content: "Continuous Integration/Deployment" },
            { type: "bullet", content: "Config/Secret Management" },
            { type: "bullet", content: "Logging and Monitoring" },
          ],
        },
        {
          type: "title",
          content: "15. Understanding Infrastructure as a Code [30 Min]",
          subLectures: [
            { type: "bullet", content: "IaC and Its Benefits" },
            { type: "bullet", content: "Cloud Agnostic IaC with Terraform" },
          ],
        },
        {
          type: "title",
          content: "16. IaC with Terraform [6 Hr]",
          subLectures: [
            { type: "bullet", content: "What is the Terraform Workflow?" },
            {
              type: "bullet",
              content: "Terraform Key Concepts: Plan, Apply, and Destroy",
            },
            { type: "bullet", content: "Resource Addressing in Terraform" },
            { type: "bullet", content: "Terraform Fundamentals" },
            { type: "subbullet", content: "Terraform State" },
            { type: "subbullet", content: "Terraform Variables and Outputs" },
            { type: "subbullet", content: "Terraform Provisioners" },
            {
              type: "subtitle",
              content:
                "HOL: Deploying a VM in AWS Using the Terraform Workflow",
            },
            {
              type: "subtitle",
              content:
                "HOL: Using Terraform Provisioner to Setup an Nginx Proxy on AWS",
            },
            { type: "bullet", content: "Terraform Modules" },
            {
              type: "subbullet",
              content: "Accessing and Using Terraform Modules",
            },
            {
              type: "subbullet",
              content: "Interacting with Terraform Module Inputs and Outputs",
            },
            {
              type: "subtitle",
              content: "HOL: Building and Testing a Basic Terraform Module",
            },
            {
              type: "bullet",
              content: "Built-in Functions and Dynamics Blocks",
            },
            { type: "subbullet", content: "Terraform Built-in Functions" },
            { type: "subbullet", content: "Terraform Dynamic Blocks" },
            {
              type: "subtitle",
              content:
                "HOL: Using Terraform Dynamic Blocks and Built-in Functions to Deploy to AWS",
            },
          ],
        },
        {
          type: "title",
          content: "17. Configuration Management with Ansible [6 Hr]",
          subLectures: [
            { type: "bullet", content: "What is Configuration Management?" },
            { type: "bullet", content: "What is Ansible?" },
            { type: "bullet", content: "Installation and Configuration" },
            {
              type: "subtitle",
              content: "HOL: Deploying Ansible",
            },
            {
              type: "subtitle",
              content: "HOL: Getting Started with Ansible",
            },
            {
              type: "subtitle",
              content: "HOL: Ad-Hoc Ansible Commands",
            },
            {
              type: "subtitle",
              content: "HOL: Working with Ansible Inventories",
            },
            { type: "bullet", content: "Ansible Tasks" },
            { type: "bullet", content: "Plays and Playbooks" },
            {
              type: "subtitle",
              content: "HOL: Ansible Playbooks: The Basics",
            },
            {
              type: "subtitle",
              content:
                "HOL: Working with Ansible Templates, Variables, and Facts",
            },
            {
              type: "subtitle",
              content: "HOL: Deploying Services Using Ansible",
            },
            {
              type: "subtitle",
              content: "HOL: Advanced Features in Ansible Playbooks",
            },
            { type: "bullet", content: "Roles" },
            {
              type: "subtitle",
              content: "HOL: Working with Ansible Roles",
            },
            { type: "bullet", content: "Ansible Vault" },
            {
              type: "subtitle",
              content: "HOL: Working with Confidential Data in Ansible",
            },
            {
              type: "bullet",
              content: "Building Playbooks for Jenkins Master Setup",
            },
            {
              type: "bullet",
              content: "Building Playbooks for Jenkins Worker Setup",
            },
            {
              type: "bullet",
              content: "Building Jinja2 Templates for Ansible Playbooks",
            },
            { type: "bullet", content: "Containers and Orchestration" },
          ],
        },
        {
          type: "title",
          content:
            "18. Docker Community Edition Installation and Configuration [2 Hr]",
          subLectures: [
            { type: "bullet", content: "Installing Docker Community Edition" },
            { type: "bullet", content: "Docker Basics" },
            { type: "subbullet", content: "Docker Commands" },
            { type: "subbullet", content: "Creating Containers" },
            { type: "subbullet", content: "Exposing Container Ports" },
            { type: "subbullet", content: "Executing Container Commands" },
            { type: "subbullet", content: "Docker Logging" },
            { type: "bullet", content: "Networking" },
            { type: "bullet", content: "Storage and Volumes" },
            { type: "bullet", content: "Selecting a Storage Driver" },
            { type: "bullet", content: "Running a Container" },
            { type: "bullet", content: "Namespaces and Cgroups" },
            {
              type: "subtitle",
              content: "HOL: Installing and Configuring the Docker Engine",
            },
          ],
        },
        {
          type: "title",
          content: "19. Image Creation, Management, and Registry [3 Hr]",
          subLectures: [
            { type: "bullet", content: "Introduction to Docker Images" },
            { type: "bullet", content: "The Components of a Dockerfile" },
            { type: "bullet", content: "More Dockerfile Directives" },
            { type: "bullet", content: "Building Efficient Images" },
            { type: "bullet", content: "Managing Images" },
            {
              type: "bullet",
              content: "Flattening a Docker Image to a Single Layer",
            },
            { type: "bullet", content: "Introduction to Docker Registries" },
            { type: "bullet", content: "Using Docker Registries" },
            {
              type: "subtitle",
              content: "HOL: Creating Your Own Docker Image",
            },
            {
              type: "subtitle",
              content: "HOL: Building a Private Docker Registry",
            },
            {
              type: "subtitle",
              content:
                "HOL: Building Cross-platform Images Using Multi-Stage Build",
            },
          ],
        },
        {
          type: "title",
          content: "20. Docker Compose [2 Hr]",
          subLectures: [
            { type: "bullet", content: "Introduction to Docker Service" },
            { type: "bullet", content: "Compose Commands" },
            { type: "bullet", content: "Creating a Compose File" },
            {
              type: "bullet",
              content: "Using Volumes and Networking with Compose",
            },
            {
              type: "subtitle",
              content: "HOL: Building a Microservices with Docker Compose",
            },
          ],
        },
        {
          type: "title",
          content: "21. Kubernetes- Container Orchestrator [10 Hr]",
          subLectures: [
            { type: "bullet", content: "Kubernetes Fundamentals" },
            { type: "subbullet", content: "Kubernetes Fundamentals Intro" },
            { type: "subbullet", content: "Exploring Kubernetes Architecture" },
            { type: "subbullet", content: "Kubernetes Objects" },
            { type: "bullet", content: "Kubernetes Networking" },
            { type: "subbullet", content: "Kubernetes Networking Basics" },
            { type: "subbullet", content: "Kubernetes Service Fundamentals" },
            { type: "subbullet", content: "Service Types" },
            { type: "bullet", content: "Kubernetes Storage" },
            { type: "subbullet", content: "Kubernetes Storage Big Picture" },
            {
              type: "subbullet",
              content: "Persistent Volumes and Persistent Volume Claims",
            },
            { type: "subbullet", content: "Storage Classes" },
            { type: "bullet", content: "Kubernetes Deployments" },
            { type: "bullet", content: "Scaling Applications Automatically" },
            { type: "subbullet", content: "Horizontal Pod Autoscaler" },
            { type: "subbullet", content: "Cluster Autoscaler" },
            { type: "bullet", content: "RBAC and Admission Control" },
            {
              type: "subtitle",
              content: "HOL: Working with Kubernetes Namespace",
            },
            {
              type: "subtitle",
              content: "HOL: Managing Kubernetes Applications With Deployments",
            },
            {
              type: "subtitle",
              content: "HOL: Exposing Kubernetes Pods Using Services",
            },
            {
              type: "subtitle",
              content: "HOL: Using Kubernetes Services with DNS",
            },
            { type: "subtitle", content: "HOL: Using Kubernetes Ingress" },
            {
              type: "subtitle",
              content:
                "HOL: Managing Container Storage With Kubernetes Volumes",
            },
            {
              type: "subtitle",
              content: "HOL: Using Persistent Volumes in Kubernetes",
            },
            { type: "bullet", content: "Troubleshooting" },
            {
              type: "subbullet",
              content: "Kubernetes Troubleshooting Overview",
            },
            { type: "subbullet", content: "Checking Cluster and Node Logs" },
            { type: "subbullet", content: "Checking Containers Logs" },
            {
              type: "subbullet",
              content: "Troubleshooting Kubernetes Networking Issues",
            },
            {
              type: "subtitle",
              content: "HOL: Troubleshooting a Broken Kubernetes Cluster",
            },
            {
              type: "subtitle",
              content: "HOL: Troubleshooting a Broken Kubernetes Application",
            },
            { type: "bullet", content: "Monitoring and Logging" },
          ],
        },
        {
          type: "title",
          content: "22. Monitoring with Prometheus and Grafana [7 Hr]",
          subLectures: [
            { type: "bullet", content: "Monitoring Basics" },
            { type: "subbullet", content: "Push or Pull" },
            { type: "subbullet", content: "Service Discovery" },
            {
              type: "subtitle",
              content: "HOL: Setting Up Prometheus and Adding Endpoints",
            },
            { type: "bullet", content: "Infrastructure Monitoring" },
            { type: "subbullet", content: "Using the Node Exporter" },
            { type: "subbullet", content: "CPU Metrics" },
            { type: "subbullet", content: "Memory Metrics" },
            { type: "subbullet", content: "Disk Metrics" },
            { type: "subbullet", content: "File System Metrics" },
            { type: "subbullet", content: "Networking Metrics" },
            { type: "subbullet", content: "Load Metrics" },
            {
              type: "subbullet",
              content: "Using cAdvisor to Monitor Containers",
            },
            {
              type: "subtitle",
              content:
                "HOL: Monitoring Infrastructure and Containers with Prometheus",
            },
            { type: "bullet", content: "Application Monitoring" },
            { type: "subbullet", content: "Using a Client Library" },
            { type: "subbullet", content: "Counters" },
            { type: "subbullet", content: "Gauges" },
            { type: "subbullet", content: "Summaries and Histograms" },
            {
              type: "subtitle",
              content: "HOL: Application Monitoring with Prometheus",
            },
            { type: "bullet", content: "Managing Alerts" },
            { type: "subbullet", content: "Recording Rules" },
            { type: "subbullet", content: "Alerting Rules" },
            { type: "subbullet", content: "Using Alertmanager" },
            { type: "subbullet", content: "Silences" },
            {
              type: "subtitle",
              content: "HOL: Using Alertmanager with Prometheus",
            },
            { type: "bullet", content: "Visualization" },
            { type: "subbullet", content: "Adding a Dashboard" },
            { type: "subbullet", content: "Building a Panel" },
            {
              type: "subtitle",
              content: "HOL: Using Grafana to Visualize Prometheus Data",
            },
          ],
        },
        {
          type: "title",
          content: "23. DevOps and the Cloud [8 Hr]",
          subLectures: [
            { type: "bullet", content: "DevOps and the Cloud" },
            { type: "bullet", content: "DevOps and Google Cloud Platform" },
            {
              type: "subtitle",
              content: "HOL: Running Microservice in GKS using Helm",
            },
            { type: "bullet", content: "DevOps and Microsoft Azure" },
            { type: "bullet", content: "DevOps and Amazon Web Services" },
            { type: "subbullet", content: "AWS Services" },
            {
              type: "subbullet",
              content: "Identity and Access Management (IAM)",
            },
            { type: "subbullet", content: "Serverless Architecture" },
            { type: "subsubbullet", content: "Computing with Lambda" },
            { type: "subsubbullet", content: "Running Containers in ECS" },
            {
              type: "subbullet",
              content: "Application Monitoring with CloudWatch",
            },
            { type: "subbullet", content: "Elastic Load Balancing (ELB)" },
            {
              type: "subsubbullet",
              content: "Using Application Load Balancers",
            },
            { type: "bullet", content: "High Availability and Scaling" },
            { type: "subbullet", content: "EC2 Instance Auto Scaling" },
            {
              type: "subtitle",
              content: "HOL: Triggering AWS Lambda from Amazon SQS",
            },
            {
              type: "subtitle",
              content: "HOL: Create and Assume Roles in AWS",
            },
            {
              type: "subtitle",
              content: "HOL: Use Application Load Balancers for Web Servers",
            },
            {
              type: "subtitle",
              content:
                "HOL: Implement Advanced CloudWatch Monitoring for a Web Server",
            },
            {
              type: "subtitle",
              content:
                "HOL: Work with AWS VPC Flow Logs for Network Monitoring",
            },
          ],
        },
        {
          type: "title",
          content: "24. Modern Software Development [4 Hr]",
          subLectures: [
            { type: "bullet", content: "RESTful APIs" },
            { type: "subbullet", content: "What is REST?" },
            { type: "subbullet", content: "Requests and Responses" },
            { type: "subbullet", content: "HTTP Verbs" },
            { type: "subbullet", content: "Headers" },
            { type: "subbullet", content: "Paths" },
            { type: "subbullet", content: "Status Codes" },
            { type: "subbullet", content: "Examples" },
            {
              type: "subtitle",
              content: "HOL: Build Simple RESTful API with Python and Flask",
            },
            {
              type: "subtitle",
              content: "HOL: Curling Kubernetes API Requests",
            },
            { type: "bullet", content: "Service-Oriented Architecture (SOA)" },
            { type: "subbullet", content: "What is SOA?" },
            { type: "subbullet", content: "SOA Principles" },
            { type: "subbullet", content: "SOA Manifesto" },
            {
              type: "subbullet",
              content: "Monolithic vs. SOA vs. Microservices",
            },
            { type: "bullet", content: "Microservices" },
            { type: "subbullet", content: "What are Microservices?" },
            { type: "subbullet", content: "Microservices vs. Monolith" },
            { type: "subbullet", content: "What do Microservices Look Like?" },
            { type: "subbullet", content: "Containers and Microservices" },
            {
              type: "subtitle",
              content: "HOL: Deploying Microservice Application to Kubernetes",
            },
            {
              type: "subtitle",
              content: "HOL: Building a Microservice with Docker Compose",
            },
            { type: "bullet", content: "Agile" },
            { type: "subbullet", content: "What is Agile?" },
            {
              type: "subbullet",
              content: "The Manifesto for Agile Development",
            },
            { type: "bullet", content: "Test-Driven Development (TDD)" },
            { type: "subbullet", content: "What is Test-Driven Development?" },
            { type: "subbullet", content: "TDD Steps" },
            { type: "bullet", content: "Serverless Technologies" },
            { type: "subbullet", content: "Defining Serverless" },
            {
              type: "subsubbullet",
              content: "Comparing Multi-Tier and Serverless",
            },
            { type: "subsubbullet", content: "Serverless Benefits" },
            { type: "subsubbullet", content: "Serverless Drawbacks" },
            { type: "subsubbullet", content: "Understanding API Gateways" },
            { type: "subbullet", content: "Serverless Technologies" },
            { type: "subsubbullet", content: "AWS Lambda" },
            { type: "subsubbullet", content: "Azure Functions" },
            { type: "subsubbullet", content: "Google Cloud Functions" },
          ],
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:ml-20 ml-5 mb-10">
      {/* Syllabus Section */}
      <div className="md:w-[650px] w-full flex flex-col sm:mt-4">
        <div className="w-[65%] mx-auto lg:w-full lg:mx-0 flex flex-col mt-10">
          <h1 className="font-bold text-3xl p-4 font-Quicksand mb-6 text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div
              key={index}
              className="relative lg:w-full w-[250px] max-w-[800px] mx-auto lg:mx-0"
            >
              {/* Section Title */}
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all`}
              >
                <div
                  className="flex items-center p-3 cursor-pointer font-Quicksand"
                  onClick={() => toggleDropdown(section.title)}
                >
                  <button className="dropdown-button mr-2">
                    <img
                      src="/dropdown.svg"
                      alt="Toggle Dropdown"
                      className="w-4 h-4"
                    />
                  </button>
                  <span className="font-semibold text-lg font-Quicksand">
                    {section.title}
                  </span>
                </div>
              </div>

              {/* Dropdown Content */}
              {openDropdowns[section.title] && (
                <div className="w-full border border-[#004AAD] border-opacity-20 mt-1">
                  <ul className="p-4">
                    {section.lectures.map((lecture, idx) => (
                      <li key={idx} className="py-2 font-bold font-Quicksand">
                        {lecture.content}
                        {lecture.subLectures && (
                          <ul className="ml-6">
                            {lecture.subLectures.map((subLecture, subIdx) => (
                              <li
                                key={subIdx}
                                className={`py-1 ${
                                  subLecture.type === "bullet"
                                    ? "font-semibold list-disc"
                                    : "font-normal list-square"
                                }`}
                              >
                                {subLecture.content}
                                {subLecture.subPoints && (
                                  <ul className="ml-6">
                                    {subLecture.subPoints.map(
                                      (subPoint, pointIdx) => (
                                        <li
                                          key={pointIdx}
                                          className="list-[square] py-1 font-Quicksand"
                                        >
                                          {subPoint.content}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* DevopsClassType Section */}
      <div className="mt-10 lg:mt-0 flex justify-center lg:ml-[300px] mr-[20px]">
        <DevopsClassType />
      </div>
    </div>
  );
};

export default DevOpsSyllabus;
