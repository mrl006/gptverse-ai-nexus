
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Zap, Star, Shield, Globe, ChevronRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

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
  statusLabels, 
  flipped = false,
  actionButtons,
  buttonType,
  isActive = false
}) => {
  
  const [isHovered, setIsHovered] = useState(false);
  
  // Render service-specific buttons based on the buttonType
  const renderButtons = () => {
    if (actionButtons) return actionButtons;
    
    // Generate buttons based on the buttonType with minimal glassmorphism
    switch (buttonType) {
      case "ai-hub":
        return (
          <Button className="bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group">
            Try AI HUB
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "language-tutor":
        return (
          <>
            <Button className="bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group">
              Try in AI HUB
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="bg-[#040812]/60 text-white border-white/10 hover:bg-[#040812]/80 flex items-center gap-2 transition-all duration-300 whitespace-nowrap">
              <Play size={16} /> Watch Trailer
            </Button>
          </>
        );
      case "ai-persona":
        return (
          <Button className="bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group">
            Learn More
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "fitness-coach":
        return (
          <Button className="bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group">
            Start Training
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "receptionist":
        return (
          <Button variant="outline" className="bg-[#040812]/60 border-white/10 text-white hover:bg-[#040812]/80 font-medium px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group">
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
    if (buttonType === "ai-hub") return <Zap className="text-white opacity-5" size={120} />;
    if (buttonType === "language-tutor") return <Globe className="text-white opacity-5" size={120} />;
    if (buttonType === "ai-persona") return <Star className="text-white opacity-5" size={120} />;
    if (buttonType === "fitness-coach") return <Shield className="text-white opacity-5" size={120} />;
    return <Zap className="text-white opacity-5" size={120} />;
  };

  return (
    <motion.div 
      className={`w-full h-full transition-all duration-500 transform ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}
      whileHover={{ 
        scale: isActive ? 1.08 : 1,
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
          
          {/* Animated scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0)_100%)] bg-[length:100%_4px] animate-[moveVertical_10s_linear_infinite] opacity-20"></div>
          
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/10 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/10 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white/10 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/10 rounded-br-lg"></div>
          
          <div className="flex flex-col h-full">
            {/* Image container with subtle overlay */}
            <div className="relative overflow-hidden h-48">
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
              
              {/* Minimal holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/5 to-[#040812]/5 mix-blend-overlay"></div>
              
              {/* Status labels with subtle glassmorphism style */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                {statusLabels.map((label, index) => (
                  <motion.span 
                    key={index} 
                    className={`px-3 py-1 text-sm font-medium rounded-md backdrop-blur-md ${
                      label.text.toLowerCase() === "on live" 
                        ? "bg-[#ff0033]/80 text-white" 
                        : "bg-[#040812]/60 border border-white/10 text-white"
                    } whitespace-nowrap flex items-center`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  >
                    {label.text.toLowerCase() === "on live" && (
                      <motion.span 
                        className="w-2 h-2 bg-white rounded-full mr-2"
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
            
            <div className="p-6 flex-grow flex flex-col justify-between">
              {/* Title section with minimal styling */}
              <div>
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-white mb-1 truncate"
                  animate={{ 
                    opacity: isHovered ? 1 : 0.9,
                    y: isHovered ? -2 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {title}
                </motion.h2>
                
                <motion.h3 
                  className="text-xl md:text-2xl font-bold text-white/70 mb-4 truncate"
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
                    className="text-white/60 mb-6 pl-4 line-clamp-4"
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
                className="flex flex-wrap gap-4 mt-auto"
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
