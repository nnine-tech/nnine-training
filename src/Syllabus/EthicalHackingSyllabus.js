import React from "react";

const EthicalHackingSyllabus = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div>
            <h1 className="text-blue-500 text-3xl font-bold mb-4">
              Ethical Hacking Syllabus
            </h1>

            {/* Chapter 1 */}
            <h2 className="text-blue-500 font-bold mb-4">Getting Started</h2>
            <ul className="list-disc ml-8">
              <li>About the Course</li>
              <li>About the Author</li>
              <li>Course Requirements</li>
              <li>How to Get Help</li>
              <li>About the Exam</li>
            </ul>

            {/* Chapter 2 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Overview of Information Security
            </h2>
            <ul className="list-disc ml-8">
              <li>Chapter Introduction</li>
              <li>Common Terms (Hack Value, Vulnerability, Exploit, Payload)</li>
              <li>Zero Day Attack</li>
              <li>Daisy Chaining</li>
              <li>QUIZ SOLUTION: Overview of Information Security - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 3 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Overview of Information Security Threats and Attacks
            </h2>
            <ul className="list-disc ml-8">
              <li>Chapter Introduction</li>
              <li>Threats vs Attacks</li>
              <li>Motives and Reasons Behind Cyber Security Attacks</li>
              <li>Means by Which Hackers Gain Access to Systems and Networks</li>
              <li>Cloud Computing Threats</li>
              <li>Advanced Persistent Threats</li>
              <li>Viruses and Worms</li>
              <li>Ransomware</li>
              <li>Mobile Threats</li>
              <li>Modern Age Information Warfare</li>
              <li>Insider Attacks</li>
              <li>Phishing</li>
              <li>Web Application Threats</li>
              <li>Classification of Threats: Network, Host, Application</li>
              <li>Classification of Attacks</li>
              <li>Botnets</li>
              <li>Laws, Standards, and Regulations</li>
              <li>QUIZ SOLUTION: Overview of Information Security Threats and Attacks - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 4 */}
            <h2 className="text-blue-500 font-bold mb-4">
              History of Hacking
            </h2>
            <ul className="list-disc ml-8">
              <li>A Brief Look at the History of Hacking</li>
              <li>Types of Hackers</li>
              <li>Ethical Hacking and Its Purpose</li>
              <li>Scope of Ethical Hacking</li>
              <li>Hacking Stages: Reconnaissance, Scanning, Gaining Access, Maintaining Access, Clearing Tracks</li>
              <li>QUIZ SOLUTION: History of Hacking - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 5 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Protecting Information
            </h2>
            <ul className="list-disc ml-8">
              <li>Chapter Introduction</li>
              <li>Information Assurance</li>
              <li>EISA and Information security management program</li>
              <li>Network Zoning</li>
              <li>Defense in Depth</li>
              <li>Policies, Workplace Security, Physical Security Controls</li>
              <li>Risk Management, Threat Modeling, Incident Management</li>
              <li>UBA - User Behavior Analytics, Access Controls, Data Leakage, Data Backup, Data Recovery</li>
              <li>QUIZ SOLUTION: Protecting Information - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 6 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Penetration Testing
            </h2>
            <ul className="list-disc ml-8">
              <li>What Is Penetration Testing?</li>
              <li>Good Penetration Test Consists of</li>
              <li>Why Do a Penetration Test</li>
              <li>Pre-Attack Phase, Attack Phase, Post-Attack Phase</li>
              <li>Security Testing Methodologies</li>
              <li>QUIZ SOLUTION: Penetration Testing - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 7 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Footprinting Process
            </h2>
            <ul className="list-disc ml-8">
              <li>About Footprinting</li>
              <li>Search Engine and Online Resources</li>
              <li>Whois, GeoIP Location, DNS Interrogation</li>
              <li>Email Header Analysis</li>
              <li>Cloning a Website, Extracting Metadata</li>
              <li>Nmap and Traceroute</li>
              <li>QUIZ SOLUTION: Footprinting - Questions answered and explained</li>
              <li>QUIZ</li>
              <li>HANDS-ON LAB: Extract Data from a File, Phishing Emails and GeoIP Lookup</li>
            </ul>

            {/* Chapter 8 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Reports and Countermeasures
            </h2>
            <ul className="list-disc ml-8">
              <li>Countermeasures and Best Practices</li>
              <li>Footprinting Report</li>
              <li>QUIZ SOLUTION: Reports and Countermeasures - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 9 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Network Scanning Techniques
            </h2>
            <ul className="list-disc ml-8">
              <li>Banner Grabbing</li>
              <li>Network Topologies, Scanning for Vulnerabilities, Enumeration</li>
              <li>QUIZ SOLUTION: Network Scanning Techniques - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 10 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Password Cracking Techniques
            </h2>
            <ul className="list-disc ml-8">
              <li>Password Cracking Basics, Using Hydra, HashCat</li>
              <li>QUIZ SOLUTION: Password Cracking Techniques - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 11 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Techniques for Creating and Maintaining Access to the Remote System
            </h2>
            <ul className="list-disc ml-8">
              <li>Reverse Shell, Keylogger, Decrypting Logs</li>
              <li>QUIZ SOLUTION: Persistent Remote Access - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 12 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Hiding Malicious Programs
            </h2>
            <ul className="list-disc ml-8">
              <li>Sandbox, Anti-Malware, Rootkits, Steganography</li>
              <li>QUIZ SOLUTION: Hiding Malicious Programs - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 13 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Covering Tracks and Destroying Evidence
            </h2>
            <ul className="list-disc ml-8">
              <li>Log Files, Examining and Removing Traces</li>
              <li>QUIZ SOLUTION: Covering Tracks and Destroying Evidence - Questions Answered and Explained</li>
              <li>QUIZ</li>
              <li>HANDS-ON LAB: Examine Log Files and Remove Traces</li>
            </ul>

            {/* Chapter 14 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Spoofing Techniques
            </h2>
            <ul className="list-disc ml-8">
              <li>ARP Spoofing, MAC Address Spoofing, DHCP Starvation</li>
              <li>QUIZ SOLUTION: Sniffing Techniques - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 15 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Attacking and Exploiting Wireless Networks
            </h2>
            <ul className="list-disc ml-8">
              <li>Capturing and Cracking WPA2 Handshake, Passkey</li>
              <li>QUIZ SOLUTION: Wireless Networks - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 16 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Tip, Tricks and Real Life Scenarios
            </h2>
            <ul className="list-disc ml-8">
              <li>Social Engineering Attacks</li>
              <li>QUIZ SOLUTION: Social Engineering - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 17 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Firewalls
            </h2>
            <ul className="list-disc ml-8">
              <li>What Is a Firewall, Configuration, Evading GeoIP Blocks</li>
              <li>QUIZ SOLUTION: Firewalls - Questions answered and explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 18 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Honeypots
            </h2>
            <ul className="list-disc ml-8">
              <li>Setting Up and Grabbing Traffic from a Honeypot</li>
              <li>QUIZ SOLUTION: Honeypots - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 19 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Let's Attack Web Servers and Web Applications!
            </h2>
            <ul className="list-disc ml-8">
              <li>OWASP, XSS, SQL Injections</li>
              <li>QUIZ SOLUTION: Attacking Web Servers and Web Applications - Questions Answered and Explained</li>
              <li>QUIZ</li>
            </ul>

            {/* Chapter 20 */}
            <h2 className="text-blue-500 font-bold mb-4">
              About Cryptography
            </h2>
            <ul className="list-disc ml-8">
              <li>Cryptography Basics, Common Algorithms, PKI</li>
            </ul>

            {/* Chapter 21 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Encryption, Decryption, Cryptanalysis and Attack Vectors
            </h2>
            <ul className="list-disc ml-8">
              <li>Cryptanalysis, Checksum, SSH RSA, Storage Encryption</li>
              <li>QUIZ SOLUTION: Cryptography - Questions Answered and Explained</li>
              <li>QUIZ</li>
              <li>HANDS-ON LAB: Encrypting Storage Devices</li>
            </ul>

            {/* Chapter 22 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Final
            </h2>
            <ul className="list-disc ml-8">
              <li>Final Practice Exam</li>
            </ul>

            {/* Chapter 23 */}
            <h2 className="text-blue-500 font-bold mb-4">
              Final SOLUTIONS
            </h2>
            <ul className="list-disc ml-8">
              <li>Final Practice Exam Question and Answer overview</li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};

export default EthicalHackingSyllabus;
