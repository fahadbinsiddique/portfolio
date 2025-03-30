"use client";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket, FaMobileAlt, FaServer, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gray-900 text-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer creating digital experiences that matter
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Introduction Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white">
              Hi, I'm <span className="text-purple-400">Fahad Bin Siddique</span>
            </h3>
            <p className="text-gray-300">
              I'm a Front End Developer specializing in modern web technologies with 
              a strong focus on creating performant, accessible, and responsive 
              applications. My journey in web development began 3 years ago and 
              since then I've helped numerous clients bring their ideas to life.
            </p>
            <p className="text-gray-300">
              What drives me is solving complex problems with elegant solutions. 
              I believe in writing clean, maintainable code while keeping user 
              experience at the forefront of every project.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Firebase",
                "MongoDB",
                "GraphQL"
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-gray-800 text-purple-300 rounded-full text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${skill.color} text-white`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Data
const skills = [
  {
    name: "Frontend Development",
    description: "Building responsive, interactive UIs with React & Next.js",
    icon: <FaCode className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "UI/UX Design",
    description: "Creating intuitive interfaces with modern design principles",
    icon: <FaPalette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600"
  },
  {
    name: "Performance Optimization",
    description: "Optimizing for speed, SEO and Core Web Vitals",
    icon: <FaRocket className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Mobile Development",
    description: "Building PWAs and responsive mobile experiences",
    icon: <FaMobileAlt className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Backend Development",
    description: "API development and database management",
    icon: <FaServer className="w-6 h-6" />,
    color: "from-yellow-500 to-amber-600"
  },
  {
    name: "Analytics & SEO",
    description: "Implementing tracking and search optimization",
    icon: <FaChartLine className="w-6 h-6" />,
    color: "from-red-500 to-orange-600"
  }
];

export default About;