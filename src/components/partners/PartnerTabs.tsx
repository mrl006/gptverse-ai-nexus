
import React from 'react';

interface PartnerTabsProps {
  activeCategory: 'strategic' | 'media';
  setActiveCategory: (category: 'strategic' | 'media') => void;
}

const PartnerTabs: React.FC<PartnerTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="p-1 flex rounded-lg backdrop-blur-md bg-[#040812]/60 border border-[#0ef34b]/20">
        <button 
          onClick={() => setActiveCategory('strategic')}
          className={`px-6 py-2 rounded-md transition-all duration-300 ${
            activeCategory === 'strategic' 
              ? 'bg-[#0ef34b]/10 text-[#0ef34b] shadow-[0_0_10px_rgba(14,243,75,0.2)]' 
              : 'text-white/70 hover:text-white/90'
          }`}
        >
          Strategic
        </button>
        <button 
          onClick={() => setActiveCategory('media')}
          className={`px-6 py-2 rounded-md transition-all duration-300 ${
            activeCategory === 'media' 
              ? 'bg-[#0ef34b]/10 text-[#0ef34b] shadow-[0_0_10px_rgba(14,243,75,0.2)]' 
              : 'text-white/70 hover:text-white/90'
          }`}
        >
          Media
        </button>
      </div>
    </div>
  );
};

export default PartnerTabs;
