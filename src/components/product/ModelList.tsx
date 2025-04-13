
import React from 'react';
import { Button } from '@/components/ui/button';
import { AiModels } from '@/data/aiModels';
import { getIconByName } from '@/utils/iconUtils';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  const { isMobile, isSmallMobile } = useIsMobile();
  
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
      {/* Mobile Header & Toggle - Improved with better visibility */}
      <div className="lg:hidden mb-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
            AI HUB
          </span>
        </h2>
        <Button 
          variant="outline" 
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-full border-[#0ef34b]/20 text-[#0ef34b] hover:bg-[#0ef34b]/10 backdrop-blur-sm flex items-center justify-between"
          aria-expanded={showSidebar}
          aria-controls="model-list"
        >
          <span>{showSidebar ? 'Hide Models' : 'Show Models'}</span>
          {showSidebar ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </Button>
      </div>
      
      {/* Sidebar Navigation - Improved layout and performance for mobile */}
      {(showSidebar || !isMobile) && (
        <motion.div 
          id="model-list"
          className={`${isMobile ? 'border-b border-white/20 pb-4 mb-4 bg-[#06101a]/60 backdrop-blur-sm rounded-lg p-3' : 'lg:border-r lg:border-white/10 pr-4'} relative`}
          variants={isMobile ? containerVariants : {}}
          initial={isMobile ? "hidden" : "visible"}
          animate="visible"
          role="navigation"
          aria-label="AI Models Selection"
        >
          {/* Simplified glassmorphism sidebar accent for better performance */}
          {!isMobile && (
            <div className="absolute -inset-4 bg-gradient-to-r from-[#06101a]/80 to-transparent backdrop-blur-md pointer-events-none z-0 rounded-2xl"></div>
          )}
          
          <div className="hidden lg:block mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-white">
              AI HUB
            </h2>
          </div>
          
          <div className={`${isMobile ? 'grid grid-cols-2 gap-2' : 'space-y-2'} relative z-10`}>
            {AiModels.map((model) => {
              const isSelected = selectedModel === model.id;
              
              return (
                <motion.button 
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-2 md:p-2.5 rounded-lg flex items-center gap-2 md:gap-2.5 transition-all ${
                    isSelected 
                      ? 'bg-[#1e1e2f]/80 border-l-2 border-[#0ef34b]' 
                      : 'hover:bg-white/5'
                  }`}
                  whileHover={{ x: isMobile ? 0 : 3, scale: isMobile ? 1.01 : 1.02 }}
                  animate={{ 
                    scale: isSelected ? (isMobile ? 1.01 : 1.02) : 1,
                    opacity: 1
                  }}
                  transition={{ duration: 0.2 }}
                  aria-pressed={isSelected}
                >
                  {isSelected && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#0ef34b]/20 to-transparent rounded-lg -z-10"
                      layoutId="highlight"
                      transition={{ type: "spring", duration: 0.4 }}
                    />
                  )}
                  <div className={`flex-shrink-0 p-1 md:p-1.5 rounded-md ${
                    isSelected 
                      ? 'bg-[#0ef34b]/20 text-[#0ef34b]' 
                      : 'bg-gray-800/50 text-gray-400'
                  }`}>
                    {getIconByName(model.iconName)}
                  </div>
                  <span className={`${isSelected 
                    ? 'text-white font-medium' 
                    : 'text-gray-400'} ${isSmallMobile ? 'text-[10px]' : isMobile ? 'text-xs' : ''} whitespace-nowrap overflow-hidden text-ellipsis`}>
                    {model.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModelList;
