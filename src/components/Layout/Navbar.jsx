"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Code, Cpu, Server, User, Mail } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsVisible(window.scrollY < lastScrollY || window.scrollY < 10);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Tech-inspired nav items with icons
  const navItems = [
    { id: "resume", label: "Resume", icon: <Terminal size={16} /> },
    { id: "projects", label: "Projects", icon: <Code size={16} /> },
    { id: "services", label: "Services", icon: <Cpu size={16} /> },
    // { id: "experience", label: "Experience", icon: <Server size={16} /> },
    { id: "contact", label: "Contact", icon: <Mail size={16} /> },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Animation variants
  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const hexagonPath = "M25 0L75 0L100 43.3013L75 86.6025L25 86.6025L0 43.3013L25 0Z";

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-purple-500/20"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Animated Hexagon Logo */}
          <Link href="/" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer group relative"
              aria-label="Home"
            >
              <svg 
                width="30" 
                height="30" 
                viewBox="0 0 100 87" 
                className="mr-2 text-purple-400 group-hover:text-purple-300 transition-colors"
              >
                <motion.path
                  d={hexagonPath}
                  fill="currentColor"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                <text 
                  x="50" 
                  y="55" 
                  textAnchor="middle" 
                  fill="currentColor" 
                  className="text-xl font-bold"
                >
                  F
                </text>
              </svg>
              <span className="text-xl font-mono font-bold text-purple-100 group-hover:text-purple-300 transition-colors">
                Fahad
              </span>
            </motion.a>
          </Link>

          <div className="flex items-center gap-6">
            {/* Holographic Desktop Menu */}
            <ul className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.li 
                  key={item.id}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link href={`${item.id}`} passHref legacyBehavior>
                    <a className="relative group block px-4 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-purple-300">{item.icon}</span>
                        <span className="text-gray-200 group-hover:text-purple-300 transition-colors font-mono text-sm">
                          {item.label}
                        </span>
                      </div>
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400 opacity-0 group-hover:opacity-100"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </a>
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Circuit Board Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md focus:outline-none relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                {isOpen ? (
                  <X size={24} className="text-purple-400" />
                ) : (
                  <>
                    <Menu size={24} className="text-purple-400" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  </>
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Cyberpunk Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-800/95 backdrop-blur-md overflow-hidden border-t border-purple-500/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`${item.id}`} passHref legacyBehavior>
                    <a 
                      className="flex items-center gap-3 py-3 px-4 rounded-md hover:bg-gray-700/30 transition-colors text-gray-200 font-mono group"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                      <span className="ml-auto text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        _{index + 1}
                      </span>
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Circuit Border (Bottom) */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.nav>
  );
};

export default Navbar;