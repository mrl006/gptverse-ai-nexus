
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EcosystemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  onTryDemo: () => void;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ 
  icon, 
  title, 
  description, 
  index,
  onTryDemo
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="glass-card p-8 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-300 flex flex-col items-center text-center h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="mb-4 p-4 bg-[#06101a]/60 rounded-full border border-white/10 inline-block group-hover:border-[#0ef34b]/30 transition-all duration-300">
          {icon}
          <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
        </div>
        
        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#0ef34b] transition-colors duration-300">{title}</h4>
        <p className="text-white/70 mb-6">{description}</p>
        
        <Button 
          onClick={onTryDemo}
          variant="outline"
          className="border-[#0ef34b]/30 text-white/80 hover:bg-[#0ef34b]/10 hover:text-white group-hover:border-[#0ef34b] transition-all duration-300"
        >
          <span>Try Demo</span>
          <ArrowRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </motion.div>
  );
};

export default EcosystemCard;
