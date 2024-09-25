"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [top, setTop] = useState(true);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 rounded-full bg-[#E9E9E9] shadow-lg`}
    >
      <div className="flex items-center justify-between py-1 px-6">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center">
            <img
              src="/logo2.svg"
              alt="N9 Solution Logo"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Hamburger button (for mobile view) */}
        <div className="group flex items-center">
          <button
            className="p-2 rounded-lg lg:hidden text-blue-900"
            onClick={handleClick}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`lg:flex lg:flex-row lg:space-x-6 lg:p-5 ${
              isOpen ? "block" : "hidden"
            } absolute top-16 right-0 bg-white lg:relative lg:bg-transparent lg:top-auto lg:right-auto lg:w-auto`}
          >
            <li>
              <Link
                href="/Popularcourses"
                className="font-medium font-Quicksand text-[#6175AD] text-xl hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/Trainer"
                className="font-medium font-Quicksand  text-[#6175AD] hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
              >
                Trainer
              </Link>
            </li>
            <li>
              <Link
                href="/Career"
                className="font-medium font-Quicksand text-[#6175AD] hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="font-medium font-Quicksand  text-[#6175AD] hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="font-medium font-Quicksand  text-[#6175AD] hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/Popularcourses">
                <button className="font-medium font-Quicksand inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl border border-[#050599] text-[#0F0FAE] hover:bg-blue-100 ml-4  mr-4 lg:ml-20 lg:w-[149px] text-xl">
                  Get Started
                </button>
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
