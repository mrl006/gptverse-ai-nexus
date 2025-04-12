
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
      {/* Professional corporate decoration */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(8,126,139,0.05)_0%,rgba(8,126,139,0)_70%)]"></div>
      
      <div className="flex flex-col items-center">
        {/* Cosmic-themed title with consistent branding */}
        <div className="mb-5 justify-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0B3954] via-[#087E8B] to-[#0CF574] animate-text-gradient bg-[length:200%_auto]">
            STELLAR AI INNOVATIONS
          </h2>
        </div>
        
        {/* Refined corporate banner with subtle dividers */}
        <div className="flex items-center gap-5 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#087E8B]/20 to-transparent"></div>
          <p className="text-[#0CF574]/70 text-sm font-sans uppercase tracking-wider">
            POWERED BY GPTVERSE.AI ENTERPRISE
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#087E8B]/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Enhanced creative subtitle */}
      <p className="text-white/70 max-w-2xl mx-auto mt-4">
        Quantum-edge AI solutions architected for enterprise excellence, delivering unparalleled intelligence across dimensions
      </p>
    </motion.div>
  );
};

export default AiServicesHeader;
