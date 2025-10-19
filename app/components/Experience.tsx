"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Briefcase, ChevronDown } from "lucide-react";

// Aapka data
const experiences = [
  {
    date: "Aug 2025 - Oct 2025",
    duration: "3 months",
    title: "MERN Stack Developer",
    company: "National Book Foundation",
    location: "Islamabad, Pakistan",
    type: "Final Year Supervised Industrial Training",
    description: "Contributed to the Digital Publishing Ecosystem project, developing high-performance digital platforms and POS software using Next.js for Pakistan's premier publishing organization.",
    achievements: [
      "Developed responsive digital publishing platforms",
      "Implemented POS software solutions",
      "Collaborated with cross-functional teams"
    ],
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"]
  },
  {
    date: "Nov 2024 - Jul 2025",
    duration: "9 months",
    title: "Web Developer",
    company: "Ainovtech",
    location: "Remote",
    type: "Full-time Position",
    description: "Built and maintained web applications for various clients, focusing on performance optimization and user experience. Delivered full-stack solutions from concept to deployment.",
    achievements: [
      "Led development of 5+ client projects",
      "Improved application performance by 40%",
      "Mentored junior developers"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"]
  },
  {
    date: "Jul 2024 - Oct 2024",
    duration: "4 months",
    title: "MERN Stack Developer Intern",
    company: "CafeVist@ Pvt Ltd",
    location: "Remote",
    type: "Internship Program",
    description: "Gained hands-on experience in full-stack development while contributing to real-world projects. Learned industry best practices and agile development methodologies.",
    achievements: [
      "Developed RESTful APIs and frontend interfaces",
      "Participated in code reviews and team meetings",
      "Completed training in modern web technologies"
    ],
    technologies: ["MERN Stack", "REST APIs", "Git", "Agile"]
  }
];

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/10 via-transparent to-emerald-900/10 blur-3xl"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My path through the world of web development and software engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* Interactive Timeline Container */}
        <div className="relative flex flex-col items-center">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/30 to-emerald-500/30"></div>

          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="w-full mb-6 z-10"
              >
                {/* Clickable Header */}
                <motion.div
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex items-center gap-6 cursor-pointer group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    layout
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 flex-shrink-0 ${
                      isExpanded
                        ? "bg-cyan-500 border-cyan-400 scale-110 shadow-lg shadow-cyan-500/25"
                        : "bg-gray-800 border-gray-600 group-hover:border-cyan-500"
                    } transition-all duration-300`}
                  >
                    <Briefcase
                      size={20}
                      className={
                        isExpanded
                          ? "text-white"
                          : "text-gray-400 group-hover:text-cyan-400"
                      }
                    />
                  </motion.div>

                  {/* Title and Date */}
                  <div className="flex-grow">
                    <h3
                      className={`font-semibold ${
                        isExpanded
                          ? "text-cyan-400 text-xl"
                          : "text-gray-300 text-lg group-hover:text-white"
                      } transition-colors duration-300`}
                    >
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500">{exp.company}</p>
                  </div>

                  {/* Rotating Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-gray-500 group-hover:text-cyan-400"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </motion.div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ 
                        height: "auto", 
                        opacity: 1, 
                        marginTop: "24px" 
                      }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ 
                        duration: 0.7, 
                        ease: "easeInOut" 
                      }}
                      className="pl-18 ml-6 border-l-2 border-cyan-700/30 overflow-hidden"
                    >
                      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-b-lg rounded-r-lg p-6 ml-4">
                        <div className="space-y-6">
                          {/* Header */}
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <span className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                              {exp.type}
                            </span>
                            <div className="flex items-center gap-4 text-gray-300 mb-2">
                              <span className="font-semibold text-lg">{exp.company}</span>
                              <div className="flex items-center gap-1 text-sm">
                                <MapPin size={14} />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </motion.div>

                          {/* Date & Duration */}
                          <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="flex items-center gap-4 text-gray-400"
                          >
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span className="text-sm">{exp.date}</span>
                            </div>
                            <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                              {exp.duration}
                            </span>
                          </motion.div>

                          {/* Description */}
                          <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="text-gray-300 leading-relaxed"
                          >
                            {exp.description}
                          </motion.p>

                          {/* Key Achievements */}
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.75 }}
                          >
                            <h4 className="text-sm font-semibold text-emerald-400 mb-2">Key Achievements:</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achievementIndex) => (
                                <motion.li 
                                  key={achievementIndex} 
                                  className="flex items-start gap-2 text-gray-400"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: 0.9 + achievementIndex * 0.1 }}
                                >
                                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>

                          {/* Technologies */}
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                          >
                            <h4 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: 1.35 + techIndex * 0.05 }}
                                  className="bg-gray-700/50 px-3 py-1 rounded-full text-xs text-cyan-300 border border-gray-600 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 text-sm text-gray-400 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              {experiences.length} Professional Roles
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              {experiences.reduce((acc, exp) => {
                const months = parseInt(exp.duration);
                return acc + (isNaN(months) ? 0 : months);
              }, 0)}+ Months Experience
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              Full Stack Development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;