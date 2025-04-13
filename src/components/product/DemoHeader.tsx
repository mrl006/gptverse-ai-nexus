
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AiModels } from '@/data/aiModels';
import { motion } from 'framer-motion';

interface DemoHeaderProps {
  modelId: string;
  iconBg: string;
  iconComponent?: React.ReactNode;
}

const DemoHeader: React.FC<DemoHeaderProps> = ({ modelId, iconBg, iconComponent }) => {
  const currentModel = AiModels.find(m => m.id === modelId);
  
  return (
    <div className="relative overflow-hidden group border-b border-[#0ef34b]/15">
      {/* Enhanced glassmorphism background */}
      <div className="absolute inset-0 bg-[#040812]/30 backdrop-blur-xl -z-10"></div>
      
      {/* Top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
      
      {/* Animated glow accent */}
      <motion.div 
        className="absolute -top-20 -left-20 w-60 h-60 bg-[#0ef34b]/10 rounded-full blur-3xl -z-5"
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="flex items-center justify-between p-4 relative z-10">
        <div className="flex items-center gap-3 relative">
          <div className={`h-10 w-10 ${iconBg} rounded-full flex items-center justify-center text-white relative shadow-[0_0_15px_rgba(14,243,75,0.3)]`}>
            {/* Icon glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-60"></div>
            <div className="absolute inset-0 -z-10 rounded-full blur-sm bg-[#0ef34b]/20"></div>
            {iconComponent}
          </div>
          <div>
            <div className="text-sm text-[#0ef34b]/60">@gptverse</div>
            <h3 className="text-lg font-bold text-white drop-shadow-sm">{currentModel?.name}</h3>
          </div>
        </div>
        
        <Button 
          variant="glassy-glow"
          className="rounded-full px-4 py-2 text-sm"
        >
          Chat with {currentModel?.name} <Send className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-300" />
        </Button>
      </div>
      
      {/* Bottom scanline effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
    </div>
  );
};

export default DemoHeader;
