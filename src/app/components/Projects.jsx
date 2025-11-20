"use client";
import Image from "next/image";

export default function Projects() {


  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      img: "/project/old-protfolio.png",
      tech: ["HTML", "Tailwind", "Responsive"],
      link: "https://nur637788protfolio.netlify.app/",
      github: "https://github.com/nur637788/nur637788Protfolio"
    },
    {
      id: 2,
      title: "Courses Website",
      img: "/project/skillzone.png",
      tech: ["React", "Dynamic Routing", "Tailwind", "API"],
      link: "https://nurskillzone.netlify.app/",
      github: "https://github.com/nur637788/NurSkillsZone"
    },
    {
      id: 3,
      title: "E-Commerce",
      img: "/project/ecommarce.png",
      tech: ["React", "Tailwind", "API", "Redux-toolkit"],
      link: "https://bdcolling1.netlify.app/",
      github: "https://github.com/nur637788/Bdcolling-Project"
    },
    {
      id: 4,
      title: "Furniture Shop",
      img: "/project/home-decor.png",
      tech: ["React", "Firebase", "JSON", "Tailwind", "Redux"],
      link: "https://furniture-websitebd.netlify.app/",
      github: "https://github.com/nur637788/Furniture-Website"
    },
    {
      id: 5,
      title: "GoodFood Website",
      img: "/project/goodfood.png",
      tech: ["Reaact.js", "Tailwind", "API", "Redux", "Responsive"],
      link: "https://goodfoodbd.netlify.app/",
      github: "https://github.com/nur637788/GoodFood-Website"
    },
    {
      id: 6,
      title: "Madrasah Website",
      img: "/project/madrasah.png",
      tech: ["React.js", "Tailwind", "Firebase", "Responsive"],
      link: "https://adataladm.netlify.app/",
      github: "https://github.com/nur637788/NurProtfolio-with-React"
    },
    {
      id: 7,
      title: "Porlour Landing Page",
      img: "/project/jerin-porlour.png",
      tech: ["HTML", "Tailwind", "Responsive"],
      link: "https://jerin-purlour01.netlify.app/",
      github: "https://github.com/nur637788/jerin-purlour"
    },
    {
      id: 8,
      title: "API Data",
      img: "/project/api-data.png",
      tech: ["React", "API Intigration", "Resposive", "Redux"],
      link: "https://apidata01.netlify.app/",
      github: "https://github.com/nur637788/API-data"
    },
    {
      id: 9,
      title: "Landing-Page",
      img: "/project/landing-page.png",
      tech: ["Next.js", "Tailwind", "User-Frendly"],
      link: "https://growth-landingpage.netlify.app/",
      github: "https://github.com/nur637788/Online-Growth-Landing-Page-Next.js"
    },

  ];

  return (
    <section className=" bg-white text-black ">
      <div data-aos="fade-up" className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
          My <span className="text-blue-700">Projects</span>
        </h1>
        <p className="text-gray-600 mt-2">
          A showcase of my recent works and experiments 🚀
        </p>
      </div>

      {/* Projects Grid */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-900 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 border border-pink-600/20 "
          >
            {/* Image */}
            <div data-aos='zoom-in' className="overflow-hidden rounded-t-2xl">
              <Image
                src={project.img}
                alt={project.title} width={400} height={250} loading="lazy"
                className="object-cover w-full h-50 hover:scale-120 transition duration-300 shadow-2xl/30"
              />
            </div>

            {/* Info */}
            <div className="p-4 space-y-3">
              <h2 className="text-xl font-semibold text-pink-400">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm">
                Built with:{" "}
                <span className="text-gray-300">
                  {project.tech.join(", ")}
                </span>
              </p>

              <div className="flex gap-4 justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-pink-500 hover:bg-pink-600 text-white px-2 py-2 rounded-lg text-sm font-semibold transition">
                  🔗 Live Preview
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 border-2 hover:bg-pink-600 text-white px-2 py-1 rounded-lg text-sm font-semibold transition">
                  🔗 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
