"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe, FaDownload } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Resume = () => {
  const handleDownload = () => {
    const fileUrl = '/fahad-resume-FrontendDeveloper.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Fahad_Bin_Siddique_Frontend_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      className="max-w-5xl mx-auto p-6   md:p-8 bg-gray-900 text-white rounded-xl shadow-2xl mt-10 border border-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Photo */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div 
          className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-lg"
          variants={item}
        >
          <Image 
            src="/fahad-photo.jpg"
            alt="Fahad Bin Siddique"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <motion.div className="text-center md:text-left flex-1" variants={item}>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Fahad Bin Siddique
          </h1>
          <p className="text-lg text-gray-400 mt-1">Frontend Developer | React & Next.js Specialist</p>
          
          <motion.button
            onClick={handleDownload}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold flex items-center gap-2 mx-auto md:mx-0"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(192, 132, 252, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaDownload /> Download CV
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Contact Info */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mt-6 text-gray-300"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {[
          { icon: <FaEnvelope className="text-purple-400" />, text: "fahadbinsiddique0@gmail.com", href: "mailto:fahadbinsiddique0@gmail.com" },
          { icon: <FaGithub className="text-purple-400" />, text: "GitHub", href: "https://github.com/fahadbinsiddique" },
          { icon: <FaLinkedin className="text-purple-400" />, text: "LinkedIn", href: "https://linkedin.com/in/fahadbinsiddique" },
          { icon: <FaGlobe className="text-purple-400" />, text: "Portfolio", href: "https://fahadx.netlify.app" },
          { icon: <FaPhone className="text-purple-400" />, text: "+8801794147764" }
        ].map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target={contact.href ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-colors"
            variants={item}
            whileHover={{ y: -2 }}
          >
            {contact.icon} {contact.text}
          </motion.a>
        ))}
      </motion.div>

      {/* Career Objective */}
      <motion.div 
        className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700"
        variants={item}
      >
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">Career Objective</h2>
        <motion.p 
          className="text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Passionate Frontend Developer with expertise in modern JavaScript frameworks. Dedicated to crafting 
          responsive, accessible, and performant web applications. Seeking opportunities to contribute innovative 
          solutions while growing in a collaborative environment.
        </motion.p>
      </motion.div>

      {/* Skills Sections */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Technical Skills */}
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          variants={item}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">Technical Skills</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              "JavaScript (ES6+)", "React.js & Next.js", "Tailwind CSS", "Firebase",
              "Git & GitHub", "Figma", "Vercel & Netlify", "Redux"
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2 text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <motion.div 
                  className="w-2 h-2 bg-purple-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                />
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          variants={item}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">Soft Skills</h2>
          <div className="space-y-3">
            {[
              "Exceptional problem-solving and analytical thinking",
              "Effective communication and collaboration",
              "Quick learner with technology adaptability",
              "Proactive team player with leadership qualities"
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <motion.div 
                  className="flex-shrink-0 mt-1 w-2 h-2 bg-purple-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <p className="text-gray-300">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.div 
        className="mt-8"
        variants={item}
      >
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">Featured Projects</h2>
        <div className="space-y-4">
          {/* Project 1 */}
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-white">Hekto E-commerce</h3>
            <p className="text-gray-300 mt-2">
              Full-featured eCommerce platform with user authentication, product management, and payment integration.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "Firebase", "Tailwind"].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <motion.a 
                href="https://github.com/fahadbinsiddique/hektoproject" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                whileHover={{ x: 3 }}
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a 
                href="https://fahadprojecttwo.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                whileHover={{ x: 3 }}
              >
                <FaGlobe /> Live Demo
              </motion.a>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-colors"
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold text-white">Video Content Platform</h3>
            <p className="text-gray-300 mt-2">
              Modern short-form video service with responsive design and interactive UI components.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["JavaScript", "HTML/CSS", "Vercel"].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <motion.a 
                href="https://github.com/fahadbinsiddique/shopifytask" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                whileHover={{ x: 3 }}
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a 
                href="https://fahad-shopifytask.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
                whileHover={{ x: 3 }}
              >
                <FaGlobe /> Live Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Education & Certifications */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Education */}
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          variants={item}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">Education</h2>
          <div className="flex items-start gap-4">
            <motion.div 
              className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <span className="text-purple-400">🎓</span>
            </motion.div>
            <div>
              <h3 className="text-lg font-medium text-white">BSc in Zoology</h3>
              <p className="text-gray-400">University of Dhaka</p>
              <p className="text-gray-400 text-[16px] mt-1">Affiliated Dhaka College</p>
              <p className="text-gray-600 text-sm mt-1">Currently Enrolled</p>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
          variants={item}
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-3">Certifications</h2>
          <div className="space-y-4">
            {[
              { icon: "📜", title: "Web Development", org: "WIT Institute", year: "2024" },
              { icon: "📜", title: "Digital Marketing", org: "SEO Expate", year: "2023" },
              { icon: "📜", title: "Graphic Design", org: "Nokrek IT Institute", year: "2023" }
            ].map((cert, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-purple-400">{cert.icon}</span>
                </motion.div>
                <div>
                  <h3 className="text-lg font-medium text-white">{cert.title}</h3>
                  <p className="text-gray-400">{cert.org} • {cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Reference */}
      <motion.div 
        className="mt-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700"
        variants={item}
        whileHover={{ 
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)"
        }}
      >
        <h2 className="text-2xl font-semibold text-purple-400 mb-4">Reference</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <motion.div 
            className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/50"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src="/nazib-rafe.jpeg"
              alt="Nazib Rafe"
              fill
              className="object-cover"
            />
          </motion.div>
          <div>
            <h3 className="text-xl font-semibold text-white">Nazib Rafe</h3>
            <p className="text-gray-400">Founder & CEO, WIT Institute</p>
            <div className="mt-2 space-y-1">
              <motion.a 
                href="mailto:nazibrafe@gmail.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="text-purple-400" /> nazibrafe@gmail.com
              </motion.a>
              <motion.a 
                href="tel:+8801521494046" 
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="text-purple-400" /> +880 1521-494046
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Resume;