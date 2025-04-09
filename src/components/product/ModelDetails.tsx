
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AiModelProps } from '@/types/aiModel.types';
import { getIconByName } from '@/utils/iconUtils';

interface ModelDetailsProps {
  currentModel: AiModelProps;
}

const ModelDetails: React.FC<ModelDetailsProps> = ({ currentModel }) => {
  return (
    <div>
      {/* Model Logo/Icon */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full flex items-center justify-center bg-[#06101a]/60 border border-[#0ef34b]/20">
            <div className={`h-10 w-10 rounded-full ${currentModel.color} flex items-center justify-center text-white`}>
              {getIconByName(currentModel.iconName)}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-white/50">{currentModel.by}</div>
            <h3 className="text-2xl font-bold text-white">{currentModel.name}</h3>
          </div>
        </div>
        
        <Button className="hidden sm:flex rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
          Chat with {currentModel.name} <ArrowRight size={16} />
        </Button>
      </div>
      
      {/* Model Description */}
      <div className="mb-6">
        <p className="text-white/80 text-lg leading-relaxed">
          {currentModel.description}
        </p>
      </div>
      
      {/* Mobile Action Button */}
      <div className="mt-6 sm:hidden">
        <Button className="w-full rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
          Chat with {currentModel.name} <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ModelDetails;
