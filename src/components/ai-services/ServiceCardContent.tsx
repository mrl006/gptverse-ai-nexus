
import React from 'react';
import { motion } from 'framer-motion';
import { renderServiceButtons } from './utils/serviceCardUtils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceCardContentProps {
  title: string;
  subtitle: string;
  description: string;
  isHovered: boolean;
  buttonType?: string;
  actionButtons?: React.ReactNode;
}

const ServiceCardContent: React.FC<ServiceCardContentProps> = ({
  title,
  subtitle,
  description,
  isHovered,
  buttonType,
  actionButtons,
}) => {
  const { isSmallMobile } = useIsMobile();

  return (
    <div className="p-3 md:p-6 flex-grow flex flex-col justify-between">
      {/* Title section with consistent mobile styling */}
      <div>
        <motion.h2 
          className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-1.5 truncate"
          animate={{ 
            opacity: isHovered ? 1 : 0.9,
            y: isHovered ? -2 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h2>
        
        <motion.h3 
          className="text-sm md:text-xl font-bold text-white/70 mb-3 md:mb-4 truncate"
          animate={{ 
            opacity: isHovered ? 1 : 0.7,
            y: isHovered ? -2 : 0 
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {subtitle}
        </motion.h3>
        
        {/* Improved description section with consistent spacing */}
        <div className="relative">
          <div className="absolute -left-2 top-0 w-px h-full bg-white/10"></div>
          <motion.p 
            className="text-xs md:text-sm text-white/60 mb-3 md:mb-6 pl-3 md:pl-4 line-clamp-3 md:line-clamp-4"
            animate={{ 
              opacity: isHovered ? 0.8 : 0.6,
              y: isHovered ? -2 : 0 
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>
      </div>
      
      {/* Improved action buttons with consistent spacing */}
      <motion.div 
        className="flex flex-wrap gap-2 md:gap-4 mt-auto justify-center sm:justify-start"
        animate={{ 
          y: isHovered ? -3 : 0,
          opacity: isHovered ? 1 : 0.9 
        }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        {actionButtons || renderServiceButtons(buttonType, isSmallMobile)}
      </motion.div>
    </div>
  );
};

export default ServiceCardContent;
