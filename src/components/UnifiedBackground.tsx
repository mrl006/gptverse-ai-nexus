
import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Database, Server, Shield, Cpu } from 'lucide-react';

const UnifiedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base dark background with slight gradient - reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/80 via-[#071420]/75 to-[#081828]/80"></div>
      
      {/* Tech grid overlay with enhanced visibility */}
      <div className="absolute inset-0 bg-tech-grid opacity-25"></div>
      
      {/* Enhanced central glow with animation */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full bg-[#0ef34b]/10 blur-[200px]"
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 accent glows */}
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/10 blur-[150px]"
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          y: [0, -15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#1EAEDB]/10 blur-[150px]"
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          y: [0, 15, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Web3 Tech Icons */}
      <div className="absolute top-[20%] right-[25%]">
        <motion.div
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="text-[#1EAEDB]/20 w-20 h-20"
        >
          <Database className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-[30%] left-[15%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, -360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="text-[#8B5CF6]/20 w-16 h-16"
        >
          <Bitcoin className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute top-[60%] right-[20%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#0ef34b]/20 w-14 h-14"
        >
          <Cpu className="w-full h-full" />
        </motion.div>
      </div>
      
      <div className="absolute top-[40%] left-[25%]">
        <motion.div
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#1EAEDB]/20 w-12 h-12"
        >
          <Server className="w-full h-full" />
        </motion.div>
      </div>
      
      {/* Fewer floating particles for better performance */}
      <motion.div 
        className="absolute top-[25%] left-[40%] w-2 h-2 rounded-full bg-[#0ef34b]/60"
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          y: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[55%] right-[30%] w-2 h-2 rounded-full bg-[#8B5CF6]/60"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Edge highlights with animation */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1EAEDB]/20 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default UnifiedBackground;
