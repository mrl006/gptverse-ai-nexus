
import React from 'react';
import { TokenDistributionItem } from './TokenDistributionData';
import { useIsMobile } from '@/hooks/use-mobile';

interface DistributionTabContentProps {
  sortedTokenDistribution: TokenDistributionItem[];
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const DistributionTabContent: React.FC<DistributionTabContentProps> = ({
  sortedTokenDistribution,
  activeIndex,
  setActiveIndex,
  selectedCategory,
  setSelectedCategory
}) => {
  const { isMobile } = useIsMobile();
  
  return (
    <div className="space-y-4 md:space-y-6">
      <h3 className="text-xl md:text-2xl font-bold text-white">Token Distribution</h3>
      <div className="space-y-2 md:space-y-3 max-h-[250px] md:max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
        {sortedTokenDistribution.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center p-3 md:p-4 rounded-lg transition-all duration-300 ${
              activeIndex === index || selectedCategory === item.name
                ? 'bg-[#8B5CF6]/10 shadow-sm border border-[#8B5CF6]/20'
                : 'hover:bg-white/5 border border-transparent hover:border-white/10'
            }`}
            onMouseEnter={() => {
              setActiveIndex(index);
              setSelectedCategory(item.name);
            }}
            onTouchStart={() => {
              // For touch devices, toggle the selection
              if (selectedCategory === item.name) {
                setActiveIndex(null);
                setSelectedCategory(null);
              } else {
                setActiveIndex(index);
                setSelectedCategory(item.name);
              }
            }}
            onMouseLeave={() => {
              if (!isMobile) {
                setActiveIndex(null);
                setSelectedCategory(null);
              }
            }}
          >
            <div 
              className="w-3 h-3 md:w-4 md:h-4 rounded-full mr-3 md:mr-4 flex-shrink-0"
              style={{ 
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}80`
              }}
            ></div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium text-sm md:text-base">{item.name}</span>
                <span className="text-[#8B5CF6] font-mono font-bold text-sm md:text-base">{item.value}%</span>
              </div>
              {item.description && (
                <div className="text-white/60 text-xs md:text-sm mt-0.5 md:mt-1">{item.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistributionTabContent;
