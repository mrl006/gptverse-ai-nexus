
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-start gap-6">
        <div className="relative min-w-[60px] flex justify-center">
          <div className={`flex items-center justify-center w-14 h-14 rounded-xl 
            ${status === 'shipped' ? 'bg-gradient-to-br from-alien-neon/20 to-alien-neon/5' : 
            status === 'in-progress' ? 'bg-gradient-to-br from-alien-blue/20 to-alien-blue/5' : 
            'bg-gradient-to-br from-white/10 to-white/5'}`}>
            {status === 'shipped' ? (
              <Check className="w-7 h-7 text-alien-neon" />
            ) : (
              <div className={`w-4 h-4 rounded-full ${
                status === 'in-progress' ? 'bg-alien-blue' : 'bg-white/30'
              }`}>
                <div className={`absolute inset-0 rounded-full animate-ping ${
                  status === 'in-progress' ? 'bg-alien-blue/40' : 'bg-white/10'
                } opacity-75`} style={{animationDuration: '3s'}}></div>
              </div>
            )}
          </div>
          <div className="absolute top-14 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[#0ef34b]/30 to-transparent -translate-x-1/2 h-full max-h-[calc(100%-3.5rem)]" />
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
                  <div className="w-3 h-3 rounded-full bg-alien-neon flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
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
