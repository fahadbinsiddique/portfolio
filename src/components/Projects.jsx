"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Hekto Ecommerce Site",
    description:
      "Hekto is a responsive and modern eCommerce website offering a smooth and smart online shopping experience",
    link: "https://fahadprojecttwo.vercel.app/",
    github: "https://github.com/fahadbinsiddique/hektoproject",
    image: "/promotional.png",
    tags: ["Tailwind", "React", "JavaScript", "FireBase"],
  },
  {
    title: "Online Quran Learning Platform",
    description: "One-on-one Quran classes with certified Al-Azhar scholars, deep understanding—accessible from home",
    link: "https://al-azhar-quran-institute.vercel.app/",
    github: "https://github.com/fahadbinsiddique/al-azhar-quran-institute",
    image: "/download.png",
    tags: ["JabaScript", "Next.js", "React", "Framer-Motion"],
  },
  {
    title: "Creative Short-Form Video Content Agency",
    description:
      "A video content agency offering tailored short-form videos starting at $99/week",
    link: "https://fahad-shopifytask.vercel.app/",
    github: "https://github.com/fahadbinsiddique/shopifytask",
    image: "/1.jpg",
    tags: ["HTML", "CSS", "JabaScript"],
  },
  {
    title: "Online Design & Development Learning Platform",
    description: "An e-learning platform offering design and development courses ",
    link: "https://fahadprojectone.vercel.app/",
    github: "https://github.com/fahadbinsiddique/my-project",
    image: "/1.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
];

const Projects = () => {
  const projectRefs = useRef([]);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Animate heading
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Animate projects with ScrollTrigger
    projectRefs.current.forEach((el, index) => {
      gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Hover animations for project cards
    projectRefs.current.forEach((el) => {
      const img = el.querySelector("img");
      const content = el.querySelector(".project-content");

      gsap.to(img, {
        scale: 1.05,
        duration: 0.3,
        paused: true,
      });

      el.addEventListener("mouseenter", () => {
        gsap.to(img, { scale: 1.05, duration: 0.3 });
        gsap.to(content, { y: -10, opacity: 1, duration: 0.3 });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(img, { scale: 1, duration: 0.3 });
        gsap.to(content, { y: 0, opacity: 0.9, duration: 0.3 });
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-900 text-white overflow-hidden"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          My Projects
        </h2>
        <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
          Here are some of my recent works. Each project was an opportunity to
          learn and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="relative rounded-xl overflow-hidden shadow-2xl group"
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-90" />

              {/* Project Content */}
              <div className="project-content absolute bottom-0 left-0 p-6 w-full opacity-90">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-900/50 text-purple-100 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-900/30 transition-all hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
