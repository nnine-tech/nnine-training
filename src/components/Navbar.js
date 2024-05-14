import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full mx-auto mt-5 flex items-center justify-between">
      <div>
        <Link href={"/"}>
          <img className="h-10 w-15" src="/logo1.png" alt="N9 Logo" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>Contact Us</li>
          <li>About</li>
          <li>Popular Courses</li>
          <li>Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
