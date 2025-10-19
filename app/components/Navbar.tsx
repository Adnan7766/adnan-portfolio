"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: 'home', label: 'Home' },
    { name: 'about', label: 'About' },
    { name: 'experience', label: 'Experience' },
    { name: 'skills', label: 'Skills' },
    { name: 'projects', label: 'Projects' },
    { name: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map(item => item.name);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-[#0f172a]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-cyan-500/10' 
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <Link 
                href="/" 
                className="flex items-center gap-3 group"
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <Code2 className="text-white" size={20} />
                  </div>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"
                    animate={{
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Adnan Rajab
                  </span>
                  <span className="text-xs text-gray-400 font-mono">Full Stack Developer</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.name)}
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                      activeSection === item.name
                        ? 'text-cyan-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                    
                    {/* Active Indicator */}
                    {activeSection === item.name && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                    
                    {/* Sparkle Effect on Hover */}
                    <motion.div
                      className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ rotate: 180 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles size={12} className="text-cyan-400" />
                    </motion.div>
                  </button>
                </motion.div>
              ))}
              
              {/* Resume Button */}
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Adnan-Rajab-Resume.pdf';
                  link.download = 'Adnan-Rajab-Resume.pdf';
                  link.click();
                }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Resume</span>
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles size={16} />
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              className="absolute top-20 right-6 left-6 bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Menu Header */}
              <div className="p-4 border-b border-white/10 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10">
                <h3 className="text-lg font-semibold text-white">Navigation</h3>
              </div>
              
              {/* Menu Items */}
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                      activeSection === item.name
                        ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan-400 border border-cyan-400/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-2 h-2 rounded-full ${
                        activeSection === item.name 
                          ? 'bg-cyan-400' 
                          : 'bg-gray-500 group-hover:bg-cyan-400'
                      }`}
                      animate={{
                        scale: activeSection === item.name ? [1, 1.5, 1] : 1
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="font-medium">{item.label}</span>
                    
                    {activeSection === item.name && (
                      <motion.div
                        className="ml-auto"
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Sparkles size={16} className="text-cyan-400" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
                
                {/* Mobile Resume Button */}
                <motion.button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Adnan-Rajab-Resume.pdf';
                    link.download = 'Adnan-Rajab-Resume.pdf';
                    link.click();
                    setIsOpen(false);
                  }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Download Resume</span>
                  <Sparkles size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;