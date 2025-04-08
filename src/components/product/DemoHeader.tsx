
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
    <div className="flex items-center justify-between p-4 border-b border-white/10">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 ${iconBg} rounded-full flex items-center justify-center text-white`}>
          {iconComponent}
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">{currentModel?.name}</h3>
        </div>
      </div>
      
      <Button 
        className="rounded-full bg-[#00aeff] hover:bg-[#00aeff]/90 text-black font-medium px-4 py-2 text-sm flex items-center gap-2"
      >
        Chat with {currentModel?.name} <Send className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};

export default DemoHeader;
