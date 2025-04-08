
import React from 'react';
import PieChartVisualization from './PieChartVisualization';

const TokenomicsPieChart = () => {
  return (
    <div className="w-full">
      <div className="neo-blur p-8 rounded-2xl border border-white/10 shadow-[0_10px_50px_rgba(139,92,246,0.1)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:shadow-[0_10px_50px_rgba(139,92,246,0.15)]">
        <div className="flex justify-center">
          {/* Pie chart image */}
          <div className="relative flex items-center justify-center w-full max-w-4xl mx-auto">
            <PieChartVisualization />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsPieChart;
