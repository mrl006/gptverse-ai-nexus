
import React from 'react';
import { motion } from 'framer-motion';
import ServiceStatusLabel from './ServiceStatusLabel';

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
  return (
    <div className="relative overflow-hidden h-32 md:h-48">
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
      
      {/* Status labels with subtle glassmorphism style */}
      <div className="absolute top-2 md:top-4 left-2 md:left-4 flex flex-wrap gap-1 md:gap-2 z-20">
        {statusLabels && statusLabels.map((label, index) => (
          <ServiceStatusLabel key={index} text={label.text} color={label.color} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCardImage;
