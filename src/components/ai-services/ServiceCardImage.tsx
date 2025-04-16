
import React from 'react';
import { motion } from 'framer-motion';
import ServiceStatusLabel from './ServiceStatusLabel';
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceCardImageProps {
  image: string;
  title: string;
  statusLabels?: Array<{text: string, color: string}>;
  isHovered: boolean;
}

const ServiceCardImage: React.FC<ServiceCardImageProps> = ({ 
  image, 
  title, 
  statusLabels = [], 
  isHovered 
}) => {
  const { isSmallMobile } = useIsMobile();
  
  return (
    <div className="relative overflow-hidden h-28 sm:h-32 md:h-48">
      <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/90 via-transparent to-transparent z-10"></div>
      <motion.img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.1 : 1
        }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Status labels with improved mobile positioning */}
      <div className="absolute top-1.5 sm:top-2 md:top-4 left-1.5 sm:left-2 md:left-4 flex flex-wrap gap-1 md:gap-2 z-20">
        {statusLabels && statusLabels.map((label, index) => (
          <ServiceStatusLabel 
            key={index} 
            text={label.text} 
            color={label.color} 
            small={isSmallMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardImage;
