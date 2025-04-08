
import React, { useState, useRef } from 'react';
import { AiModels, getIconByName } from '@/data/aiModels';
import ModelList from './product/ModelList';
import DemoPreview from './product/DemoPreview';
import { motion } from 'framer-motion';

// Main ProductView component
const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('pdf-reader');
  const [showSidebar, setShowSidebar] = useState(true);
  const viewRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <motion.section 
      ref={viewRef} 
      id="products" 
      className="section-anchor py-16 relative overflow-hidden outline-none" 
      tabIndex={-1}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="absolute inset-0 bg-[#040812] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6">
          {/* Model List Sidebar */}
          <ModelList 
            selectedModel={selectedModel}
            setSelectedModel={handleModelSelect}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          
          {/* Main Content Area - Only Interactive Demo */}
          <div className="min-h-[600px]">
            <motion.div 
              className="glass-card p-6 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden h-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
