'use client'; 
import React, { useState } from "react";

const DevOpsSyllabus = () => {
  const [openSections, setOpenSections] = useState({});

  // Function to toggle section visibility
  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  const renderSection = (sectionTitle, content) => (
    <div key={sectionTitle}>
      <h2
        className="text-blue-500 font-bold mb-4 cursor-pointer"
        onClick={() => toggleSection(sectionTitle)}
      >
        {sectionTitle} {openSections[sectionTitle] ? "▼" : "►"}
      </h2>
      {openSections[sectionTitle] && (
        <ul className="list-disc ml-8">{content}</ul>
      )}
    </div>
  );

  return (
    <div className=" min-h-screen p-8 mt-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div>
          <h1 className="text-blue-500 text-3xl font-bold mb-4">
            DevOps Syllabus
          </h1>

          {renderSection("COURSE OUTLINE", null)}

          {renderSection("Introduction [15 Min]", [
            <li key="feature">Course Features and Tools</li>,
            <li key="devops">What is DevOps?</li>,
            <li key="history">A brief overview of the history of DevOps</li>,
          ])}

          {renderSection("DevOps Culture [15 Min]", [
            <li key="goals">The Goals of DevOps</li>,
            <li key="vs">DevOps vs Traditional Silos</li>,
          ])}

          {renderSection("DevOps Concepts and Practices [45 Min]", [
            <li key="automation">Build Automation</li>,
            <li key="ci">Continuous Integration</li>,
            <li key="cd">Continuous Delivery and Continuous Deployment</li>,
            <li key="iac">Infrastructure as Code</li>,
            <li key="config">Configuration Management</li>,
            <li key="orchestration">Container Orchestration</li>,
            <li key="monitoring">Monitoring</li>,
            <li key="microservices">Microservices</li>,
          ])}

          {renderSection("DevOps Tools [45 Min]", [
            <li key="intro">Introduction to DevOps Tools</li>,
            <li key="build">Tools for Build Automation and Continuous Integration</li>,
            <li key="configtools">Tools for Configuration Management</li>,
            <li key="virtualization">Tools for Virtualization and Containerization</li>,
            <li key="monitoringtools">Tools for Monitoring</li>,
            <li key="orchestrationtools">Tools for Orchestration</li>,
            <li key="scm">Source Code Management</li>,
          ])}

          {renderSection("Git Basics", null)}

          {renderSection("The Basics of Using Git [1 Hr 30 Min]", [
            <li key="filesystem">Understanding the Git Filesystem</li>,
            <li key="localrepo">Creating a Local Repository (Empty)</li>,
            <li key="configgit">Basic Configuration of Git</li>,
            <li key="addfiles">Adding Files to Project</li>,
            <li key="status">The Status of your project</li>,
            <li key="commit">Committing to Git</li>,
            <li key="ignore">Ignoring Certain File Types</li>,
            <li key="hol1">
              HOL: Creating Local Repositories with Git and Adding/Checking in Files
            </li>,
          ])}

          {renderSection("Tags, Branching, Merging and Reverting [45 Min]", [
            <li key="usingtags">Using Tags</li>,
            <li key="branches">Using Branches</li>,
            <li key="merging">Merging Branches</li>,
            <li key="rebasing">Rebasing</li>,
            <li key="reverting">Reverting a Commit</li>,
            <li key="diff">Using the 'diff' Command</li>,
          ])}

          {renderSection("Git's Logs and Auditing [15 Min]", [
            <li key="logs">Using Git's Logs</li>,
          ])}

          {renderSection("Cloning Repositories [1 Hr]", [
            <li key="localclone">Cloning Local Repositories</li>,
            <li key="remoteclone">Cloning Remote Repositories over HTTPS, SSH</li>,
            <li key="forking">Forking</li>,
            <li key="hol2">HOL: Securing Your Github Account with SSH Keys</li>,
            <li key="hol3">HOL: Cloning a Remote GitHub Repository</li>,
          ])}

          {renderSection("Push, Pull, and Tracking Remote Repositories [30 Min]", [
            <li key="tracking">Tracking Remote Repositories</li>,
            <li key="pushing">Pushing to Remote Repositories</li>,
            <li key="pullrequests">Pull Requests</li>,
          ])}

          {renderSection("Git Branching Strategy [30 Min]", [
            <li key="strategy">What is a branching strategy?</li>,
            <li key="whystrategy">Why you need a branching strategy</li>,
            <li key="commonstrategies">
              What are some common Git branching strategies?
              <ul className="list-disc ml-8">
                <li>GitFlow</li>
                <li>GitHub Flow</li>
                <li>GitLab Flow</li>
                <li>Trunk-based Development</li>
              </ul>
            </li>,
          ])}

          {renderSection("Build Automation and Continuous Integration", null)}

          {renderSection("Build Automation [2 Hr]", [
            <li key="automationintro">Introducing Build Automation</li>,
            <li key="automationtools">Build Automation Tools</li>,
            <ul className="list-disc ml-8">
              <li key="gradle">gradle</li>,
              <li key="npm">npm</li>,
              <li key="make">make</li>,
              <li key="packer">Packer</li>,
            </ul>,
            <li key="hol4">HOL: Creating Build Automation with Gradle</li>,
            <li key="hol5">HOL: Automate AMI image creation with Packer</li>,
          ])}

          {renderSection("Continuous Integration & Jenkins Pipelines [3 Hr]", [
            <li key="cioverview">CI Overview</li>,
            <li key="installjenkins">Installing Jenkins</li>,
            <li key="pipeline">
              Scripted vs. Declarative Pipelines
              <ul className="list-disc ml-8">
                <li>Scripted Pipelines</li>,
                <li>Declarative Pipelines</li>,
                <li>Groovy and DSL</li>,
              </ul>,
            </li>,
            <li key="jenkinsfile">Jenkinsfile Basics</li>,
            <li key="upstream">Upstream, Downstream, and Triggers</li>,
            <ul className="list-disc ml-8">
              <li key="artifacts">Artifacts and Fingerprints</li>,
              <li key="linking">Linking Jobs</li>,
              <li key="automating">Automating Jobs</li>,
              <li key="hol6">HOL: Linking Jobs in Jenkins</li>,
              <li key="multibranch">
                HOL: Building multibranch build job with dependency between multiple job FreeStyle Jobs
              </li>,
              <li key="basicjob">Basic Job Structure</li>,
              <li key="parameters">Parameters</li>,
              <li key="notifications">Notifications</li>,
              <li key="hol7">HOL: Building a Freestyle Job in Jenkins</li>,
            </ul>,
            <li key="agents">Agents and Distributed Builds</li>,
            <ul className="list-disc ml-8">
              <li key="setupagent">Setting up a Build Agent</li>,
              <li key="distributing">Distributing a Build</li>,
              <ul className="list-disc ml-8">
                <li key="hol8">
                  HOL: Distributing a Jenkins Build Jenkins on the Command Line
                </li>,
              </ul>,
              <li key="jenkinsapi">Using the Jenkins API</li>,
              <li key="jenkinscli">Using the Jenkins CLI</li>,
            </ul>,
          ])}

          {renderSection("Continuous Delivery and Continuous Deployment [3 Hr]", [
            <li key="cdoverview">What is Continuous Delivery and Continuous Deployment?</li>,
            <li key="cdvs">Continuous Delivery vs. Continuous Deployment</li>,
            <li key="ciandcd">Bringing CI and CD (and CD) Together</li>,
            <li key="automation">Continuous Delivery Release Automation</li>,
            <ul className="list-disc ml-8">
              <li key="automateddeploy">Automated Deployment</li>,
              <li key="configmanagement">Configuration Management</li>,
              <li key="pipelineintegration">Pipeline Integration</li>,
              <li key="jira">Integrating JIRA</li>,
              <li key="artifactory">Artifactory</li>,
              <li key="service">Service</li>,
              <li key="hol9">HOL: Setting Up Jenkins for Deployment</li>,
              <li key="jirapip">Automating JIRA with Jenkins</li>,
            </ul>,
          ])}

          {renderSection("Infrastructure as Code (IAC)", null)}

          {renderSection("Infrastructure as Code Overview [3 Hr]", [
            <li key="iacoverview">What is IAC?</li>,
            <li key="iacvs">IAC vs. Manual Configuration</li>,
            <li key="iacbenefits">Benefits of IAC</li>,
            <li key="iacchallenges">Challenges of IAC</li>,
            <li key="iacprinciples">Principles of IAC</li>,
            <li key="iacpractices">Best Practices of IAC</li>,
            <li key="iacimplementation">Implementing IAC with Ansible</li>,
            <li key="ansiblenew">Ansible New to Linux Automation</li>,
            <li key="ansibleinstallation">Installing Ansible</li>,
            <li key="ansibleconfiguration">Configuration of Ansible</li>,
            <li key="ansiblerunning">Running Ansible Playbooks</li>,
            <li key="hol10">HOL: Managing Configuration with Ansible</li>,
          ])}

          {renderSection("Configuration Management", null)}

          {renderSection("Configuration Management Overview [45 Min]", [
            <li key="configoverview">What is Configuration Management?</li>,
            <li key="tools">Configuration Management Tools</li>,
            <li key="configautomate">Automate with Chef</li>,
            <li key="chefinfra">Chef Infra Architecture</li>,
            <li key="chefworkstation">Using the Chef Workstation</li>,
            <li key="cookbook">Creating a Cookbook</li>,
            <li key="node">Creating a Node</li>,
            <li key="chefusing">Using Chef Client and Chef Infra Server</li>,
            <li key="chefusingrepo">Using Chef Infra with a Remote Repository</li>,
            <li key="hol11">HOL: Configuring Servers with Chef Infra</li>,
            <li key="cheflicense">Chef Infra Licensing</li>,
          ])}

          {renderSection("Container Orchestration (Kubernetes)", null)}

          {renderSection("Container Orchestration Overview [45 Min]", [
            <li key="containeroverview">What is Container Orchestration?</li>,
            <li key="dockerintro">Docker Introduction</li>,
            <li key="dockerinstall">Installing Docker</li>,
            <li key="dockermachine">Docker Machine</li>,
            <li key="dockernetworking">Networking with Docker</li>,
            <li key="dockerusing">Using Docker Compose</li>,
            <li key="dockervolumes">Docker Volumes</li>,
            <li key="dockerimage">Building a Docker Image</li>,
            <li key="dockerfile">The Dockerfile</li>,
            <li key="dockerswarm">Docker Swarm vs. Kubernetes</li>,
            <li key="kubernetesintro">Introduction to Kubernetes</li>,
            <li key="kubernetescomponents">Kubernetes Components</li>,
            <li key="kubernetesinstall">Installing Kubernetes</li>,
            <li key="kubernetesminikube">Using Minikube for Kubernetes</li>,
            <li key="kubernetesdeployment">Deploying Kubernetes Applications</li>,
            <li key="kubernetessecurity">Kubernetes Security</li>,
            <li key="kubernetesscaling">Scaling Kubernetes Applications</li>,
            <li key="hol12">HOL: Running Applications on Kubernetes</li>,
            <li key="hol13">HOL: Deploying a Kubernetes Cluster with Minikube</li>,
          ])}

          {renderSection("Monitoring", null)}

          {renderSection("Monitoring Overview [30 Min]", [
            <li key="monitoringoverview">What is Monitoring?</li>,
            <li key="monitoringtypes">Types of Monitoring</li>,
            <li key="monitoringtools">Monitoring Tools</li>,
            <li key="monitoringmetrics">Monitoring Metrics</li>,
            <li key="monitoringwith">Monitoring with Prometheus</li>,
            <li key="prometheusconfiguration">Prometheus Configuration</li>,
            <li key="prometheusexporters">Prometheus Exporters</li>,
            <li key="prometheusalerting">Prometheus Alerting</li>,
            <li key="prometheusrules">Prometheus Rules</li>,
            <li key="prometheusgraphing">Graphing with Grafana</li>,
            <li key="grafanaoverview">Grafana Overview</li>,
            <li key="grafanadatasources">Grafana Data Sources</li>,
            <li key="grafanavisualization">Grafana Visualization</li>,
            <li key="hol14">HOL: Monitoring Kubernetes with Prometheus and Grafana</li>,
          ])}

          {renderSection("Microservices", null)}

          {renderSection("Microservices Overview [1 Hr]", [
            <li key="microservicesoverview">What are Microservices?</li>,
            <li key="microservicesadvantages">Advantages of Microservices</li>,
            <li key="microserviceschallenges">Challenges of Microservices</li>,
            <li key="microservicespatterns">Microservices Design Patterns</li>,
            <li key="microservicesarchitecture">Microservices Architecture</li>,
            <li key="microservicescommunication">Microservices Communication</li>,
            <li key="microservicesdeployment">Microservices Deployment</li>,
            <li key="microservicessecurity">Microservices Security</li>,
            <li key="microservicesframeworks">Microservices Frameworks</li>,
            <li key="microservicesmonitoring">Microservices Monitoring</li>,
          ])}

          {renderSection("DevOps Case Studies and Applications", null)}

          {renderSection("DevOps Case Studies [2 Hr]", [
            <li key="case1">Case Study: Netflix</li>,
            <li key="case2">Case Study: Etsy</li>,
            <li key="case3">Case Study: Amazon</li>,
            <li key="case4">Case Study: Target</li>,
            <li key="case5">Case Study: DevOps in Government</li>,
            <li key="case6">Case Study: Google</li>,
            <li key="case7">Case Study: Facebook</li>,
            <li key="case8">Case Study: NASA</li>,
            <li key="case9">Case Study: Adobe</li>,
          ])}

          {renderSection("DevOps Testimonials [15 Min]", [
            <li key="testimonials">DevOps Testimonials</li>,
          ])}

          {renderSection("Conclusion [15 Min]", [
            <li key="conclusion">Course Review</li>,
            <li key="questions">Questions and Answers</li>,
            <li key="assignment">Final Assignment</li>,
          ])}
        </div>
      </div>
    </div>
  );
};

export default DevOpsSyllabus;
