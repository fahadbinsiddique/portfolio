import { motion } from "framer-motion";
import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Demo-1 Frontend Engineer Intern",
    company: "Tech Solutions",
    period: "Jun 2022 - Sep 2022",
    description: "Assisted in developing 5+ user-friendly web applications using React.js, improving client engagement by 35% through enhanced interactivity.",
    skills: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    link: "#"
  },
  {
    title: "Demo-2 Mobile App Developer",
    company: "JSM Tech",
    period: "Oct 2022 - Mar 2023",
    description: "Designed & developed a responsive mobile app with 10k+ downloads, achieving 4.8/5 rating on app stores using React Native.",
    skills: ["React Native", "Expo", "Firebase", "UI/UX"],
    link: "#"
  },
  {
    title: "Demo- 3 Freelance Full-Stack Developer",
    company: "Self Employed",
    period: "Apr 2023 - Present",
    description: "Led development of 3 SaaS platforms, implementing CI/CD pipelines and reducing deployment time by 60%.",
    skills: ["Next.js", "Node.js", "AWS", "GraphQL"],
    link: "#"
  },
  {
    title: "Demo-4 Lead Frontend Developer",
    company: "Titanium Corp",
    period: "Aug 2023 - Present",
    description: "Architected frontend systems serving 50k+ MAU, mentoring 3 junior developers and improving performance by 40%.",
    skills: ["React", "Webpack", "Jest", "Micro-frontends"],
    link: "#"
  },
];

const WorkExperience = () => {
  return (
    <section className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-20 left-1/4 w-64 h-64 bg-purple-900 rounded-full filter blur-3xl opacity-10"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>
        <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-16">
          My career path and the valuable experiences I've gained along the way
        </p>

        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/20 via-purple-500/50 to-purple-500/20"></div>
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "backOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}>
                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 border-2 border-purple-500/50 shadow-lg">
                  <Briefcase className="w-6 h-6 text-purple-400" />
                </div>
                
                {/* Experience card */}
                <motion.div 
                  className="flex-1 bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="md:hidden p-3 bg-gray-800 rounded-lg">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                        <div className="flex items-center gap-2 text-purple-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                      <p className="text-lg text-purple-300 mt-1">{experience.company}</p>
                      <p className="text-gray-300 mt-4">{experience.description}</p>
                      
                      <div className="mt-6 flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="px-3 py-1 bg-gray-800 text-sm rounded-full text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <motion.a
                        href={experience.link}
                        className="inline-flex items-center gap-1 mt-6 text-purple-400 hover:text-purple-300 transition-colors"
                        whileHover={{ x: 3 }}
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;