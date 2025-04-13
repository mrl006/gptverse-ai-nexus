
import React from 'react';
import { TokenDistributionItem } from './TokenDistributionData';

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
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white">Token Distribution</h3>
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin">
        {sortedTokenDistribution.map((item, index) => {
          // Use white with different opacities for glass morphism
          const glassShade = index % 3 === 0 ? 'rgba(255, 255, 255, 0.2)' : 
                            index % 3 === 1 ? 'rgba(255, 255, 255, 0.15)' : 
                                            'rgba(255, 255, 255, 0.1)';
          
          return (
            <div 
              key={index}
              className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                activeIndex === index || selectedCategory === item.name
                  ? 'bg-white/10 shadow-sm border border-white/20 backdrop-blur-md'
                  : 'hover:bg-white/5 border border-transparent hover:border-white/10'
              }`}
              onMouseEnter={() => {
                setActiveIndex(index);
                setSelectedCategory(item.name);
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
                setSelectedCategory(null);
              }}
            >
              <div 
                className="w-4 h-4 rounded-full mr-4 flex-shrink-0"
                style={{ 
                  backgroundColor: glassShade,
                  boxShadow: `0 0 10px ${glassShade}`
                }}
              ></div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-white font-mono font-bold">{item.value}%</span>
                </div>
                {item.description && (
                  <div className="text-white/60 text-sm mt-1">{item.description}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DistributionTabContent;
