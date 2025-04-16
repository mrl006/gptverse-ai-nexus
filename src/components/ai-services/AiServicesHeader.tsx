import React from 'react';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
const AiServicesHeader: React.FC = () => {
  const {
    isMobile,
    isSmallMobile
  } = useIsMobile();
  return <motion.div initial={{
    opacity: 0,
    y: isMobile ? 2 : 15
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: isMobile ? "-5px" : "-40px"
  }} transition={{
    duration: isMobile ? 0.2 : 0.5
  }} className="text-center mb-4 md:mb-10 relative">
      <h2 className="text-[#0ef34b] uppercase tracking-wider text-xs md:text-sm font-mono mb-1 md:mb-2">Quantum Tools</h2>
      <div className="relative inline-block">
        <h3 className="text-xl md:text-5xl font-bold mb-2 md:mb-6 relative z-10">
          AI FORGE
        </h3>
        
      </div>
    </motion.div>;
};
export default AiServicesHeader;