
import React from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './about/AboutHeader';
import AboutBackground from './about/AboutBackground';
import AiVisualComponent from './about/AiVisualComponent';
import AboutTabs from './about/AboutTabs';

const AboutGPTVerse: React.FC = () => {
  return (
    <section id="about" className="relative py-16 overflow-hidden">
      {/* Background component */}
      <AboutBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header component */}
        <AboutHeader />

        {/* Split layout with AI visual and tabs - more compact height */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto md:h-[500px] items-stretch">
          {/* Left Side - AI Robot Image with Animated Effects */}
          <AiVisualComponent />
          
          {/* Right Side - Tabs with Information */}
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default AboutGPTVerse;
