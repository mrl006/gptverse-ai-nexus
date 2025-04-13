
import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { tokenDistribution } from './TokenDistributionData';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const { isMobile, isSmallMobile } = useIsMobile();
  
  // Don't render labels for small slices on mobile
  if (isMobile && percent < 0.05) return null;
  
  const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central" 
      className={isSmallMobile ? "text-[8px] font-mono" : "text-xs font-mono"}
      style={{
        textShadow: '0 0 8px rgba(0,0,0,0.5)',
        fontWeight: 600,
        opacity: 0.9
      }}
    >
      {percent > 0.05 ? `${(percent * 100).toFixed(0)}%` : ''}
    </text>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-lg bg-white/10 p-2 rounded-lg border border-white/20 shadow-xl">
        <p className="text-white font-medium text-xs">{payload[0].name}</p>
        <p className="text-white font-mono text-sm">{`${payload[0].value}%`}</p>
      </div>
    );
  }
  return null;
};

const PieChartVisualization: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { isMobile, isSmallMobile } = useIsMobile();
  
  // Adjust dimensions based on device type
  const chartHeight = isSmallMobile ? 220 : (isMobile ? 250 : 500);
  const outerRadius = isSmallMobile ? 50 : (isMobile ? 70 : 180);
  const innerRadius = isSmallMobile ? 20 : (isMobile ? 30 : 90);
  
  // Simplified data for mobile to improve performance
  const chartData = isMobile 
    ? tokenDistribution.filter(item => item.value >= 3) // Only show items with value >= 3% on mobile
    : tokenDistribution;
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div style={{ width: '100%', height: chartHeight }} className="max-w-[800px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={isMobile ? 0.5 : 3}
              strokeWidth={isSmallMobile ? 0.5 : 1}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="rgba(255,255,255,0.2)"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center center',
                    transform: activeIndex === index ? 'scale(1.03)' : 'scale(1)'
                  }}
                />
              ))}
            </Pie>
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Ultra-simplified legend for mobile */}
            {isMobile && (
              <Legend
                layout="horizontal"
                align="center"
                verticalAlign="bottom"
                iconSize={isSmallMobile ? 6 : 8}
                wrapperStyle={{
                  fontSize: isSmallMobile ? "6px" : "8px",
                  paddingTop: "5px",
                  lineHeight: "0.8",
                  width: "100%",
                }}
                formatter={(value, entry, index) => (
                  <span style={{ color: 'white', opacity: 0.8 }}>{value}</span>
                )}
              />
            )}
            
            {/* Desktop legend */}
            {!isMobile && (
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{
                  paddingLeft: "20px",
                  maxHeight: "400px",
                  overflowY: "auto",
                  fontSize: "12px",
                  opacity: 0.9
                }}
              />
            )}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartVisualization;
