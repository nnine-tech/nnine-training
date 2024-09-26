"use client";
import React, { useState } from "react";

const AWSDevelopmentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [courseselection, setCourseSelection] = useState("Full Stack Mern");
  const [message, setMessage] = useState("");

  let courses = [
    { label: "AWS Development", value: "AWS Development" },
    { label: "Aws Cloud Practitioner", value: "Aws Cloud Practitioner" },
    { label: "Python with Django", value: "Python Django" },
    { label: "Full Stack Mern", value: "full stack mern" },
    { label: "Devops", value: "devops" },
    { label: "Flutter", value: "flutter" },
    { label: "Ui/Ux design", value: "ui/ux design" },
    { label: "Python", value: "python" },
    { label: "Digital Marketing", value: "digital marketing" },
    { label: "Ethical Hacking", value: "ethical hacking" },
    { label: "Data Science and ML", value: "data science and ml" },
  ];
  let onSubmit = (e) => {
    e.preventDefault();
  };
  let data = {
    name: name,
    email: email,
    phonenumber: phonenumber,
    courseselection: courseselection,
    message: message,
  };
  console.log(data);
  return (
    <div className="flex gap-12 flex-col mr-4 -mt-6">
      <div className="w-[390px] p-[10px] h-[650px]  bg-[#F6F9ED] rounded-xl shadow-bottom flex flex-wrap flex-col">
        <h1 className="text-xl font-medium font-poppins text-center text-[#000080] mb-[20px]">
          Quick Enquiry
        </h1>
        <div className="ml-4 font-poppins mr-4">
          <form onSubmit={onSubmit}>
            <label htmlFor="name" className="font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Input your name"
              className="border-2 border-[#0820FF] rounded-md p-2 w-full h-[44px] focus:outline-none focus:border-[#0820FF] mb-4"
            />

            <label htmlFor="email" className="font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Input your email"
              className="border-2 border-[#0820FF] rounded-md p-2 w-full h-[44px] focus:outline-none focus:border-[#0820FF] mb-4"
            />

            <label htmlFor="phonenumber" className="font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="number"
              id="phonenumber"
              value={phonenumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Input your phone number"
              className="border-2 border-[#0820FF] rounded-md p-2 w-full h-[44px] focus:outline-none focus:border-[#0820FF] mb-4"
            />

            <label htmlFor="courseselection" className="font-semibold mb-2">
              Course Selection
            </label>
            <select
              className="border-2 border-[#0820FF] rounded-md p-2 w-full h-[44px] focus:outline-none focus:border-[#0820FF] mb-4"
              id="courseselection"
              value={courseselection}
              onChange={(e) => {
                setCourseSelection(e.target.value);
              }}
            >
              {courses.map((v, i) => {
                return (
                  <option key={i} value={v.value}>
                    {v.label}
                  </option>
                );
              })}
            </select>

            <label htmlFor="message" className="font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              placeholder="Input your message"
              className="border-2 border-[#0820FF] rounded-md p-2 w-full h-32 focus:outline-none focus:border-[#0820FF] mb-4"
            ></textarea>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="bg-[#000080] w-[170px] h-[40px] text-white py-2 px-4 rounded-md font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AWSDevelopmentForm;
