"use client";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface CodeLine {
  text: string;
  color: string;
  indent?: number;
  inline?: boolean;
  blink?: boolean;
}

const CodeBlock: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines: CodeLine[] = [
    { text: 'const', color: 'text-emerald-400' },
    { text: 'developer', color: 'text-white', inline: true },
    { text: '=', color: 'text-emerald-400', inline: true },
    { text: '{', color: 'text-gray-400', inline: true },
    
    { text: 'name:', color: 'text-white', indent: 1 },
    { text: "'Adnan Rajab',", color: "text-lime-300", inline: true },

    { text: 'title:', color: 'text-white', indent: 1 },
    { text: "'Full Stack Developer',", color: "text-lime-300", inline: true },

    { text: 'location:', color: 'text-white', indent: 1 },
    { text: "'Islamabad, Pakistan',", color: "text-lime-300", inline: true },

    { text: 'skills:', color: 'text-white', indent: 1 },
    { text: "[", color: "text-gray-400", inline: true },
    { text: "'React', 'Next.js', 'Node.js', 'MongoDB',", color: "text-lime-300" },
    { text: "'Python', 'Flask', 'TypeScript', 'Tailwind',", color: "text-lime-300", indent: 2 },
    { text: "'Firebase', 'Docker', 'AWS/GCP', 'Git'", color: "text-lime-300", indent: 2 },
    { text: "],", color: "text-gray-400", inline: true },

    { text: 'experience:', color: 'text-white', indent: 1 },
    { text: "'2+ Years',", color: "text-amber-300", inline: true },

    { text: 'projectsCompleted:', color: 'text-white', indent: 1 },
    { text: "50,", color: "text-amber-300", inline: true },

    { text: 'hardWorker:', color: 'text-white', indent: 1 },
    { text: 'true,', color: 'text-green-400', inline: true },

    { text: 'quickLearner:', color: 'text-white', indent: 1 },
    { text: 'true,', color: 'text-green-400', inline: true },

    { text: 'problemSolver:', color: 'text-white', indent: 1 },
    { text: 'true,', color: 'text-green-400', inline: true },

    { text: 'availableForWork:', color: 'text-emerald-400', indent: 1 },
    { text: 'function', color: 'text-amber-300', inline: true },
    { text: '() {', color: 'text-gray-400', inline: true },

    { text: 'return', color: 'text-amber-300', indent: 2 },
    { text: '(', color: 'text-gray-400', inline: true },

    { text: 'this.', color: 'text-cyan-400', indent: 3 },
    { text: 'hardWorker', color: 'text-white', inline: true },
    { text: '&&', color: 'text-amber-300', inline: true },

    { text: 'this.', color: 'text-cyan-400', indent: 3 },
    { text: 'problemSolver', color: 'text-white', inline: true },
    { text: '&&', color: 'text-amber-300', inline: true },

    { text: 'this.', color: 'text-cyan-400', indent: 3 },
    { text: 'skills', color: 'text-white', inline: true },
    { text: '.', color: 'text-gray-400', inline: true },
    { text: 'length', color: 'text-white', inline: true },
    { text: '>=', color: 'text-amber-300', inline: true },
    { text: '5', color: 'text-orange-400', inline: true },
    
    { text: ');', color: 'text-gray-400', indent: 2 },
    { text: '}', color: 'text-gray-400', indent: 1 },
    { text: '}', color: 'text-gray-400' },
    { text: '', color: 'text-transparent', blink: true },
  ];

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCurrentLine(prev => {
          if (prev >= codeLines.length - 1) {
            clearInterval(timer);
            return prev;
          }
          return prev + 1;
        });
      }, 80); // Typing speed

      return () => clearInterval(timer);
    }
  }, [isInView, codeLines.length]);

  const getIndentClass = (level: number = 0) => {
    switch (level) {
      case 1: return 'ml-4 lg:ml-6';
      case 2: return 'ml-8 lg:ml-12';
      case 3: return 'ml-12 lg:ml-18';
      default: return '';
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      {/* Enhanced Glow Effect */}
      <motion.div 
        className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm">
        {/* Animated Header Gradient Bar */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Window Controls */}
        <div className="px-6 py-4 border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-amber-500 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
            <motion.span 
              className="text-gray-400 text-sm font-mono ml-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              developer.js
            </motion.span>
          </div>
        </div>
        
        {/* Code Body */}
        <div className="p-6 lg:p-8 bg-gradient-to-br from-gray-900 to-gray-800 relative">
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          />
          
          <code className="font-mono text-sm lg:text-base leading-loose select-text relative z-10">
            <div className="space-y-1">
              {codeLines.slice(0, currentLine + 1).map((line, index) => (
                <motion.div 
                  key={index} 
                  className={`${getIndentClass(line.indent)} ${line.inline ? 'inline' : 'block'}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                >
                  <span className={line.color}>
                    {line.text}
                  </span>
                  {line.blink && (
                    <motion.span
                      className="ml-1 w-2 h-5 bg-emerald-400 inline-block"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </code>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-4 right-4 text-emerald-400/20"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* </> */}
          </motion.div>
        </div>

        {/* Animated Footer */}
        <motion.div 
          className="px-6 py-3 border-t border-gray-700 bg-gray-800/50 text-xs text-gray-500 font-mono backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <div className="flex justify-between items-center">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              main
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              LF UTF-8
            </motion.span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            >
              JavaScript
            </motion.span>
          </div>
        </motion.div>

        {/* Corner Accents */}
        <motion.div
          className="absolute top-2 left-2 w-2 h-2 border-l-2 border-t-2 border-emerald-400 opacity-50"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 border-r-2 border-t-2 border-cyan-400 opacity-50"
          animate={{ opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-2 left-2 w-2 h-2 border-l-2 border-b-2 border-emerald-400 opacity-50"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-2 right-2 w-2 h-2 border-r-2 border-b-2 border-cyan-400 opacity-50"
          animate={{ opacity: [0.8, 0.5, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
      </div>

      {/* Floating Tags */}
      <motion.div
        className="absolute -top-3 -right-3 bg-emerald-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 1.2, type: "spring" }}
      >
        Interactive
      </motion.div>
      
      <motion.div
        className="absolute -bottom-3 -left-3 bg-cyan-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg"
        initial={{ scale: 0, rotate: 180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ delay: 1.4, type: "spring" }}
      >
        TypeScript
      </motion.div>
    </motion.div>
  );
};

export default CodeBlock;