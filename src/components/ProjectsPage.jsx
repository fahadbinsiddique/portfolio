"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Hekto Ecommerce Site",
    description: "A responsive and modern eCommerce website offering a smooth online shopping experience with full product catalog, cart functionality, and secure checkout.",
    link: "https://fahadone.vercel.app/",
    github: "https://github.com/fahadbinsiddique/hektoproject",
    image: "/promotional.png",
    tags: ["Tailwind", "React", "JavaScript", "FireBase"],
    featured: true
  },
  {
    title: "Tic Tac Toe Game",
    description: "An interactive game with AI opponent, move history tracking, and responsive design. Features smooth animations and game statistics.",
    link: "https://fahadfive.vercel.app/",
    github: "https://github.com/fahadbinsiddique/tictac",
    image: "/tictac.jpg",
    tags: ["Tailwind CSS", "JavaScript", "React"],
    featured: false
  },
  {
    title: "Online Quran Learning Platform",
    description: "Comprehensive platform connecting students with certified scholars for personalized Quran education. Features scheduling, progress tracking, and interactive lessons.",
    link: "https://al-azhar-quran-institute.vercel.app/",
    github: "https://github.com/fahadbinsiddique/al-azhar-quran-institute",
    image: "/download.png",
    tags: ["JavaScript", "Next.js", "React", "Framer-Motion"],
    featured: true
  },
  {
    title: "Online Learning Platform",
    description: "An e-learning platform offering design and development courses with progress tracking, certification, and interactive content delivery.",
    link: "https://fahadprojectone.vercel.app/",
    github: "https://github.com/fahadbinsiddique/my-project",
    image: "/1.jpg",
    tags: ["Next.js", "Stripe", "MongoDB"],
    featured: false
  },
  // Additional projects to fill out the dedicated page
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio showcasing skills, projects, and experience with smooth animations and responsive design.",
    link: "https://fahads.vercel.app",
    github: "https://github.com/fahadbinsiddique/portfolio",
    image: "/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind", "TypeScript"],
    featured: true
  },
  {
    title: "Task Management App",
    description: "Productivity application with drag-and-drop functionality, team collaboration features, and real-time updates.",
    link: "https://taskmanager.demo.com",
    github: "https://github.com/fahadbinsiddique/task-manager",
    image: "/taskapp.jpg",
    tags: ["React", "Firebase", "DnD", "Context API"],
    featured: false
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with geolocation, 7-day forecasts, and interactive maps using multiple weather APIs.",
    link: "https://weather-dashboard.demo.com",
    github: "https://github.com/fahadbinsiddique/weather-app",
    image: "/weather.jpg",
    tags: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
    featured: false
  },
  {
    title: "Restaurant Booking System",
    description: "Full-stack reservation platform with table management, customer profiles, and SMS notifications.",
    link: "https://restaurant-booking.demo.com",
    github: "https://github.com/fahadbinsiddique/restaurant-booking",
    image: "/restaurant.jpg",
    tags: ["Node.js", "Express", "MongoDB", "Twilio API"],
    featured: true
  }
];

const ProjectsPage = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardHoverVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: -12, 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const imageHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 }
  };

  // Filter projects for better organization
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <section
        ref={sectionRef}
        className="relative py-20 lg:py-32 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl -translate-x-48 translate-y-48"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium mb-6 border border-purple-700/30">
                My Work Collection
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              All Projects
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of my web development projects, from e-commerce platforms to interactive applications.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{projects.length} Total Projects</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>{featuredProjects.length} Featured</span>
              </div>
            </div>
          </motion.div>

          {/* Featured Projects Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Featured Projects
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Highlighted projects that showcase my best work and technical expertise.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  className="group"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative rounded-2xl overflow-hidden bg-gray-800/50 border border-gray-700/50 shadow-2xl h-full"
                  >
                    {/* Project Image Container */}
                    <div className="relative h-72 sm:h-80 overflow-hidden">
                      <motion.div
                        variants={imageHoverVariants}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-70 group-hover:opacity-60 transition-opacity"></div>
                        
                        {/* Featured Badge */}
                        <div className="absolute top-4 right-4 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                          Featured
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1.5 bg-purple-900/30 text-purple-200 rounded-full text-xs font-medium border border-purple-700/30"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-8 leading-relaxed text-base">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-900/30 transition-all flex-1"
                        >
                          <FiExternalLink className="text-lg" />
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 border border-gray-700 transition-all flex-1"
                        >
                          <FiGithub className="text-lg" />
                          Source Code
                        </motion.a>
                      </div>
                    </div>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Other Projects Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Other Projects
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Additional projects demonstrating various skills and technologies.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  animate="initial"
                  className="group"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative rounded-xl overflow-hidden bg-gray-800/40 border border-gray-700/40 shadow-lg h-full"
                  >
                    {/* Project Image Container */}
                    <div className="relative h-56 sm:h-64 overflow-hidden">
                      <motion.div
                        variants={imageHoverVariants}
                        transition={{ duration: 0.4 }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60"></div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 bg-purple-900/20 text-purple-200 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-900/30 text-purple-200 rounded-lg text-sm font-medium hover:bg-purple-900/40 transition-all flex-1"
                        >
                          <FiExternalLink />
                          Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all flex-1"
                        >
                          <FiGithub />
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Page Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-20 pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-gray-500 text-sm">
              All projects are actively maintained and hosted. Technologies and frameworks may vary between projects.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;