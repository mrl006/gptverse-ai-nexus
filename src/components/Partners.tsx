
import React, { useState, useEffect } from 'react';
import PartnersHeader from './partners/PartnersHeader';
import PartnerTabs from './partners/PartnerTabs';
import PartnerGrid from './partners/PartnerGrid';
import PartnerTabIndicators from './partners/PartnerTabIndicators';
import { strategicPartners, mediaPartners } from './partners/partnersData';
import { UnifiedBackground } from './UnifiedBackground';

const Partners = () => {
  const [activeCategory, setActiveCategory] = useState<'strategic' | 'media'>('strategic');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="partners" className="py-20 relative overflow-hidden">
      {/* Using single unified background style */}
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[#0ef34b]/5 blur-[180px] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <PartnersHeader />
        
        <PartnerTabs 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <PartnerGrid 
          partners={activeCategory === 'strategic' ? strategicPartners : mediaPartners} 
          imagesLoaded={imagesLoaded} 
        />
        
        <PartnerTabIndicators activeCategory={activeCategory} />
      </div>
    </section>
  );
};

export default Partners;
