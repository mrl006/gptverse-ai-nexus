
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
              {/* Animated connector line */}
              <line
                x1="0"
                y1="0"
                x2={(anchorX - posX) * 1.5}
                y2={(anchorY - posY) * 1.5}
                stroke={entry.color}
                strokeWidth="1"
                strokeDasharray="2,2"
                strokeLinecap="round"
                className="animate-pulse-slow"
                style={{ animation: `pulse-slow ${3 + index * 0.5}s ease-in-out infinite` }}
              />
              
              {/* Small glow dot at connection point */}
              <circle cx="0" cy="0" r="2" fill={entry.color} className="animate-blip">
                <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
            
            {/* Label with glassmorphism */}
            <div 
              className="absolute whitespace-nowrap backdrop-blur-sm bg-black/30 px-3 py-1.5 rounded-lg border border-white/10 animate-fade-in"
              style={{
                top: (anchorY - posY) * 1.5,
                left: (anchorX - posX) * 1.5,
                textAlign: textAlign as any,
                transform: textAlign === 'left' ? 'translateX(10px)' : 'translateX(-110%)',
                boxShadow: `0 0 15px ${entry.color}20`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="text-white font-medium text-sm flex items-center">
                <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
                <span>{entry.name}</span>
              </div>
              <div className="text-white/90 font-mono text-sm">{entry.value}%</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChartConnectors;
