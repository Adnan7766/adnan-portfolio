"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import CodeBlock from './CodeBlock';

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

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Adnan-Rajab-Resume.pdf';
    link.download = 'Adnan-Rajab-Resume.pdf';
    link.click();
  };

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center py-16 lg:py-24 relative overflow-hidden">
      {/* Background Elements */}
      {/* <FloatingParticles /> */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
                <span className="text-emerald-400 font-mono text-sm uppercase tracking-wider">
                  Welcome
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Adnan Rajab
                </span>
              </h1>
              
              <div className="text-xl lg:text-2xl text-gray-300 min-h-[60px] lg:min-h-[72px] flex items-center">
                <span className="text-gray-400 mr-2">I'm a</span>
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'Full Stack Engineer',
                    2000,
                    'Python Developer',
                    2000,
                    'Backend Specialist',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="font-semibold bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent"
                  repeat={Infinity}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I craft <span className="text-emerald-400 font-medium">scalable web applications</span> and 
              <span className="text-cyan-400 font-medium"> digital experiences</span> that solve real-world 
              problems. Passionate about clean code, performance, and user-centric design.
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="https://github.com/Adnan7766" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 border border-gray-700 rounded-lg hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-gray-400 group-hover:text-emerald-400 transition-colors" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/adnan-rajab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 border border-gray-700 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              <motion.a 
                href="mailto:adnanrajab7766@gmail.com"
                className="group p-3 border border-gray-700 rounded-lg hover:border-red-400 hover:bg-red-400/10 transition-all duration-300"
                aria-label="Send Email"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="text-gray-400 group-hover:text-red-400 transition-colors" />
              </motion.a>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                <span>Let's Connect</span>
              </motion.button>
              
              <motion.button 
                onClick={downloadResume}
                className="group border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - CodeBlock */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center"
          >
            <CodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
