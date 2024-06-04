import React from 'react';

const JobDescription = () => {
  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md">
      <h2 className="font-semibold text-xl mb-2">Job Description</h2>
      
      <h3 className="font-semibold text-lg mb-2">About Us</h3>
      <p className="mb-4">
        N9 Solution is a leading IT training and service provider, dedicated to delivering high-quality educational and technological solutions. We pride ourselves on our innovative approach and exceptional customer service.
      </p>
      
      <h3 className="font-semibold text-lg mb-2">Position Overview</h3>
      <p className="mb-4">
        We are seeking a professional and courteous Front Desk Officer to join our dynamic team. The ideal candidate will be the first point of contact for our clients and visitors, playing a crucial role in creating a welcoming environment.
      </p>
      
      <h3 className="font-semibold text-lg mb-2">Key Responsibilities</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Greet and welcome visitors and clients with a positive, helpful attitude.</li>
        <li>Answer and direct phone calls in a polite and friendly manner.</li>
        <li>Assist clients and visitors with their inquiries and provide accurate<br /> &nbsp;&nbsp;&nbsp;information about our services.</li>
        <li>Manage and schedule appointments.</li>
        <li>Maintain the reception area in an orderly fashion.</li>
        <li>Perform administrative tasks such as filing, copying, and handling <br /> &nbsp;&nbsp;&nbsp;correspondence.</li>
        <li>Coordinate with other departments to ensure smooth office operations.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mb-2">Qualifications</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Education: Bachelor’s degree in any discipline.</li>
        <li>Experience: Minimum 1 year of experience in a similar role.</li>
        <li>Excellent verbal and written communication skills.</li>
        <li>Proficiency in Microsoft Office Suite.</li>
        <li>Strong organizational and multitasking skills.</li>
        <li>Ability to work independently and as part of a team.</li>
        <li>Friendly and professional demeanor.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mb-2">Why Join Us</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Opportunity to work in a fast-growing IT training and service provider.</li>
        <li>Friendly and supportive work environment.</li>
        <li>Career growth and development opportunities.</li>
        <li>Competitive salary and benefits package.</li>
      </ul>
      
      <h3 className="font-semibold text-lg mb-2">How to Apply</h3>
      <p className="mb-4">
        Interested candidates are invited to send their resume and a cover letter to <a href="mailto:nninesolutions@gmail.com">nninesolutions@gmail.com</a> with the subject line “Front Desk Officer Application - &lt;Your Name&gt;.”
      </p>
      
      <p className="mb-4">
        N9 Solution is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
      </p>

      <button
        onClick={() => window.location.href = 'mailto:nninesolutions@gmail.com?subject=Front%20Desk%20Officer%20Application%20-%20<Your%20Name>'}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
      >
        Apply via Gmail
      </button>
    </div>
  );
};

export default JobDescription;
