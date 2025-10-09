"use client";
import React from "react";

function MoreAbout() {
  return (
    <section className="mt-5">
      <div className="space-y-6">
        {/* Developer Section */}
        <div data-aos='fade-up'>
          <h2 className="text-2xl font-bold">As a Developer</h2>
          <p className="mt-2 text-gray-800">
            I’m a <b>Frontend</b> Web Developer focused on building clean,
            modern, and responsive user interfaces. My main goal is to create
            websites that not only look beautiful but also provide an excellent
            user experience.
          </p>
        </div>

        {/* Tools & Tech Stack */}
        <div data-aos='fade-up'>
          <b>I work mainly with:</b>
          <ul className="pl-8 list-disc italic leading-7">
            <li>HTML, CSS, JavaScript, and React.js / Next.js</li>
            <li>Tailwind CSS for fast styling & Responsive Design</li>
            <li>AOS, Framer Motion for smooth animations</li>
            <li>Git & GitHub for version control and deployment</li>
            <li>Netlify / Vercel for hosting and continuous deployment</li>
          </ul>
          <p className="font-medium mt-2">
            I love turning ideas into fully functional web applications with{" "}
            <b>pixel-perfect</b> design and <b>optimized</b> performance.
          </p>
        </div>

        {/* Developer Philosophy */}
        <div data-aos='fade-up'>
          <h2 className="text-2xl font-bold">My Developer Philosophy</h2>
          <p className="mt-2 text-gray-800">
            “Good design is invisible — users should feel it, not notice it.”
            I believe a developer isn’t just a coder; they’re a{" "}
            <b>problem-solver</b> and <i>storyteller</i>. Every button,
            animation, or layout tells a small part of the user journey — and I
            love crafting that experience.
          </p>
        </div>

        {/* Personal Info */}
        <div data-aos='fade-up'>
          <h2 className="text-2xl font-bold">As a Person</h2>
          <p className="mt-2 text-gray-800">
            I’m passionate, curious, and always learning new{" "}
            <i>technologies</i>. I enjoy experimenting with <b>UI/UX</b> trends,
            color psychology, and animation timing — things that make a project
            feel alive.
          </p>
          <p className="mt-2 text-gray-800">
            When I’m not coding, I like exploring design inspiration sites like{" "}
            <b>Dribbble</b> and <b>Behance</b> or tweaking my own portfolio for
            better user experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MoreAbout;
