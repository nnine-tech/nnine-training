import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const offers = [
  {
    id: 1,
    title: "+2 Exam Appeared Students",
    startDate: "2023-05-25",
    endDate: "2023-06-15",
    status: "Current"
  },
  {
    id: 2,
    title: "T20 worldcup Offer",
    startDate: "2023-05-25",
    endDate: "2023-06-15",
    status: "Current"
  },
  {
    id: 3,
    title: "Offer for SEE Appeared Students - 30% Off",
    startDate: "2024-04-14",
    endDate: "2024-05-31",
    status: "Expired"
  },
  {
    id: 4,
    title: "New Year 2081 Offer",
    startDate: "2024-04-09",
    endDate: "2024-04-12",
    status: "Expired"
  },
  {
    id: 5,
    title: "N9 Solution chaitra dhashian Offer",
    startDate: "2023-11-09",
    endDate: "2023-11-10",
    status: "Expired"
  },
];

export default function LearnMore() {
  return (
    <>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 p-4">
        <div className="lg:w-2/3 flex flex-col justify-center items-center mb-8 lg:mb-0">
        <div className="p-4 text-center">
        <h2 className="text-5xl font-bold mb-4">N9 Solution Offer for SEE & +2 appeared Students 2081</h2>
        <img src="/+2.jpg" alt="plus 2 offer" className="mb-4 h-[700px] hidden lg:block" />
        </div>
          <h1 className="text-3xl font-bold mb-4 underline">Learn More About the Discount</h1>
          <p className="text-lg max-w-prose mb-4">
            We are offering Rs. 9,999|- for students who have appeared for the +2 exams. 
            This special offer is designed to help students take the next step in their education 
            journey without financial strain.
          </p>
          <p className="text-lg max-w-prose mb-4">
            To avail of this discount, please provide your +2 exam proof during the enrollment process. 
            If you have any questions or need further assistance, feel free to contact our support team.
          </p>
          <h2 className="text-2xl font-bold mb-4 underline">Terms and Conditions for +2 2081 Students</h2>
          <ul className="list-disc pl-8"> 
          <li>
            <p>The Discount offer will be valid from 1st Jestha, 2081 (14th May 2024) to 15th Ashar, 2081 (29th June 2024).</p>
          </li>
          <li>
            <p>Interested candidates are more than welcome to book their seats for their interested courses via either online means or by visiting the office itself.</p>
          </li>
          <li>
            <p>You can book your seat through these online mediums: eSewa, Connect IPS & Khalti. Please keep in mind that the minimum amount that you can book your seat with is NPR. 2,000/-.</p>
          </li>
          <li>
            <p>Please note that you will have to make at least 2,000 payment, on the first day of the class itself and remaining amount needs to be cleared within 20 days. Else the offer will automatically get collapsed.</p>
          </li>
          <li>
            <p>Kindly be aware that the payment made upon booking is non-refundable and non-transferrable.</p>
          </li>
          <li>
            <p>Once you have booked your seat, you can take the course anytime later.</p>
          </li>
          <li>
            <p>This offer is applicable to individual students and is not valid for corporate clients.</p>
          </li>
          <li>
            <p>If you want to book your seat for multiple courses to take advantage of this offer, you are allowed to do so.</p>
          </li>
          </ul>
          <Link href="/" legacyBehavior>
            <a className="text-blue-500 hover:underline">Go Back to Home</a>
          </Link>
        </div>
        
        <div className="lg:w-1/3">
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-col justify-center items-center mb-8 lg:mb-0">
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfuHU-I10NxIU1XH37Yv7lik4pp3aP3WS18QwiU-NWYhDRh8g/viewform?usp=sf_link' className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full flex items-center">
          Enroll Now <FiArrowRight className="ml-2" />
          </a>


          <br />
          <h2 className="text-2xl font-bold mb-4">Our Offered Courses</h2>
          <div className="space-y-4">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-orange-500 font-bold">{offer.status}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-sm">Offer Start Date: <span className="text-green-700">{offer.startDate}</span></p>
                <p className="text-sm">Offer End Date: <span className="text-red-700">{offer.endDate}</span></p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
