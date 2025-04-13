
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const GlassyBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812] via-[#061018] to-[#07121d]"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
      
      {/* Enhanced primary pulsing glow */}
      <motion.div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isMobile ? 'w-[1000px] h-[1000px]' : 'w-[1500px] h-[1500px]'
        } rounded-full bg-[#0ef34b]/5 blur-[180px]`}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Multiple animated glowing orbs */}
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00aeff]/5 blur-[150px]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#0ef34b]/5 blur-[150px]"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          x: [0, -20, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/4 blur-[100px]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#00aeff]/4 blur-[90px]"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Animated particles */}
      <motion.div 
        className="absolute top-[15%] left-[25%] w-3 h-3 rounded-full bg-[#0ef34b]/80 blur-sm"
        animate={{ 
          opacity: [0.7, 1, 0.7],
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[60%] right-[35%] w-2 h-2 rounded-full bg-[#0ef34b]/80 blur-sm"
        animate={{ 
          opacity: [0.5, 1, 0.5],
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] right-[25%] w-4 h-4 rounded-full bg-[#00aeff]/80 blur-sm"
        animate={{ 
          opacity: [0.6, 1, 0.6],
          y: [0, -25, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[45%] left-[40%] w-2 h-2 rounded-full bg-[#00aeff]/80 blur-sm"
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
          y: [0, -10, 0],
          x: [0, -5, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Edge highlights with animation */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/15 to-transparent"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Glowing dots in corners */}
      <div className="absolute top-10 left-10 w-1 h-1 rounded-full bg-[#0ef34b] shadow-[0_0_10px_5px_rgba(14,243,75,0.3)]"></div>
      <div className="absolute top-10 right-10 w-1 h-1 rounded-full bg-[#00aeff] shadow-[0_0_10px_5px_rgba(0,174,255,0.3)]"></div>
      <div className="absolute bottom-10 left-10 w-1 h-1 rounded-full bg-[#00aeff] shadow-[0_0_10px_5px_rgba(0,174,255,0.3)]"></div>
      <div className="absolute bottom-10 right-10 w-1 h-1 rounded-full bg-[#0ef34b] shadow-[0_0_10px_5px_rgba(14,243,75,0.3)]"></div>
    </div>
  );
};

export default GlassyBackground;
