import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (<div>
    <div className="text-center text-2xl pt-4 text-gray-500">
      <p >ABOUT <span className="text-gray-700 font-medium">US</span></p>
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-12">
      <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="about_image" />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
        <p>Welcome to Prescriply, your trusted partner for prescription management and pharmacy operations.</p>
        <p>At Prescriply, we understand the complexities of prescription management and pharmacy operations. Our mission is to provide innovative solutions that streamline your workflow, enhance patient care, and optimize your pharmacy operations.</p>
        <p>Our platform offers a range of features to help you manage your prescriptions and pharmacy operations more efficiently. With Prescriply, you can:</p>
        <b className="text-gray-800">Our Vision</b>
        <p>Our vision is to be the leading provider of prescription management and pharmacy operations solutions, helping pharmacies and healthcare providers deliver better care to their patients.</p>
      </div>
    </div>

    <div className="text-xl my-4 text-gray-500">
      <p>WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></p>
    </div>

    <div className="flex flex-col md:flex-row mb-20">
      <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
        <b>Efficiency:</b>
        <p>Streamlined workflows and automated processes to save time and reduce errors.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
        <b>Convenience:</b>
        <p>Access to your prescriptions and pharmacy operations from anywhere, at any time.</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-sm text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
        <b>Personalization:</b>
        <p>Customizable features to meet your specific needs and preferences.</p>
      </div>
    </div>
  </div>)
};

export default About;
