
import React from 'react';
import { motion } from "framer-motion";
import RoadmapItem from './RoadmapItem';
import UpcomingMilestones from './UpcomingMilestones';
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
        
        <UpcomingMilestones />
      </div>
    </motion.div>
  );
};

export default RoadmapTimeline;
