"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Code2, Rocket, Users, Target, Sparkles, ArrowRight } from 'lucide-react';

// Professional Highlight Component
const Highlight = ({ children }: { children: React.ReactNode }) => (
  <motion.span 
    className="font-semibold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.span>
);

// Floating Element Component
const FloatingElement = ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [0, -10, 0],
      rotate: [0, 5, 0]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
    className="inline-flex"
  >
    {children}
  </motion.div>
);

// Slide In Wrapper Component
const SlideIn = ({ children, direction = "left", delay = 0 }: { 
  children: React.ReactNode; 
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Fixed Floating Particles without window
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
          initial={{
            x: Math.random() * 1200, // Fixed: No window object
            y: Math.random() * 800,  // Fixed: No window object
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            delay: Math.random() * 3
          }}
        />
      ))}
    </div>
  );
};

const About: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Code2 size={20} />, value: '2+', label: 'Years Experience' },
    { icon: <Rocket size={20} />, value: '50+', label: 'Projects Completed' },
    { icon: <Users size={20} />, value: '100%', label: 'Client Satisfaction' },
    { icon: <Target size={20} />, value: '24/7', label: 'Dedicated Support' }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-x-48 translate-y-48"></div>
      
      {/* Fixed Floating Particles */}
      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <SlideIn direction="down" delay={0.2}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
            
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "96px" } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-8 rounded-full"
            ></motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              Passionate developer crafting <span className="text-emerald-300">digital solutions</span> that make a difference
            </motion.p>
          </div>
        </SlideIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content - Left Side with Slide In Effects */}
          <div className="space-y-6">
            <SlideIn direction="right" delay={0.3}>
              <div className="space-y-4">
                <motion.p 
                  className="text-gray-200 text-lg leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  I'm a <Highlight>dedicated Full Stack Developer</Highlight> based in Islamabad, Pakistan, 
                  specializing in the <Highlight>MERN stack</Highlight>. My journey in web development 
                  has been driven by a passion for creating solutions that not only meet technical 
                  requirements but also deliver exceptional user experiences.
                </motion.p>
                
                <motion.p 
                  className="text-gray-200 text-lg leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  With expertise in <Highlight>React, Node.js, MongoDB, and Express.js</Highlight>, 
                  I build scalable applications from concept to deployment. My toolkit also includes 
                  <Highlight> Python and Flask</Highlight>, which I leverage for robust backend 
                  services and client-specific solutions.
                </motion.p>

                <motion.p 
                  className="text-gray-200 text-lg leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  Recently, I had the privilege of contributing to the 
                  <Highlight> Digital Publishing Ecosystem</Highlight> at the 
                  <Highlight> National Book Foundation (NBF)</Highlight>, where I utilized 
                  <Highlight> Next.js</Highlight> to develop high-performance digital platforms 
                  and comprehensive Point of Sale systems.
                </motion.p>
              </div>
            </SlideIn>

            {/* Enhanced Stats Grid */}
            <SlideIn direction="up" delay={0.6}>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center hover:border-emerald-400/30 transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="text-emerald-400 flex justify-center mb-2 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {stat.icon}
                      </motion.div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1 relative z-10">
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 1 + index * 0.1, type: "spring" }}
                      >
                        {stat.value}
                      </motion.span>
                    </div>
                    <div className="text-gray-400 text-sm relative z-10">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </SlideIn>
          </div>

          {/* Image/GIF - Right Side with Enhanced Animations */}
          <SlideIn direction="left" delay={0.4}>
            <div className="flex justify-center">
              <motion.div 
                className="relative group"
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                {/* Animated Background Glow */}
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
                  animate={{ 
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl border border-gray-700 overflow-hidden">
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    whileHover={{ transition: { duration: 1.5 } }}
                  />
                  
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 0.5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center"
                  >
                    <div className="text-center">
                      <Sparkles size={48} className="text-cyan-400 mx-auto mb-4" />
                      <p className="text-gray-400">Your Photo/Animation</p>
                    </div>
                  </motion.div>
                  
                  {/* Enhanced Floating Elements */}
                  <FloatingElement delay={0}>
                    <motion.div 
                      className="absolute -top-3 -right-3 bg-emerald-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1"
                      whileHover={{ scale: 1.1, x: -5 }}
                    >
                      MERN Stack <ArrowRight size={12} />
                    </motion.div>
                  </FloatingElement>
                  
                  <FloatingElement delay={2}>
                    <motion.div 
                      className="absolute -bottom-3 -left-3 bg-cyan-500 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1"
                      whileHover={{ scale: 1.1, x: 5 }}
                    >
                      Next.js <ArrowRight size={12} />
                    </motion.div>
                  </FloatingElement>

                  {/* Top Left Badge */}
                  <FloatingElement delay={1}>
                    <motion.div 
                      className="absolute -top-2 -left-2 bg-purple-500 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      Full Stack
                    </motion.div>
                  </FloatingElement>
                </div>
              </motion.div>
            </div>
          </SlideIn>
        </div>

        {/* Enhanced Key Focus Areas */}
        <SlideIn direction="up" delay={0.8}>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              { 
                icon: <Code2 className="text-emerald-400" size={24} />, 
                title: "Clean Code", 
                description: "Writing maintainable, efficient code with best practices and modern patterns",
                color: "emerald",
                delay: 0.9
              },
              { 
                icon: <Rocket className="text-cyan-400" size={24} />, 
                title: "Performance", 
                description: "Building fast, responsive applications optimized for the best user experience",
                color: "cyan",
                delay: 1.0
              },
              { 
                icon: <Users className="text-purple-400" size={24} />, 
                title: "Collaboration", 
                description: "Working closely with teams and clients to bring visions to life effectively",
                color: "purple",
                delay: 1.1
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: item.delay }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-emerald-400/30 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <motion.div 
                  className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-400 relative z-10">{item.description}</p>
                
                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-4 right-4 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

export default About;