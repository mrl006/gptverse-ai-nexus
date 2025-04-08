
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="glass-card p-6 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6 }
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="p-3 bg-[#06101a]/60 rounded-lg border border-white/10 relative group-hover:border-[#0ef34b]/30 transition-colors duration-300">
          {icon}
          <div className={`absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'animate-pulse' : ''}`}></div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#0ef34b] transition-colors duration-300">{title}</h4>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
