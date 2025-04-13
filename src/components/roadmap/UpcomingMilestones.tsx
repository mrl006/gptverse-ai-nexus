
import React from 'react';
import { motion } from "framer-motion";

const UpcomingMilestones = () => {
  return (
    <motion.div 
      className="text-center mt-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-block glass-card bg-[#06101a]/40 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 rounded-full bg-[#0ef34b] animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-[#00aeff] animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse" style={{animationDelay: '1s'}}></div>
          <span className="text-white/70 font-medium">More exciting milestones coming soon</span>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingMilestones;
