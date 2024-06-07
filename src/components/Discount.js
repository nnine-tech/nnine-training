import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

export default function LearnMore() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-4">
        <div className="p-4 lg:flex lg:justify-between lg:items-start">
          <div className="lg:w-1/2">
            {/* <h2 className="font-bold mb-4 sm:text-3xl md:text-4xl lg:text-5xl">N9 Solution Offer for SEE & +2 appeared Students 2081</h2> */}
            <h1 className="font-bold mb-4 underline sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Learn More About the Discount</h1>
            <p className="text-lg max-w-prose mb-4 sm:text-base md:text-lg lg:text-lg xl:text-xl">
              We are offering Rs. 9,999|- for students who have appeared for the SEE & +2 exams. 
              This special offer is designed to help students take the next step in their education 
              journey without financial strain.
            </p>
            <p className="text-lg max-w-prose mb-4 sm:text-base md:text-lg lg:text-lg xl:text-xl">
              To avail of this discount, please provide your +2 exam proof during the enrollment process. 
              If you have any questions or need further assistance, feel free to contact our support team.
            </p>
            <Link href="/" legacyBehavior>
              <a className="text-blue-500 hover:underline">Go Back to Home</a>
            </Link>
            <div className="flex justify-center mb-8">
              <a href='https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link' className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full flex items-center">
                Enroll Now <FiArrowRight className="ml-2" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <img src="/+2.jpg" alt="plus 2 offer" className="mb-4 h-[700px] lg:block hidden" />
          </div>
        </div>
      </div>
    </>
  );
}
