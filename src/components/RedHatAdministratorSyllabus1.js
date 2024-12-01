"use client";
import React, { useState } from "react";
import RedHatAdministratorClassType from "./RedHatAdministratorClassType";

const RedHatAdministratorSyllabus1 = () => {
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
      title: "Introduction to Linux",
      lectures: [
        "a. What is Linux?",
        "b. What is Open Source Software",
        "c. Distributions of Linux",
        "d. Flavors of Unix",
        "e. Jobs Roles and that Require Linux Skills",
        "f. Linux Certifications",
      ],
      info: "6 lectures • 2 hours",
    },
    {
      title: "Virtualization Platforms & Installing Linux",
      lectures: [
        "a. Installing Virtualization Software",
        "b. Creating a Virtual Machine",
        "c. Installing RHEL 9 in a Virtual Machine in a Basic Way",
        "d. Cloning a Virtual Machine",
      ],
      info: "5 lectures • 1.5 hours",
    },
    {
      title: "Core Linux Commands",
      lectures: [
        "a. Local Login",
        "b. Basic Linux Commands",
        "c. Switching between CUI & GUI",
        "d. Creating, Listing, Viewing and Modifying a File",
        "e. Creating and Changing a Directory",
        "f. Creating Hidden Files and Files with Special Character in their Name",
        "g. Using touch Command",
        "h. Understanding Linux File System Hierarchy",
        "i. General Syntax of Commands",
        "j. Executing Multiple Commands at a time",
        "k. Methods of Specifying Paths",
        "l. Using",
        "m. Using Wildcard Characters",
        "n. Moving and Renaming Files & Directories",
        "o. Copying Files and Directories",
        "p. Removing Files and Directories",
        "q. Creating Command’s Alias",
        "r. Viewing the Command’s History and setting the command’s history size",
        "s. Compressing & Decompressing a File",
        "t. Creating Archives",
        "u. Creating Soft & Hard Link",
        "v. Getting Information About Disk, Memory & CPU",
        "w. Getting Information About Files Using stat & file Commands",
        "x. Using Different Types of Quotes",
        "y. Initializing Variables",
        "z. Login Scripts & Logout Script",
        "aa. Mounting USB Disk & CD/DVD",
      ],
      info: "5 lectures • 2 hours",
    },
    {
      title: "Getting Help",
      lectures: [
        "a. Using man Command to Get Help",
        "b. Using --help Option to Get Help",
        "c. Getting Online Documentations",
      ],
      info: "8 lectures • 2.5 hours",
    },
    {
      title: "Using vi/vim Editor",
      lectures: [
        "a. Inserting Text in a File",
        "b. Cursor Movement Techniques in a File",
        "c. Delete, Copy and Paste Text in a File",
        "d. Searching Text in a File",
        "e. Performing Search and Replace Operations in a File",
        "f. Protecting a File Using Password",
        "g. Recovering a File After Abnormal Termination",
      ],
      info: "4 lectures • 1.5 hours",
    },
    {
      title: "Using String Manipulations Tools",
      lectures: [
        "a. Viewing First Few Lines of a File (head)",
        "b. Viewing Last Few Lines of a File (tail)",
        "c. Viewing Content of a Long File (less)",
        "d. Displaying Total Count of Characters, Words and Lines of a File (wc)",
        "e. Using Pipeline (|)",
        "f. Displaying Specific Data of a File (cut)",
        "g. Displaying Content of a File in Ordered Form (sort)",
        "h. Showing Differences Between Two Files (diff)",
        "i. Displaying Pattern Matching Lines in File (grep)",
        "j. Using sed command",
      ],
      info: "3 lectures • 1.5 hours",
    },
    {
      title: "Finding and Processing Files",
      lectures: [
        "a. Using ‘locate’ Command to Search Files & Directories",
        "b. Searching Files Using ‘find’ Command",
        "c. Finding and Processing Files",
      ],
      info: "8 lectures • 3 hours",
    },
    {
      title: " Using Re-direction Operators",
      lectures: [
        "a. Using Redirection Operators (>, >>, 2>,<)",
        "b. Using tr command",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Monitor and Manage Linux Processes",
      lectures: [
        "a. What is a Process & States of Processes",
        "b. Process Monitoring Tools",
        "c. Killing a Process",
        "d. Setting Process Priority",
        "e. Running a Process in the Background",
        "f. Stopping & Resuming Processes",
      ],
      info: "3 lectures • 4 hours",
    },
    {
      title: "Selenium WebDriver",
      lectures: [
        "Components Overview",
        "Installation and Configuration",
        "Object Identification and Locators",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Basics of Users, Groups & Permissions",
      lectures: [
        "a. Introduction to Users & Groups",
        "b. Types of Permissions",
        "c. Manage Default Permissions of Files",
        "d. Changing Permissions of Files",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Bash Shell Scripting",
      lectures: [
        "a. What is a Shell Script?",
        "b. Creating a Simple Bash Shell Script",
        "c. Setting Path",
        "d. Executing a Script",
        "e. Different Types of Bash Shell Operators",
        "f. Creating a Shell Script Using the if",
        "g. Creating a Shell Script Using case",
        "h. Creating a Shell Script Using Positional Parameter",
        "i. Creating a Script Using Loop",
        "j. Creating & Calling Functions in bash Script",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Manage Networking",
      lectures: [
        "a. Describe Networking Concepts",
        "b. Configure Network",
        "c. Configure Hostnames and Name Resolution",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Install and Update Software Packages",
      lectures: [
        "a. Managing Packages Using rpm",
        "b. Configuring yum Repository",
        "c. Managing Packages Using yum",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Control Boot Process & Troubleshooting",
      lectures: [
        "a. Reset Root Password if Forgotten",
        "b. GRUB2 Boot Loader Related Troubleshooting",
        "c. Setting GRUB2 Password",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Control Services and Daemons",
      lectures: ["a. Manage Services"],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Schedule Future Tasks",
      lectures: ["a. Schedule cron Jobs", "b. Schedule at Jobs"],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Managing Local Users and Groups",
      lectures: [
        "a. Describe User and Group Concepts",
        "b. Manage Local User Accounts",
        "c. Manage Local Group Accounts",
        "d. Manage User Passwords",
        "e. Access Control List (ACL)",
        "f. Granting Administrative Privileges to Normal Usersm",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Analyze and Store Logs",
      lectures: [
        "a. Configure Log",
        "b. Rotate Log",
        "c. Review System Journal Entries",
        "d. Preserve the System Journal",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Tune System Performance",
      lectures: ["a. Adjust Tuning Profiles"],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Manage Basic Storage",
      lectures: [
        "a. Add Partitions, File Systems, and Persistent Mounts",
        "b. Manage Swap Space",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Manage Storage Stack",
      lectures: [
        "a. Create and Extend Logical Volumes",
        "b. Manage Layered Storage",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configure NFS Server & Access Network-Attached Storage",
      lectures: [
        "a. Manage Network Attached Storage with NFS",
        "b. Access the NFS storage using Temporary & Permanent Mounting",
        "c. Automount Network-Attached Storage",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Manage SELinux Security",
      lectures: [
        "a. Change the SELinux Enforcement Mode",
        "b. Control SELinux File Contexts",
        "c. Adjust SELinux Policy with Booleans",
        "d. Investigate and Resolve SELinux Issues",
        "e. Control SELinux Port Labelling",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Manage Network Security Using Firewall",
      lectures: [
        "a. Manage Server Firewalls",
        "b. Allow or Reject Services in the Firewall",
        "c. Allow or Reject Ports in the Firewall",
        "d. Configure Rich Rule in Firewalld",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configure and Secure SSH",
      lectures: [
        "a. Access the Remote Command Line with SSH",
        "b. Configure SSH Key-based Authentication",
        "c. Customize OpenSSH Service Configuration",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Backup & Recovery",
      lectures: [
        "a. Transfer Files Between Systems Securely",
        "b. Synchronize Files Between Systems Securely",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Run Containers",
      lectures: [
        "a. Container Concepts",
        "b. Deploy Containers",
        "c. Manage Container Storage and Network Resources",
        "d. Manage Containers as System Services",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Introducing Ansible",
      lectures: [
        "a. Automating Linux Administration with Ansible",
        "b. Installing Ansible",
        "c. Setting Up Environment to Run Ansible Playbooks",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Deploying Ansible",
      lectures: [
        "a. Building an Ansible Inventory",
        "b. Managing Ansible Configuration Files",
        "c. Running Ad Hoc Commands",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Implementing Playbooks",
      lectures: [
        "a. Writing and Running Playbooks",
        "b. Implementing Multiples Plays",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Managing Variables and Facts",
      lectures: [
        "a. Managing Variables",
        "b. Managing Secrets",
        "c. Managing Facts",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Implementing Task Control",
      lectures: [
        "a. Writing Loops and Conditional Tasks",
        "b. Implementing Handlers",
        "c. Handling Task Failures",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Deploying Files to Managed Hosts",
      lectures: [
        "a. Modifying and Copying Files to Hosts",
        "b. Deploying Custom Files with Jinja2 Templates",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Managing Large Projects",
      lectures: [
        "a. Selecting Hosts with Host Patterns",
        "b. Configuring Parallelism",
        "c. Including and Importing Files",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Install and Update Software Packages",
      lectures: [
        "a. Managing Packages Using rpm",
        "b. Configuring yum Repository",
        "c. Managing Packages Using yum",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Simplifying Playbooks with Roles",
      lectures: [
        "a. Describing Role Structure",
        "b. Reusing Content with System Roles",
        "c. Creating Roles",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Automating Linux Administration Tasks",
      lectures: [
        "a. Managing Software and Subscriptions",
        "b. Managing Users and Authentication",
        "c. Managing Boot Process and Scheduled Process",
        "d. Managing Storage",
        "e. Managing Network Configuration",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Troubleshooting Ansible",
      lectures: [
        "a. Troubling Playbooks",
        "b. Troubleshooting Ansible Managed Hosts",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configuring DNS Server",
      lectures: [
        "a. What is DNS Server and how it Works?",
        "b. Types and Hierarchy of DNS Servers",
        "c. Registering a Domain",
        "d. Configuring a Zone File for Forward Lookup",
        "e. Configuring a Zone File for Reverse Lookup",
        "f. Using Different DNS Query Tools",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configuring Web Server (HTTPD & Nginx)",
      lectures: [
        "a. Hosting a Website",
        "b. Hosting Virtual Websites",
        "c. Hosting HTML, PHP & Python-based Websites",
        "d. Hosting Authenticated Web Site",
        "e. Restricting Access to the Website",
        "f. Hosting SSL-Enabled Website",
        "g. Configure Nginx Load Balancer",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configuring Mail Server (Postfix, Dovecot & SquirrelMail)",
      lectures: [
        "a. Configuring Postfix for SMTP Service",
        "b. Configuring Dovecot for POP & IMAP Services",
        "c. Configuring Squirrel Mail for Webmail",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configuring SAMBA Server",
      lectures: [
        "a. Sharing Directories Using SAMBA",
        "b. Accessing the SAMBA-shared Directories From the Linux Client Machine",
        "c. Accessing the SAMBA-shared Directories From the Windows Client Machine",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configuring Database Server (MySQL/MariaDB)",
      lectures: [
        "a. Creating a Database",
        "b. Securing Database Login",
        "c. Login into the Database",
        "d. Creating Tables into the Database",
        "e. Inserting, Modifying and Deleting Records into a Table",
        "f. Creating Users into the Database",
        "g. Granting & Revoking Privileges to Users",
        "h. Taking Backup of the Database",
        "i. Restoring Database From Backup",
        "j. Restricting Remote login into the Database",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Configuring FreeIPA (LDAP) Server",
      lectures: [
        "a. Configuring FreeIPA(LDAP) Server",
        "b. Configuring Client to Connect to the LDAP Server for Authentication",
        "c. Configuring FreeIPA & NFS to Centralize User’s Home Directory",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Monitoring Tools",
      lectures: ["a. Configure Nagios"],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Basics of Cybersecurity",
      lectures: [
        "a. Cyber Threats",
        "b. History of Cyber Attacks",
        "c. CIA Triad",
        "d. Vulnerability, Threat & Risk",
        "e. Basics of Cryptography",
        "f. Types of Cyber Attacks",
        "g. Malware",
        "h. Phishing",
        "i. Password Attacks",
        "j. DDoS Attack",
        "k. Packet Flooding",
        "l. Man in the Middle Attack",
        "m. Malvertising",
      ],
      info: "7 lectures • 3 hours",
    },
    {
      title: "Exam Preparation",
      lectures: [
        "a. RHCSA Certification Exam Preparation",
        "b. RHCE Certification Exam Preparation",
      ],
      info: "7 lectures • 3 hours",
    },
  ];

  return (
    <div className=" flex flex-col md:flex-row sm:flex-row sm:mt-4 ml-20 mb-5">
      <div className="w-[65%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl p-[10px] font-Quicksand mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div key={index} className={`relative lg:w-full w-[250px] max-w-[800px]`}>
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all mt-1 ${
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
                      <li key={idx} className="py-1 font-Quicksand ml-14">
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
      <div className="ml-[-65px] md:ml-12">
      <RedHatAdministratorClassType />
      </div>
    </div>
  );
};
export default RedHatAdministratorSyllabus1;
