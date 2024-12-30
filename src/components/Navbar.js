"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [top, setTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [clicked, setClicked] = useState("");
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleGetStartedClick = () => {
    setClicked("getStarted");
    setIsOpen(false); // Close the nav menu on mobile after clicking the 'Get Started' button
  };

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset > 10);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // Close the menu on mobile when a link is clicked
  };

  const linkClasses = (path) =>
    `relative text-black hover:text-blue-600 font-montserrat ${
      activeLink === path ? "text-blue-600" : ""
    } ${
      activeLink === path
        ? "after:scale-x-100"
        : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  const underlineClasses =
    "after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-4px] after:h-[2px] after:bg-blue-600 after:transition-transform after:duration-300 after:origin-left";

  return (
    <nav
      className={`fixed top-0 w-full h-[70px] z-30 transition duration-300 ease-in-out mb-16 bg-white shadow-lg flex items-center justify-between ${
        !top ? "bg-gray-100" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0 h-[80px]">
        {/* Logo section */}
        <div className="flex items-center">
          <Link href="/" onClick={() => handleLinkClick("/")}>
            <Image
              src="/logo2.svg"
              alt="N9 Solution Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Navbar section */}
        <div className="hidden lg:flex items-center justify-center flex-1 space-x-10 font-medium font-Quicksand text-lg">
          <Link
            href="/"
            className={`${linkClasses("/")} ${underlineClasses}`}
            onClick={() => handleLinkClick("/")}
          >
            Home
          </Link>
          <Link
            href="/Popularcourses"
            className={`${linkClasses("/Popularcourses")} ${underlineClasses}`}
            onClick={() => handleLinkClick("/Popularcourses")}
          >
            Courses
          </Link>
          <Link
            href="/Career"
            className={`${linkClasses("/Career")} ${underlineClasses}`}
            onClick={() => handleLinkClick("/Career")}
          >
            Career
          </Link>
          <Link
            href="/About"
            className={`${linkClasses("/About")} ${underlineClasses}`}
            onClick={() => handleLinkClick("/About")}
          >
            About Us
          </Link>
          <Link
            href="/Blog"
            className={`${linkClasses("/Blog")} ${underlineClasses}`}
            onClick={() => handleLinkClick("/Blog")}
          >
            Blogs
          </Link>
          <Link
            href="/Contact"
            className={`${linkClasses("/Contact")} ${underlineClasses}`}
            onClick={() => handleLinkClick("/Contact")}
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger menu button */}
        <div className="lg:hidden">
          <button className="p-2 rounded-lg text-black" onClick={handleClick}>
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

        {/* "Build with Us" button */}
        <div className="hidden lg:flex items-center">
          <Link href="/Popularcourses">
            <button
              className={`font-medium font-Quicksand inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl border border-[#050599] text-[#0F0FAE] hover:text-blue-600 ml-4 mr-4 lg:ml-20 lg:w-[149px] text-xl ${
                clicked === "getStarted" && "text-blue-600"
              } mt-2 lg:mt-0`} // Add margin-top for mobile views
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden font-Quicksand font-medium text-md">
          <div className="flex flex-col items-start p-4">
            <Link
              href="/"
              className={`${linkClasses("/")} py-2`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <Link
              href="/Popularcourses"
              className={`${linkClasses("/Popularcourses")}  py-2`}
              onClick={() => handleLinkClick("/Popularcourses")}
            >
              Courses
            </Link>
            <Link
              href="/Career"
              className={`${linkClasses("/Career")} py-2`}
              onClick={() => handleLinkClick("/Career")}
            >
              Career
            </Link>
            <Link
              href="/About"
              className={`${linkClasses("/About")} py-2`}
              onClick={() => handleLinkClick("/About")}
            >
              About Us
            </Link>
            <Link
              href="/Blog"
              className={`${linkClasses("/Blog")}  py-2`}
              onClick={() => handleLinkClick("/Blog")}
            >
              Blogs
            </Link>
            <Link
              href="/Contact"
              className={`${linkClasses("/Contact")} py-2`}
              onClick={() => handleLinkClick("/Contact")}
            >
              Contact Us
            </Link>
            <Link href="/Popularcourses">
              <button
                className={`font-medium font-Quicksand inline-block md:inline-flex items-center justify-start w-auto px-4 py-2 rounded-xl border border-[#050599] text-[#0F0FAE] hover:text-blue-600 text-xl ${
                  clicked === "getStarted" && "text-blue-600"
                } mt-2 lg:mt-0`}
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
