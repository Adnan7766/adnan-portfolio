"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cpu,
  Sparkles
} from "lucide-react";

// Icons imports
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiVuedotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiFlask, SiMongodb, SiMongoose, SiFirebase, SiAmazon,
  SiSqlite, SiPostgresql, SiMysql, SiGit, SiGithub, SiDocker
} from "react-icons/si";
import { GrAndroid } from "react-icons/gr";
import { FaRobot } from "react-icons/fa";
import { MdNetworkWifi } from "react-icons/md";
import { TbApi } from "react-icons/tb";

// --- ANIMATED NUMBER COMPONENT ---
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const numValue = parseInt(value.replace('+', ''));
      animate(motionValue, numValue, {
        duration: 2,
        ease: "easeOut"
      });
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + (value.includes('+') ? '+' : '');
      }
    });
  }, [springValue, value]);

  return <span ref={ref}>0{value.includes('+') ? '+' : ''}</span>;
};

// Simple CSS-based Floating Particles
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
// --- PULSING ORB COMPONENT ---
const PulsingOrb = ({ color, delay = 0 }: { color: string; delay?: number }) => (
  <motion.div
    className={`absolute w-4 h-4 ${color} rounded-full blur-sm`}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1, 0], opacity: [0, 0.6, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const TechLogos = {
  HTML5: ({ className }: { className?: string }) => <SiHtml5 className={`${className} text-[#E34F26]`} />,
  CSS3: ({ className }: { className?: string }) => <SiCss3 className={`${className} text-[#1572B6]`} />,
  JavaScript: ({ className }: { className?: string }) => <SiJavascript className={`${className} text-[#F7DF1E]`} />,
  TypeScript: ({ className }: { className?: string }) => <SiTypescript className={`${className} text-[#3178C6]`} />,
  React: ({ className }: { className?: string }) => <SiReact className={`${className} text-[#61DAFB]`} />,
  NextJS: ({ className }: { className?: string }) => <SiNextdotjs className={`${className} text-white`} />,
  VueJS: ({ className }: { className?: string }) => <SiVuedotjs className={`${className} text-[#4FC08D]`} />,
  TailwindCSS: ({ className }: { className?: string }) => <SiTailwindcss className={`${className} text-[#06B6D4]`} />,
  Node: ({ className }: { className?: string }) => <SiNodedotjs className={`${className} text-[#339933]`} />,
  Express: ({ className }: { className?: string }) => <SiExpress className={`${className} text-white`} />,
  Python: ({ className }: { className?: string }) => <SiPython className={`${className} text-[#3776AB]`} />,
  Flask: ({ className }: { className?: string }) => <SiFlask className={`${className} text-white`} />,
  REST: ({ className }: { className?: string }) => <TbApi className={`${className} text-gray-400`} />,
  MongoDB: ({ className }: { className?: string }) => <SiMongodb className={`${className} text-[#47A248]`} />,
  Mongoose: ({ className }: { className?: string }) => <SiMongoose className={`${className} text-[#880000]`} />,
  Firebase: ({ className }: { className?: string }) => <SiFirebase className={`${className} text-[#FFCA28]`} />,
  AWS: ({ className }: { className?: string }) => <SiAmazon className={`${className} text-[#FF9900]`} />,
  SQLite: ({ className }: { className?: string }) => <SiSqlite className={`${className} text-[#003B57]`} />,
  PostgreSQL: ({ className }: { className?: string }) => <SiPostgresql className={`${className} text-[#4169E1]`} />,
  MySQL: ({ className }: { className?: string }) => <SiMysql className={`${className} text-[#4479A1]`} />,
  Android: ({ className }: { className?: string }) => <GrAndroid className={`${className} text-[#3DDC84]`} />,
  Robotics: ({ className }: { className?: string }) => <FaRobot className={`${className} text-gray-400`} />,
  IoT: ({ className }: { className?: string }) => <MdNetworkWifi className={`${className} text-gray-400`} />,
  Git: ({ className }: { className?: string }) => <SiGit className={`${className} text-[#F05032]`} />,
  GitHub: ({ className }: { className?: string }) => <SiGithub className={`${className} text-white`} />,
  Docker: ({ className }: { className?: string }) => <SiDocker className={`${className} text-[#2496ED]`} />,
};

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: <Code2 size={24} />,
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-400/30",
    skills: [
      { name: "HTML5", logo: TechLogos.HTML5 },
      { name: "CSS3", logo: TechLogos.CSS3 },
      { name: "Tailwind CSS", logo: TechLogos.TailwindCSS },
      { name: "JavaScript", logo: TechLogos.JavaScript },
      { name: "TypeScript", logo: TechLogos.TypeScript },
      { name: "React.js", logo: TechLogos.React },
      { name: "Next.js", logo: TechLogos.NextJS },
      { name: "Vue.js", logo: TechLogos.VueJS },
    ],
  },
  {
    title: "Backend Technologies",
    icon: <Server size={24} />,
    color: "from-emerald-500 to-green-400",
    bgColor: "bg-emerald-500/20",
    borderColor: "border-emerald-400/30",
    skills: [
      { name: "Node.js", logo: TechLogos.Node },
      { name: "Express.js", logo: TechLogos.Express },
      { name: "Python", logo: TechLogos.Python },
      { name: "Flask", logo: TechLogos.Flask },
      { name: "RESTful APIs", logo: TechLogos.REST }
    ],
  },
  {
    title: "Database & Cloud",
    icon: <Database size={24} />,
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-400/30",
    skills: [
      { name: "MongoDB", logo: TechLogos.MongoDB },
      { name: "Mongoose", logo: TechLogos.Mongoose },
      { name: "Firebase", logo: TechLogos.Firebase },
      { name: "AWS/Cloud", logo: TechLogos.AWS },
      { name: "PostgreSQL", logo: TechLogos.PostgreSQL },
      { name: "MySQL", logo: TechLogos.MySQL },
      { name: "SQLite", logo: TechLogos.SQLite },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Cpu size={24} />,
    color: "from-orange-500 to-red-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-400/30",
    skills: [
      { name: "Git", logo: TechLogos.Git },
      { name: "GitHub", logo: TechLogos.GitHub },
      { name: "Docker", logo: TechLogos.Docker },
      { name: "Android Dev", logo: TechLogos.Android },
      { name: "Robotics", logo: TechLogos.Robotics },
      { name: "IoT", logo: TechLogos.IoT },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <FloatingParticles />
      
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-800/10 via-transparent to-emerald-900/10 blur-3xl"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">
              Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-8"
          >
            Technologies and tools I master to build <span className="text-cyan-300">exceptional digital solutions</span>
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : {}}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setActiveCategory(index)}
              onHoverEnd={() => setActiveCategory(null)}
              className="group relative"
            >
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>

              {/* Pulsing Orbs */}
              <PulsingOrb color="bg-cyan-400" delay={0} />
              <PulsingOrb color="bg-purple-400" delay={1} />
              <PulsingOrb color="bg-pink-400" delay={2} />

              {/* Main Card */}
              <div className={`relative backdrop-blur-xl bg-white/5 border ${category.borderColor} rounded-2xl p-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 overflow-hidden`}>

                {/* Animated Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10`}
                  animate={activeCategory === index ? { opacity: 0.1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Category Header */}
                <motion.div 
                  className="flex items-center gap-4 mb-8 relative z-10"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors">
                      {category.title}
                    </h3>
                    <motion.div 
                      className={`w-16 h-1 bg-gradient-to-r ${category.color} mt-3 rounded-full`}
                      whileHover={{ width: "100px" }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </motion.div>

                {/* Skills Grid with Enhanced Animations */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 relative z-10">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.15 + i * 0.1 }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-cyan-400/50 hover:bg-cyan-500/10 backdrop-blur-sm transition-all duration-300 cursor-pointer group/skill relative"
                    >
                      {/* Skill Logo with Enhanced Effects */}
                      <motion.div 
                        className="w-12 h-12 flex items-center justify-center relative"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-md group-hover/skill:opacity-100 opacity-0 transition-opacity"></div>
                        {skill.logo ? (
                          <skill.logo className="w-8 h-8 group-hover/skill:scale-125 transition-transform duration-300 relative z-10" />
                        ) : (
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-xs font-bold relative z-10`}>
                            {skill.name.charAt(0)}
                          </div>
                        )}
                      </motion.div>
                      
                      {/* Skill Name with Typing Effect */}
                      <motion.span
                        className="text-sm text-gray-300 text-center group-hover/skill:text-cyan-100 transition-colors font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill.name}
                      </motion.span>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Bottom Border */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100`}
                  animate={activeCategory === index ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Technology Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Technologies", value: "25+", color: "from-cyan-500 to-blue-500" },
              { label: "Categories", value: "4", color: "from-emerald-500 to-green-500" },
              { label: "Years Experience", value: "2+", color: "from-purple-500 to-pink-500" },
              { label: "Projects Built", value: "50+", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className={`bg-gradient-to-r ${stat.color} rounded-3xl p-8 text-center backdrop-blur-sm border border-white/20 shadow-2xl relative overflow-hidden`}
              >
                {/* Animated Background */}
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                />
                
                <div className="text-3xl lg:text-4xl font-black text-white mb-3 relative z-10">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-white/90 text-sm font-semibold uppercase tracking-wider relative z-10">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;