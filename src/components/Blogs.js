"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Blogs = () => {
  const router = useRouter();

  const handleBlogDetails = (id) => {
    router.push(`/Blog/${id}`);
  };

  // const blogData = [
  //   {
  //     id: 1,
  //     title:
  //       "If you want a specific word count, you can trim the text in JavaScript.",
  //     description:
  //       "To limit the number of words displayed in your text in React with Tailwind CSS, you can use CSS to set a maximum number of lines, or use JavaScript to trim the text to a specific word count.",
  //     image: "/openShift.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "Understanding React Hooks and Their Usage.",
  //     description:
  //       "React hooks have changed the way we write functional components in React. Learn how to use useState, useEffect, and custom hooks to manage state and side effects in your applications.",
  //     image: "/mern3.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Understanding React Hooks and Their Usage.",
  //     description:
  //       "React hooks have changed the way we write functional components in React. Learn how to use useState, useEffect, and custom hooks to manage state and side effects in your applications.",
  //     image: "/mern3.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Understanding React Hooks and Their Usage.",
  //     description:
  //       "React hooks have changed the way we write functional components in React. Learn how to use useState, useEffect, and custom hooks to manage state and side effects in your applications.",
  //     image: "/mern3.png",
  //   },
  // ];

  return (
    <div className="bg-[#F9F9F9]">
      {/* Hero Section */}
      <div className="w-full lg:h-[500px] h-[500px] bg-cover bg-center bg-[url('/blogbg.svg')] py-20 md:py-60 flex justify-center items-center ">
        <div className="flex flex-col w-11/12 max-w-[500px] lg:mt-[100px] gap-6 md:gap-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-Quicksand font-bold text-white">
            Our <strong className="text-[#FFCF59]">Blogs</strong>
          </h1>
          <h1 className="text-center text-white text-[20px] md:text-[40px] font-Quicksand font-[700]">
            Sorry, There is No Blogs Available...
          </h1>
        </div>
      </div>
      <div>
        {/* WhatsApp Icon wrapped in a link */}
        <a
          href="https://wa.me/9779851359759"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatapp.svg"
            alt="WhatsApp Icon"
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] fixed right-5"
            style={{
              top: "50%",
              transform: "translateY(-50%)", // Keeps the icon centered vertically
              zIndex: "9999",
              animation: "spin 4s linear infinite", // Ensures the icon spins
            }}
          />
        </a>
      </div>
      {/* Keyframes for spinning animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Blog Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 -mt-40 lg:-mt-40 md:-mt-44 px-4 sm:px-10 lg:px-20 xl:px-40 2xl:px-60 pb-11 md:h-[400px] border border-red-700"> */}

      {/* {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] rounded-2xl shadow-xl p-6 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={blog.image}
              alt="Blog Image"
              className="rounded-t-2xl w-full h-[200px] object-cover"
            />

            <div className="mt-6">
              <h1 className="font-Quicksand text-lg md:text-xl font-bold text-[#004AAD] line-clamp-2">
                {blog.title}
              </h1>
              <h2 className="font-Quicksand mt-3 text-sm md:text-base text-gray-700 line-clamp-3">
                {blog.description}
              </h2>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                onClick={() => handleBlogDetails(blog.id)}
                className="bg-[#0060FF] text-white font-bold rounded-full px-4 py-2 hover:bg-[#004AAD] transition duration-300"
              >
                Read More
              </button>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default Blogs;
