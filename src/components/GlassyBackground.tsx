
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const GlassyBackground: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Lighter base background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/80 via-[#061018]/70 to-[#07121d]/80"></div>
      
      {/* Tech grid overlay with reduced opacity */}
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      {/* Enhanced primary pulsing glow with higher brightness */}
      <motion.div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isMobile ? 'w-[1000px] h-[1000px]' : 'w-[1500px] h-[1500px]'
        } rounded-full bg-[#0ef34b]/10 blur-[200px]`}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Multiple animated glowing orbs with higher brightness and slower animations */}
      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-[#00aeff]/10 blur-[150px]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-[#0ef34b]/10 blur-[150px]"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          x: [0, -15, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-[#0ef34b]/8 blur-[100px]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[20%] left-[15%] w-[350px] h-[350px] rounded-full bg-[#00aeff]/8 blur-[90px]"
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Reduced number of animated particles for better performance */}
      <motion.div 
        className="absolute top-[15%] left-[25%] w-3 h-3 rounded-full bg-[#0ef34b]/80 blur-sm"
        animate={{ 
          opacity: [0.7, 1, 0.7],
          y: [0, -15, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-[30%] right-[25%] w-4 h-4 rounded-full bg-[#00aeff]/80 blur-sm"
        animate={{ 
          opacity: [0.6, 1, 0.6],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Edge highlights with reduced animation frequency */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
};

export default GlassyBackground;
