"use client";

import React, { useState } from "react";
import EthicalHackingClassType from "./EthicalHackingClassType";

const EthicalHackingSyllabus1 = () => {
  // State to manage dropdown visibility for each section
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to toggle dropdown visibility
  const toggleDropdown = (section) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const syllabusSections = [
    {
      title: "Getting Started",
      lectures: [
        "About the Course",
        "About the Author",
        "Course Requirements",
        "How to Get Help",
        "About the Exam",
      ],
      info: "5 lectures",
    },
    {
      title: "Overview of Information Security",
      lectures: [
        "Chapter Introduction",
        "Common Terms (Hack Value, Vulnerability, Exploit, Payload)",
        "Zero Day Attack",
        "Daisy Chaining",
        "QUIZ SOLUTION: Overview of Information Security - Questions answered and explained",
        "QUIZ",
      ],
      info: "6 lectures",
    },
    {
      title: "Overview of Information Security Threats and Attacks",
      lectures: [
        "Chapter Introduction",
        "Threats vs Attacks",
        "Motives and Reasons Behind Cyber Security Attacks",
        "Means by Which Hackers Gain Access to Systems and Networks",
        "Cloud Computing Threats",
        "Advanced Persistent Threats",
        "Viruses and Worms",
        "Ransomware",
        "Mobile Threats",
        "Modern Age Information Warfare",
        "Insider Attacks",
        "Phishing",
        "Web Application Threats",
        "Classification of Threats: Network, Host, Application",
        "Classification of Attacks",
        "Botnets",
        "Laws, Standards, and Regulations",
        "QUIZ SOLUTION: Overview of Information Security Threats and Attacks - Questions answered and explained",
        "QUIZ",
      ],
      info: "18 lectures",
    },
    {
      title: "History of Hacking",
      lectures: [
        "A Brief Look at the History of Hacking",
        "Types of Hackers",
        "Ethical Hacking and Its Purpose",
        "Scope of Ethical Hacking",
        "Hacking Stages: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Clearing Tracks",
        "QUIZ SOLUTION: History of Hacking - Questions answered and explained",
        "QUIZ",
      ],
      info: "7 lectures",
    },
    {
      title: "Protecting Information",
      lectures: [
        "Chapter Introduction",
        "Information Assurance",
        "EISA and Information security management program",
        "Network Zoning",
        "Defense in Depth",
        "Policies, Workplace Security, Physical Security Controls",
        "Risk Management, Threat Modeling, Incident Management",
        "UBA - User Behavior Analytics, Access Controls, Data Leakage, Data Backup, Data Recovery",
        "QUIZ SOLUTION: Protecting Information - Questions answered and explained",
        "QUIZ",
      ],
      info: "9 lectures",
    },
    {
      title: "Penetration Testing",
      lectures: [
        "What Is Penetration Testing?",
        "Good Penetration Test Consists of",
        "Why Do a Penetration Test",
        "Pre-Attack Phase, Attack Phase, Post-Attack Phase",
        "Security Testing Methodologies",
        "QUIZ SOLUTION: Penetration Testing - Questions answered and explained",
        "QUIZ",
      ],
      info: "7 lectures",
    },
    {
      title: "Footprinting Process",
      lectures: [
        "About Footprinting",
        "Search Engine and Online Resources",
        "Whois, GeoIP Location, DNS Interrogation",
        "Email Header Analysis",
        "Cloning a Website, Extracting Metadata",
        "Nmap and Traceroute",
        "QUIZ SOLUTION: Footprinting - Questions answered and explained",
        "QUIZ",
        "HANDS-ON LAB: Extract Data from a File, Phishing Emails and GeoIP Lookup",
        "Reports and Countermeasures",
        "Countermeasures and Best Practices",
        "Footprinting Report",
        "QUIZ SOLUTION: Reports and Countermeasures - Questions answered and explained",
        "QUIZ",
      ],
      info: "14 lectures",
    },
    {
      title: "Network Scanning Techniques",
      lectures: [
        "Banner Grabbing",
        "Network Topologies, Scanning for Vulnerabilities, Enumeration",
        "QUIZ SOLUTION: Network Scanning Techniques - Questions answered and explained",
        "QUIZ",
      ],
      info: "4 lectures",
    },
    {
      title: "Password Cracking Techniques",
      lectures: [
        "Password Cracking Basics, Using Hydra, HashCat",
        "QUIZ SOLUTION: Password Cracking Techniques - Questions answered and explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title:
        "Techniques for Creating and Maintaining Access to the Remote System",
      lectures: [
        "Reverse Shell, Keylogger, Decrypting Logs",
        "QUIZ SOLUTION: Persistent Remote Access - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Hiding Malicious Programs",
      lectures: [
        "Sandbox, Anti-Malware, Rootkits, Steganography",
        "QUIZ SOLUTION: Hiding Malicious Programs - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Covering Tracks and Destroying Evidence",
      lectures: [
        "Log Files, Examining and Removing Traces",
        "QUIZ SOLUTION: Covering Tracks and Destroying Evidence - Questions Answered and Explained",
        "QUIZ",
        "HANDS-ON LAB: Examine Log Files and Remove Traces",
      ],
      info: "4 lectures",
    },
    {
      title: "Spoofing Techniques",
      lectures: [
        "ARP Spoofing, MAC Address Spoofing, DHCP Starvation",
        "QUIZ SOLUTION: Sniffing Techniques - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Attacking and Exploiting Wireless Networks",
      lectures: [
        "Capturing and Cracking WPA2 Handshake, Passkey",
        "QUIZ SOLUTION: Wireless Networks - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Tip, Tricks and Real Life Scenarios",
      lectures: [
        "Social Engineering Attacks",
        "QUIZ SOLUTION: Social Engineering - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Firewalls",
      lectures: [
        "What Is a Firewall, Configuration, Evading GeoIP Blocks",
        "QUIZ SOLUTION: Firewalls - Questions answered and explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Honeypots",
      lectures: [
        "Setting Up and Grabbing Traffic from a Honeypot",
        "QUIZ SOLUTION: Honeypots - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "Let's Attack Web Servers and Web Applications!",
      lectures: [
        "OWASP, XSS, SQL Injections",
        "QUIZ SOLUTION: Attacking Web Servers and Web Applications - Questions Answered and Explained",
        "QUIZ",
      ],
      info: "3 lectures",
    },
    {
      title: "About Cryptography",
      lectures: [
        "Cryptography Basics, Common Algorithms, PKI",
        "Encryption, Decryption, Cryptanalysis and Attack Vectors",
        "Cryptanalysis, Checksum, SSH RSA, Storage Encryption",
        "QUIZ SOLUTION: Cryptography - Questions Answered and Explained",
        "QUIZ",
        "HANDS-ON LAB: Encrypting Storage Devices",
      ],
      info: "5 lectures",
    },
    {
      title: "Final",
      lectures: [
        "Final Practice Exam",
        "Final SOLUTIONS",
        "Final Practice Exam Question and Answer overview",
      ],
      info: "3 lectures",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row sm:flex-row sm:mt-4">
      <div className="w-[80%] flex flex-col mt-14">
        <div className="w-full">
          <h1 className="font-bold text-3xl ml-8 p-[10px] font-poppins mb-[37px] text-[#003366]">
            Course Syllabus
          </h1>
          {syllabusSections.map((section, index) => (
            <div key={index} className={`relative w-full max-w-[800px]`}>
              <div
                className={`border-2 px-4 border-[#004AAD] border-opacity-[5%] transition-all ${
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
                  <span className="font-semibold font-poppins">
                    {section.title}
                  </span>
                  <span className="hidden md:block text-right ml-auto font-poppins">
                    {section.info}
                  </span>
                </div>
              </div>
              {openDropdowns[section.title] && (
                <div className="w-full border border-[#004AAD] border-opacity-[5%] z-10 mt-1 mr-4">
                  <ul className="p-2">
                    {section.lectures.map((lecture, idx) => (
                      <li key={idx} className="py-1">
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
      <EthicalHackingClassType />
    </div>
  );
};

export default EthicalHackingSyllabus1;
