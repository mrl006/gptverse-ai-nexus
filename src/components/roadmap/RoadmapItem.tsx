
import React from 'react';
import { motion } from "framer-motion";
import { Check } from 'lucide-react';

interface RoadmapItemProps {
  title: string;
  description: string[];
  status: 'shipped' | 'in-progress' | 'planned';
  period: string;
}

const RoadmapItem = ({ title, description, status, period }: RoadmapItemProps) => {
  return (
    <motion.div 
      className="relative mb-12"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start">
        <div className="relative mr-6">
          <div className={`flex items-center justify-center w-12 h-12 rounded-full 
            ${status === 'shipped' ? 'bg-alien-neon/10' : 
            status === 'in-progress' ? 'bg-alien-blue/10' : 'bg-white/5'}`}>
            {status === 'shipped' ? (
              <Check className="w-6 h-6 text-alien-neon" />
            ) : (
              <div className={`w-3 h-3 rounded-full ${status === 'in-progress' ? 'bg-alien-blue' : 'bg-white/20'}`} />
            )}
          </div>
          <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[#0ef34b]/30 to-transparent -translate-x-1/2" />
        </div>
        
        <div className="glass-card w-full bg-[#040813]/80 backdrop-blur-md border border-white/5 p-6 rounded-xl">
          <div className="flex items-center mb-2">
            <span className="text-xs font-mono text-alien-neon/80">{period}</span>
            <div className={`ml-3 px-3 py-0.5 text-xs rounded-full 
              ${status === 'shipped' ? 'bg-alien-neon/10 text-alien-neon' : 
              status === 'in-progress' ? 'bg-alien-blue/10 text-alien-blue' : 'bg-white/5 text-white/40'}`}>
              {status === 'shipped' ? 'Shipped' : status === 'in-progress' ? 'In Progress' : 'Planned'}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          
          <div className="space-y-3">
            {description.map((item, idx) => (
              <div key={idx} className="flex items-start">
                <div className="mr-3 min-w-8 h-8 flex items-center justify-center rounded-full bg-alien-neon/10">
                  <div className="w-4 h-4 rounded-full bg-alien-neon flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
                <p className="text-white/80 flex-1 py-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapItem;
