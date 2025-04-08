
import React from 'react';
import { TokenDistributionItem } from './TokenDistributionData';

interface ChartConnectorsProps {
  topDistributions: TokenDistributionItem[];
  chartWidth: number;
}

const ChartConnectors: React.FC<ChartConnectorsProps> = ({ topDistributions, chartWidth }) => {
  return (
    <div className="hidden md:block">
      {topDistributions.map((entry, index) => {
        // Position the labels around the chart
        let posX, posY, anchorX, anchorY, textAlign;
        const angle = (index / topDistributions.length) * Math.PI * 2;
        const radius = chartWidth * 0.4; // Adjust based on your chart size
        
        posX = 50 + Math.cos(angle) * 42;
        posY = 50 + Math.sin(angle) * 42;
        
        anchorX = 50 + Math.cos(angle) * 75;
        anchorY = 50 + Math.sin(angle) * 75;
        
        textAlign = anchorX > 50 ? 'left' : 'right';
        
        return (
          <div key={`label-${index}`} className="absolute pointer-events-none" style={{
            top: `${posY}%`,
            left: `${posX}%`,
            transform: 'translate(-50%, -50%)',
          }}>
            <svg width="150" height="80" style={{
              position: 'absolute',
              top: 0,
              left: 0,
              transform: 'translate(-50%, -50%)',
              overflow: 'visible'
            }}>
              <line
                x1="0"
                y1="0"
                x2={(anchorX - posX) * 1.5}
                y2={(anchorY - posY) * 1.5}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
            </svg>
            <div className="absolute whitespace-nowrap" style={{
              top: (anchorY - posY) * 1.5,
              left: (anchorX - posX) * 1.5,
              textAlign: textAlign as any,
              transform: textAlign === 'left' ? 'translateX(10px)' : 'translateX(-110%)',
            }}>
              <div className="text-white font-medium text-sm">{entry.name}</div>
              <div className="text-white/70 font-mono text-sm">{entry.value}%</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartConnectors;
