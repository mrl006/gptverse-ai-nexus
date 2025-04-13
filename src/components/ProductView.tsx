
import React, { useState, useRef, useEffect } from 'react';
import { AiModels } from '@/data/aiModels';
import { getIconByName } from '@/utils/iconUtils';
import ModelList from './product/ModelList';
import DemoPreview from './product/DemoPreview';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

// Main ProductView component
const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('pdf-reader');
  const [showSidebar, setShowSidebar] = useState(true);
  const viewRef = useRef<HTMLDivElement>(null);
  const { isMobile, isSmallMobile } = useIsMobile();
  
  const currentModel = AiModels.find(model => model.id === selectedModel) || AiModels[0];

  // Handle model selection without scrolling
  const handleModelSelect = (modelId: string) => {
    // Prevent default scrolling behavior
    const scrollPosition = window.scrollY;
    setSelectedModel(modelId);
    
    // Make sure we maintain the scroll position
    setTimeout(() => {
      window.scrollTo({top: scrollPosition});
    }, 0);
  };

  // Auto-rotate through models only on desktop - disable on mobile for better performance
  useEffect(() => {
    if (isMobile) return; // Don't auto-rotate on mobile
    
    const autoRotateInterval = setInterval(() => {
      const currentIndex = AiModels.findIndex(model => model.id === selectedModel);
      const nextIndex = (currentIndex + 1) % AiModels.length;
      handleModelSelect(AiModels[nextIndex].id);
    }, 5000); // Slow down even more to reduce animation frequency
    
    return () => clearInterval(autoRotateInterval);
  }, [selectedModel, isMobile]);

  return (
    <motion.section 
      ref={viewRef} 
      id="products" 
      className="section-anchor py-5 md:py-16 relative overflow-hidden outline-none" 
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: isSmallMobile ? 0.2 : 0.4 }}
    >
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        {/* Simplified background */}
        <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/20 to-transparent"></div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-3 md:px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-3 md:gap-6">
          {/* Model List Sidebar */}
          <ModelList 
            selectedModel={selectedModel}
            setSelectedModel={handleModelSelect}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          
          {/* Main Content Area - Only Interactive Demo */}
          <div className={`${isSmallMobile ? 'min-h-[320px]' : (isMobile ? 'min-h-[360px]' : 'min-h-[600px]')}`}>
            <motion.div 
              className="glass-card p-2 md:p-6 backdrop-blur-xl border border-white/20 bg-[#06101a]/40 rounded-xl md:rounded-2xl overflow-hidden h-full shadow-lg relative"
              initial={{ y: 5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: isSmallMobile ? 0.2 : 0.4 }}
            >
              <DemoPreview 
                modelId={currentModel.id} 
                iconBg={currentModel.color} 
                iconComponent={currentModel.iconName ? getIconByName(currentModel.iconName) : undefined}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductView;
