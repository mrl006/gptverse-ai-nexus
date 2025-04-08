
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
        {sortedTokenDistribution.map((item, index) => (
          <div 
            key={index}
            className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
              activeIndex === index || selectedCategory === item.name
                ? 'bg-[#8B5CF6]/10 shadow-sm border border-[#8B5CF6]/20'
                : 'hover:bg-white/5 border border-transparent'
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
              className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
              style={{ 
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}80`
              }}
            ></div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{item.name}</span>
                <span className="text-[#8B5CF6] font-mono">{item.value}%</span>
              </div>
              <div className="text-white/60 text-sm mt-1">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistributionTabContent;
