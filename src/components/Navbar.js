import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-[90rem] mx-auto mt-5 flex items-center justify-between">
      <div>
        <Link href={"/"}>
          <img className="h-10 w-15" src="/logo1.png" alt="N9 Logo" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">Contact Us</li>
          <li className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">About</li>
          <li className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">Popular Courses</li>
          <li className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">Blogs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
