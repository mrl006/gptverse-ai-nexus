
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
      className="relative mb-12 last:mb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-start gap-6">
        <div className="relative min-w-[60px] flex justify-center">
          <div className={`flex items-center justify-center w-14 h-14 rounded-xl border backdrop-blur-sm
            ${status === 'shipped' 
              ? 'bg-gradient-to-br from-[#0ef34b]/20 to-[#0ef34b]/5 border-[#0ef34b]/30' 
              : status === 'in-progress' 
                ? 'bg-gradient-to-br from-[#00aeff]/20 to-[#00aeff]/5 border-[#00aeff]/30' 
                : 'bg-gradient-to-br from-white/10 to-white/5 border-white/10'}`}>
            {status === 'shipped' ? (
              <Check className="w-7 h-7 text-[#0ef34b]" />
            ) : (
              <div className={`w-4 h-4 rounded-full ${
                status === 'in-progress' ? 'bg-[#00aeff]' : 'bg-white/30'
              }`}>
                {status === 'in-progress' && (
                  <div className="absolute inset-0 rounded-full animate-ping bg-[#00aeff]/40 opacity-75" 
                    style={{animationDuration: '3s'}}></div>
                )}
              </div>
            )}
          </div>
          {/* Line connector */}
          <div className="absolute top-14 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-[#0ef34b]/20 to-transparent -translate-x-1/2 h-full max-h-[calc(100%-3.5rem)]" />
        </div>
        
        <div className="glass-card w-full bg-gradient-to-br from-[#0c1632]/90 to-[#040813]/90 backdrop-blur-md border border-[#0ef34b]/20 p-6 rounded-xl hover:border-[#0ef34b]/30 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30">
          <div className="flex items-center mb-3">
            <span className="text-xs font-mono text-[#0ef34b]/80 bg-[#0ef34b]/5 px-3 py-1 rounded-full">{period}</span>
            <div className={`ml-3 px-3 py-0.5 text-xs rounded-full 
              ${status === 'shipped' ? 'bg-[#0ef34b]/10 text-[#0ef34b]' : 
              status === 'in-progress' ? 'bg-[#00aeff]/10 text-[#00aeff]' : 'bg-white/5 text-white/40'}`}>
              {status === 'shipped' ? 'Shipped' : status === 'in-progress' ? 'In Progress' : 'Planned'}
            </div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          
          <div className="space-y-3">
            {description.map((item, idx) => (
              <div key={idx} className="flex items-start group">
                <div className="mr-3 min-w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-[#0ef34b]/20 to-[#00aeff]/5 group-hover:from-[#0ef34b]/30 group-hover:to-[#00aeff]/10 transition-all">
                  <div className="w-2 h-2 rounded-full bg-[#0ef34b]"></div>
                </div>
                <p className="text-white/80 flex-1 py-1 group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RoadmapItem;
