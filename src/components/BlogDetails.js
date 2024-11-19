"use client";
import React from "react";

const BlogDetails = ({ blogsId }) => {
  if (!blogsId) {
    return <div>Loading...</div>;
  }

  // Blog data with all required properties
  const blogData = {
    1: {
      name1: "Nirjala",
      name2: "Development",
      description: "This is a blog post about web development.",
      introduction: "Introduction",
      introductiondetails:
        "Lorem ipsum dolor sit amet consectetur. Viverra urna dignissim fermentum bibendum pretium. Pretium vel interdum massa sagittis in nulla. Diam sit vel lacus fames eu. Arcu dignissim dictum magna est vestibulum elementum mus. Quam non turpis ipsum ac sit dignissim tellus eu elementum. Egestas tristique etiam risus pulvinar cursus at in.",
      image: "/carousel2.png",
      sections: [
        {
          heading: "Details",
          text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus..",
        },
        {
          heading: "Conclusion",
          text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        },
      ],
    },
    2: {
      name1: "Ram",
      name2: "Frontend",
      description: "This is a blog post about frontend development.",
      introduction: "Introduction",
      introductiondetails:
        "Frontend development involves creating the user-facing portion of websites.",
      image: "/UIUX.jpg",
      sections: [
        {
          heading: "Details",
          text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus..",
        },
        {
          heading: "Conclusion",
          text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.",
        },
      ],
    },
    3: {
        name1: "Ram",
        name2: "Frontend",
        description: "This is a blog post about frontend development.",
        introduction: "Introduction",
        introductiondetails:
          "Frontend development involves creating the user-facing portion of websites.",
        image: "/UIUX.jpg",
        sections: [
          {
            heading: "Details",
            text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus..",
          },
          {
            heading: "Conclusion",
            text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.",
          },
        ],
      },

      4: {
        name1: "Python",
        name2: "Developer",
        description: "This is a blog post about frontend development.",
        introduction: "Introduction",
        introductiondetails:
          "Frontend development involves creating the user-facing portion of websites.",
        image: "/RHCA.jpG",
        sections: [
          {
            heading: "Details",
            text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus..",
          },
          {
            heading: "Conclusion",
            text: "Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.Lorem ipsum dolor sit amet consectetur. Ac tempus nullam scelerisque tellus laoreet dui. Nunc ut penatibus id dictum. Vitae volutpat auctor tellus erat varius. Aliquet vestibulum ridiculus.",
          },
        ],
      },
    
  };

  const blogs = blogData[blogsId];

  if (!blogs) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full lg:h-screen h-[400px] bg-cover bg-center bg-[url('/blogdetailsbg.svg')] py-20 md:py-60 flex flex-col justify-center items-center">
        <div className="w-full max-w-[600px] px-4 flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl font-bold font-Quicksand text-white text-center md:text-left">
            {blogs.name1}{" "}
            <span className="font-Quicksand text-4xl md:text-5xl font-bold text-[#FFCF59]">
              {blogs.name2}
            </span>
          </h1>
          <h2 className="text-white font-semibold font-Quicksand text-lg md:text-xl text-center md:text-left">
            {blogs.description}
          </h2>
        </div>
      </div>
      <div className="">
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
      {/* Content Section */}
      <div className="flex flex-col md:flex-row px-4 md:px-20 gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="font-Quicksand text-2xl md:text-3xl text-[#0D08FF] font-bold">
            {blogs.introduction}
          </h1>
          <h2 className="font-Quicksand text-[#3A3A3E] font-medium text-sm md:text-base">
            {blogs.introductiondetails}
          </h2>
        </div>
        <div className="flex-1">
          <img
            src={blogs.image}
            alt={`${blogs.name1} featured`}
            className="w-full max-w-[603px] h-auto mx-auto md:mx-0 lg:-mt-48"
          />
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="pb-5 px-4 md:px-20 flex flex-col gap-14">
        {blogs.sections.map((section, index) => (
          <div key={index} className="px-1 flex flex-col gap-5">
            <h1 className="font-Quicksand text-2xl md:text-3xl text-[#0D08FF] font-bold">
              {section.heading}
            </h1>
            <h2 className="font-Quicksand text-[#3A3A3E] font-medium text-sm md:text-base">
              {section.text}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
