'use client';
import React from "react";
// UPDATE: Framer Motion hata diya gaya hai, kyunke humein CSS sticky chahiye
// import { motion } from "framer-motion"; 

// Aapke projects ki details
const projects = [
  {
    title: "NBF Book Selling Website",
    role: "Lead MERN Stack Developer (Intern)",
    description: "National Book Foundation ke liye Full-stack e-commerce site. Physical books sell karne ke liye banayi gayi.",
    stack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Vehicle Tracking System", 
    role: "Python Developer (Client Project)",
    description: "Ainovtech ke liye ek client project. Python backend aur dashboard jo vehicle data ko track karta hai.",
    stack: ["Python", "Flask", "HTML/CSS", "JavaScript"]
  },
  {
    title: "Android Robotic Arm (FYP)",
    role: "Project Lead & Developer", 
    description: "Mera Final Year Project (FYP). Ek pick-and-place robotic arm jise Android app se control kiya jaata hai.",
    stack: ["Android", "Robotics", "Engineering", "IoT"]
  },
  {
    title: "IoT Footfall Counter",
    role: "Python Developer (Client Project)",
    description: "Ainovtech ke liye ek IoT data dashboard jo real-time footfall data visualize karta hai.",
    stack: ["Python", "IoT", "Data Visualization"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background Gradient Blurs */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/10 via-transparent to-emerald-900/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Sticky Section Title (Yeh sticky rahega) */}
        <div className="sticky top-10 z-40">
          <div className="w-[80px] h-[80px] bg-cyan-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 absolute left-0 w-fit text-white px-6 py-3 text-xl rounded-md font-bold shadow-lg">
              PROJECTS
            </span>
            <span className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-emerald-500 ml-4"></span>
          </div>
        </div>

        {/* Project Cards List with STICKY STACKING */}
        {/* UPDATE: 'gap-8' hata diya gaya hai */}
        <div className="pt-24 flex flex-col"> 
          {projects.map((project, index) => (
            // === UPDATE: 'motion.div' ko 'div' kar diya ===
            // === aur animation props (initial, whileInView) hata diye ===
            <div 
              key={index}
              className="sticky-card w-full mx-auto max-w-4xl sticky"
              // UPDATE: Har card pichle wale se thora neeche se start hoga
              // 5rem (80px) base hai + har card 2rem (32px) mazeed neeche
              style={{ top: `${5 + index * 2}rem` }} 
            >
              <div 
                className="box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] hover:scale-[1.02]"
              >
                
                {/* Main Card - WOHI CODE BLOCK STYLE */}
                <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full group transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                  
                  {/* Top Gradient Bar - CYAN THEME */}
                  <div className="flex flex-row">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-emerald-600"></div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-emerald-600 to-transparent"></div>
                  </div>
                  
                  {/* Card Header with Dots */}
                  <div className="px-6 lg:px-8 py-4 lg:py-5 relative">
                    <div className="flex flex-row space-x-2 absolute top-1/2 -translate-y-1/2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-300"></div>
                    </div>
                    <p className="text-center ml-4 text-cyan-400 text-lg lg:text-xl font-bold tracking-wide">
                      {project.title}
                    </p>
                  </div>
                  
                  {/* Card Content - WOHI CODE SYNTAX */}
                  <div className="overflow-hidden border-t-[2px] border-cyan-900/50 px-6 lg:px-8 py-6 lg:py-8">
                    <code className="font-mono text-sm md:text-base lg:text-lg">
                      <div className="blink">
                        <span className="mr-2 text-cyan-400">const</span>
                        <span className="mr-2 text-white">project</span>
                        <span className="mr-2 text-cyan-400">=</span>
                        <span className="text-gray-400">{'{'}</span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                        <span className="text-gray-400">'</span>
                        <span className="text-emerald-300">{project.title}</span>
                        <span className="text-gray-400">',</span>
                      </div>
                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-white">description:</span>
                        <span className="text-gray-400">'</span>
                        <span className="text-cyan-300">{project.description}</span>
                        <span className="text-gray-400">',</span>
                      </div>
                      <div className="ml-4 lg:ml-8 mr-2">
                        <span className="text-white">stack:</span>
                        <span className="text-gray-400"> [</span>
                        {project.stack.map((tech, i) => (
                          <span key={i} className="inline">
                            <span className="text-emerald-300">'{tech}'</span>
                            {i < project.stack.length - 1 && <span className="text-gray-400">, </span>}
                          </span>
                        ))}
                        <span className="text-gray-400">],</span>
                      </div>
                      <div>
                        <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
                        <span className="text-gray-400">'</span>
                        <span className="text-amber-300">{project.role}</span>
                        <span className="text-gray-400">',</span>
                      </div>
                      <div>
                        <span className="text-gray-400">{'}'};</span>
                      </div>
                    </code>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Counter - UPDATE: 'motion.div' ko 'div' kar diya */}
        <div
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 text-sm text-gray-400 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-8 py-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              {projects.length} Featured Projects
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              Full Stack Developer
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;