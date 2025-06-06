
import React from 'react';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

const AboutHeader: React.FC = () => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: isMobile ? 2 : 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: isMobile ? "-5px" : "-40px" }}
      transition={{ duration: isMobile ? 0.2 : 0.5 }}
      className="text-center mb-4 md:mb-8 relative"
    >
      <h2 className="text-[#0ef34b] uppercase tracking-wider text-xs md:text-sm font-mono mb-1 md:mb-2">Quantum Hub</h2>
      <div className="relative inline-block">
        <h3 className="text-lg md:text-4xl font-bold mb-1 md:mb-4 relative z-10 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
          NEURAL CORE
        </h3>
        <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b] to-[#0ef34b]/0"></div>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
