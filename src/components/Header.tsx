import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Lock, Brain, Database, Cloud } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navbar variants for animation
  const navVariants = {
    top: { 
      backgroundColor: 'rgba(10, 26, 58, 0)', 
      height: '80px',
      boxShadow: 'none'
    },
    scrolled: { 
      backgroundColor: 'rgba(10, 26, 58, 0.95)', 
      height: '70px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    }
  };

  // Radial menu animation variants
  const radialMenuVariants = {
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        staggerChildren: 0.05
      }
    }
  };

  // Menu item variants
  const menuItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const navLinks = [
    { name: 'Courses', icon: <ChevronDown className="w-4 h-4 ml-1" /> },
    { name: 'About', icon: null },
    { name: 'Pricing', icon: null },
    { name: 'Contact', icon: null }
  ];
  
  // Course submenu items with icons
  const courseItems = [
    { name: 'Cybersecurity', icon: <Lock className="w-5 h-5 mr-2 text-accent" /> },
    { name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5 mr-2 text-accent" /> },
    { name: 'Data Science', icon: <Database className="w-5 h-5 mr-2 text-accent" /> },
    { name: 'Cloud Computing', icon: <Cloud className="w-5 h-5 mr-2 text-accent" /> }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50 transition-all"
      initial="top"
      animate={isScrolled ? 'scrolled' : 'top'}
      variants={navVariants}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <a 
                href={`#${link.name.toLowerCase()}`} 
                className="flex items-center text-white hover:text-accent transition-colors duration-300"
              >
                {link.name}
                {link.icon}
              </a>
              
              {/* Course dropdown for the first item */}
              {index === 0 && (
                <div className="absolute left-0 mt-2 w-64 bg-primary-light rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 border border-accent/30">
                  <div className="py-2">
                    {courseItems.map((course, idx) => (
                      <a 
                        key={idx}
                        href={`#${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center px-4 py-3 hover:bg-secondary/20 text-white hover:text-accent transition-colors duration-200"
                      >
                        {course.icon}
                        {course.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* CTA Button */}
        <motion.button 
          className="hidden md:flex gradient-border px-6 py-2 bg-primary text-white font-medium transition-all duration-300 hover:bg-primary-light"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Radial Mobile Menu */}
        <motion.div 
          className="radial-menu fixed md:hidden inset-0 bg-primary-dark/95 z-40 flex items-center justify-center"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={radialMenuVariants}
        >
          <motion.nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.name.toLowerCase()}`}
                className="text-white text-2xl font-medium hover:text-accent transition-colors duration-300"
                variants={menuItemVariants}
                onClick={toggleMenu}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button 
              className="gradient-border mt-6 px-8 py-3 bg-primary text-white font-medium"
              variants={menuItemVariants}
            >
              Get Started
            </motion.button>
          </motion.nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;