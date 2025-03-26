"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-8 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold">
        Ready to take <span className="text-purple-500">your</span> digital presence to the next level?
      </h2>
      <p className="text-gray-400 mt-2">
        Reach out to me today and let's discuss how I can help you achieve your goals.
      </p>
      <button className="mt-4 px-6 py-2 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-semibold transition">
        Let's get in touch →
      </button>

      <p className="text-gray-500 mt-8">Copyright © {new Date().getFullYear()} Your Name</p>
    </motion.footer>
  );
};

export default Footer;
