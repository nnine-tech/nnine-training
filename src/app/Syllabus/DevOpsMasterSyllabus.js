import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const DevOpsMasterSyllabus = () => {
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
            <h1 className="text-blue-500 text-3xl font-bold mb-4">DevOps Syllabus</h1>

            <h2 className="text-blue-500 font-bold mb-4">Linux Fundamentals</h2>
            <ul className="list-disc ml-8">
              <li>Linux Basic & Advanced Commands</li>
              <li>Linux Text Processing and Regex</li>
              <li>Linux Permission and Access Management</li>
              <li>Linux Storage Management Basics</li>
              <li>Linux Networking & Security Concepts</li>
              <li>Managing Services in Linux</li>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Platform</h2>
            <h3>Docker</h3>


            <li>Docker Installation and Configuration</li>
            <ul className="list-disc ml-8">
              <li>Introduction to Docker Community Edition</li>
              <li>Installing Docker on Ubuntu</li>
              <li>Selecting a Storage Driver</li>
              <li>Running a Container</li>
              <li>Configuring Logging Driver</li>
              <li>Namespaces and Cgroups</li>
            </ul>
            <ul className="list-disc ml-8">
              <li>Dockerfile</li>
              <ul className="list-disc ml-8">
                <li>Introduction to the Dockerfile</li>
                <li>Dockerfile Instruction</li>
                <li>Environment Variables</li>
                <li>Build Arguments</li>
                <li>Working with Non-privileged User</li>
                <li>Order of Execution</li>
                <li>Using the Volume Instruction</li>
                <li>Entrypoint vs. Command</li>
                <li>Using .dockerignore</li>
              </ul>

              <li>Image Creation, Management, and Registry</li>
              <ul className="list-disc ml-8">
                <li>Introduction to Docker Images</li>
                <li>Building Images</li>
                <li>Using Multi-Stage Builds</li>
                <li>Tagging</li>
                <li>Optimizing Docker Images</li>
                <li>Flattening a Docker Image to a Single Layer</li>
                <li>Introduction to Docker Registries</li>
                <li>Distributing Images on Docker Hub</li>
              </ul>

              <li>Docker Compose</li>
              <ul className="list-disc ml-8">
                <li>Compose Commands</li>
                <li>Creating a Compose File</li>
                <li>Using Volumes and Networking with Compose</li>
                <li>Building a Microservice with Docker Compose</li>
              </ul>

              <li>Container Management</li>
              <ul className="list-disc ml-8">
                <li>Inspecting Container Process</li>
                <li>Having Container Start Automatically</li>
                <li>Docker Events</li>
                <li>Managing Stopped Container</li>
              </ul>

              <li>Docker Networking</li>
              <ul className="list-disc ml-8">
                <li>Networking Overview</li>
                <li>Networking Commands</li>
                <li>Networking Containers</li>
              </ul>

              <li>Storage</li>
              <ul className="list-disc ml-8">
                <li>Storage Overview</li>
                <li>Volume Commands</li>
                <li>Bind Mount vs. Docker Volume</li>
              </ul>

              <li>Docker Security</li>
              <ul className="list-disc ml-8">
                <li>Understanding how uid and gid work in Docker containers</li>
                <li>Run the Docker daemon as a non-root user (Rootless mode)</li>
                <li>Using User Namespaces on Docker</li>
                <li>Manage Volume Permission</li>
                <li>Working with Secrets</li>
                <li>Docker Content Trust</li>
              </ul>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Kubernetes - Container Orchestrator</h2>
            <ul className="list-disc ml-8">
              <li>Getting Started</li>
              <ul className="list-disc ml-8">
                <li>K8S Basics</li>
                <li>K8s Architectural Overview</li>
                <li>Building a Kubernetes Cluster</li>
                <li>Using Namespaces in K8s</li>
              </ul>

              <li>Cluster Management</li>
              <ul className="list-disc ml-8">
                <li>K8s Management Overview</li>
                <li>Introduction to High Availability in K8s</li>
                <li>Introduction to K8s Management Tools</li>
                <li>Safely Draining a K8s Node</li>
                <li>Upgrading K8s with Kubeadm</li>
                <li>Backing Up and Restoring etcd Cluster Data</li>
              </ul>

              <li>Kubernetes Object Management</li>
              <ul className="list-disc ml-8">
                <li>Working with kubectl</li>
                <li>Managing K8s Role-Based Access Control (RBAC)</li>
                <li>Creating Service Accounts</li>
                <li>Inspecting Pod Resource Usage</li>
              </ul>

              <li>Pods and Containers</li>
              <ul className="list-disc ml-8">
                <li>Managing Application Configuration</li>
                <li>Managing Container Resources</li>
                <li>Monitoring Container Health with Probes</li>
                <li>Building Self-Healing Pods with Restart Policies</li>
                <li>Creating Multi-Container Pods</li>
                <li>Introducing Init Containers</li>
                <li>Advanced Pod Allocation</li>
              </ul>

              <li>K8s Scheduling</li>
              <ul className="list-disc ml-8">
                <li>Using DaemonSets</li>
                <li>Using Static Pods</li>
              </ul>

              <li>Deployments</li>
              <ul className="list-disc ml-8">
                <li>K8s Deployment Overview</li>
                <li>Scaling Applications with Deployments</li>
                <li>Managing Rolling Updates with Deployments</li>
              </ul>
              <li>Scaling Application Automatically</li>
              <ul className="list-disc ml-8">
                <li>Horizontal Pod Autoscaler</li>
                <li>Cluster Autoscaler</li>
              </ul>


              <li>Networking</li>
              <ul className="list-disc ml-8">
                <li>K8s Networking Architectural Overview</li>
                <li>Common Networking Requirements</li>
                <li>Sample App Requirements</li>
                <li>CNI Plugins Overview</li>
                <li>Understanding K8s DNS</li>
                <li>Using NetworkPolices</li>
              </ul>

              <li>Services</li>
              <ul className="list-disc ml-8">
                <li>K8s Services Overview</li>
                <li>Using K8s Services</li>
                <li>Service Types</li>
                <li>The Service Network</li>
                <li>Discovering K8s Services with DNS</li>
                <li>Managing Access from Outside with K8s Ingress</li>
              </ul>

              <li>Storage</li>
              <ul className="list-disc ml-8">
                <li>K8s Storage Overview</li>
                <li>The Container Storage Interface</li>
                <li>Using K8s Volumes</li>
                <li>Persistent Volumes and Persistent Volume Claims</li>
                <li>Storage Classes</li>
              </ul>

              <li>RBAC and Admission Control</li>
              <ul className="list-disc ml-8">
                <li>Authentication</li>
                <li>Authorization</li>
                <li>Admission Control</li>
              </ul>

              <li>Troubleshooting</li>
              <ul className="list-disc ml-8">
                <li>Troubleshooting K8s Cluster</li>
                <li>Checking Cluster and Node Logs</li>
                <li>Troubleshooting Your Applications</li>
                <li>Checking Container Logs</li>
                <li>Troubleshooting K8s Networking Issues</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Kubernates Security</h2>
            <ul className="list-disc ml-8">
              <li>Cluster Setup</li>
              <ul className="list-disc ml-8">
                <li>Cluster Setup Intro</li>
                <li>Restricting Default Access with NetworkPolicies</li>
                <li>Allowing Limited Access with NetworkPolicies</li>
                <li>Running a CIS Benchmark with kube-bench</li>
                <li>Fixing Security Issues Detected by a CIS Benchmark</li>
                <li>Implementing TLS with Ingress</li>
                <li>Add TLS to a Kubernetes Service with Ingress</li>
                <li>Securing Node Endpoints</li>
                <li>Securing GUI Elements</li>
                <li>Verifying Kubernetes Platform Binaries</li>
              </ul>

              <li>Cluster Hardening</li>
              <ul className="list-disc ml-8">
                <li>Cluster Hardening Intro</li>
                <li>Exploring Service Accounts</li>
                <li>Restricting Service Account Permissions</li>
                <li>Limit Service Account Permissions in Kubernetes</li>
                <li>Restricting Access to the Kubernetes API</li>
                <li>Keeping k8s Updated</li>
              </ul>
              <li>System Hardening</li>
              <ul className="list-disc ml-8">
                <li>Minimizing Microservice Vulnerabilities</li>
                <li>Managing Container Access with Security Contexts</li>
                <li>Governing Pod Configurations with Pod Security Policies</li>
                <li>Using Pod Security Policies</li>
                <li>Using OPA Gatekeeper</li>
                <li>Managing Kubernetes Secrets</li>
                <li>Understanding Container Runtime Sandboxes</li>
                <li>Creating a Container Runtime Sandbox</li>
                <li>Understanding Pod-to-Pod mTLS</li>
                <li>Signing Certificates</li>
              </ul>
              <li>Supply Chain Security</li>
              <ul className="list-disc ml-8">
                <li>Supply Chain Security Intro</li>
                <li>Minimizing Base Image Attack Surface</li>
                <li>Whitelisting Allowed Image Registries</li>
                <li>Validating Signed Images</li>
                <li>Analyzing a Dockerfile</li>
                <li>Analyzing Resource YAML Files</li>
                <li>Scanning Images for Known Vulnerabilities</li>
                <li>Scanning Images with an Admission Controller</li>
                <li>Setting up an Image Scanner</li>
                <li>Configuring the ImagePolicyWebhook Admission Controller</li>
              </ul>
              <li>Monitoring, Logging, and Runtime Security</li>
              <ul className="list-disc ml-8">
                <li>Monitoring, Logging, and Runtime Security Intro</li>
                <li>Understanding Behavioral Analytics</li>
                <li>Analyzing Container Behavior with Falco</li>
                <li>Ensuring Containers are Immutable</li>
                <li>Understanding Audit Logs</li>
                <li>Setting up Audit Logging</li>
              </ul>
            </ul>


            <h2>Infrastructure Automation</h2>

            <h2 className="text-blue-500 font-bold mb-4">Ansible</h2>
            <ul className="list-disc ml-8">
              <li>Understanding Core Components of Ansible</li>
              <ul className="list-disc ml-8">
                <li>Understanding Core Components of Ansible</li>
                <li>Ansible Configuration File</li>
              </ul>
              <li>Run Ad-Hoc Ansible Commands</li>
              <ul className="list-disc ml-8">
                <li>Demonstration: Ansible Ad-Hoc Commands</li>
              </ul>
              <li>Inventory Management</li>
              <ul className="list-disc ml-8">
                <li>Inventory Essentials and Inventory Variables</li>
                <li>Variables and Inventories</li>
                <li>Using YAML in Inventories</li>
                <li>Dynamic Inventories</li>
              </ul>
              <li>Create Ansible Plays and Playbooks</li>
              <ul className="list-disc ml-8">
                <li>Introduction to Playbooks and Common Modules</li>
                <li>Create Playbooks to Configure Systems to a Specified State</li>
                <li>Basic Playbook Syntax Demonstration</li>
                <li>Use Variables to Retrieve the Results of Running Commands</li>
                <li>Use Conditionals to Control Play Execution</li>
                <li>Configure Error Handling</li>
                <li>Selectively Run Specific Tasks In Playbooks Using Tags</li>
              </ul>
              <li>Create and Use Templates to Create Customized Configuration Files</li>
              <ul className="list-disc ml-8">
                <li>Using Ansible Templates</li>
              </ul>
              <li>Work with Ansible Variables and Facts</li>
              <ul className="list-disc ml-8">
                <li>Ansible Variables</li>
                <li>Ansible Variables - Magic Variables and Jinja Filters</li>
                <li>Ansible Variables - Variable Files</li>
                <li>Ansible Facts</li>
                <li>Working with Ansible Facts</li>
              </ul>
              <li>Create and Work with Roles</li>
              <ul className="list-disc ml-8">
                <li>Working with Ansible Roles</li>
                <li>Creating and Applying a Role in Ansible</li>
                <li>Applying In-Line Roles and Role Dependencies</li>
              </ul>
              <li>Download roles from an Ansible Galaxy</li>
              <ul className="list-disc ml-8">
                <li>Download Roles from Ansible Galaxy</li>
              </ul>
              <li>Managing Parallelism</li>
              <ul className="list-disc ml-8">
                <li>Parallelism in Ansible</li>
              </ul>
              <li>Use Ansible Vault in Playbooks to Protect Sensitive Data</li>
              <ul className="list-disc ml-8">
                <li>The Ansible-Vault Command</li>
                <li>Using Vaults in Playbooks</li>
              </ul>
              <li>Install Ansible Tower and Use it to Manage Systems</li>
              <ul className="list-disc ml-8">
                <li>Introduction to Ansible Tower</li>
                <li>Installing Ansible Tower</li>
              </ul>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Terraform</h2>
            <ul className="list-disc ml-8">
              <li>Understanding Infrastructure As Code</li>
              <ul className="list-disc ml-8">
                <li>IaC and Its Benefits</li>
                <li>Cloud Agnostic IaC with Terraform</li>
              </ul>
              <li>IaC with Terraform</li>
              <ul className="list-disc ml-8">
                <li>What is the Terraform Workflow?</li>
                <li>Terraform Init (Initializing the Working Directory)</li>
                <li>Terraform Key Concepts: Plan, Apply, and Destroy</li>
                <li>Resource Addressing in Terraform: Understanding Terraform Code</li>
              </ul>
              <li>Terraform Fundamentals</li>
              <ul className="list-disc ml-8">
                <li>Installing Terraform and Terraform Providers</li>
                <li>Terraform State: The Concept</li>
                <li>Terraform Variables and Outputs</li>
                <li>Terraform Provisioners: When to Use Them</li>
              </ul>
              <li>Terraform State</li>
              <ul className="list-disc ml-8">
                <li>Terraform State Command</li>
                <li>Local and Remote State Storage</li>
                <li>Persisting Terraform State in AWS S3</li>
                <li>Exploring Terraform State Functionality</li>
              </ul>
              <li>Terraform Modules</li>
              <ul className="list-disc ml-8">
                <li>Accessing and Using Terraform Modules</li>
                <li>Interacting with Terraform Module Inputs and Outputs</li>
                <li>Building and Testing a Basic Terraform Module</li>
              </ul>
              <li>Built-in Functions and Dynamic Blocks</li>
              <ul className="list-disc ml-8">
                <li>Terraform Built-in Functions</li>
                <li>Terraform Type Constraints (Collections & Structural)</li>
                <li>Terraform Dynamic Blocks</li>
              </ul>
              <li>Terraform CLI</li>
              <ul className="list-disc ml-8">
                <li>Terraform fmt, taint, and import Commands</li>
                <li>Terraform Workspaces</li>
                <li>Debugging Terraform</li>
                <li>Using Terraform CLI Commands (workspace and state) to Manipulate a Terraform Deployment</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Ansible</h2>
            <ul className="list-disc ml-8">
              <li>Getting Started</li>
              <li>Concepts</li>
              <ul className="list-disc ml-8">
                <li>What Is Virtualization?</li>
                <li>What Is a Hypervisor?</li>
                <li>What Is Vagrant?</li>
              </ul>
              <li>Installation</li>
              <ul className="list-disc ml-8">
                <li>Linux</li>
                <li>Mac</li>
                <li>Windows</li>
              </ul>
              <li>Plugins</li>
              <ul className="list-disc ml-8">
                <li>Plugin Overview</li>
                <li>Provider Plugins</li>
                <li>Additional Plugins</li>
              </ul>
              <li>The Basics</li>
              <ul className="list-disc ml-8">
                <li>Boxes</li>
                <li>The Vagrantfile</li>
                <li>Vagrant Up!</li>
                <li>Accessing the VM</li>
                <li>VM Management</li>
                <li>Snapshots</li>
              </ul>
              <li>Syncing Files</li>
              <ul className="list-disc ml-8">
                <li>Basic Syncing</li>
                <li>NFS</li>
                <li>Rsync</li>
                <li>SMB</li>
              </ul>
              <li>Networking</li>
              <ul className="list-disc ml-8">
                <li>Port Management</li>
                <li>Working with Multiple Machines</li>
                <li>Private Networking</li>
                <li>Public Networking</li>
              </ul>

              <li>Provisioning</li>
              <ul className="list-disc ml-8">
                <li>Provisioning Overview</li>
                <li>Shell</li>
                <li>File</li>
                <li>Ansible</li>
                <li>Docker</li>
              </ul>
              <li>Boxes</li>
              <ul className="list-disc ml-8">
                <li>Box Overview</li>
                <li>Packaging an Existing Machine</li>
                <li>Creating a Base Box</li>
              </ul>

              <li>Share</li>
              <ul className="list-disc ml-8">
                <li>Vagrant Share Overview</li>
                <li>HTTP Sharing</li>
                <li>SSH Sharing</li>
                <li>Vagrant Connect</li>
              </ul>
              <li>Advanced Vagrant</li>
              <ul className="list-disc ml-8">
                <li>Windows Considerations</li>
                <li>Tools and Scripting</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Packer</h2>
            <ul className="list-disc ml-8">
              <li>Packer</li>
              <ul className="list-disc ml-8">
                <li>What Is Packer?</li>
                <li>Why Use Packer?</li>
                <li>Packer Breakdown</li>
              </ul>
              <li>Template Languages</li>
              <ul className="list-disc ml-8">
                <li>Formatting a Packer Template in JSON</li>
                <li>Formatting a Packer Template in HCL2</li>
              </ul>
              <li>Installation</li>
              <ul className="list-disc ml-8">
                <li>Setting Up Packer</li>
              </ul>
              <li>Environment</li>
              <ul className="list-disc ml-8">
                <li>Environment Configurations</li>
                <li>Packer Plugins</li>
              </ul>
              <li>Building a Base Template</li>
              <ul className="list-disc ml-8">
                <li>Builders</li>
                <li>Communicators</li>
                <li>Building the Image</li>
                <li>Using Packer to Create an AWS AMI</li>
              </ul>
              <li>Provisioning</li>
              <ul className="list-disc ml-8">
                <li>Bash</li>
                <li>File</li>
                <li>Ansible</li>
              </ul>
              <li>Post-Processors</li>
              <ul className="list-disc ml-8">
                <li>Post-Processors</li>
              </ul>
              <li>Extending the Template</li>
              <ul className="list-disc ml-8">
                <li>Parallel Builds</li>
                <li>Creating Dev and Production Images with Packer in Parallel</li>
                <li>HCL "Building Blocks"</li>
              </ul>
              <li>Debugging</li>
              <ul className="list-disc ml-8">
                <li>The <code>-debug</code> Flag</li>
                <li>The Breakpoint Provisioner</li>
              </ul>
              <li>Cloud</li>
              <ul className="list-disc ml-8">
                <li>Building an Amazon EBS-Based Packer Image</li>
                <li>Building an Azure ARM-Based Packer Image</li>
                <li>Building a Google Compute-Backed Image with Packer</li>
              </ul>
              <li>Containers</li>
              <ul className="list-disc ml-8">
                <li>Building a Docker Image with Packer</li>
                <li>Building a LXD Image with Packer</li>
              </ul>
              <li>Virtualization</li>
              <ul className="list-disc ml-8">
                <li>Building a VirtualBox Image with Packer</li>
                <li>Building a Vagrant Box with Packer</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">NGINX</h2>
            <ul className="list-disc ml-8">
              <li>Introducing NGINX</li>
              <ul className="list-disc ml-8">
                <li>What is NGINX?</li>
                <li>What is HTTP and How Does It Work?</li>
                <li>NGINX vs. Apache</li>
                <li>Differences Between NGINX and NGINX+</li>
              </ul>
              <li>Installing and Running NGINX</li>
              <ul className="list-disc ml-8">
                <li>Installing NGINX on Ubuntu</li>
              </ul>
              <li>Basic Web Server Configuration</li>
              <ul className="list-disc ml-8">
                <li>Understanding the Default NGINX Configuration</li>
                <li>Simple Virtual Host and Serving Static Content</li>
                <li>Error Pages</li>
                <li>Access Control with HTTP Basic Auth</li>
              </ul>
              <li>Basic NGINX Security</li>
              <ul className="list-disc ml-8">
                <li>Generating Self-Signed Certificates</li>
                <li>Configuring the Host for SSL/TLS/HTTPS</li>
              </ul>
              <li>NGINX Rewrites</li>
              <ul className="list-disc ml-8">
                <li>Cleaning Up URLs</li>
                <li>Redirecting All Traffic to HTTPS</li>
              </ul>
              <li>NGINX Modules</li>
              <ul className="list-disc ml-8">
                <li>Overview of NGINX Modules</li>
                <li>Adding Functionality to NGINX with Dynamic Modules</li>
                <li>HANDS-ON LAB Installing and Configuring NGINX as an HTTP Server</li>
                <li>HANDS-ON LAB Forcing HTTPS Traffic with NGINX</li>
              </ul>
              <li>Reverse Proxy</li>
              <ul className="list-disc ml-8">
                <li>What is a Reverse Proxy?</li>
                <li>Preparing a Node.js Sample Application</li>
                <li>Reverse Proxy with proxy_pass</li>
                <li>Setting Up The LEMP Stack</li>
                <li>FastCGI Proxy for PHP/WordPress with fastcgi_pass</li>
                <li>Deploying a uWSGI Application</li>
                <li>Proxying to uWSGI Python Web Application with uwsgi_pass</li>
                <li>Simple Caching for Static Content</li>
                <li>Microcaching for Non-Personalized Dynamic Content</li>
                <li>HANDS-ON LAB Using NGINX as a Reverse Proxy for an Application and Blog</li>
              </ul>
              <li>Load Balancing</li>
              <ul className="list-disc ml-8">
                <li>Load Balancing to Multiple Servers</li>
                <li>Examining Load Balancing Methods</li>
              </ul>
              <li>Logging</li>
              <ul className="list-disc ml-8">
                <li>Configuring Logging</li>
              </ul>
              <li>Security</li>
              <ul className="list-disc ml-8">
                <li>Improving SSL Configuration</li>
                <li>Use Case: Generating SSL Certificates using Let's Encrypt</li>
              </ul>
              <li>Performance</li>
              <ul className="list-disc ml-8">
                <li>Content Compression and Decompression</li>
                <li>Workers & Connections</li>
                <li>HTTP/2</li>
                <li>Use Case: PageSpeed by Google</li>
                <li>HANDS-ON LAB Configuring NGINX for Performance</li>
              </ul>
            </ul>
            <h1>CICD & Software collaboration tools</h1>
            <h2 className="text-blue-500 font-bold mb-4">Source code management - Git </h2>
            <ul className="list-disc ml-8">
              <li>The Basics of Using Git</li>
              <li>Tags, Branching, Merging, and Reverting</li>
              <li>Git’s Logs and Auditing</li>
              <li>Git Advanced Concepts</li>
              <ul className="list-disc ml-8">
                <li>Merging vs. Rebasing</li>
                <li>Resetting, Checking Out, and Reverting</li>
                <li>Advanced Git Log</li>
                <li>Git Hooks</li>
                <li>Refs and the Reflog</li>
                <li>Git Submodules</li>
                <li>Large Repositories in Git</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Jenkins</h2>
            <ul className="list-disc ml-8">
              <li>Jenkins and Continuous Integration (CI) / Continuous Delivery (CD)</li>
              <ul className="list-disc ml-8">
                <li>CI/CD</li>
                <li>What Is a Job?</li>
                <li>What Is a Build?</li>
                <li>Source Code Management (SCM)</li>
                <li>Testing and Notifications</li>
                <li>Distributed Builds</li>
                <li>Plugins</li>
                <li>Jenkins Rest API</li>
                <li>Security</li>
                <li>Artifacts and Fingerprints</li>
              </ul>
              <li>Installing Jenkins</li>
              <ul className="list-disc ml-8">
                <li>Installation Walkthrough</li>
              </ul>
              <li>Features and Functionality</li>
              <ul className="list-disc ml-8">
                <li>Jobs</li>
                <li>Builds</li>
                <li>Source Code Management (SCM)</li>
                <li>Testing</li>
                <li>Notifications and Alerts</li>
                <li>Distributed Builds</li>
                <li>Plugins</li>
                <li>Rest API</li>
                <li>Security</li>
                <li>Artifacts</li>
              </ul>
              <li>Building CD Pipelines</li>
              <ul className="list-disc ml-8">
                <li>Pipeline Concepts</li>
                <li>Upstream, Downstream, and Triggers</li>
                <li>Parameters</li>
                <li>Promotions</li>
                <li>Pipeline</li>
                <li>Pipeline Multibranch and Repository Scanning</li>
                <li>Pipeline Global Libraries</li>
              </ul>
              <li>Pipeline as Code</li>
              <ul className="list-disc ml-8">
                <li>Jenkinsfile</li>
                <li>Distributed Builds Architecture</li>
                <li>Replaceable Agents</li>
                <li>Master Agent Connectors and Protocol</li>
                <li>Tool Installation on Agents</li>
                <li>Cloud Agents</li>
                <li>High Availability</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Github CICD</h2>
            <ul className="list-disc ml-8">
              <li>What Is GitHub Actions?</li>
              <ul className="list-disc ml-8">
                <li>Understanding Workflows, Jobs, and Actions</li>
                <li>Introducing Community Actions</li>
                <li>Getting Running with Runners</li>
                <li>HANDS-ON LAB Setting Up a Custom GitHub Actions Runner</li>
                <li>Securing GitHub Actions</li>
                <li>Designing Workflows and Pipelines</li>
              </ul>
              <li>Building Your Workflow</li>
              <ul className="list-disc ml-8">
                <li>Introducing Your Microservice</li>
                <li>Building Your Code</li>
                <li>Storing Your Artifact</li>
                <li>HANDS-ON LAB Creating a Release with GitHub Actions</li>
                <li>Uploading to AWS</li>
                <li>Deploying Your Function</li>
                <li>GitHub Actions Workflow Design</li>
                <li>Enhancing Your Workflow</li>
                <li>Catching Errors Sooner: Code Quality Checks</li>
                <li>Setting Up Non-Production Environments</li>
                <li>HANDS-ON LAB Deploying a Static Site with GitHub Actions</li>
                <li>Testing Before Production</li>
                <li>Adding Documentation</li>
                <li>HANDS-ON LAB Deploying Documentation to GitHub Pages</li>
                <li>Reviewing the Workflow</li>
                <li>GitHub Actions Workflow Enhancement</li>
              </ul>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">GitOps</h2>
            <ul class="list-disc ml-8">
              <li>What is GitOps?</li>
              <ul class="list-disc ml-8">
                <li>Understanding GitOps Principles</li>
                <li>Declarative Infrastructure and Infrastructure as Code (IaC)</li>
                <li>Using a Version Control System as the Foundation of DevOps</li>
                <li>Continuous Integration and Git Flow</li>
                <li>Continuous Delivery vs. Continuous Deployment</li>
                <li>Synchronizing Target Platforms with Upstream VCS Repos</li>
                <li>Application Build and Deployment Automation</li>
              </ul>
              <li>Hands-On GitOps Labs</li>
              <ul class="list-disc ml-8">
                <li>HANDS-ON LAB Installing and Configuring Flux with GitHub</li>
                <li>HANDS-ON LAB Installing and Configuring Flux with GitLab</li>
                <li>HANDS-ON LAB Operating and Troubleshooting Flux in a Kubernetes Cluster</li>
                <li>HANDS-ON LAB Using Pull Requests For Release Gating</li>
                <li>HANDS-ON LAB Deploying Applications with GitHub Actions Workflow and Flux</li>
              </ul>
              <li>GitOps with ArgoCD</li>
              <ul class="list-disc ml-8">
                <li>Overview of Argo CD and its architecture</li>
                <li>Install and configure ArgoCD</li>
                <li>Use Argo CD CLI and Web UI to manage applications</li>
                <li>Deploy applications using GitOps methodology</li>
                <li>Synchronize the state of the application</li>
                <li>Configure application rollbacks and rollouts</li>
                <li>Use Argo CD to deploy Helm charts</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Helm</h2>
            <ul class="list-disc ml-8">
              <li>Introduction to Helm</li>
              <ul class="list-disc ml-8">
                <li>What is Helm?</li>
                <li>Deploying to Kubernetes without Helm</li>
                <li>Deploying to Kubernetes Using Helm</li>
              </ul>
              <li>Getting Familiar with Helm</li>
              <ul class="list-disc ml-8">
                <li>Installing Helm</li>
                <li>Working with Chart Repositories</li>
                <li>Updating Releases in Helm</li>
                <li>HANDS-ON LAB Installing Helm</li>
              </ul>
              <li>Helm Charts</li>
              <ul class="list-disc ml-8">
                <li>Getting into Helm Charts</li>
                <li>Modifying Charts</li>
                <li>Understanding the Language of Charts</li>
                <li>Speaking the Language of Charts</li>
                <li>Working with Subcharts</li>
                <li>HANDS-ON LAB Modifying Helm Charts</li>
                <li>HANDS-ON LAB Creating Helm Charts</li>
              </ul>
              <li>More Advanced Charts</li>
              <ul class="list-disc ml-8">
                <li>Implementing Pre- and Post- Actions with Hooks</li>
                <li>Testing Charts</li>
                <li>Creating and Using Libraries</li>
                <li>Validating Charts</li>
                <li>HANDS-ON LAB Advanced Helm</li>
              </ul>
              <li>Administration and Plugins</li>
              <ul class="list-disc ml-8">
                <li>Adding Role Based Access Control</li>
                <li>Troubleshooting Helm</li>
                <li>Working with Plugins</li>
                <li>Exploring the Storage Backend</li>
                <li>HANDS-ON LAB Troubleshooting Helm</li>
              </ul>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Argo CD</h2>
            <ul class="list-disc ml-8">
              <li>Introduction to GitOps and Argo CD</li>
              <ul class="list-disc ml-8">
                <li>Understanding GitOps</li>
                <li>Introduction to Argo CD</li>
                <li>Why GitOps with Argo CD?</li>
              </ul>
              <li>Setting Up Your Environment</li>
              <ul class="list-disc ml-8">
                <li>Kubernetes Cluster Setup</li>
                <li>Installing Argo CD on Your Cluster</li>
              </ul>
              <li>GitOps Workflows and Best Practices</li>
              <ul class="list-disc ml-8">
                <li>Git Repository Structure for GitOps</li>
                <li>Manifests, Helm Charts, and Kustomize</li>
                <li>GitOps Best Practices</li>
              </ul>
              <li>Argo CD Deep Dive</li>
              <ul class="list-disc ml-8">
                <li>Argo CD Architecture</li>
                <li>Deploying a sample application to Argo CD</li>
                <li>Deploying Helm charts to Argo CD</li>
                <li>Deploying applications to Argo CD using Kustomize</li>
                <li>Managing Secrets in GitOps</li>
                <li>Synchronization and Rollbacks</li>
              </ul>
              <li>Advanced Argo CD Features and Integrations</li>
              <ul class="list-disc ml-8">
                <li>Multi-Cluster Deployment with Argo CD</li>
                <li>Introducing Argo CD ApplicationSets</li>
                <li>Implementing Blue-Green Deployments</li>
                <li>Implementing Canary Deployments</li>
              </ul>
              <li>Using Argo CD in CI/CD pipelines</li>
              <ul class="list-disc ml-8">
                <li>Preparing our sample application (the currency converter)</li>
                <li>Connecting Argo CD to GitHub</li>
                <li>Setting up the CI pipeline using GitHub Actions</li>
                <li>Using Argo CD for the Continuous Deployment (CD) part</li>
              </ul>
              <li>Using Argo CD Plugins for Custom Configuration Management</li>
              <ul class="list-disc ml-8">
                <li>What are Argo CD plugins and why we may need them?</li>
                <li>Creating an Argo CD plugin for envsubst</li>
                <li>Introducing Terraform and our sample project</li>
                <li>Using an Argo CD dynamic plugin with Terraform for a zero-touch workflow</li>
              </ul>
              <li>Argo CD Resource Hooks</li>
              <ul class="list-disc ml-8">
                <li>Using PreSync Hook for performing database migrations</li>
                <li>Using Sync Hook for clearing cache</li>
                <li>Using PostSync and SyncFail for sending Slack notifications</li>
                <li>Using the PostDelete hook for database backup and deletion</li>
                <li>Enabling hostPath volumes in KinD clusters</li>
              </ul>
            </ul>

            <h2 className="text-blue-500 font-bold mb-4">Dev Ops Monitoring</h2>
            <ul class="list-disc ml-8">
              <li>Prometheus Basics</li>
              <ul class="list-disc ml-8">
                <li>What Is Prometheus?</li>
                <li>Prometheus Architecture — Bird's-Eye View</li>
                <li>Prometheus Use Cases — Strengths and Limitations</li>
              </ul>
              <li>Installation and Configuration</li>
              <ul class="list-disc ml-8">
                <li>Building a Prometheus Server</li>
                <li>Configuring Prometheus</li>
                <li>Configuring an Exporter</li>
                <li>HANDS-ON LAB Building a Prometheus Server</li>
                <li>HANDS-ON LAB Collecting Linux Server Metrics with Prometheus</li>
              </ul>
              <li>Prometheus Data Model</li>
              <ul class="list-disc ml-8">
                <li>What Is Time-Series Data?</li>
                <li>Metrics and Labels</li>
                <li>Metric Types</li>
                <li>HANDS-ON LAB Locating Time-Series Data in Prometheus</li>
                <li>HANDS-ON LAB Working with Prometheus Metric Types</li>
              </ul>
              <li>Querying</li>
              <ul class="list-disc ml-8">
                <li>Introduction to Prometheus Querying</li>
                <li>Query Basics</li>
                <li>Query Operators</li>
                <li>Query Functions</li>
                <li>Prometheus HTTP API</li>
                <li>HANDS-ON LAB Working with Prometheus Queries</li>
                <li>HANDS-ON LAB Advanced Prometheus Queries</li>
                <li>HANDS-ON LAB Using the Prometheus HTTP API</li>
              </ul>
              <li>Introduction to Visualization</li>
              <ul class="list-disc ml-8">
                <li>Prometheus Visualization Methods</li>
              </ul>
              <li>Native Visualization Methods</li>
              <ul class="list-disc ml-8">
                <li>Expression Browser</li>
                <li>Console Templates</li>
                <li>Console Template Graph Library</li>
                <li>HANDS-ON LAB Building a Prometheus Console Template</li>
                <li>HANDS-ON LAB Using the Graph Library in a Prometheus Console Template</li>
              </ul>
              <li>Grafana</li>
              <ul class="list-disc ml-8">
                <li>What Is Grafana?</li>
                <li>Installing and Configuring Grafana</li>
                <li>Building Prometheus Dashboards in Grafana</li>
                <li>HANDS-ON LAB Building a Grafana Instance to Work with Prometheus Data</li>
                <li>HANDS-ON LAB Building a Prometheus Dashboard in Grafana</li>
              </ul>
              <li>Exporters</li>
              <ul class="list-disc ml-8">
                <li>Introduction to Exporters</li>
                <li>Application Monitoring</li>
                <li>Jobs and Instances</li>
                <li>HANDS-ON LAB Collecting Application Metrics with Prometheus</li>
                <li>HANDS-ON LAB Docker Daemon Monitoring with Prometheus</li>
                <li>HANDS-ON LAB Docker Container Monitoring with Prometheus</li>
                <li>HANDS-ON LAB Kubernetes Monitoring with Prometheus</li>
              </ul>
              <li>Prometheus Pushgateway</li>
              <ul class="list-disc ml-8">
                <li>Introduction to Pushgateway</li>
                <li>Installing Pushgateway</li>
                <li>Pushing Data to Pushgateway</li>
                <li>HANDS-ON LAB Installing Prometheus Pushgateway</li>
                <li>HANDS-ON LAB Monitoring a Batch Job with Prometheus Pushgateway</li>
              </ul>
              <li>Recording Rules</li>
              <ul class="list-disc ml-8">
                <li>Introduction to Recording Rules</li>
                <li>Configuring Recording Rules</li>
                <li>HANDS-ON LAB Using Prometheus Recording Rules</li>
              </ul>
              <li>Alertmanager Setup and Configuration</li>
              <ul class="list-disc ml-8">
                <li>What Is Alertmanager?</li>
                <li>Installing Alertmanager</li>
                <li>Alertmanager Configuration</li>
                <li>High Availability and Alertmanager</li>
                <li>HANDS-ON LAB Installing Prometheus Alertmanager</li>
                <li>HANDS-ON LAB Configuring Prometheus Alertmanager</li>
                <li>HANDS-ON LAB Configuring Prometheus Alertmanager for High Availability</li>
              </ul>
              <li>Prometheus Alerts</li>
              <ul class="list-disc ml-8">
                <li>Alerting Rules</li>
                <li>Managing Alerts</li>
                <li>HANDS-ON LAB Configuring Prometheus Alerts</li>
                <li>HANDS-ON LAB Advanced Configuration for Prometheus Alerts</li>
              </ul>
              <li>Using Multiple Prometheus Servers</li>
              <ul class="list-disc ml-8">
                <li>High Availability</li>
                <li>Federation</li>
                <li>HANDS-ON LAB Building a Highly Available Prometheus Setup</li>
                <li>HANDS-ON LAB Implementing Hierarchical Federation With Prometheus</li>
              </ul>
              <li>Security</li>
              <ul class="list-disc ml-8">
                <li>Prometheus Security Assumptions</li>
              </ul>
              <li>Client Libraries</li>
              <ul class="list-disc ml-8">
                <li>Introduction to Prometheus Client Libraries</li>
                <li>Using the Prometheus Java Client Library</li>
                <li>HANDS-ON LAB Using the Java Client Library for Prometheus</li>
              </ul>
            </ul>
            <h1>Scripting and Automation</h1>
            <h2 className="text-blue-500 font-bold mb-4">Introduction to Javascript</h2>
            <ul class="list-disc ml-8">
              <li>The History of JavaScript</li>
              <ul class="list-disc ml-8">
                <li>Implementing Client-Side Scripting</li>
                <li>Creating a Modern and Dynamic Internet</li>
              </ul>
              <li>Client-Side Scripting Basics</li>
              <ul class="list-disc ml-8">
                <li>Exploring the Document Object Model (DOM)</li>
                <li>Understanding JavaScript Syntax (Hello World)</li>
                <li>Working with Image Tags (Cats and Dogs)</li>
                <li>HANDS-ON LAB Getting Stylish with JavaScript</li>
              </ul>
              <li>More Advanced Client-Side Scripting</li>
              <ul class="list-disc ml-8">
                <li>Using Variables and Arrays</li>
                <li>Working with Conditionals and Looping</li>
                <li>Understanding the Basics of Functions</li>
                <li>Introducing JavaScript Frameworks</li>
              </ul>
              <li>Server-Side Basics</li>
              <ul class="list-disc ml-8">
                <li>Exploring Server-Side JavaScript with NodeJS</li>
                <li>Introducing REST and APIs</li>
                <li>HANDS-ON LAB Creating an HTTP Server in NodeJS</li>
              </ul>
              <li>Build Toolchain and Unit Testing</li>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">Introduction to Python Development</h2>
            <ul class="list-disc ml-8">
              <li>Environment Setup</li>
              <ul class="list-disc ml-8">
                <li>Installing Python 3.7 on CentOS 7</li>
                <li>(Optional) Installing Python 3.7 on Debian/Ubuntu</li>
                <li>Picking a Text Editor or IDE</li>
                <li>(Optional) Setting Up a Vim Development Environment</li>
              </ul>
              <li>Running Python</li>
              <ul class="list-disc ml-8">
                <li>Using the REPL (Read, Evaluate, Print, Loop)</li>
                <li>Creating and Running Python Files</li>
                <li>Using Comments</li>
              </ul>
              <li>Built-in Data Types</li>
              <ul class="list-disc ml-8">
                <li>Strings</li>
                <li>Numbers</li>
                <li>Booleans and None</li>
                <li>Working with Variables</li>
                <li>Lists</li>
                <li>Tuples & Ranges</li>
                <li>Dictionaries (dicts)</li>
              </ul>
              <li>Control Flow</li>
              <ul class="list-disc ml-8">
                <li>Conditionals and Comparisons</li>
                <li>Logic Operations</li>
                <li>The while loop</li>
                <li>The for Loop</li>
              </ul>
              <li>Encapsulating Code</li>
              <ul class="list-disc ml-8">
                <li>Writing Functions</li>
                <li>HANDS-ON LAB Solving Problems with Built-in Python Types</li>
                <li>HANDS-ON LAB Utilizing Control Flow Structures in Python</li>
              </ul>
              <li>Object-Oriented Programming Basics</li>
              <ul class="list-disc ml-8">
                <li>Creating Classes</li>
                <li>Composition</li>
                <li>Inheritance</li>
                <li>Polymorphism</li>
                <li>HANDS-ON LAB Modeling Data with Classes in Python</li>
              </ul>
              <li>Using Packages</li>
              <ul class="list-disc ml-8">
                <li>Using Standard Library Packages</li>
                <li>Working with Third-Party Packages</li>
              </ul>
              <li>Common Uses and Debugging</li>
              <ul class="list-disc ml-8">
                <li>Interacting with Files</li>
                <li>Environment Variables</li>
                <li>Error Handling</li>
                <li>Decorators</li>
                <li>Breakpoint Debugging with PDB</li>
              </ul>
              <li>Building CLIs with Python</li>
              <ul class="list-disc ml-8">
                <li>Project Setup</li>
                <li>Setting Up External Dependencies</li>
                <li>Building the CLI: Handling Arguments and Flags</li>
                <li>Interacting with External Processes: Utilizing pg_dump</li>
                <li>Storing Data Locally</li>
                <li>Wiring the Pieces Together</li>
                <li>Distributing the Package</li>
                <li>HANDS-ON LAB Building a Command Line Tool with Python</li>
              </ul>
              <li>Intro to Web Development</li>
              <ul class="list-disc ml-8">
                <li>Visualizing Web Development</li>
                <li>Project Setup</li>
                <li>Creating the Flask Application and Database</li>
                <li>Modeling Data with an Object-Relational Mapper</li>
                <li>Building User Registration</li>
                <li>Building User Authentication</li>
                <li>Implementing Notes CRUD - Creating and Reading</li>
                <li>Implementing Notes CRUD - Updating and Deleting</li>
                <li>HANDS-ON LAB Building a Web Application with Python and Flask</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">System tooling with go </h2>
            <ul class="list-disc ml-8">
              <li>Introduction to Go</li>
              <ul class="list-disc ml-8">
                <li>The History and Benefits of Go</li>
              </ul>
              <li>Environment Setup</li>
              <ul class="list-disc ml-8">
                <li>Installing Go on Unix Systems</li>
                <li>HANDS-ON LA Installing and Setting Up Go on Linux</li>
              </ul>
              <li>Running Go</li>
              <ul class="list-disc ml-8">
                <li>Creating and Running Simple Go Programs</li>
                <li>Using Comments</li>
              </ul>
              <li>Common Data Types</li>
              <ul class="list-disc ml-8">
                <li>Strings and Characters</li>
                <li>Numbers</li>
                <li>Booleans and nil</li>
                <li>Working with Variables</li>
                <li>Arrays and Slices</li>
                <li>Maps</li>
              </ul>
              <li>Control Flow</li>
              <ul class="list-disc ml-8">
                <li>Conditionals</li>
                <li>The for Loop</li>
              </ul>
              <li>Basic Interactions</li>
              <ul class="list-disc ml-8">
                <li>Reading the Documentation</li>
                <li>Function Basics</li>
                <li>Reading User Input</li>
                <li>Interacting with Files</li>
              </ul>
              <li>Building a CLI</li>
              <ul class="list-disc ml-8">
                <li>Creating a CLI</li>
                <li>HANDS-ON LAB Building a Go Command Line Tool</li>
              </ul>
              <li>Working with Third-Party Packages</li>
              <ul class="list-disc ml-8">
                <li>Downloading and Installing Packages</li>
                <li>Revamping a CLI Using the Cobra Package</li>
              </ul>
              <li>Distributing Go</li>
              <ul class="list-disc ml-8">
                <li>Compiling a Cross-Platform Go Application</li>
                <li>HANDS-ON LAB Building a Cross-Platform Go Binary</li>
              </ul>
            </ul>
            <h2 className="text-blue-500 font-bold mb-4">System tooling with go </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsMasterSyllabus;