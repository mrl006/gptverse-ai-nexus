
import React from 'react';
import { Button } from '@/components/ui/button';
import { AiModels } from '@/data/aiModels';
import { getIconByName } from '@/utils/iconUtils';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const { isMobile } = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <>
      {/* Mobile Header & Toggle */}
      <div className="lg:hidden mb-4 flex flex-col gap-4">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
          AI HUB
        </h2>
        <Button 
          variant="outline" 
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-full border-[#0ef34b]/20 text-[#0ef34b] hover:bg-[#0ef34b]/10 backdrop-blur-sm"
        >
          {showSidebar ? 'Hide Models List' : 'Show Models List'}
        </Button>
      </div>
      
      {/* Sidebar Navigation */}
      {(showSidebar || !isMobile) && (
        <motion.div 
          className={`${isMobile ? 'border-b border-white/10 pb-4 mb-6' : 'lg:border-r lg:border-white/10 pr-4'} relative`}
          variants={isMobile ? containerVariants : {}}
          initial={isMobile ? "hidden" : "visible"}
          animate="visible"
        >
          {/* Enhanced glassmorphism sidebar accent with stronger green glow */}
          {!isMobile && (
            <div className="absolute -inset-4 bg-gradient-to-r from-[#06101a]/80 to-transparent backdrop-blur-md pointer-events-none z-0 rounded-2xl">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 top-1/4 w-40 h-40 bg-[#0ef34b]/15 rounded-full blur-3xl"></div>
                <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          )}
          
          <div className="hidden lg:block mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(14,243,75,0.4)]">
              <span className="relative">
                AI HUB
                <span className="absolute -inset-1 bg-gradient-to-r from-[#0ef34b]/20 to-transparent blur-sm rounded-lg -z-10"></span>
              </span>
            </h2>
          </div>
          
          <div className={`${isMobile ? 'grid grid-cols-2 gap-2' : 'space-y-2'} relative z-10`}>
            {AiModels.map((model) => (
              <motion.button 
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                  selectedModel === model.id 
                    ? 'bg-[#1e1e2f]/80 border-l-2 border-[#0ef34b] relative shadow-[0_0_15px_rgba(14,243,75,0.2)]' 
                    : 'hover:bg-white/5'
                }`}
                whileHover={{ x: 3 }}
                animate={{ 
                  scale: selectedModel === model.id ? 1.02 : 1,
                  opacity: 1
                }}
                transition={{ duration: 0.2 }}
              >
                {selectedModel === model.id && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#0ef34b]/20 to-transparent rounded-lg -z-10"
                    layoutId="highlight"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <div className={`flex-shrink-0 p-2 rounded-md ${
                  selectedModel === model.id 
                    ? 'bg-[#0ef34b]/20 text-[#0ef34b]' 
                    : 'bg-gray-800/50 text-gray-400'
                }`}>
                  {getIconByName(model.iconName)}
                </div>
                <span className={`${selectedModel === model.id 
                  ? 'text-white font-medium' 
                  : 'text-gray-400'} ${isMobile ? 'text-sm' : ''} whitespace-nowrap overflow-hidden text-ellipsis`}>
                  {model.name}
                </span>
                
                {/* Add glow effect for selected model */}
                {selectedModel === model.id && (
                  <div className="absolute inset-0 -z-20 rounded-lg">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0ef34b]/20 to-transparent opacity-60 blur-md rounded-lg"></div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModelList;
