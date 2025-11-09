"use client";
import Link from "next/link";
import MoreAbout from "./MoreAbout";

export default function About() {

  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
          About <span className="text-blue-700">Me</span>
        </h1>
        <p className="text-gray-700 mt-2">
          Get to know more about who I am and what I do.
        </p>
      </div>

      {/* Main Content */}
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* About Image */}
        <div className="mx-auto">
          <div className=" h-60 w-full md md:h-80 rounded-2xl overflow-hidden border-4 border-pink-500  shadow-lg hover:border-blue-500 hover:animate-pulse hover:scale-105 transition duration-300">
            <img src='/about-image.jpg' alt="Profile"
              className="object-cover w-full h-full" />
          </div>
          {/* 2 Buttons */}
          <div className="mt-8 flex justify-evenly">
            {/* Hire Me Button */}
            <Link href='/contact'>
              <button className="bg-gradient-to-l bg-blue-500 via-blue-800  rounded-md font-extralight text-white py-2 px-3 hover:scale-95 duration-300 hover:bg-blue-800 w-30">Contact Me</button>
            </Link>
            {/* Veiw Resume Button */}
            <button className="border-2 border-blue-700 rounded-md font-extralight text-black py-2 px-3 hover:text-white hover:scale-95 duration-300 hover:bg-blue-800"><a href="https://drive.google.com/file/d/1i5Bp8ZFpVw2Vlz4_bls-Pb6IrV2PsTRo/view?usp=sharing" target="_blank">Download CV</a></button>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-semibold">
            Hi, I'm <span className="text-pink-500">Abdun Nur</span> 👋
          </h2>
          <p className="text-gray-800 leading-relaxed">
            I’m a <span className="text-pink-500 font-semibold">Frontend Web Developer </span>
            from Bangladesh 🇧🇩, passionate about building modern, responsive, and
            user-friendly web experiences. I love turning ideas into real-world
            digital solutions that look great and perform flawlessly.
          </p>

          <p className="text-gray-800 leading-relaxed">
            Currently, I’m learning <span className="text-pink-500">Next.js</span> and exploring
            advanced <b>UI/UX</b> design patterns to build high-quality, <b>SEO-friendly </b>
            websites that stand out from the crowd.
          </p>

          <div data-aos='fade-up' className="bg-gray-900 p-4 rounded-xl border border-pink-600/30 shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500">What I Do 💻</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1 px-4">
              <li>Build responsive websites with React & Next.js</li>
              <li>Create stunning UI with Tailwind CSS & AOS Animation</li>
              <li>Focus on clean, reusable, and maintainable code</li>
              <li>Ensure great UX and accessibility on every project</li>
            </ul>
          </div>
          {/* Skill And Tools  */}
          <div data-aos="fade-up" className="bg-gray-900 p-4 rounded-xl border border-pink-600/30 shadow-md">
            <h3 className="text-2xl font-semibold mb-2 text-pink-500">Skills & Tools ⚙️</h3>
            <div className="flex flex-wrap gap-3">
              {["HTML", "CSS", "JavaScript", "ES6+", "Animation", "React.js", "Next.js", "Tailwind", "Bootstrap", "Rersponsive", "Git & GitHub", " API Intigration", "VS Code", "Netlify", "Vercel", "Figma"].map((skill) => (
                <span
                  key={skill}
                  className="bg-pink-500/10 border border-pink-500 text-pink-300 px-3 py-1 rounded-full text-sm hover:bg-pink-500/20 transition cursor-pointer">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <p className="text-gray-600 mt-6">
            🚀 My goal is simple — to become a skilled full-stack developer and
            create digital experiences that make a difference.
          </p>
        </div>
      </div>

      <MoreAbout />
    </section>
  );
}
