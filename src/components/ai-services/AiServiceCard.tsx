
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface AiServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  actionButtons?: React.ReactNode;
}

const AiServiceCard: React.FC<AiServiceCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  statusLabels, 
  flipped = false,
  actionButtons
}) => {
  return (
    <div className="w-full mb-12">
      <Card className="w-full overflow-hidden border-0 bg-transparent">
        <div className="w-full bg-[#0e1623]/60 rounded-xl overflow-hidden backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg">
          <div className={`flex flex-col ${flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6`}>
            {/* Image container with simpler overlay */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/60 via-transparent to-transparent z-10"></div>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
              />
            </div>
            
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center relative z-10">
              {/* Status labels with simpler style */}
              <div className="flex flex-wrap gap-2 mb-4">
                {statusLabels.map((label, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 text-sm font-medium rounded-md ${label.color} transition-all duration-200`}
                  >
                    {label.text}
                  </span>
                ))}
              </div>
              
              {/* Simplified title styling */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                {title}
              </h2>
              
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent mb-6">
                {subtitle}
              </h3>
              
              {/* Simpler description style */}
              <div className="relative">
                <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#0ef34b]/30 to-transparent"></div>
                <p className="text-white/80 mb-8 text-lg pl-4">
                  {description}
                </p>
              </div>
              
              {/* Action buttons with reduced animation */}
              {actionButtons && (
                <div className="flex flex-wrap gap-4">
                  {actionButtons}
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AiServiceCard;
