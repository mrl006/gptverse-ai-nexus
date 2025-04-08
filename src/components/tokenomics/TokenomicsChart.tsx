
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';

const TokenomicsChart = () => {
  return (
    <div className="relative aspect-square max-w-[700px] mx-auto">
      {/* Dark background with glow effect */}
      <div className="absolute inset-0 rounded-full bg-[#040812] opacity-80"></div>
      <div className="absolute inset-0 w-[90%] h-[90%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F0B5]/10 blur-[40px]"></div>
      
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={tokenDistribution}
            cx="50%"
            cy="50%"
            innerRadius="35%"
            outerRadius="70%"
            paddingAngle={1}
            dataKey="value"
            strokeWidth={0}
          >
            {tokenDistribution.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                className="drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]"
              />
            ))}
          </Pie>
          
          {/* Center logo */}
          <foreignObject x="35%" y="35%" width="30%" height="30%">
            <div className="w-full h-full rounded-full flex items-center justify-center bg-[#040812] border border-[#00F0B5]/30 shadow-[0_0_15px_rgba(0,240,181,0.5)]">
              <div className="w-3/4 h-3/4 rounded-full bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-3/4 h-3/4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#040812"/>
                  <path d="M16 10C16 8.9 15.1 8 14 8H12V12H14C15.1 12 16 11.1 16 10Z" fill="#00F0B5"/>
                  <path d="M14 14H12V18H14C15.1 18 16 17.1 16 16C16 14.9 15.1 14 14 14Z" fill="#FF56F6"/>
                  <path d="M8 8V18H10V8H8Z" fill="#00F0B5"/>
                </svg>
              </div>
            </div>
          </foreignObject>
        </PieChart>
      </ResponsiveContainer>
      
      {/* Label group containers positioned absolutely around the chart */}
      {tokenDistribution.map((entry, index) => {
        // Calculate position around the circle
        const angle = ((index / tokenDistribution.length) * Math.PI * 2) - (Math.PI / 2); // Start from top
        const radius = 90; // percentage of container
        const x = 50 + radius * Math.cos(angle);
        const y = 50 + radius * Math.sin(angle);
        
        return (
          <div 
            key={`label-${index}`}
            className="absolute whitespace-nowrap"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-white font-medium text-sm sm:text-md md:text-lg">{entry.name}</div>
              <div className="text-[#00F0B5] font-bold text-sm sm:text-md md:text-lg">{entry.value}%</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TokenomicsChart;
