"use client";


import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
    { id: "resume", label: "Resume" },
  ];

  if (!mounted) return null;

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled
          ? "bg-gray-900/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg"
          : "bg-gray-900/90 dark:bg-gray-950/90 backdrop-blur-sm"
      } transition-all duration-300 border-b border-gray-800/50`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" passHref>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer group"
            >
              <span className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                Fahad<span className="text-purple-500">.</span>
              </span>
            </motion.div>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Menu Items */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.id} href={`#${item.id}`} passHref>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <span className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                      {item.label}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-purple-400" />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 dark:bg-gray-900 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <Link key={item.id} href={`#${item.id}`} passHref>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block py-3 px-4 rounded-md hover:bg-gray-700/30 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-white hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center gap-2 w-full py-3 px-4 rounded-md hover:bg-gray-700/30 transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 text-purple-400" />
                      <span className="text-white">Dark Mode</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;