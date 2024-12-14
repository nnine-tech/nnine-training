"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#08418C] w-full  lg:h-[520px] lg:w-full xl:w-auto">
        <div className="container mx-auto px-4 py-10 lg:py-20">
          <div className="text-center lg:text-left">
            <h1 className="text-white font-Quicksand font-bold text-2xl lg:text-[30px]  mb-6 lg:ml-11 leading-[22.5px]">
              “Crafting the Future with Technology”
            </h1>
          </div>

          {/* <hr className="border-t-2 border-white my-8 lg:w-[1150px] lg:mx-auto lg:my-12" /> */}
          <hr className="border-t-2 border-white my-8 mx-4 mx:ml-10 sm:mx-6 md:mx-8 lg:w-[93%] lg:ml-10 lg:mx-auto xl:w-[92%] xl:ml-10 lg:my-12 2xl:w-[90%]" />

          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
            <div className=" lg:w-[377px]  lg:ml-11 flex-1">
              <h2 className="text-white font-Quicksand text-xl md:text-2xl lg:text-[28px] font-bold mb-2 lg:mb-4 text-center lg:text-left leading-[22.5px]">
                N9 Solution
              </h2>
              <p className="text-white text-sm md:text-base lg:text-[15px] text-center lg:text-left leading-[22.5px]">
                5th Floor White House Building
                <br />
                Chabahil, Kathmandu
                <br />
                Nepal
              </p>
            </div>

            <div className="lg:w-[163px] flex-1">
              <h2 className="text-white text-center font-Quicksand text-xl md:text-2xl lg:text-[20px] font-bold mb-2 lg:mb-4 lg:text-left leading-[22.5px]">
                LINKS
              </h2>
              <ul className="text-white text-sm md:text-base lg:text-[15px] space-y-2 lg:space-y-0 text-center lg:text-left font-poppins cursor-pointer leading-[22.5px]">
                <Link href="/About">
                  <li>About Us</li>
                </Link>
                <Link href="/Popularcourses">
                  <li>Courses</li>
                </Link>
                <Link href="/Contact">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>

            <div className="lg:w-[235px] flex-1">
              <h2 className="text-white font-Quicksand text-xl md:text-2xl lg:text-[20px] font-bold mb-2 lg:mb-4 text-center lg:text-left leading-[22.5px]">
                SERVICES
              </h2>
              <ul className="text-white text-sm md:text-base lg:text-[15px] space-y-2 lg:space-y-0 text-center lg:text-left cursor-pointer font-[poppins] leading-[22.5px]">
                <li>DevOps Services</li>
                <li>Web 3.0 DevOps Service</li>
                <li>Cloud Services & Migrations</li>
                <li>General IT Consultations</li>
              </ul>
            </div>

            <div className="flex-1 lg:mr-8">
              <h2 className="text-white font-Quicksand text-xl md:text-2xl lg:text-[20px] font-bold mb-2 lg:mb-4 text-center">
                SOCIAL MEDIA LINKS
              </h2>
              <p className="text-white text-sm md:text-base lg:text-[12px] mb-4 text-center font-poppins">
                FOLLOW US ON SOCIAL MEDIA.
              </p>
              <div className="flex justify-center lg:justify-center gap-4 cursor-pointer">
                <Link
                  href="https://www.facebook.com/nninesolution"
                  target="_blank"
                >
                  <img
                    className="h-8 w-8 lg:h-[30px] lg:w-[30px] mt-0.5 cursor-pointer"
                    src="/FacebookIcon.svg"
                    alt="Facebook"
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-facebook.svg")
                    }
                  />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/n9-solution/posts/?feedView=all"
                  target="_blank"
                >
                  <img
                    className="h-8 w-8 lg:h-[30px] lg:w-[30px] cursor-pointer"
                    src="/LinkedinIcon.svg"
                    alt="LinkedIn"
                    onError={(e) =>
                      (e.currentTarget.src = "/fallback-linkedin.svg")
                    }
                  />
                </Link>

                <Link
                  href="https://www.instagram.com/n9solution/"
                  target="_blank"
                >
                  <img
                    className="h-8 w-8 lg:h-[30px] lg:w-[30px] cursor-pointer mt-0.5"
                    src="/InstagramIcon.svg"
                    alt="Instagram"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <p className="text-white text-sm md:text-base font-poppins">
              Copyright © 2024 Nninesolution. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
