
import React from 'react';
import AiServiceCard from './ai-services/AiServiceCard';
import AiServicesHeader from './ai-services/AiServicesHeader';
import AiServicesBackground from './ai-services/AiServicesBackground';
import { getAiServices } from './ai-services/aiServicesData';

const AiServices = () => {
  const aiServices = getAiServices();

  return (
    <section id="ai-services" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <AiServicesBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AiServicesHeader />
        
        <div className="space-y-12">
          {aiServices.map((service, index) => (
            <AiServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
              statusLabels={service.statusLabels}
              flipped={service.flipped}
              buttonType={service.buttonType}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiServices;
