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
      {/* Enhanced Mobile Header & Toggle */}
      <div className="lg:hidden mb-4 flex flex-col gap-2">
        <motion.h2 
          className="ai-hub-header text-center relative"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="bg-gradient-to-br from-[#d946ef] via-[#8b5cf6] to-[#0ef34b] bg-clip-text text-transparent text-2xl font-bold">
            AI HUB
          </span>
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-16 bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b] to-[#0ef34b]/0"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
        </motion.h2>

        <Button 
          variant="outline" 
          onClick={() => setShowSidebar(!showSidebar)}
          className="model-toggle-button w-full group"
          aria-expanded={showSidebar}
          aria-controls="model-list"
        >
          <span className="text-[#0ef34b] group-hover:text-[#0ef34b]/80 transition-colors">
            {showSidebar ? 'Hide Models' : 'Show Models'}
          </span>
          {showSidebar ? (
            <ChevronUp size={16} className="text-[#0ef34b]" />
          ) : (
            <ChevronDown size={16} className="text-[#0ef34b]" />
          )}
        </Button>
      </div>
      
      {/* Sidebar Navigation - Improved layout for mobile */}
      {(showSidebar || !isMobile) && (
        <motion.div 
          id="model-list"
          className={`${isMobile ? 'models-grid' : 'lg:border-r lg:border-white/10 pr-4'} relative`}
          variants={isMobile ? containerVariants : {}}
          initial={isMobile ? "hidden" : "visible"}
          animate="visible"
          role="navigation"
          aria-label="AI Models Selection"
        >
          {/* Glassmorphism sidebar accent */}
          {!isMobile && (
            <div className="absolute -inset-4 bg-gradient-to-r from-[#06101a]/80 to-transparent backdrop-blur-md pointer-events-none z-0 rounded-2xl"></div>
          )}
          
          <div className="hidden lg:block mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-white">
              AI HUB
            </h2>
          </div>
          
          <div className="relative z-10">
            {AiModels.map((model) => {
              const isSelected = selectedModel === model.id;
              
              return (
                <motion.button 
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`model-item ${isSelected ? 'active' : ''}`}
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
                  <div className={`model-icon ${isSelected ? 'active' : 'bg-gray-800/50 text-gray-400'}`}>
                    {getIconByName(model.iconName)}
                  </div>
                  <span className={`model-name ${isSelected ? 'active' : ''}`}>
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
