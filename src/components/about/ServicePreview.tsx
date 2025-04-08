
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import DemoPreview from '../product/DemoPreview';

interface ServicePreviewProps {
  serviceModels: string[];
  activeServiceIndex: number;
  setActiveServiceIndex: (index: number) => void;
}

const ServicePreview: React.FC<ServicePreviewProps> = ({ 
  serviceModels, 
  activeServiceIndex, 
  setActiveServiceIndex 
}) => {
  return (
    <motion.div
      className="mb-16 glass-card p-8 backdrop-blur-xl border border-white/10 bg-[#06101a]/40 rounded-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0ef34b]/10 rounded-full blur-3xl"></div>
      
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
            EXPERIENCE OUR AI SERVICES
          </span>
        </h3>
        <p className="text-white/70 max-w-2xl mx-auto">
          Explore our cutting-edge AI services with interactive demos. Click through the options below to see the different capabilities of the GPTVerse ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {serviceModels.map((modelId, index) => (
              <motion.div
                key={modelId}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className={`w-full text-left px-4 py-3 rounded-lg flex justify-between items-center transition-all duration-300 ${
                    activeServiceIndex === index
                      ? 'bg-[#0ef34b]/20 border border-[#0ef34b]/40 text-white'
                      : 'bg-[#06101a]/40 border border-white/10 text-white/70 hover:bg-[#06101a]/60'
                  }`}
                  onClick={() => setActiveServiceIndex(index)}
                >
                  <span className="flex items-center">
                    <span className={`h-2 w-2 rounded-full mr-3 ${
                      activeServiceIndex === index ? 'bg-[#0ef34b] animate-pulse' : 'bg-white/30'
                    }`}></span>
                    {modelId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${
                    activeServiceIndex === index ? 'rotate-90 text-[#0ef34b]' : ''
                  }`} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <motion.div
            key={activeServiceIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <DemoPreview 
              modelId={serviceModels[activeServiceIndex]} 
              iconBg={`bg-${['green', 'blue', 'teal', 'indigo', 'purple', 'yellow'][activeServiceIndex % 6]}-700`}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePreview;
