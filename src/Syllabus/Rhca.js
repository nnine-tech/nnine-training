import React from "react";

const RHCSAExamSyllabus = () => {
  return (
    <>
    <br />
    <br />
    <br />
      <div className="bg-blue-300 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-blue-500 text-3xl text-center font-bold mb-4">
            Red Hat Certified Administrator Syllabus
          </h1>
        <br />
        <h2 className="text-blue-500 text-2xl font-bold mb-4">Study Points for the Exam</h2>
        <p className="mb-4">RHCSA exam candidates should be able to accomplish the tasks below without assistance. These have been grouped into several categories.</p>
          
          {/* Understand and Use Essential Tools */}
          <h2 className="text-blue-500 font-bold mb-4">Understand and Use Essential Tools</h2>
          <ul className="list-disc ml-8">
            <li>Access shell prompt and issue commands with correct syntax</li>
            <li>Use input-output redirection (&gt;, &gt;&gt;, |, 2&gt;, etc.)</li>
            <li>Use grep and regular expressions to analyze text</li>
            <li>Access remote systems using SSH</li>
            <li>Log in and switch users in multiuser targets</li>
            <li>Archive, compress, unpack, and uncompress files using tar, gzip, and bzip2</li>
            <li>Create and edit text files</li>
            <li>Create, delete, copy, and move files and directories</li>
            <li>Create hard and soft links</li>
            <li>List, set, and change standard ugo/rwx permissions</li>
            <li>Locate, read, and use system documentation including man, info, and files in /usr/share/doc</li>
            <li>Create simple shell scripts</li>
            <li>Conditionally execute code (use of: if, test, [], etc.)</li>
            <li>Use looping constructs (for, etc.) to process file, command line input</li>
            <li>Process script inputs ($1, $2, etc.)</li>
            <li>Process output of shell commands within a script</li>
          </ul>

          {/* Operate Running Systems */}
          <h2 className="text-blue-500 font-bold mb-4">Operate Running Systems</h2>
          <ul className="list-disc ml-8">
            <li>Boot, reboot, and shut down a system normally</li>
            <li>Boot systems into different targets manually</li>
            <li>Interrupt the boot process in order to gain access to a system</li>
            <li>Identify CPU/memory intensive processes and kill processes</li>
            <li>Adjust process scheduling</li>
            <li>Manage tuning profiles</li>
            <li>Locate and interpret system log files and journals</li>
            <li>Preserve system journals</li>
            <li>Start, stop, and check the status of network services</li>
            <li>Securely transfer files between systems</li>
          </ul>

          {/* Configure Local Storage */}
          <h2 className="text-blue-500 font-bold mb-4">Configure Local Storage</h2>
          <ul className="list-disc ml-8">
            <li>List, create, delete partitions on MBR and GPT disks</li>
            <li>Create and remove physical volumes</li>
            <li>Assign physical volumes to volume groups</li>
            <li>Create and delete logical volumes</li>
            <li>Configure systems to mount file systems at boot by universally unique ID (UUID) or label</li>
            <li>Add new partitions and logical volumes, and swap to a system non-destructively</li>
            <li>Create and configure file systems</li>
            <li>Create, mount, unmount, and use vfat, ext4, and xfs file systems</li>
            <li>Mount and unmount network file systems using NFS</li>
            <li>Configure autofs</li>
            <li>Extend existing logical volumes</li>
            <li>Create and configure set-GID directories for collaboration</li>
            <li>Diagnose and correct file permission problems</li>
          </ul>

          {/* Deploy, Configure, and Maintain Systems */}
          <h2 className="text-blue-500 font-bold mb-4">Deploy, Configure, and Maintain Systems</h2>
          <ul className="list-disc ml-8">
              <li>Schedule tasks using `at` and `cron`</li>
              <li>Start and stop services and configure services to start automatically at boot</li>
              <li>Configure systems to boot into a specific target automatically</li>
              <li>Configure time service clients</li>
              <li>Install and update software packages from Red Hat Network, a remote repository, or from the local file system</li>
              <li>Modify the system bootloader</li>
          </ul>

          {/* Manage Basic Networking */}
          <h2 className="text-blue-500 font-bold mb-4">Manage Basic Networking</h2>
          <ul className="list-disc ml-8">
              <li>Configure IPv4 and IPv6 addresses</li>
              <li>Configure hostname resolution</li>
              <li>Configure network services to start automatically at boot</li>
              <li>Restrict network access using `firewall-cmd/firewalld`</li>
          </ul>

          {/* Manage Users and Groups */}
          <h2 className="text-blue-500 font-bold mb-4">Manage Users and Groups</h2>
          <ul className="list-disc ml-8">
              <li>Create, delete, and modify local user accounts</li>
              <li>Change passwords and adjust password aging for local user accounts</li>
              <li>Create, delete, and modify local groups and group memberships</li>
              <li>Configure superuser access</li>
          </ul>

          {/* Manage Security */}
          <h2 className="text-blue-500 font-bold mb-4">Manage Security</h2>
          <ul className="list-disc ml-8">
          <li>Configure firewall settings using `firewall-cmd/firewalld`</li>
              <li>Manage default file permissions</li>
              <li>Configure key-based authentication for SSH</li>
              <li>Set enforcing and permissive modes for SELinux</li>
              <li>List and identify SELinux file and process context</li>
              <li>Restore default file contexts</li>
              <li>Manage SELinux port labels</li>
              <li>Use boolean settings to modify system SELinux settings</li>
              <li>Diagnose and address routine SELinux policy violations</li>
          </ul>

          {/* Manage Containers */}
          <h2 className="text-blue-500 font-bold mb-4">Manage Containers</h2>
          <ul className="list-disc ml-8">
          <li>Find and retrieve container images from a remote registry</li>
              <li>Inspect container images</li>
              <li>Perform container management using commands such as `podman` and `skopeo`</li>
              <li>Build a container from a Containerfile</li>
              <li>Perform basic container management such as running, starting, stopping, and listing running containers</li>
              <li>Run a service inside a container</li>
              <li>Configure a container to start automatically as a systemd service</li>
              <li>Attach persistent storage to a container</li>
          </ul>
          <br />
          <p className="mb-4">As with all Red Hat performance-based exams, configurations must persist after reboot without intervention.</p>
          <p className="mb-4 underline">Red Hat Certified System Administrator (RHCSA) Exam Objectives</p>
        </div>
        
      </div>
    </>
  );
};

export default RHCSAExamSyllabus;
