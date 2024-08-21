"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const router=useRouter();

  return (
    <footer className="bg-[#004AAD]  h-auto w-full shadow-[#08418C] flex flex-col">
      <div className="max-w-[1252px] mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-14 mt-8">
          <div className="flex-1  md:mr-8 ">
            <h1 className="text-[30px] font-bold text-[#FFFFFF] font-robotoSlab">
              “Crafting the Future with Technology”
            </h1>
          </div>
          <div className="flex gap-4 mt-5 md:mt-0">
            <button className="h-[55px] w-[190px] rounded-[5px] p-2.5 text-[#FFFFFF] bg-[#FFFFFF]" >
              <p className="text-[20px] font-normal font-robotoSlab text-[#004AAD]">GET STARTED</p>
            </button>
            <button
              // onClick={() => router.push("/contact")}
              className="h-[55px] w-[190px] rounded-[5px] p-2.5  bg-[#2AE327] shadow-[#2F1773] " onClick={()=>{router.push('/Contact')
              }}
            >
              <p className="text-[20px] font-normal font-robotoSlab ">CONTACT US</p>
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t-2 border-[#FFFFFF] mb-5" />

        {/* Main Content Sections */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* N9 Solution */}
          <div className="flex-1 w-[377px] mb-5 md:mb-0  gap-[10px]">
            <h1 className="text-[28px] font-bold text-[#FFFFFF] font-robotoSlab mb-[20px]">N9 Solution</h1>
            <p className="text-[15px]  text-[#FFFFFF] font-poppins w-[294px]">
              "Innovative IT solutions for software development, system
              integration, and digital transformation."
            </p>
          </div>

          {/* Entity Types */}
          <div className="flex-1 max-w-[163px] mb-5 md:mb-0">
            <h1 className="text-[20px] font-bold text-[#FFFFFF] font-robotoSlab gap-[10px] p-[10px,10px,10px,0px] mb-[20px]">Entity Types</h1>
            <ul className="text-[15px] font-normal text-[#FFFFFF] space-y-1">
              <li className="font-poppins text-[15px] cursor-pointer ">Security</li>
              <li className="font-poppins text-[15px] cursor-pointer">Privacy Policy</li>
              <li className="font-poppins text-[15px] cursor-pointer">Partners</li>
              <li className="font-poppins text-[15px] cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 w-[235px] mb-5 md:mb-0">
            <h1 className="text-[20px] font-bold text-[#FFFFFF] font-robotoSlab mb-[20px]">Services</h1>
            <ul className="text-[15px] font-normal text-[#FFFFFF] space-y-1 w-[235px] font-poppins">
              <li className="font-poppins text-[15px] cursor-pointer">DevOps Service</li>
              <li className="font-poppins text-[15px] cursor-pointer">Web 3.0 DevOps Service</li>
              <li className="font-poppins text-[15px] cursor-pointer">Cloud Services & Migrations</li>
              <li className="font-poppins text-[15px]">General IT Consultations</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="flex-1 max-w-[163px] mb-5 md:mb-0">
            <h1 className="text-[20px] font-bold text-[#FFFFFF] font-robotoSlab mb-[20px]">Resources</h1>
            <ul className="text-[15px] font-normal text-[#FFFFFF] space-y-1">
              <li className="font-poppins text-[15px] cursor-pointer">FAQs</li>
              <li className="font-poppins text-[15px] cursor-pointer">Contact Us</li>
              <li className="font-poppins text-[15px] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-1 max-w-[222px] mb-5 md:mb-0">
            <h1 className="text-[20px] font-bold text-[#FFFFFF] font-robotoSlab mb-[20px]">Contact Us</h1>
            <p className="text-[12px] font-normal text-[#FFFFFF] mb-[10px]">
              nninesolution@gmail.com
            </p>
            <div className="flex h-[28px] w-[118px]  gap-[19px]">
              <Link href="https://www.facebook.com/nninesolution"><img className="h-[28px] w-[28px] cursor-pointer" src="/ic_baseline-facebook (2).svg" alt="" /></Link>
            
            <Link href="https://np.linkedin.com/company/n9-solution?trk=public_profile_topcard-current-company"> <img className="h-[28px] w-[28px] cursor-pointer"  src="/mingcute_linkedin-fill.svg" alt="" /></Link>
              
              <Link href="https://www.instagram.com/n9solution/"><img className="h-[28px] w-[28px] cursor-pointer" src="/mdi_instagram.svg" alt="" /></Link>
              
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center ">
          <p className="text-[12px] font-normal text-[#FFFFFF] mt-[100px]">
            Copyright © 2024 Nninesolutions. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;