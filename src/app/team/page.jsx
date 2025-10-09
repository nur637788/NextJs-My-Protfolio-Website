"use client";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const team = [
  {
    name: "Marufa Jannat",
    role: "UI/UX Designer",
    img: "/marufa.jpg",
    facebook: "#",
    linkedin: "#",
    github: "#",
    bio: "Passionate about design, color theory, and smooth user experiences.",
  },
    {
    name: "Abdun Nur",
    role: "Frontend Developer",
    img: "/nur.jpg",
    facebook: "#",
    linkedin: "#",
    github: "#",
    bio: "I love building beautiful and responsive websites using React & Tailwind.",
  },
  {
    name: "Nur Noyon",
    role: "Backend Developer",
    img: "/noyon.jpg",
    facebook: "#",
    linkedin: "#",
    github: "#",
    bio: "Focused on building secure and scalable backend systems.",
  },
];

export default function TeamPage() {
  return (
    <section className=" bg-white">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">
        Our <span className="text-gray-800">Team</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-all duration-300">
            <img
              src={member.img}
              alt={member.name} loading="lazy"
              className="w-32 h-32 object-cover mx-auto rounded-full border-4 border-blue-600 mb-4" />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-blue-600">{member.role}</p>
            <p className="text-gray-500 text-sm my-3">{member.bio}</p>

            <div className="flex justify-center gap-5 text-xl text-gray-600">
              <a href={member.facebook} className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href={member.linkedin} className="hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href={member.github} className="hover:text-blue-500">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
