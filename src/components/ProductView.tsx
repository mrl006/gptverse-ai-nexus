import React, { useState } from 'react';
import { AiModels } from '@/data/aiModels';
import ModelList from './product/ModelList';
import ModelDetails from './product/ModelDetails';
import DemoPreview from './product/DemoPreview';

// Main ProductView component
const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('language-tutor');
  const [showSidebar, setShowSidebar] = useState(true);
  
  const currentModel = AiModels.find(model => model.id === selectedModel) || AiModels[0];

  return (
    <section id="products" className="section-anchor py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040812] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6">
          {/* Model List Sidebar */}
          <ModelList 
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
          
          {/* Main Content Area */}
          <div className="min-h-[600px]">
            <div className="glass-card p-6 lg:p-8 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden min-h-full">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6 h-full">
                {/* Left Column - Model Details */}
                <div className="order-2 md:order-1">
                  <ModelDetails currentModel={currentModel} />
                </div>
                
                {/* Right Column - Interactive Preview */}
                <div className="order-1 md:order-2 bg-[#0c1424] p-4 rounded-xl border border-white/10 h-[480px]">
                  <h4 className="text-lg font-medium text-white mb-4">Interactive Demo</h4>
                  <div className="h-[calc(100%-2rem)]">
                    <DemoPreview 
                      modelId={currentModel.id} 
                      iconBg={currentModel.color} 
                      iconComponent={currentModel.iconName ? getIconByName(currentModel.iconName) : undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
