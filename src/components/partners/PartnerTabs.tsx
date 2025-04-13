
import React from 'react';

interface PartnerTabsProps {
  activeCategory: 'strategic' | 'media';
  setActiveCategory: (category: 'strategic' | 'media') => void;
}

const PartnerTabs: React.FC<PartnerTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="p-1 flex rounded-lg backdrop-blur-xl bg-[#040812]/30 border border-[#0ef34b]/15 shadow-[0_0_20px_rgba(4,8,18,0.5)]">
        <button 
          onClick={() => setActiveCategory('strategic')}
          className={`px-6 py-2 rounded-md transition-all duration-300 relative ${
            activeCategory === 'strategic' 
              ? 'bg-[#0ef34b]/10 text-[#0ef34b] shadow-[0_0_15px_rgba(14,243,75,0.3)]' 
              : 'text-white/70 hover:text-white/90'
          }`}
        >
          {activeCategory === 'strategic' && (
            <>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
            </>
          )}
          Strategic
        </button>
        <button 
          onClick={() => setActiveCategory('media')}
          className={`px-6 py-2 rounded-md transition-all duration-300 relative ${
            activeCategory === 'media' 
              ? 'bg-[#0ef34b]/10 text-[#0ef34b] shadow-[0_0_15px_rgba(14,243,75,0.3)]' 
              : 'text-white/70 hover:text-white/90'
          }`}
        >
          {activeCategory === 'media' && (
            <>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
            </>
          )}
          Media
        </button>
      </div>
    </div>
  );
};

export default PartnerTabs;
