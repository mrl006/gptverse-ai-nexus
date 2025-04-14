
import React from 'react';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const PieChartTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="neo-blur p-4 rounded-lg shadow-xl backdrop-blur-xl animate-fade-in z-50 bg-white/15 border border-white/20">
        <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/90 text-lg mb-2">{data.name}</div>
        <div className="text-white font-mono text-xl mb-2 flex items-center">
          <span className="mr-2 h-3 w-3 rounded-full" style={{ backgroundColor: data.color }}></span>
          <span className="font-bold">{data.value}%</span>
        </div>
        {data.description && (
          <div className="text-white/80 text-sm max-w-[250px]">{data.description}</div>
        )}
      </div>
    );
  }
  return null;
};

export default PieChartTooltip;
