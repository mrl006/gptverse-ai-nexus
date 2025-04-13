
import React from 'react';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';

const TokenomicsHeading = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <div className="text-center mb-10 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: isMobile ? "-10px" : "-50px" }}
        transition={{ duration: isMobile ? 0.4 : 0.6 }}
      >
        <h2 className="text-[#0ef34b] uppercase tracking-wider text-xs md:text-sm font-mono mb-2">Tokenomics Framework</h2>
        <div className="relative inline-block">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
            TOKEN ALLOCATION
          </h3>
          <div className="absolute -bottom-3 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b] to-[#0ef34b]/0"></div>
        </div>
        <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
          Strategic distribution of GPTVerse tokens to ensure long-term ecosystem growth, 
          community rewards, and sustainable development.
        </p>
      </motion.div>
    </div>
  );
};

export default TokenomicsHeading;
