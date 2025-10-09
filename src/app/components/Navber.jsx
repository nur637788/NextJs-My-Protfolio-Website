"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
      // AOS Animation
      useEffect(() => {
      AOS.init({ duration: 2000, 
      once: true });
       }, []);

  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div data-aos='fade-down' className="fixed top-0 left-0 right-0 bg-gray-200 text-black shadow-md z-50">
      <div className="flex justify-between items-center px-5 md:px-15 lg:px-20 py-3">
        {/* Logo */}
        <h2 className="text-3xl font-bold animate-pulse hover:animate-bounce"><i className="text-red-700 font-extrabold">NUR.</i>De<span className="text-blue-800">v</span></h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-all duration-300 hover:text-pink-400 ${
                pathname === link.path
                  ? "text-blue-600 font-bold"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* 3-dot menu icon (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl hover:text-blue-600 cursor-pointer">
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
       <div data-aos='fade-down' className="md:hidde bg-gray-100 py-1 px-5 flex flex-col items-start space-y-1 animate-slideDown">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`block text-lg transition-all duration-300 hover:text-pink-400 ${
                pathname === link.path ? "text-blue-600 font-bold  ": ""}`}> {link.name} </Link> ))}
        </div>
      )}
    </div>
  );
}
