
import React from 'react';

interface PartnerTabIndicatorsProps {
  activeCategory: 'strategic' | 'media';
}

const PartnerTabIndicators: React.FC<PartnerTabIndicatorsProps> = ({ activeCategory }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex space-x-2">
        <span className={`w-2 h-2 rounded-full ${activeCategory === 'strategic' ? 'bg-[#0ef34b]' : 'bg-[#0ef34b]/30'} transition-colors duration-300`}></span>
        <span className={`w-2 h-2 rounded-full ${activeCategory === 'media' ? 'bg-[#0ef34b]' : 'bg-[#0ef34b]/30'} transition-colors duration-300`}></span>
      </div>
    </div>
  );
};

export default PartnerTabIndicators;
