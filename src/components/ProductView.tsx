
import React, { useState, useRef } from 'react';
import { AiModels, getIconByName } from '@/data/aiModels';
import ModelList from './product/ModelList';
import DemoPreview from './product/DemoPreview';

// Main ProductView component
const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('pdf-reader');
  const [showSidebar, setShowSidebar] = useState(true);
  const viewRef = useRef<HTMLDivElement>(null);
  
  const currentModel = AiModels.find(model => model.id === selectedModel) || AiModels[0];

  // Handle model selection without scrolling
  const handleModelSelect = (modelId: string) => {
    // Prevent default scrolling behavior
    setSelectedModel(modelId);
    
    // Set focus without scrolling
    if (viewRef.current) {
      const scrollPosition = window.scrollY;
      viewRef.current.focus({preventScroll: true});
      // Restore scroll position
      window.scrollTo({top: scrollPosition});
    }
  };

  return (
    <section 
      ref={viewRef} 
      id="products" 
      className="section-anchor py-16 relative overflow-hidden outline-none" 
      tabIndex={-1}
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
            <div className="glass-card p-6 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden h-full">
              <DemoPreview 
                modelId={currentModel.id} 
                iconBg={currentModel.color} 
                iconComponent={currentModel.iconName ? getIconByName(currentModel.iconName) : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
