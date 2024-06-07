import Link from 'next/link';
import LearnMore from "@/components/Discount";

const Banner = () => {
  return (
    <>
    <div className="flex justify-center items-center h-10 bg-gradient-to-r from-red-500 to-orange-500 px-4">
      
      <div className="flex justify-center items-center w-full max-w-screen-lg">
        <div className="text-white text-sm ml-4 font-semibold">
          Rs. 9,999 for SEE & +2 Exam Appeared Students
        </div>
        
        <Link href="/Discount" legacyBehavior>
          <a className="bg-purple-600 text-white flex items-center justify-center h-8 px-3 py-1 ml-2 underline">
            Offers
          </a>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Banner;
