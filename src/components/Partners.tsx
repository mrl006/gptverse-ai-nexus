
import React, { useRef, useEffect } from 'react';

const Partners = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mock partner logos - in a real implementation, use actual images
  const partners = [
    { name: 'BNB Chain' },
    { name: 'SKALE' },
    { name: 'NEAR' },
    { name: 'Psalms Capital' },
    { name: 'Mises Browser' },
    { name: 'Dmail' },
    { name: 'GPT360' },
    { name: 'MAR3.AI' },
    { name: 'HeLa' },
    { name: 'TekTias' },
    { name: 'Dot.Gaming' },
    { name: 'Collably Network' },
    { name: 'Eesee' },
    { name: 'List My Project' },
  ];
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const scrollContainer = containerRef.current;
    let isMouseDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const startDragging = (e: MouseEvent) => {
      isMouseDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
      scrollContainer.style.cursor = 'grabbing';
    };
    
    const stopDragging = () => {
      isMouseDown = false;
      scrollContainer.style.cursor = 'grab';
    };
    
    const move = (e: MouseEvent) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };
    
    scrollContainer.addEventListener('mousedown', startDragging);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', move);
    
    return () => {
      scrollContainer.removeEventListener('mousedown', startDragging);
      document.removeEventListener('mouseup', stopDragging);
      document.removeEventListener('mousemove', move);
    };
  }, []);
  
  return (
    <section id="partners" className="section-padding bg-gptv-darker relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">Strategic Partners</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We're proud to collaborate with industry leaders to bring you the best AI experience.
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="flex space-x-8 overflow-x-auto pb-6 cursor-grab scrollbar-none"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-40 h-20 glass-card flex items-center justify-center 
                       grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-lg hover:shadow-gptv-teal/20"
            >
              <span className="text-lg font-medium text-gradient-animate">{partner.name}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <span className="w-2 h-2 rounded-full bg-gptv-teal opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-gptv-teal"></span>
            <span className="w-2 h-2 rounded-full bg-gptv-teal opacity-50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
