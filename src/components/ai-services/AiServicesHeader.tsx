
import React from 'react';
import { motion } from "framer-motion";

const AiServicesHeader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 relative"
    >
      <div className="flex flex-col items-center">
        <div className="mb-5 justify-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0B3954] via-[#087E8B] to-[#0CF574] animate-text-gradient bg-[length:200%_auto]">
            AI FORGE
          </h2>
        </div>
        
        <div className="flex items-center gap-5 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#087E8B]/20 to-transparent"></div>
          <p className="text-[#0CF574]/70 text-sm font-sans uppercase tracking-wider">
            QUANTUM TOOLS
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#087E8B]/20 to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiServicesHeader;
