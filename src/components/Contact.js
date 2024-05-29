// Contact.js
import React from "react";
import { useDocTitle } from "@/components/CustomHook"; // Assuming this path is correct

const Contact = () => {
  // useDocTitle('Nnine Solutions - Contact Us');

  return (
    <>
      <br />
      <br />
      <br />
      <div className="flex justify-center items-center mt-8 w-full bg-gray-200">
        <div
          className="container mx-auto my-8 px-4 lg:px-20 flex flex-wrap"
          data-aos="zoom-in"
        >
          {/* Contact details column */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h1 className="text-blue-900 text-3xl font-bold mb-4">
                Contact Us
              </h1>
              <div className="flex items-center mb-4">
                <i className="fas fa-map-marker-alt text-blue-900 mr-2"></i>
                <div>
                  <h2 className="text-xl font-bold">Office Address</h2>
                  <p className="text-gray-700">Chhabahil, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-phone-alt text-blue-900 mr-2"></i>
                <div>
                  <h2 className="text-xl font-bold">Call Us</h2>
                  <p className="text-gray-700">Tel: +977-9851359759</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <i className="fas fa-envelope text-blue-900 mr-2"></i>
                <div>
                  <h2 className="text-xl font-bold">Send an E-mail</h2>
                  <p className="text-gray-700">nninesolutions@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map column */}
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
    </>
  );
};
export default Contact;
