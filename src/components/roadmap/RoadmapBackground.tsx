
import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Network, Globe } from 'lucide-react';

const RoadmapBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/80 via-[#071420]/75 to-[#081828]/80"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
      
      {/* Enhanced primary glow with animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/8 blur-[180px]"
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 accent glows */}
      <motion.div 
        className="absolute top-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-[#8B5CF6]/8 blur-[80px]"
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          y: [0, -10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#1EAEDB]/8 blur-[90px]"
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          y: [0, -8, 0],
          x: [0, 8, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated timeline accent glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[80%] bg-gradient-to-b from-[#0ef34b]/20 via-[#0ef34b]/8 to-transparent blur-[2px]"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 Tech Icons */}
      <div className="absolute top-[25%] right-[15%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-[#8B5CF6]/20 w-16 h-16"
        >
          <Bitcoin className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-[25%] left-[20%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, -360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="text-[#1EAEDB]/20 w-14 h-14"
        >
          <Network className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute top-[60%] right-[25%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#0ef34b]/20 w-12 h-12"
        >
          <Globe className="w-full h-full" />
        </motion.div>
      </div>
      
      {/* Optimized animated particles */}
      <motion.div 
        className="absolute top-[25%] left-[40%] w-2 h-2 rounded-full bg-[#0ef34b]/60"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[35%] right-[35%] w-2 h-2 rounded-full bg-[#1EAEDB]/60"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          y: [0, -8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Horizontal timeline markers */}
      <motion.div 
        className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[50%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/15 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <motion.div 
        className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1EAEDB]/15 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
};

export default RoadmapBackground;
