
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';
const RADIAN = Math.PI / 180;

// Enhanced label with better positioning and styling
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" className="text-xs font-mono" style={{
    textShadow: '0 0 8px rgba(0,0,0,0.5)',
    fontWeight: 600,
    opacity: 0.9
  }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>;
};

// Glass morphism tooltip with minimalist style
const CustomTooltip = ({
  active,
  payload
}: any) => {
  if (active && payload && payload.length) {
    return <div className="backdrop-blur-lg bg-white/10 p-4 rounded-xl border border-white/20 shadow-xl">
        <p className="text-white font-medium text-base">{payload[0].name}</p>
        <p className="text-white font-mono text-lg">{`${payload[0].value}%`}</p>
        {payload[0].payload.description && <p className="text-white/80 text-sm mt-2 max-w-[240px]">
            {payload[0].payload.description}
          </p>}
      </div>;
  }
  return null;
};

const PieChartVisualization: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full h-[500px] max-w-[800px] mx-auto relative">
        {/* Glossy background effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {/* Glass morphism filters for cells */}
              {tokenDistribution.map((entry, index) => {
                // Various shades of white/gray for glass effect
                const glassColor = `rgba(255, 255, 255, ${0.3 + (index % 3) * 0.1})`;
                return (
                  <filter key={`glow-${index}`} id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feFlood floodColor="white" floodOpacity="0.1" result="coloredBlur" />
                    <feComposite in="SourceGraphic" in2="coloredBlur" operator="over" />
                  </filter>
                );
              })}
              
              {/* Glossy gradient for pie */}
              <linearGradient id="glossGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                <stop offset="100%" stopColor="white" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            <Pie 
              data={tokenDistribution} 
              cx="50%" 
              cy="50%" 
              labelLine={false} 
              label={renderCustomizedLabel} 
              outerRadius={180} 
              innerRadius={90} 
              fill="#8884d8" 
              dataKey="value" 
              paddingAngle={3} 
              strokeWidth={1} 
              onMouseEnter={(_, index) => setActiveIndex(index)} 
              onMouseLeave={() => setActiveIndex(null)}
            >
              {tokenDistribution.map((entry, index) => {
                // Different shades of white/gray for a glass look
                const glassShade = `rgba(255, 255, 255, ${0.2 + (index % 5) * 0.05})`;
                return (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={glassShade} 
                    stroke="rgba(255,255,255,0.4)" 
                    filter={activeIndex === index ? `url(#glow-${index})` : undefined} 
                    style={{
                      filter: activeIndex === index ? `drop-shadow(0 0 10px rgba(255,255,255,0.3))` : undefined,
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transformOrigin: 'center center',
                      transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)'
                    }} 
                  />
                );
              })}
            </Pie>
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Minimalist legend with glass styling */}
            <Legend layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{
            paddingLeft: "20px",
            maxHeight: "400px",
            overflowY: "auto",
            fontSize: "12px",
            opacity: 0.9
          }} content={({
            payload
          }) => <div className="flex flex-col gap-2 text-xs backdrop-blur-md bg-white/5 p-3 rounded-lg border border-white/10">
                  {payload?.map((entry, index) => {
                    return (
                      <div key={`legend-${index}`} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full" style={{
                          backgroundColor: `rgba(255, 255, 255, ${0.4 + (index % 5) * 0.1})`,
                          boxShadow: `0 0 5px rgba(255, 255, 255, 0.2)`
                        }} />
                        <span className="text-white/80">{entry.value}</span>
                      </div>
                    );
                  })}
                </div>} />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Centered indicator with glass morphism styling */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="rounded-full bg-black/20 backdrop-blur-md p-6 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <div className="text-white font-mono text-xl font-bold">100%</div>
            <div className="text-white/70 text-sm">Total Supply</div>
          </div>
        </div>
      </div>
    </div>;
};

export default PieChartVisualization;
