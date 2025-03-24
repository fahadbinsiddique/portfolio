import { motion } from "framer-motion";
import { Code, Globe, Clock, MessageSquare, Zap } from "lucide-react";

const BentoGrid = () => {
  const gridItems = [
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "Client Collaboration",
      description: "Fostering open communication for better project outcomes.",
      delay: 0,
      color: "from-purple-900/50 to-gray-900"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-400" />,
      title: "Flexible Time Zones",
      description: "Available for meetings & collaboration at your convenience.",
      delay: 0.2,
      color: "from-amber-900/50 to-gray-900"
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      title: "Tech Stack",
      description: "",
      tech: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Framer"],
      delay: 0.4,
      color: "from-emerald-900/50 to-gray-900"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Tech Enthusiast",
      description: "Passionate about development and always learning new things.",
      delay: 0.6,
      color: "from-blue-900/50 to-gray-900"
    },
    {
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      title: "Building Animation Library",
      description: "Experimenting with Three.js, GSAP, and other animation tools.",
      delay: 0.8,
      color: "from-pink-900/50 to-gray-900"
    },
  ];

  return (
    <section className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridItems.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${item.color} p-6 rounded-3xl text-white shadow-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.6, 
              ease: "backOut",
              delay: item.delay 
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  {item.icon}
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {item.title}
                </h2>
              </div>
              
              {item.description && (
                <p className="text-gray-300 mb-4">
                  {item.description}
                </p>
              )}
              
              {item.tech && (
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
        
        {/* Special CTA Box */}
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-3xl text-white shadow-xl border border-purple-900/50 hover:border-purple-400 transition-all duration-300 md:col-span-2 lg:col-span-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            duration: 0.6, 
            ease: "backOut",
            delay: 1 
          }}
        >
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Let's Work Together
              </h2>
              <p className="text-gray-300 mb-6">
                Have a project in mind? I'm currently available for freelance work and collaborations.
              </p>
            </div>
            <motion.button
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold shadow-lg hover:shadow-purple-500/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;