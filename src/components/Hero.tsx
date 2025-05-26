import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import ParticleGrid from './3d/ParticleGrid';

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  // Liquid metal text effect
  useEffect(() => {
    if (headingRef.current) {
      const chars = headingRef.current.innerText.split('');
      headingRef.current.innerHTML = '';
      
      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.display = 'inline-block';
        span.style.position = 'relative';
        headingRef.current?.appendChild(span);
      });
      
      const spans = headingRef.current.querySelectorAll('span');
      
      gsap.from(spans, {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.03,
        delay: 0.5
      });

      gsap.to(spans, {
        color: '#00F5FF',
        duration: 0.5,
        stagger: 0.05,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        repeatDelay: 5
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* 3D Background */}
      <div className="canvas-container">
        <ParticleGrid />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.h2 
              className="text-accent text-lg md:text-xl mb-4 font-medium animate-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Next-Gen Tech Education
            </motion.h2>
            
            <h1 
              ref={headingRef}
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              MASTER THE FUTURE OF TECH
            </h1>
            
            <motion.p 
              className="text-lg opacity-90 mb-8 max-w-md animate-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Dive into cutting-edge courses in Cybersecurity, AI, Data Science, 
              and Cloud Computing. Join over 50,000+ tech professionals.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 animate-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button 
                className="gradient-border px-8 py-3 bg-secondary text-white font-medium hover:bg-secondary-dark transition-colors duration-300"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(0, 245, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
              </motion.button>
              
              <motion.button 
                className="px-8 py-3 border border-accent/50 text-white font-medium hover:bg-accent/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-4 animate-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden -ml-2 first:ml-0"
                    style={{ zIndex: 5 - i }}
                  >
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                      alt="Student" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white font-medium">Trusted by <span className="text-accent">50,000+</span> students</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-white">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* 3D Laptop - Will be rendered by ThreeJS */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative">
            {/* This div serves as a placeholder for the 3D laptop model */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  className="w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-lg border border-accent/30 relative overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ rotateY: 10, rotateX: 5 }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <motion.div 
                      className="w-12 h-12 rounded-full bg-accent/30 mb-4 flex items-center justify-center"
                      animate={{ 
                        boxShadow: ['0 0 0 rgba(0, 245, 255, 0)', '0 0 20px rgba(0, 245, 255, 0.7)', '0 0 0 rgba(0, 245, 255, 0)']
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap size={24} className="text-accent" />
                    </motion.div>
                    <p className="text-xl text-accent font-medium mb-2">HACKXCEL</p>
                    <p className="text-sm text-white/80 mb-6">Interactive Course Demo</p>
                    
                    <div className="w-full bg-primary border border-accent/30 rounded p-2">
                      <div className="text-left font-mono text-xs text-accent">
                        <p>$ <span className="animate-pulse">_</span></p>
                        <p className="opacity-70">Initializing course...</p>
                        <p className="opacity-70">[███████████] 100%</p>
                        <p className="opacity-70">Welcome to HACKXCEL!</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
        <motion.div 
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-2 h-2 bg-accent rounded-full mx-auto"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Import dynamically to prevent errors with SSR
const Zap = ({ size = 24, className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
};

export default Hero;