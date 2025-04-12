
import React from 'react';
import { motion } from "framer-motion";

const ExploreHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center">
          {/* Creative cosmic-themed title with consistent gradient effect */}
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0B3954] via-[#087E8B] to-[#0CF574] animate-text-gradient bg-[length:200%_auto]">
              VOYAGE THROUGH THE GPTVERSE.AI
            </span>
          </h2>
          
          {/* Refined subtitle with minimal separator */}
          <div className="relative">
            <div className="absolute -top-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#087E8B]/30 to-transparent"></div>
            <p className="text-[#0CF574]/80 text-lg font-mono uppercase tracking-wider mt-4 max-w-2xl mx-auto">
              QUANTUM-POWERED ENTERPRISE SOLUTIONS
            </p>
            <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#087E8B]/30 to-transparent"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreHeader;
