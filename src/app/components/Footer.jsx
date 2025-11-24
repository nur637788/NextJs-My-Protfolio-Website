import Link from "next/link";
import React from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 shadow-md">
      <section className="mx-5 md:mx-10 lg:mx-15 xl:mx-20 py-2">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 m-auto">

          {/* Brand Section */}
          <div data-aos='fade-up' className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-3xl font-bold animate-pulse hover:animate-bounce cursor-pointer">
              <i className="text-red-600 font-extrabold">NUR.</i>De
              <span className="text-blue-500">v</span>
            </h2>
            <img
              className="w-16 h-16 rounded-full border-2 border-b-green-500 border-t-red-600 cursor-pointer hover:scale-125 duration-300"
              src="/profile-image.jpg"
              alt="profile-image" />

            <p className="text-gray-900 text-sm max-w-[200px]">
              Creative Frontend Developer passionate about modern web design.
            </p>
          </div>

          {/* Useful Links */}
          <div data-aos='fade-up' className="flex flex-col  space-y-3">
            <h4 className="text-lg font-semibold text-blue-500 mb-2">
              Follow Now
            </h4>
            <a href="https://www.facebook.com/nur637788" target="_blank"
              className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300">
              <FaFacebook /> Facebook
            </a>

            <a href="https://www.instagram.com/nur637788/" target="_blank"
              className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300">
              <FaInstagram /> Instagram
            </a>

            <a href="https://www.linkedin.com/in/nur637788/" target="_blank"
              className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://www.github.com/nur637788/" target="_blank"
              className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300" >
              <FaGithub /> GitHub
            </a>
          </div>

          {/* Categories */}
          <div data-aos='fade-up' className="flex flex-col  space-y-3">
            <h4 className="text-lg font-semibold text-blue-500 mb-2">
              Categories
            </h4>
            <Link href='/contact'><button className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300 cursor-pointer"> <IoIosContact /> Contact</button></Link>
            <Link href='/team'><button className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300 cursor-pointer"><PiMicrosoftTeamsLogo /> Team</button></Link>
            <Link href='/privacyPolicy'><button className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300 cursor-pointer"><MdOutlinePrivacyTip /> Privacy & Policy</button></Link>
          </div>

          {/* Contact Info */}
          <div data-aos='fade-up' className="flex flex-col  space-y-3">
            <h4 className="text-lg font-semibold text-blue-500 mb-2">
              Connected
            </h4>
            <a href="tel:01749535688" className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300 cursor-pointer">
              <FaPhone /><span className="underline mx-2">01749535688</span>
            </a>
            <a
              href="mailto:mdnoyon631234@gmail.com"
              className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300 cursor-pointer">
              <CiMail /><span className="underline mx-2">Send Mail...</span>
            </a>
            <p className="flex items-center gap-3 hover:text-pink-500 hover:scale-110 duration-300 cursor-pointer">
              <CiLocationOn /><span className="underline mx-2">Mohakhali, Dhaka</span>
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="text-gray-400 my-2" />

        {/* Copyright */}
        <p data-aos='fade-up' className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500 font-bold"><a href="https://www.linkedin.com/in/nur637788/">NUR.Dev</a></span> — All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
