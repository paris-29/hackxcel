import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

const Logo: React.FC = () => {
  // Logo animation variants
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  // Text glitch effect
  const glitchVariants = {
    hover: {
      textShadow: [
        "2px 0 #00F5FF, -2px 0 #FF3D71, 0 0 #00F5FF",
        "-2px 0 #00F5FF, 2px 0 #FF3D71, 0 0 #00F5FF",
        "2px 0 #00F5FF, -2px 0 #FF3D71, 0 0 #00F5FF"
      ],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div 
      className="flex items-center"
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={logoVariants}
    >
      <div className="relative flex items-center">
        <motion.div
          className="text-accent absolute -left-1 -top-1"
          animate={{ 
            opacity: [0.5, 1, 0.5], 
            x: [1, -1, 1], 
            y: [1, -1, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        >
          <Zap size={24} />
        </motion.div>
        <Zap size={24} className="text-secondary mr-2" />
      </div>
      <motion.h1 
        className="text-xl font-bold"
        variants={glitchVariants}
      >
        <span className="text-white">HACK</span>
        <span className="text-accent">XCEL</span>
      </motion.h1>
    </motion.div>
  );
};

export default Logo;