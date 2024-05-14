import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <Link href="/contactus">
        <a className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">
          Contact Us
        </a>
      </Link>
      <Link href="/about">
        <a className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">
          About
        </a>
      </Link>
      {/* 
            <Link href="#">
                <a className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">Trainings</a>
            </Link>
            */}
      <Link href="/courselist">
        <a className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">
          Popular Courses
        </a>
      </Link>
      {/* 
            <Link href="/trainers">
                <a className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">Trainers</a>
            </Link>
            */}
      <Link href="#">
        <a className="font-bold text-blue-900 hover:bg-blue-100 inline-block md:inline-flex items-center justify-center w-auto px-4 py-2 rounded-xl">
          Blogs
        </a>
      </Link>
    </>
  );
};

export default NavLinks;
