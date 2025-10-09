"use client";
import Link from "next/link";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center text-black ">
      {/* Hero Section */}
      <div data-aos="fade-up" className="">
        <div className="w-41 h-41 rounded-full border-4 border-blue-600 shadow-lg m-auto">
          <img className="w-40 h-40 rounded-full m-auto" src="/profile-image.jpg" alt="" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-600">
          Hi, I'm Abdun Nur 🌸
        </h1>

        <h2 className="text-2xl sm:text-4xl mt-4 text-blue-700 font-bold">
        <span className=" text-red-500 font-normal">  I'm a { " " } </span>
          <ReactTyped
            strings={[
              "Web Designer",
              "Frontend Developer ",
              "Web Developer ",
              "React Developer ",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop/>
        </h2>

        <p className="text-gray-800 mt-6 text-lg leading-relaxed max-w-[600px]">
          I Create Modern, Responsive, and user-friendly Websites using
          <span className="font-medium"> React/Next.js, Tailwind CSS, Animation.</span></p>
            
            {/* 2 Buttons */}
        <div className="mt-8 flex justify-center gap-6">
                {/* Button Hire Me */}
            <button  className="bg-gradient-to-l bg-blue-500 via-blue-800  rounded-full font-semibold text-white py-2 px-3 hover:scale-95 duration-300 hover:bg-blue-800 w-30 cursor-pointer"><a href="mailto:mdnoyon631234@gmail.com" target="_blank">Hire Me</a></button>
           {/* Button View Work */}
          <Link href='/projects'>
          <button className="border border-blue-500 text-black hover:bg-blue-600 hover:text-white   hover:scale-95 transition-all duration-300 px-5 py-2 rounded-full font-semibold cursor-pointer">
            View Work
          </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
