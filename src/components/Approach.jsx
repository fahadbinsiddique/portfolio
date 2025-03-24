import { motion } from "framer-motion";
import { CircleDot, DraftingCompass, Rocket } from "lucide-react";

const approachSteps = [
  { 
    phase: "Discovery Phase", 
    description: "Deep dive into your business objectives, target audience, and technical requirements through collaborative workshops.",
    icon: <CircleDot className="w-8 h-8 text-purple-400" />,
    duration: "1-2 weeks",
    deliverables: ["Project Brief", "User Personas", "Tech Audit"]
  },
  { 
    phase: "Design Phase", 
    description: "Crafting pixel-perfect interfaces with user experience at the forefront, validated through prototype testing.",
    icon: <DraftingCompass className="w-8 h-8 text-amber-400" />,
    duration: "2-3 weeks",
    deliverables: ["Wireframes", "UI Kit", "Interactive Prototype"]
  },
  { 
    phase: "Development Phase", 
    description: "Agile implementation with weekly demos, ensuring the final product aligns perfectly with your vision.",
    icon: <Rocket className="w-8 h-8 text-emerald-400" />,
    duration: "4-8 weeks",
    deliverables: ["MVP", "QA Reports", "Deployment Pipeline"]
  },
];

const Approach = () => {
  return (
    <section className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 right-0 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-10"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Development Process
          </span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A transparent, iterative approach that delivers exceptional results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "backOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center w-16 h-16 mb-6 mx-auto rounded-full bg-gray-800 group-hover:bg-purple-900/30 transition-colors">
                  {step.icon}
                </div>
                
                <div className="text-center mb-6">
                  <div className="inline-block px-3 py-1 bg-purple-900/30 text-purple-400 rounded-full text-sm font-medium mb-3">
                    {step.duration}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.phase}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">DELIVERABLES:</h4>
                  <ul className="space-y-2">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process connector (desktop only) */}
        <div className="hidden md:flex items-center justify-center mt-8 px-12">
          <div className="h-1 bg-gradient-to-r from-purple-500 via-amber-500 to-emerald-500 rounded-full w-full max-w-2xl opacity-30"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Approach;