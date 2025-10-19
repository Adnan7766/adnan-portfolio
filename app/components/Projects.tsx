'use client';
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Updated projects data in English with corrected details
const projects = [
  {
    title: "NBF Digital Publishing Ecosystem",
    role: "MERN Stack Developer (One-Year Contract)",
    description: "Developed a comprehensive digital publishing platform for National Book Foundation including e-commerce website, mobile app, and POS software for book sales and event management.",
    achievements: [
      "Built full-stack e-commerce platform for book sales",
      "Developed mobile application for enhanced user experience",
      "Created POS software for physical store operations",
      "Implemented event management system for book fairs"
    ],
    stack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "TypeScript", "Mobile App", "POS System"]
  },
  {
    title: "Ainovtech Portfolio Website", 
    role: "Full Stack Developer (Client Project)",
    description: "Developed a modern portfolio website for Ainovtech during internship, showcasing their services and projects with responsive design and optimal performance.",
    achievements: [
      "Built responsive portfolio website from scratch",
      "Implemented modern UI/UX design principles",
      "Optimized website performance and SEO",
      "Integrated contact forms and project showcases"
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "CSS3", "JavaScript"]
  },
  {
    title: "Vehicle Tracking System", 
    role: "Python Developer (Client Project)",
    description: "Developed a vehicle tracking system with Python backend and dashboard for real-time vehicle data monitoring and analytics.",
    achievements: [
      "Created real-time vehicle tracking dashboard",
      "Implemented data visualization features",
      "Built RESTful APIs for data management",
      "Designed responsive admin interface"
    ],
    stack: ["Python", "Flask", "HTML/CSS", "JavaScript", "Data Visualization"]
  },
  {
    title: "Android Robotic Arm (FYP)",
    role: "Project Lead & Developer", 
    description: "Final Year Project: A pick-and-place robotic arm controlled via Android application with IoT integration for industrial automation.",
    achievements: [
      "Led team of 4 developers and engineers",
      "Developed Android control application",
      "Integrated IoT sensors and controllers",
      "Implemented real-time robotic arm control"
    ],
    stack: ["Android", "Robotics", "IoT", "Java", "Embedded Systems"]
  },
  {
    title: "IoT Footfall Counter",
    role: "Python Developer (Client Project)",
    description: "IoT-based footfall counting system with real-time data dashboard for tracking and analyzing visitor traffic patterns.",
    achievements: [
      "Developed real-time data visualization dashboard",
      "Integrated IoT sensors for accurate counting",
      "Created analytics and reporting features",
      "Built scalable backend architecture"
    ],
    stack: ["Python", "IoT", "Data Visualization", "Flask", "Real-time Analytics"]
  }
];

// Simple CSS-based Floating Particles - NO WINDOW ERROR
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        
        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              '--random-x': `${randomX}px`,
              '--random-y': `${randomY}px`,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
};

// Typewriter Effect Component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50 + delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isInView, text, delay]);

  return <span ref={ref}>{displayText}</span>;
};

