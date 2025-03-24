import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/yourusername" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com/in/yourusername" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/yourusername" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:your@email.com" }
  ];

  return (
    <motion.footer
      className="relative bg-gray-900 text-white py-16 px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background elements */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">elevate</span> your digital presence?
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Let's collaborate to create something extraordinary. I'm just one message away.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mb-16"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:your@email.com"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
          
          <motion.a
            href="#projects"
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-900/30 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-6 mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-purple-900/50 transition-colors"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="pt-8 border-t border-gray-800 text-gray-500 text-sm"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} Fahad Bin Siddique. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;