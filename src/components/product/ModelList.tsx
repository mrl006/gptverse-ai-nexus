import React from 'react';
import { Button } from '@/components/ui/button';
import { AiModels } from '@/data/aiModels';
import { getIconByName } from '@/utils/iconUtils';

interface ModelListProps {
  selectedModel: string;
  setSelectedModel: (modelId: string) => void;
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}

const ModelList: React.FC<ModelListProps> = ({ 
  selectedModel, 
  setSelectedModel, 
  showSidebar, 
  setShowSidebar 
}) => {
  return (
    <>
      {/* Mobile Header & Toggle */}
      <div className="lg:hidden mb-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
          AI MODELS
        </h2>
        <Button 
          variant="outline" 
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-full border-[#0ef34b]/20 text-[#0ef34b] hover:bg-[#0ef34b]/10"
        >
          {showSidebar ? 'Hide Models List' : 'Show Models List'}
        </Button>
      </div>
      
      {/* Sidebar Navigation */}
      <div className={`${showSidebar ? 'block' : 'hidden lg:block'} lg:border-r lg:border-white/10 pr-4`}>
        <div className="hidden lg:block mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
            AI MODELS
          </h2>
        </div>
        
        <div className="space-y-2">
          {AiModels.map((model) => (
            <button 
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                selectedModel === model.id 
                  ? 'bg-[#1e1e2f] border-l-2 border-[#0ef34b]' 
                  : 'hover:bg-white/5'
              }`}
            >
              <div className={`flex-shrink-0 p-2 rounded-md ${
                selectedModel === model.id 
                  ? 'bg-[#0ef34b]/20 text-[#0ef34b]' 
                  : 'bg-gray-800/50 text-gray-400'
              }`}>
                {getIconByName(model.iconName)}
              </div>
              <span className={selectedModel === model.id ? 'text-white' : 'text-gray-400'}>
                {model.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ModelList;
