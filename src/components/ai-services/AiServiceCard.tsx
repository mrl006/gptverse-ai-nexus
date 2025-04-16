
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { getServiceIcon } from './utils/serviceCardUtils';
import ServiceCardImage from './ServiceCardImage';
import ServiceCardContent from './ServiceCardContent';

interface AiServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  actionButtons?: React.ReactNode;
  buttonType?: string;
  isActive?: boolean;
}

const AiServiceCard: React.FC<AiServiceCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  statusLabels = [], 
  flipped = false,
  actionButtons,
  buttonType,
  isActive = false
}) => {
  const { isMobile } = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className={`w-full h-full transition-all duration-500 transform ${isActive ? 'scale-102 z-10' : 'scale-100 opacity-90'}`}
      whileHover={{ 
        scale: isMobile ? 1.02 : (isActive ? 1.05 : 1),
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="w-full h-full overflow-hidden border-0 bg-transparent">
        <div className="w-full h-full backdrop-blur-xl bg-[#040812]/40 border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg relative group">
          {/* Subtle background ambient glow */}
          <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
            {getServiceIcon(buttonType, isMobile)}
          </div>
          
          {/* Decorative corner accents with better mobile visibility */}
          <div className="absolute top-0 left-0 w-3 h-3 md:w-5 md:h-5 border-t border-l border-white/20 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-3 h-3 md:w-5 md:h-5 border-t border-r border-white/20 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 md:w-5 md:h-5 border-b border-l border-white/20 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 md:w-5 md:h-5 border-b border-r border-white/20 rounded-br-lg"></div>
          
          {/* Improved card layout */}
          <div className="flex flex-col h-full">
            {/* Image container with improved mobile dimensions */}
            <ServiceCardImage 
              image={image}
              title={title}
              statusLabels={statusLabels}
              isHovered={isHovered}
            />
            
            {/* Content section */}
            <ServiceCardContent
              title={title}
              subtitle={subtitle}
              description={description}
              isHovered={isHovered}
              buttonType={buttonType}
              actionButtons={actionButtons}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AiServiceCard;
