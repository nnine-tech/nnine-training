"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const topRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY === 0;
      setShowNav(isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={topRef} style={{ position: "absolute", top: 0 }} />

      {showNav && (
        <div className="flex items-center justify-center">
          <nav className="fixed top-0 left-0 right-0 lg:mx-auto w-full max-w-screen-xl z-30 transition duration-300 ease-in-out mb-16 rounded-full bg-[#E9E9E9] shadow-lg mt-16">
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
              <div className="lg:hidden">
                <button
                  className="p-2 rounded-lg text-blue-900"
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
              </div>

              {/* Navigation Links */}
              <ul
                className={`absolute lg:static lg:flex lg:flex-row lg:space-x-6 lg:p-5 bg-white lg:bg-transparent w-full lg:w-auto transition-all duration-300 ease-in-out ${
                  isOpen ? "top-16 left-0 block" : "top-16 left-0 hidden"
                }`}
              >
                <li>
                  <Link
                    href="/Popularcourses"
                    className="font-medium font-Quicksand text-[#6175AD] text-xl hover:text-blue-600 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Trainer"
                    className="font-medium font-Quicksand text-[#6175AD] hover:text-blue-600 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
                  >
                    Trainer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Career"
                    className="font-medium font-Quicksand text-[#6175AD] hover:text-blue-600 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="/About"
                    className="font-medium font-Quicksand text-[#6175AD] hover:text-blue-600 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact"
                    className="font-medium font-Quicksand text-[#6175AD] hover:text-blue-600 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl text-xl"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/Popularcourses">
                    <button className="font-medium font-Quicksand inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl border border-[#050599] text-[#0F0FAE] hover:text-blue-600 ml-4 mr-4 lg:ml-20 lg:w-[149px] text-xl">
                      Get Started
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavBar;