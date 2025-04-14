
import React from 'react';
import { motion } from 'framer-motion';
import AboutHeader from './about/AboutHeader';
import AboutBackground from './about/AboutBackground';
import AiVisualComponent from './about/AiVisualComponent';
import AboutTabs from './about/AboutTabs';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutGPTVerse: React.FC = () => {
  const { isMobile } = useIsMobile();
  
  return (
    <section id="about" className="relative py-12 md:py-16 overflow-hidden">
      {/* Background component */}
      <AboutBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header component */}
        <AboutHeader />

        {/* Split layout with AI visual and tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto md:h-[500px] items-stretch">
          {/* Left Side - AI Robot Image with Animated Effects */}
          <AiVisualComponent />
          
          {/* Right Side - Tabs with Information */}
          <AboutTabs />
        </div>
        
        {/* Call to action - Only visible on desktop */}
        {!isMobile && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-center"
          >
            <a 
              href="#explore" 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 transition-colors text-sm"
            >
              <span>Explore Neural Core</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AboutGPTVerse;
