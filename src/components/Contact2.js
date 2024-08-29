"use client";

import React, { useState } from "react";

const Contact2 = () => {
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

  return (
    <div className="bg-slate-50 ">
      <div>
        <div className="flex justify-center h-[300px] mt-20 bg-[#014AAC]">
          <div className="flex items-center mt-40 flex-col gap-3 px-4 text-center">
            <h1 className="font-bold text-white font-poppins text-3xl">
              Contact Us
            </h1>
            <h3 className="text-white font-poppins">
            We would love to hear from you! Whether you have a question about features, pricing,
            <br></br>
            need a demo, or anything else, our team is ready to answer all your questions.
          
            </h3>
          </div>
        </div>

        <div className="bg-[#FFFFFF] w-full lg:w-[1320px] h-auto lg:h-[821px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-32 mt-5 rounded-xl p-5">
          <div className="flex justify-center lg:justify-start ml-0 lg:ml-32 mt-0 lg:mt-11 w-full lg:w-[400px]">
            <img
              src="/contactus.png"
              alt=""
              className="h-[200px] md:h-[300px] lg:h-[500px] w-auto"
            />
          </div>
          <div className="w-full lg:w-[370px] flex flex-col gap-5 mr-0 lg:mr-28 mt-0 lg:mt-11 ml-0 lg:ml-28">
            <h1 className="font-poppins text-4xl text-black flex items-center justify-center font-bold">
              Let's talk
            </h1>
            <h3 className="mt-6 ml-0 lg:ml-4 text-center lg:text-left">
            Fill out the form below, and our team will get back to you as soon as possible. 
            We're here to help with any inquiries or questions you may have.
            </h3>

            <form onSubmit={handleSubmit}>
              <div>
                <div className="relative mb-4">
                  <img
                    src="/user.svg"
                    className="w-[30px] h-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 ml-3"
                  />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    required="required"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className="h-[50px] w-full lg:w-[350px] rounded-2xl pl-14 bg-[#EEE9E9] ml-0 lg:ml-4"
                  />
                </div>

                <div className="relative mb-4">
                  <img
                    src="/Phone.svg"
                    className="w-[30px] h-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 ml-3"
                  />
                  <input
                    type="number"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    required="required"
                    className="h-[50px] w-full lg:w-[350px] rounded-2xl pl-14 bg-[#EEE9E9] ml-0 lg:ml-4"
                  />
                </div>

                <div className="relative mb-4">
                  <img
                    src="/Email.svg"
                    className="w-[30px] h-[30px] absolute left-4 top-1/2 transform -translate-y-1/2 ml-3"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required="required"
                    className="h-[50px] w-full lg:w-[350px] rounded-2xl pl-14 bg-[#EEE9E9] ml-0 lg:ml-4"
                  />
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="h-[150px] w-full lg:w-[350px] rounded-2xl pl-3 pt-3 bg-[#EEE9E9] resize-none overflow-y-auto ml-0 lg:ml-4"
                    style={{ maxHeight: "150px" }}
                  />
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button
                    type="submit"
                    className="font-poppins bg-[#014AAC] h-[40px] w-[150px] rounded-2xl flex justify-center items-center text-white font-semibold text-xl shadow-lg"
                  >
                    Submit
                    <img
                      src="arrow.svg"
                      alt=""
                      className="w-[20px] h-[20px] ml-3"
                    />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center h-auto  gap-7 mt-5 lg:mt-0">
        <div className="mt-3 w-[235px] h-[241px] bg-[#F2EEEE] rounded-2xl shadow-bottom flex flex-col items-center justify-center">
          <img src="contact2.svg" alt="" className="h-[70px] w-[70px] mt-10" />
          <h1 className="text-center font-poppins font-bold mt-3">
            +977-9851359759
          </h1>
        </div>
        <div className="mt-3 w-[235px] h-[241px] bg-[#F2EEEE] rounded-2xl shadow-bottom flex flex-col items-center justify-center">
          <img src="email2.svg" alt="" className="h-[70px] w-[70px] mt-10" />
          <h1 className="text-center font-poppins font-bold">
            nninesolutions <br />@gmail.com
          </h1>
        </div>
        <div className="mt-3 w-[235px] h-[241px] bg-[#F2EEEE] rounded-2xl shadow-bottom flex flex-col items-center justify-center">
          <img src="location.svg" alt="" className="h-[70px] w-[70px] mt-10" />
          <h1 className="text-center font-poppins font-bold">
            Chabahil, Kathmandu, Nepal
          </h1>
        </div>
      </div>

        {/* Google Map column */}
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
