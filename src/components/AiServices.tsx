
import React from 'react';
import AiServicesHeader from './ai-services/AiServicesHeader';
import AiServicesBackground from './ai-services/AiServicesBackground';
import { getAiServices } from './ai-services/aiServicesData';
import AiServiceBox from './ai-services/AiServiceBox';

const AiServices = () => {
  const aiServices = getAiServices();

  return (
    <section id="ai-services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <AiServicesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AiServicesHeader />
        
        {/* Grid of service boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {aiServices.map((service, index) => (
            <AiServiceBox
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
              statusLabels={service.statusLabels}
              buttonType={service.buttonType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServices;
