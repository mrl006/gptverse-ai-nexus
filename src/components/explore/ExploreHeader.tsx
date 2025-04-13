
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
        <h2 className="text-[#0ef34b] uppercase tracking-wider text-sm font-mono mb-2">AI Horizon</h2>
        <div className="relative inline-block">
          <h3 className="text-5xl font-bold mb-6 relative z-10">
            QUANTUM VERSE
          </h3>
          <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b] to-[#0ef34b]/0"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreHeader;
