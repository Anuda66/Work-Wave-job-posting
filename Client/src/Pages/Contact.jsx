import React from "react";
import { assets } from "../assets/assets";
import contactImage from '../assets/conatact1.jpg'

function Contact() {
  return (
    <div>
      <div className="pt-10 text-2xl text-center text-gray-500">
        CONTACT <samp className="font-semibold text-gray-700 ">US</samp>
      </div>

      <div className="flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28 ">
        <img
          className="w-full md:max-w-[360px]"
          src={contactImage}
          alt="Contact Image"
        />
        <div className="flex flex-col items-start justify-center gap-5">
          <h3 className="text-lg font-semibold text-gray-600 ">OUR OFFICE</h3>
          <p className="text-gray-500">
            00000  Station <br />
            Suite 000, col, Sl
          </p>

          <p className="text-gray-500">Tel: (000) 000-0000</p>
          <p className="text-gray-500">Email:anudaransara@gmail.com</p>

          <h3 className="text-lg font-semibold text-gray-600 ">
            CAREERS AT PRESCRIPTO
          </h3>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