// Project Card Component (Same as before)
const ProjectCard = ({ project, index, isInView }: { 
  project: any; 
  index: number; 
  isInView: boolean;
}) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { 
    once: true, 
    margin: "-100px",
    amount: 0.3
  });

  const baseTopOffset = 8;
  const stackOffset = 2;

  return (
    <motion.div 
      ref={cardRef}
      className="sticky-card w-full mx-auto max-w-4xl sticky mb-8"
      style={{ 
        top: `${baseTopOffset + index * stackOffset}rem`,
        zIndex: 10 + index
      }}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={cardInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.3
        }
      } : {}}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 400 }
      }}
    >
      <motion.div 
        className="box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.01]"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 50px rgba(6, 182, 212, 0.3)"
        }}
      >
        
        {/* Main Card with Enhanced Effects */}
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full group transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden">
          
          {/* Animated Border Top */}
          <motion.div 
            className="flex flex-row"
            initial={{ scaleX: 0 }}
            animate={cardInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
          >
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-emerald-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-emerald-600 to-transparent"></div>
          </motion.div>
          
          {/* Card Header with Floating Dots */}
          <div className="px-6 lg:px-8 py-4 lg:py-5 relative">
            <motion.div 
              className="flex flex-row space-x-2 absolute top-1/2 -translate-y-1/2"
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <motion.div 
                className="h-3 w-3 rounded-full bg-red-400 cursor-pointer"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
              <motion.div 
                className="h-3 w-3 rounded-full bg-orange-400 cursor-pointer"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
              <motion.div 
                className="h-3 w-3 rounded-full bg-green-300 cursor-pointer"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              />
            </motion.div>
            <motion.p 
              className="text-center ml-4 text-cyan-400 text-lg lg:text-xl font-bold tracking-wide"
              whileHover={{ 
                color: "#22d3ee",
                scale: 1.05
              }}
            >
              {project.title}
            </motion.p>
          </div>
          
          {/* Code Content with Typewriter Effect */}
          <motion.div 
            className="overflow-hidden border-t-[2px] border-cyan-900/50 px-6 lg:px-8 py-6 lg:py-8"
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.3 + 0.7 }}
          >
            <code className="font-mono text-sm md:text-base lg:text-lg">
              <motion.div 
                className="blink"
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.3 + 0.8 }}
              >
                <span className="mr-2 text-cyan-400">const</span>
                <span className="mr-2 text-white">project</span>
                <span className="mr-2 text-cyan-400">=</span>
                <span className="text-gray-400">{'{'}</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 + 0.9 }}
              >
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">'</span>
                <span className="text-emerald-300">{project.title}</span>
                <span className="text-gray-400">',</span>
              </motion.div>
              <motion.div 
                className="ml-4 lg:ml-8 mr-2"
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 + 1.0 }}
              >
                <span className="text-white">description:</span>
                <span className="text-gray-400">'</span>
                <span className="text-cyan-300">{project.description}</span>
                <span className="text-gray-400">',</span>
              </motion.div>
              
              {/* Key Achievements Section Added */}
              <motion.div 
                className="ml-4 lg:ml-8 mr-2"
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 + 1.1 }}
              >
                <span className="text-white">achievements:</span>
                <span className="text-gray-400"> [</span>
                <br />
                {project.achievements.map((achievement: string, i: number) => (
                  <motion.div key={i} className="ml-8 lg:ml-12">
                    <span className="text-gray-400">'</span>
                    <span className="text-amber-300">{achievement}</span>
                    <span className="text-gray-400">'</span>
                    {i < project.achievements.length - 1 && <span className="text-gray-400">,</span>}
                  </motion.div>
                ))}
                <span className="text-gray-400">],</span>
              </motion.div>

              <motion.div 
                className="ml-4 lg:ml-8 mr-2"
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 + 1.2 }}
              >
                <span className="text-white">stack:</span>
                <span className="text-gray-400"> [</span>
                {project.stack.map((tech: string, i: number) => (
                  <motion.span 
                    key={i} 
                    className="inline"
                    initial={{ opacity: 0 }}
                    animate={cardInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.3 + 1.3 + i * 0.1 }}
                    whileHover={{ 
                      color: "#22d3ee",
                      scale: 1.1
                    }}
                  >
                    <span className="text-emerald-300">'{tech}'</span>
                    {i < project.stack.length - 1 && <span className="text-gray-400">, </span>}
                  </motion.span>
                ))}
                <span className="text-gray-400">],</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3 + 1.4 }}
              >
                <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                <span className="text-gray-400">'</span>
                <span className="text-amber-300">{project.role}</span>
                <span className="text-gray-400">',</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={cardInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.3 + 1.5 }}
              >
                <span className="text-gray-400">{'}'};</span>
              </motion.div>
            </code>
          </motion.div>

          {/* Enhanced Bottom Glow */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            whileHover={{
              opacity: 1,
              scaleY: 2
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Scroll-based animations
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-[#0f172a] relative min-h-screen">
      {/* Enhanced Background Elements */}
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/10 via-transparent to-emerald-900/10 blur-3xl"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Enhanced Sticky Section Title */}
        <motion.div 
          className="sticky top-10 z-40"
          style={{
            scale: titleScale,
            opacity: titleOpacity
          }}
        >
          <motion.div 
            className="w-[80px] h-[80px] bg-cyan-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <div className="flex items-center justify-start relative">
            <motion.span 
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 absolute left-0 w-fit text-white px-6 py-3 text-xl rounded-md font-bold shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <TypewriterText text="PROJECTS" />
            </motion.span>
            <motion.span 
              className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 ml-4"
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Project Cards List with Enhanced Animations */}
        <div className="pt-24 flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Enhanced Projects Counter */}
        <motion.div 
          className="relative text-center mt-12 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-6 text-sm text-gray-400 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-4 cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(6, 182, 212, 0.5)"
            }}
          >
            <motion.span 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-2 h-2 bg-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              {projects.length} Featured Projects
            </motion.span>
            <motion.span 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              />
              Full Stack Developer
            </motion.span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;