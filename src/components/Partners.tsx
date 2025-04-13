
import React, { useState, useEffect } from 'react';
import PartnersHeader from './partners/PartnersHeader';
import PartnerTabs from './partners/PartnerTabs';
import PartnerGrid from './partners/PartnerGrid';
import PartnerTabIndicators from './partners/PartnerTabIndicators';
import { strategicPartners, mediaPartners } from './partners/partnersData';

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
      <div className="absolute inset-0 bg-[#040812]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(14,243,75,0.1)_0%,transparent_50%)]"></div>
      
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
