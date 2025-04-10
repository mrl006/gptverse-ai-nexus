
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Zap, ChevronRight, Lock, Globe, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface AiServiceBoxProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  buttonType?: string;
}

const AiServiceBox: React.FC<AiServiceBoxProps> = ({
  title,
  subtitle,
  description,
  image,
  statusLabels,
  buttonType
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Render service-specific buttons based on the buttonType
  const renderButtons = () => {
    switch (buttonType) {
      case "ai-hub":
        return (
          <Button className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0070f3]/20 text-sm whitespace-nowrap group">
            Try AI Hub
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "language-tutor":
        return (
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20 text-sm whitespace-nowrap group">
            Try in AI Hub
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "ai-persona":
        return (
          <Button className="bg-gradient-to-r from-[#d946ef] to-[#00aeff] hover:opacity-90 text-white font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d946ef]/20 text-sm whitespace-nowrap group">
            Learn More
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "fitness-coach":
        return (
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20 text-sm whitespace-nowrap group">
            Start Training
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        );
      case "receptionist":
        return (
          <Button variant="outline" className="border-[#f43f5e]/30 text-[#f43f5e] hover:bg-[#f43f5e]/10 font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm whitespace-nowrap group">
            Join Waitlist
            <Lock className="ml-1 w-4 h-4" />
          </Button>
        );
      default:
        return null;
    }
  };

  // Get icon based on button type
  const getIcon = () => {
    switch (buttonType) {
      case "ai-hub": return <Zap className="w-6 h-6 text-[#0070f3]" />;
      case "language-tutor": return <Globe className="w-6 h-6 text-[#0ef34b]" />;
      case "ai-persona": return <Star className="w-6 h-6 text-[#d946ef]" />;
      case "fitness-coach": return <Play className="w-6 h-6 text-[#0ef34b]" />;
      default: return <Zap className="w-6 h-6 text-white/70" />;
    }
  };

  return (
    <motion.div 
      className="h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-[#0e1623]/60 rounded-xl overflow-hidden backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg h-full flex flex-col relative group">
        {/* Animated glow effect on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#0070f3]/5 via-transparent to-[#0ef34b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white/10 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white/10 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white/10 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white/10 rounded-br-lg"></div>
        
        {/* Status bar with animated pulse for live status */}
        <div className="flex justify-between items-center px-4 py-2 bg-[#040812]/80 border-b border-white/10">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {statusLabels.map((label, index) => (
              <Badge 
                key={index} 
                className={`${
                  label.text.toLowerCase() === "on live" 
                    ? "bg-[#ff0033]/80 text-white" 
                    : label.color
                } text-xs px-2 py-0.5 whitespace-nowrap`}
              >
                {label.text.toLowerCase() === "on live" && (
                  <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
                )}
                {label.text}
              </Badge>
            ))}
          </div>
          <motion.div 
            className="w-2 h-2 rounded-full bg-[#0ef34b]/80 flex-shrink-0 ml-2"
            animate={{ 
              scale: [1, 1.2, 1], 
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          ></motion.div>
        </div>
        
        {/* Content */}
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center mb-3">
            <motion.div 
              className="w-10 h-10 mr-3 rounded-full bg-gradient-to-br from-[#0e1623]/80 to-[#040812]/80 flex items-center justify-center flex-shrink-0 border border-white/10"
              whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
            >
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className="w-6 h-6 object-cover"
                />
              ) : getIcon()}
            </motion.div>
            <div className="truncate">
              <h3 className="font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
                {title} <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">{subtitle}</span>
              </h3>
            </div>
          </div>
          
          <motion.p 
            className="text-white/70 text-sm mb-4 line-clamp-3"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          <div className="flex mt-auto">
            {renderButtons()}
          </div>
        </div>

        {/* Animated scanline effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10px] animate-[moveVertical_8s_linear_infinite]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AiServiceBox;
