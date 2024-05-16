import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const RedHatOpenShiftSyllabus = () => {
  return (
    <>
      {/* <NavBar /> */}
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4">Red Hat OpenShift Development I Syllabus</h1>

            <h2 className="text-blue-500 font-bold mb-4">Course Outline</h2>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 1: Course Introduction</h3>
            <ul className="list-disc ml-8">
              <li>Welcome to Hands-on with Podman Containers on Linux</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 2: Introduction to Containers and Podman</h3>
            <ul className="list-disc ml-8">
              <li>Understanding Containers and Pods</li>
              <li>Introducing Podman, Skopeo, and Buildah</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 3: Managing Container Images Using Podman</h3>
            <ul className="list-disc ml-8">
              <li>Understanding Container Images</li>
              <li>Installing and Configuring Podman on RHEL</li>
              <li>Working with Container Images Using Podman and Skopeo - Part 1</li>
              <li>Working with Container Images Using Podman and Skopeo - Part 2</li>
              <li>HANDS-ON LAB Managing Container Images Using Podman and Skopeo on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 4: Managing Containers Using Podman</h3>
            <ul className="list-disc ml-8">
              <li>Running Your First Podman Container</li>
              <li>Managing Containers Using Podman</li>
              <li>Managing Container Storage Using Podman</li>
              <li>Managing Container Networking Using Podman</li>
              <li>Monitoring Containers Using Podman</li>
              <li>HANDS-ON LAB Running Your First Podman Container on RHEL</li>
              <li>HANDS-ON LAB Advanced Container Management Using Podman on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 5: Managing Pods Using Podman</h3>
            <ul className="list-disc ml-8">
              <li>Understanding Pods</li>
              <li>Creating Your First Podman Pod</li>
              <li>Managing Pods Using Podman</li>
              <li>HANDS-ON LAB Managing Pods Using Podman on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 6: Creating Container Images Using Buildah</h3>
            <ul className="list-disc ml-8">
              <li>Introducing Buildah and Dockerfiles</li>
              <li>Creating a Container Image Using Buildah and a Dockerfile</li>
              <li>Creating a Container Image Using Buildah Native Commands</li>
              <li>Using Buildah to Manage Container Images - Part 1</li>
              <li>Using Buildah to Manage Container Images - Part 2</li>
              <li>HANDS-ON LAB Customizing Container Images Using Podman and Buildah on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 7: Exploring Podman and Kubernetes Interoperability</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Kubernetes YAML Files</li>
              <li>Using Podman to Create a Kubernetes YAML File</li>
              <li>Running a Pod from a Podman-Generated Kubernetes YAML File Using Podman</li>
              <li>Running a Pod from a Podman-Generated Kubernetes YAML File Using Kubernetes</li>
              <li>HANDS-ON LAB Exploring Podman and Kubernetes Interoperability on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 8: Using Podman to Create systemd Containers and Pods</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to systemd Containers</li>
              <li>Configuring Persistent systemd Containers and Pods</li>
              <li>HANDS-ON LAB Use Podman to Create Persistent systemd Containers and Pods on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 9: Managing Podman Containers Using Cockpit</h3>
            <ul className="list-disc ml-8">
              <li>Introduction to Cockpit</li>
              <li>Managing Podman Containers Using Cockpit</li>
              <li>HANDS-ON LAB Manage Podman Containers Using Cockpit on RHEL</li>
            </ul>

            <h3 className="text-blue-500 font-bold mb-4">CHAPTER 10: Conclusion</h3>
            <ul className="list-disc ml-8">
              <li>Hands-on with Podman Containers on Linux - A Review</li>
              <li>Conclusion and What’s Next</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RedHatOpenShiftSyllabus;
