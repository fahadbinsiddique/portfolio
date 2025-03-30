"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/fahadbinsiddique", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/fahadbinsiddique", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://x.com/fahad_bs036", label: "Twitter" },
    { icon: <FaEnvelope />, url: "mailto:fahadbinsiddique0@gmail.com", label: "Email" },
    { icon: <FaPhoneAlt />, url: "tel:+8801794147764", label: "Call" }
  ];

  return (
    <motion.footer
      className="relative bg-gray-900 text-white overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* CTA Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">elevate</span> your digital presence?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Let's collaborate to create something extraordinary. I'm just one message away.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Connect <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-6 mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-900/30 transition-colors text-gray-300 hover:text-white"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright & Navigation */}
        <motion.div 
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Fahad Bin Siddique. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About</a>
            <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Services</a>
            <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;