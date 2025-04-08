
import React, { useState } from 'react';
import BackgroundEffects from './about/BackgroundEffects';
import AboutHeader from './about/AboutHeader';
import RobotImage from './about/RobotImage';
import MainDescription from './about/MainDescription';
import FeaturesGrid from './about/FeaturesGrid';
import ServicePreview from './about/ServicePreview';
import EcosystemGrid from './about/EcosystemGrid';
import CtaSection from './about/CtaSection';

const AboutGPTVerse = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const serviceModels = ['language-tutor', 'pdf-reader', 'healty', 'scriptwriter', 'image-generator', 'comedian'];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <BackgroundEffects />

      <div className="container mx-auto px-4 relative z-10">
        <AboutHeader />

        {/* Robot Image and Main Description Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <RobotImage />
          <MainDescription />
        </div>
        
        {/* Features grid */}
        <FeaturesGrid />
        
        {/* Interactive Demo Preview Section */}
        <ServicePreview 
          serviceModels={serviceModels}
          activeServiceIndex={activeServiceIndex}
          setActiveServiceIndex={setActiveServiceIndex}
        />
        
        {/* Ecosystem Cards */}
        <EcosystemGrid 
          setActiveServiceIndex={setActiveServiceIndex}
          serviceModels={serviceModels}
        />
        
        {/* CTA Section */}
        <CtaSection />
      </div>
    </section>
  );
};

export default AboutGPTVerse;
