
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { tokenDistribution, TokenDistributionItem } from './TokenDistributionData';
import PieChartActiveShape from './PieChartActiveShape';
import PieChartTooltip from './PieChartTooltip';
import ChartConnectors from './ChartConnectors';
import { useIsMobile } from '@/hooks/use-mobile';

interface TokenomicsPieChartProps {
  activeIndex: number | null;
  topDistributions: TokenDistributionItem[];
  selectedCategory: string | null;
}

const TokenomicsPieChart: React.FC<TokenomicsPieChartProps> = ({ 
  activeIndex, 
  topDistributions,
  selectedCategory
}) => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  // The index in the tokenDistribution array that corresponds to the selected category
  const selectedIndex = selectedCategory 
    ? tokenDistribution.findIndex(item => item.name === selectedCategory)
    : null;
  
  // We prioritize selectedIndex over activeIndex
  const activeIdx = selectedIndex !== null && selectedIndex !== -1 ? selectedIndex : activeIndex;

  // Adjust sizes for mobile
  const outerRadius = isSmallMobile ? "50%" : (isMobile ? "55%" : "65%");
  const innerRadius = isSmallMobile ? "20%" : (isMobile ? "25%" : "30%");

  return (
    <div className="w-full">
      <h3 className="text-center text-lg md:text-2xl font-bold text-white mb-3 md:mb-6">Token Allocation</h3>
      <div className="relative w-full aspect-square max-w-[400px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
            <Pie
              data={tokenDistribution}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={isSmallMobile ? 0.3 : (isMobile ? 0.5 : 1)}
              dataKey="value"
              activeIndex={activeIdx !== null ? [activeIdx] : []}
              activeShape={PieChartActiveShape}
            >
              {tokenDistribution.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="rgba(0,0,0,0.1)"
                  strokeWidth={1}
                  style={{
                    filter: isMobile ? 'none' : `drop-shadow(0 0 6px ${entry.color}40)`,
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </Pie>
            
            <Tooltip content={<PieChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-alien-neon font-mono text-sm md:text-lg font-bold">100%</div>
            <div className="text-white/70 text-xs md:text-sm">Total Supply</div>
          </div>
        </div>
        
        {/* Chart connectors with labels - only show on non-mobile */}
        {!isMobile && (
          <ChartConnectors topDistributions={topDistributions} chartWidth={400} />
        )}
      </div>
    </div>
  );
};

export default TokenomicsPieChart;
