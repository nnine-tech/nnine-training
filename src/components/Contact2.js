"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact2 = () => {
  const notify = () => toast("form submitted successfully!!");

  let [fullName, setFullName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
  };
 


  let data = {
    fullName: fullName,
    phoneNumber: phoneNumber,
    email: email,
    message: message,
  };
  console.log(data);

  // setFullName("");
  // setPhoneNumber("");
  // setEmail("");
  // setMessage("");
 


  return (
    <div className="relative">
      {/* Contact Image Section */}
      <div className="relative">
        <img
          src="contactcurve.svg"
          alt=""
          className="w-full h-[800px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col gap-6 h-[300px] w-[90%] sm:w-[1000px] justify-center items-center mx-auto mt-44 text-center px-4  md:w-[500px]">
          <h1 className="text-white font-Quicksand text-4xl sm:text-6xl font-bold">
            Contact Us
          </h1>
          <h2 className="text-white font-Quicksand font-semibold text-base sm:text-xl">
            We would love to hear from you! Whether you have a question about
            features, pricing, need a demo, or anything else, our team is ready
            to answer all your questions.
          </h2>
        </div>

        {/* Form Container */}
        <div className="absolute inset-0 top-[600px] md:top-0 sm:h-[1500px] flex justify-center md:justify-end pr-0 md:pr-10 lg:pr-20 items-center">
          <div className="flex flex-col gap-5 p-4 w-[90%] md:w-[550px] lg:w-[450px] bg-white rounded-xl shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-6 sm:p-11"
            >
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-[50px] placeholder-[#22285E] rounded-2xl pl-4 w-full bg-[#EEE9E9]"
              />
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="h-[50px]  placeholder-[#22285E] rounded-2xl pl-4 w-full bg-[#EEE9E9]"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[50px] placeholder-[#22285E] rounded-2xl pl-4 w-full bg-[#EEE9E9]"
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-[150px] placeholder-[#22285E] rounded-2xl pl-4 pt-3 w-full bg-[#EEE9E9] resize-none"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  onClick={notify}
                  className="bg-[#004AAD] h-[44px] w-[96px] rounded-xl p-2 text-white font-semibold text-xl"
                >
                  Submit
                </button>
                <ToastContainer/>
              </div>
            </form>
          </div>
        </div>

        {/* Hide Contact4 Image on Mobile */}
        <div className="hidden md:block">
          <img src="contact4.svg" alt="Contact 4" />
        </div>
      </div>

      {/* Info Section */}
      <div className="flex flex-col sm:flex-row justify-center h-auto sm:h-[280px] lg:mt-11 mt-40">
        <div className="border border-[#CDC2C2] w-full sm:w-[430px] flex justify-center items-center flex-col p-6 sm:p-0">
          <img src="Phone1.svg" alt="Phone" />
          <h1 className="font-Quicksand font-bold text-2xl text-[#004AAD]">
            Phone
          </h1>
          <h2 className="mt-5 font-Quicksand font-bold text-xl">
            +977-9851359759
          </h2>
        </div>
        <div className="border border-[#CDC2C2] w-full sm:w-[430px] flex justify-center items-center flex-col p-6 sm:p-0">
          <img src="Mailing.svg" alt="Email" />
          <h1 className="font-Quicksand font-bold text-2xl text-[#004AAD]">
            Email
          </h1>
          <h2 className="mt-5 font-Quicksand font-bold text-xl">
            nninesolutions@gmail.com
          </h2>
        </div>
        <div className="border border-[#CDC2C2] w-full sm:w-[430px] flex justify-center items-center flex-col p-6 sm:p-0">
          <img src="locationon.svg" alt="Location" />
          <h1 className="font-Quicksand font-bold text-2xl text-[#004AAD]">
            Location
          </h1>
          <h2 className="mt-5 font-Quicksand font-bold text-xl">
            Chabhil Ganesthan, Kathmandu
          </h2>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="flex justify-center items-center mb-9 mt-16">
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl h-96">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d441.5026713184476!2d85.34413695154572!3d27.71662644150758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1708396723095!5m2!1sen!2snp"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
