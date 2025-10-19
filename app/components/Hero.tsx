"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import CodeBlock from './CodeBlock';
import { Github, Linkedin, Facebook, Mail, Download, Sparkles, Rocket } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

// Floating Particles Component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50],
            x: [null, Math.random() * 100 - 50],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

// Animated Background Orbs
const AnimatedOrbs = () => {
  return (
    <>
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
};

// Animated Number Component
const AnimatedNumber = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  const displayValue = useTransform(springValue, (latest) =>
    Math.round(latest) + suffix
  );

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const Hero: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Adnan-Rajab-Resume.pdf';
    link.download = 'Adnan-Rajab-Resume.pdf';
    link.click();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="hero" 
      className="min-h-screen flex items-center justify-center py-16 lg:py-24 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
      }}
    >
      {/* Background Elements */}
      <FloatingParticles />
      <AnimatedOrbs />
      
      {/* Additional Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 text-emerald-400/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-cyan-400/20"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Rocket size={35} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Code Block */}
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <CodeBlock />
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <motion.div 
                  className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "48px" } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
                <motion.span 
                  className="text-emerald-400 font-mono text-sm uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  Welcome
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
              >
                <span className="text-white">Hi, I'm </span>
                <motion.span 
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Adnan Rajab
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="text-xl lg:text-2xl text-gray-300 min-h-[60px] lg:min-h-[72px] flex items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
              >
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
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
            >
              I craft <span className="text-emerald-400 font-medium">scalable web applications</span> and 
              <span className="text-cyan-400 font-medium"> digital experiences</span> that solve real-world 
              problems. Passionate about clean code, performance, and user-centric design.
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.6 }}
            >
              <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-emerald-400">
                  <AnimatedNumber value={2} suffix="+" />
                </div>
                <div className="text-xs text-gray-400">Years Exp</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-cyan-400">
                  <AnimatedNumber value={50} suffix="+" />
                </div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-2xl font-bold text-purple-400">
                  <AnimatedNumber value={100} suffix="%" />
                </div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.8 }}
            >
              <motion.a 
                href="https://github.com/YourGitHub" 
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
                href="https://linkedin.com/in/YourLinkedIn" 
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
                href="https://facebook.com/YourFacebook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 border border-gray-700 rounded-lg hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                aria-label="Facebook Profile"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={24} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
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
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 2 }}
            >
              <motion.button 
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                />
                <Mail size={20} />
                <span>Let's Connect</span>
              </motion.button>
              
              <motion.button 
                onClick={downloadResume}
                className="group border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download CV</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;