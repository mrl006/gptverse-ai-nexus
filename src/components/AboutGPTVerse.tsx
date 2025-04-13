
import React from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './about/AboutHeader';
import AboutBackground from './about/AboutBackground';
import AiVisualComponent from './about/AiVisualComponent';
import AboutTabs from './about/AboutTabs';

const AboutGPTVerse: React.FC = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <AboutBackground />

      <div className="container mx-auto px-4 relative z-10">
        <AboutHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 h-auto md:h-[600px]">
          <div className="h-full flex items-center">
            <AiVisualComponent />
          </div>
          
          <div className="h-full flex items-center">
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;

