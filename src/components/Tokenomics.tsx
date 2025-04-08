
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface TokenDistributionItem {
  name: string;
  value: number;
  color: string;
}

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  // Token distribution data
  const tokenDistribution: TokenDistributionItem[] = [
    { name: 'Ecosystem Rewards', value: 15, color: '#0EF34B' },
    { name: 'Marketing', value: 15, color: '#D946EF' },
    { name: 'Liquidity', value: 15, color: '#0FF5CE' },
    { name: 'Development & Research', value: 10, color: '#00AEFF' },
    { name: 'Team', value: 12, color: '#8B5CF6' },
    { name: 'DAO', value: 9, color: '#3B82F6' },
    { name: 'Private', value: 8, color: '#FFFFFF' },
    { name: 'Public', value: 5, color: '#F59E0B' },
    { name: 'Pre-Sale 2', value: 5, color: '#FF79C6' },
    { name: 'Pre-Sale 1', value: 3, color: '#10B981' },
    { name: 'Advisors', value: 2, color: '#F43F5E' },
    { name: 'KOL Round', value: 1, color: '#06B6D4' },
  ];

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
    <section id="tokenomics" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(14,243,75,0.15)_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left column - Heading and description */}
          <div className="w-full md:w-2/5 space-y-6">
            <h2 className="text-7xl font-bold leading-tight">
              <div className="text-white">TOKENOMICS</div>
              <div className="text-[#0ef34b]">OF GPTVERSE</div>
            </h2>
            
            <p className="text-white/80 text-lg">
              The GptVerse Tokenomics structure was built to protect early investors and the
              Public Sale audience at the highest level.
            </p>
            
            <div className="space-y-4 pt-6">
              <div className="glass-card p-5 border border-[#0ef34b]/20 hover:border-[#0ef34b]/40 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Name:</span>
                  <span className="font-medium text-white">GPTVerse</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/70">Symbol:</span>
                  <span className="font-medium text-white">$GPTV</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/70">Total Supply:</span>
                  <span className="font-medium text-white">1,000,000,000</span>
                </div>
              </div>
              
              <div className="glass-card p-5 border border-[#00aeff]/20 hover:border-[#00aeff]/40 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-white/70">Networks:</span>
                  <span className="font-medium text-white">BNB, Near, Skale</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/70">Initial Price:</span>
                  <span className="font-medium text-white">$0.015</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/70">Listing Price:</span>
                  <span className="font-medium text-white">$0.025</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Pie chart */}
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
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
