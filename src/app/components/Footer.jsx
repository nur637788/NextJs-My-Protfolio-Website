import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 shadow-md">
      <section className="mx-5 md:mx-10 lg:mx-15 xl:mx-20 py-2">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Brand Section */}
          <div data-aos='fade-up' className="flex flex-col items-center md:items-start space-y-3">
            <h2 className="text-3xl font-bold animate-pulse hover:animate-bounce">
              <i className="text-red-600 font-extrabold">NUR.</i>De
              <span className="text-blue-500">v</span>
            </h2>
            <img
              className="w-16 h-16 rounded-full border-2 border-blue-500"
              src="/profile-image.jpg"
              alt="profile-image"/>

            <p className="text-gray-900 text-sm max-w-[200px]">
              Creative Frontend Developer passionate about modern web design.
            </p>
          </div>

          {/* Useful Links */}
          <div data-aos='fade-up' className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-lg font-semibold text-blue-500 mb-2">
              Useful Links
            </h4>
            <a href="https://www.facebook.com/nur637788" target="_blank"
              className="flex items-center gap-3 hover:text-blue-500 transition">
              <FaFacebook /> Facebook
            </a>

            <a href="https://www.instagram.com/nur637788/" target="_blank"
              className="flex items-center gap-3 hover:text-pink-500 transition">
              <FaInstagram /> Instagram
            </a>

            <a href="https://www.linkedin.com/in/nur637788/" target="_blank"
              className="flex items-center gap-3 hover:text-purple-500 transition">
              <FaLinkedin /> LinkedIn
            </a>

            <a href="https://www.github.com/nur637788/" target="_blank"
              className="flex items-center gap-3 hover:text-red-500 transition" >
              <FaGithub /> GitHub
            </a>
          </div>

          {/* Categories */}
          <div data-aos='fade-up' className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-lg font-semibold text-blue-500 mb-2">
              Categories
            </h4>
            <Link href='/contact'><button className="hover:text-blue-500">Contact</button></Link>
            <Link href='/team'><button className="hover:text-blue-500">Team</button></Link>
            <Link href='/privacyPolicy'><button className="hover:text-blue-500">Privacy & Policy</button></Link>
          </div>

          {/* Contact Info */}
          <div data-aos='fade-up' className="flex flex-col items-center md:items-start space-y-3">
            <h4 className="text-lg font-semibold text-blue-500 mb-2">
              Connected
            </h4>
            <a href="tel:01749535688" className="hover:text-blue-500">
              📞 01749535688
            </a>
            <a
              href="mailto:mdnoyon631234@gmail.com"
              className="hover:text-blue-500">
              ✉️ Send Mail
            </a>
            <p className="hover:text-blue-500 cursor-pointer">
              📍 Mohakhali, Dhaka
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-gray-700 my-2" />

        {/* Copyright */}
        <p data-aos='fade-up' className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-blue-500 font-bold">NUR.Dev</span> — All rights reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
