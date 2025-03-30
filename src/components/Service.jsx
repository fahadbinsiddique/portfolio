"use client";
import { motion } from "framer-motion";
import { FaCode,FaRocket, FaPaintBrush, FaMobileAlt, FaSearch, FaShoppingCart, FaBolt, FaServer, FaDesktop } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Custom Web Development",
    description: "Tailored websites built with React, Next.js & modern frameworks for optimal performance and scalability.",
    icon: <FaCode className="w-6 h-6" />,
    features: ["Responsive Design", "SSR/SSG", "CMS Integration"],
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed in Figma with user psychology and conversion in mind.",
    icon: <FaPaintBrush className="w-6 h-6" />,
    features: ["Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Mobile Optimization",
    description: "Flawless mobile experiences with responsive layouts and touch-friendly interactions.",
    icon: <FaMobileAlt className="w-6 h-6" />,
    features: ["Responsive CSS", "Touch Events", "PWA Support"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO implementations to maximize your search visibility and organic traffic.",
    icon: <FaSearch className="w-6 h-6" />,
    features: ["PageSpeed", "Structured Data", "Semantic HTML"],
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "E-Commerce Solutions",
    description: "High-converting online stores with secure payments and inventory management.",
    icon: <FaShoppingCart className="w-6 h-6" />,
    features: ["Cart Systems", "Payment Gateways", "Product CMS"],
    color: "from-yellow-500 to-amber-600"
  },
  {
    title: "API Integrations",
    description: "Seamless third-party service connections for enhanced functionality.",
    icon: <FaBolt className="w-6 h-6" />,
    features: ["REST APIs", "Webhooks", "Microservices"],
    color: "from-red-500 to-orange-600"
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Express and database management.",
    icon: <FaServer className="w-6 h-6" />,
    features: ["API Development", "Database Design", "Authentication"],
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Figma to HTML",
    description: "Convert your Figma designs into pixel-perfect, responsive, and SEO-friendly HTML, CSS, and JavaScript.",
    icon: <FaDesktop className="w-6 h-6" />,  // Changed icon
    features: ["Pixel-Perfect Conversion", "Clean & Optimized Code", "Fully Responsive"],
    color: "from-blue-400 to-purple-500"  // Changed color
  },
  {
    title: "Fast Landing Page",
    description: "Lightning-fast, high-converting landing pages built with performance, SEO, and modern design principles.",
    icon: <FaRocket className="w-6 h-6" />,  // Changed icon
    features: ["Optimized Speed", "SEO-Friendly", "Conversion-Focused Design"],
    color: "from-green-400 to-teal-500"  // Changed color
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      key={index}
      className="relative group overflow-hidden rounded-xl border border-gray-800 hover:border-gray-700 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 300
      }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}>
          {service.icon}
        </div>
        
        {/* Title & Description */}
        <h3 className="text-xl font-bold text-white">{service.title}</h3>
        <p className="text-gray-400 mt-2 mb-4">{service.description}</p>
        
        {/* Features */}
        <div className="mt-auto space-y-2">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`}></div>
              <span className="text-sm text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div 
          className="flex cursor-pointer items-center gap-1 mt-6 text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
        >
          <span>Learn more</span>
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="Services" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;