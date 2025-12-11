import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600 text-lg">Our OFFICE</p>
          <p className="text-gray-500">54709 Willms Station <br />Suite 100, Washington, USA</p>
          <p className="text-gray-500">Tel: +1 (555) 123-4567 <br />Email: info@prescriply.com</p>
          <p className="font-semibold text-gray-600 text-lg">Careers at Prescriply</p>
          <p className="text-gray-500">Prescriply is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
