
import React from 'react';
import { motion } from "framer-motion";
import RoadmapItem from './RoadmapItem';
import { RoadmapItem as RoadmapItemType } from '@/data/roadmapData';

interface RoadmapTimelineProps {
  items: RoadmapItemType[];
}

const RoadmapTimeline = ({ items }: RoadmapTimelineProps) => {
  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        {/* Main timeline line */}
        <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0ef34b]/30 via-[#00aeff]/20 to-white/5"></div>
        
        {items.map((item, index) => (
          <RoadmapItem
            key={index}
            title={item.title}
            description={item.description}
            period={item.period}
            status={item.status}
          />
        ))}
        
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
      </div>
    </motion.div>
  );
};

export default RoadmapTimeline;
