
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Zap, Star, Shield, Globe, ChevronRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const { isMobile, isSmallMobile } = useIsMobile();
  const [isHovered, setIsHovered] = useState(false);
  
  // Render service-specific buttons based on the buttonType
  const renderButtons = () => {
    if (actionButtons) return actionButtons;
    
    // Generate buttons based on the buttonType with minimal glassmorphism
    switch (buttonType) {
      case "ai-hub":
        return (
          <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
            Try AI HUB
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "language-tutor":
        return (
          <>
            <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm mb-2 md:mb-0 md:mr-2">
              Try in AI HUB
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            {!isSmallMobile && (
              <Button variant="outline" className="w-full md:w-auto bg-[#040812]/60 text-white border-white/10 hover:bg-[#040812]/80 flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm">
                <Play size={16} /> Watch Trailer
              </Button>
            )}
          </>
        );
      case "ai-persona":
        return (
          <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
            Learn More
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "fitness-coach":
        return (
          <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
            Start Training
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "receptionist":
        return (
          <Button variant="outline" className="w-full md:w-auto bg-[#040812]/60 border-white/10 text-white hover:bg-[#040812]/80 font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
            Join Waitlist
            <Lock className="ml-1 w-4 h-4" />
          </Button>
        );
      default:
        return null;
    }
  };

  // Get icon for the glow effect
  const IconForLabel = () => {
    if (buttonType === "ai-hub") return <Zap className="text-white opacity-5" size={isMobile ? 80 : 120} />;
    if (buttonType === "language-tutor") return <Globe className="text-white opacity-5" size={isMobile ? 80 : 120} />;
    if (buttonType === "ai-persona") return <Star className="text-white opacity-5" size={isMobile ? 80 : 120} />;
    if (buttonType === "fitness-coach") return <Shield className="text-white opacity-5" size={isMobile ? 80 : 120} />;
    return <Zap className="text-white opacity-5" size={isMobile ? 80 : 120} />;
  };

  return (
    <motion.div 
      className={`w-full h-full transition-all duration-500 transform ${isActive ? 'scale-102 z-10' : 'scale-100 opacity-90'}`}
      whileHover={{ 
        scale: isActive ? 1.05 : 1,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="w-full h-full overflow-hidden border-0 bg-transparent">
        <div className="w-full h-full backdrop-blur-xl bg-[#040812]/40 border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg relative group">
          {/* Subtle background ambient glow */}
          <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
            <IconForLabel />
          </div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 md:w-5 md:h-5 border-t-2 border-l-2 border-white/10 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 border-t-2 border-r-2 border-white/10 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 md:w-5 md:h-5 border-b-2 border-l-2 border-white/10 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 md:w-5 md:h-5 border-b-2 border-r-2 border-white/10 rounded-br-lg"></div>
          
          <div className="flex flex-col h-full">
            {/* Image container with subtle overlay */}
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
                  <motion.span 
                    key={index} 
                    className={`px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm font-medium rounded-md backdrop-blur-md ${
                      label.text && label.text.toLowerCase() === "on live" 
                        ? "bg-[#ff0033]/80 text-white" 
                        : "bg-[#040812]/60 border border-white/10 text-white"
                    } whitespace-nowrap flex items-center`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    {label.text && label.text.toLowerCase() === "on live" && (
                      <motion.span 
                        className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full mr-1 md:mr-2"
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          opacity: [0.7, 1, 0.7] 
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      ></motion.span>
                    )}
                    {label.text}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="p-3 md:p-6 flex-grow flex flex-col justify-between">
              {/* Title section with minimal styling */}
              <div>
                <motion.h2 
                  className="text-lg md:text-2xl font-bold text-white mb-0.5 md:mb-1 truncate"
                  animate={{ 
                    opacity: isHovered ? 1 : 0.9,
                    y: isHovered ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {title}
                </motion.h2>
                
                <motion.h3 
                  className="text-base md:text-xl font-bold text-white/70 mb-2 md:mb-4 truncate"
                  animate={{ 
                    opacity: isHovered ? 1 : 0.7,
                    y: isHovered ? -2 : 0 
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                >
                  {subtitle}
                </motion.h3>
                
                {/* Simplified description section */}
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
              
              {/* Action buttons with minimal glassmorphism */}
              <motion.div 
                className="flex flex-wrap gap-2 md:gap-4 mt-auto"
                animate={{ 
                  y: isHovered ? -3 : 0,
                  opacity: isHovered ? 1 : 0.9 
                }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                {renderButtons()}
              </motion.div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AiServiceCard;
