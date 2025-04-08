
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TokenDistributionItem, tokenDistribution } from './TokenDistributionData';

const TokenomicsPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  // Add subtle rotation animation to the pie chart
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass-card p-3 rounded-lg border border-white/10 backdrop-blur-md">
          <p className="font-semibold text-white mb-1">{data.name}</p>
          <p className="text-[#0ef34b] font-mono">{data.value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full md:w-3/5 flex justify-center items-center">
      <div className="w-full h-[500px] relative">
        {/* Glow effect behind chart */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#0ef34b]/20 blur-[40px]"></div>
        
        {/* Chart container with 3D-like effect */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ transform: `perspective(1000px) rotateY(${rotation * 0.05}deg) rotateX(${Math.sin(rotation * 0.01) * 5}deg)` }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={tokenDistribution}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="70%"
                paddingAngle={1}
                dataKey="value"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                stroke="#06101a"
                strokeWidth={1}
              >
                {tokenDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
                    className="transition-opacity duration-300"
                    style={{
                      filter: activeIndex === index ? 'brightness(1.2) drop-shadow(0 0 5px rgba(14, 243, 75, 0.5))' : 'none',
                    }}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          {/* GPT logo in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#06101a] flex items-center justify-center border-4 border-[#0ef34b]/30 shadow-[0_0_20px_rgba(14,243,75,0.2)]">
            <span className="text-[#0ef34b] text-4xl font-bold font-mono">G</span>
          </div>
          
          {/* Labels */}
          {tokenDistribution.map((item, index) => {
            // Calculate position around the circle
            const angle = (index / tokenDistribution.length) * 2 * Math.PI;
            const radius = 250; // Adjust this value to position labels
            const x = Math.cos(angle - Math.PI / 2) * radius;
            const y = Math.sin(angle - Math.PI / 2) * radius;
            
            // Only show labels for segments with more than 5%
            if (item.value >= 5) {
              return (
                <div
                  key={index}
                  className="absolute text-white text-sm font-medium"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    textAlign: x > 0 ? 'left' : 'right',
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div>{item.name}</div>
                    <div className="text-[#0ef34b] font-mono">{item.value}.0%</div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPieChart;
