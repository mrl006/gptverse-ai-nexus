
import React from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './about/AboutHeader';
import AboutBackground from './about/AboutBackground';
import AiVisualComponent from './about/AiVisualComponent';
import AboutTabs from './about/AboutTabs';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutGPTVerse: React.FC = () => {
  const { isMobile } = useIsMobile();
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="relative py-16 md:py-24 overflow-hidden">
      <AboutBackground />

      <div className="container mx-auto px-4 relative z-10">
        <AboutHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-20 h-auto md:h-[600px]">
          <div className={`${isMobile ? 'h-[400px]' : 'h-full'} flex items-center`}>
            <AiVisualComponent />
          </div>
          
          <div className={`${isMobile ? 'h-auto py-6' : 'h-full'} flex items-center`}>
            <AboutTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
