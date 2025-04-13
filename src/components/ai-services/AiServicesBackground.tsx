
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Cpu, Server } from 'lucide-react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base background with gradient - focused on tech colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/80 via-[#071420]/75 to-[#081828]/80"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-25"></div>
      
      {/* Enhanced primary glow with tech color */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full bg-[#0ef34b]/10 blur-[180px]"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 Tech Icons */}
      <div className="absolute top-[20%] right-[15%]">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="text-[#8B5CF6]/20 w-16 h-16"
        >
          <Cpu className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-[25%] left-[20%]">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="text-[#1EAEDB]/20 w-12 h-12"
        >
          <Server className="w-full h-full" />
        </motion.div>
      </div>
      
      {/* Service cards accent glows with enhanced animations */}
      <motion.div 
        className="absolute top-[30%] right-[10%] w-[350px] h-[350px] rounded-full bg-[#1EAEDB]/10 blur-[100px]"
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          y: [0, -15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] left-[10%] w-[350px] h-[350px] rounded-full bg-[#8B5CF6]/10 blur-[100px]"
        animate={{ 
          opacity: [0.15, 0.3, 0.15],
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Reduced animated particles */}
      <motion.div 
        className="absolute top-[45%] right-[45%] w-2 h-2 rounded-full bg-[#0ef34b]/60"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[25%] right-[15%] w-2 h-2 rounded-full bg-[#1EAEDB]/60"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated gradient lines */}
      <motion.div 
        className="absolute top-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/15 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1EAEDB]/15 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default AiServicesBackground;
