
import React, { useRef, useEffect } from 'react';
import PartnerCard from './PartnerCard';

interface PartnerGridProps {
  partners: Array<{ name: string; logo: string }>;
  imagesLoaded: boolean;
}

const PartnerGrid: React.FC<PartnerGridProps> = ({ partners, imagesLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    <div ref={containerRef} className="relative overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
        {partners.map((partner, index) => (
          <PartnerCard key={index} partner={partner} imagesLoaded={imagesLoaded} />
        ))}
      </div>
    </div>
  );
};

export default PartnerGrid;
