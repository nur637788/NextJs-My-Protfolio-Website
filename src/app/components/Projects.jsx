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
    },
    {
      id: 2,
      title: "Figma to React",
      img: "/project/figma.png",
      tech: ["React", "Tailwind", "User-Frendly"],
      link: "https://figma-to-react-01.netlify.app/",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      img: "/project/ecommarce.png",
      tech: ["React", "JSON", "Tailwind"],
      link: "https://nur-expressbd.netlify.app/",
    },
    {
      id: 4,
      title: "Furniture Shop",
      img: "/project/skillzone.png",
      tech: ["React", "Firebase", "JSON", "Tailwind"],
      link: "https://furniture-websitebd.netlify.app/",
    },
    {
      id: 5,
      title: "Protfolio Blog Website",
      img: "/project/new-protfolio.png",
      tech: ["Reaact.js", "Tailwind", "Responsive"],
      link: "https://nurprotfolio.netlify.app/",
    },
    {
      id: 6,
      title: "Design Tools",
      img: "/project/uiux-design.png",
      tech: ["HTML", "CSS", "Resposive"],
      link: "https://uiuxweb.netlify.app/",
    },
    {
      id: 7,
      title: "Porlour Landing Page",
      img: "/project/jerin-porlour.png",
      tech: ["HTML", "Tailwind", "Responsive"],
      link: "https://jerin-purlour01.netlify.app/",
    },
    {
      id: 8,
      title: "Madrasah Website",
      img: "/project/madrasah.png",
      tech: ["React.js", "Tailwind", "AOS","Responsive"],
      link: "https://adataladm.netlify.app/",
    },
    {
      id: 9,
      title: "Courses Website",
      img: "/project/skillzone.png",
      tech: ["React", "Dynamic Routing", "Tailwind"],
      link: "https://nurskillzone.netlify.app/",
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
                className="object-cover w-full h-50 hover:scale-110 transition duration-300 shadow-2xl/30"
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                🔗 Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
