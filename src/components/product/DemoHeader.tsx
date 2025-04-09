
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AiModels } from '@/data/aiModels';

interface DemoHeaderProps {
  modelId: string;
  iconBg: string;
  iconComponent?: React.ReactNode;
}

const DemoHeader: React.FC<DemoHeaderProps> = ({ modelId, iconBg, iconComponent }) => {
  const currentModel = AiModels.find(m => m.id === modelId);
  
  return (
    <div className="flex items-center justify-between p-4 border-b border-[#0ef34b]/10 relative overflow-hidden">
      {/* Enhanced glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06101a]/90 to-[#06101a]/70 backdrop-blur-md -z-10"></div>
      
      {/* Green glow accent */}
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#0ef34b]/10 rounded-full blur-3xl -z-5"></div>
      
      <div className="flex items-center gap-3 relative">
        <div className={`h-10 w-10 ${iconBg} rounded-full flex items-center justify-center text-white relative shadow-lg`}>
          {/* Icon glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/30 to-transparent opacity-60"></div>
          <div className="absolute inset-0 -z-10 rounded-full shadow-[0_0_15px_rgba(14,243,75,0.5)]"></div>
          {iconComponent}
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold heading-gradient drop-shadow-sm">{currentModel?.name}</h3>
        </div>
      </div>
      
      <Button 
        className="rounded-full bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-4 py-2 text-sm flex items-center gap-2 shadow-[0_0_10px_rgba(14,243,75,0.3)]"
      >
        Chat with {currentModel?.name} <Send className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};

export default DemoHeader;
