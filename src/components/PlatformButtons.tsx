
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PlatformButtons = () => {
  const isMobile = useIsMobile();
  
  const platforms = [
    { 
      name: 'WINDOWS', 
      logo: "/lovable-uploads/6eca13b2-a069-4441-bf8c-22a4e9a8fe86.png",
      text: "Get it on",
    },
    { 
      name: 'VR SIDEQUEST', 
      logo: "/lovable-uploads/45ae9a90-7bdf-4333-8369-846d93de1cf0.png",
      text: "Get it on",
    },
    { 
      name: 'WEBGL', 
      logo: "/lovable-uploads/4dbe8711-87c1-4255-9585-24d3145300d6.png",
      text: "Get it on",
    },
    { 
      name: 'AI HUB', 
      logo: "/lovable-uploads/053c9a26-917a-46cd-a510-68db71cf90ab.png",
      text: "Get it on",
    },
  ];

  return (
    <div className={`flex ${isMobile ? 'grid grid-cols-2' : 'overflow-x-auto scrollbar-none'} py-2 mb-6 w-full max-w-6xl mx-auto px-4 gap-4`}>
      {platforms.map((platform, index) => (
        <motion.button
          key={index}
          className={`px-4 py-3 transition-all duration-500
                    flex items-center ${isMobile ? 'justify-between' : 'justify-center'} gap-3 
                    ${isMobile ? 'w-full' : 'min-w-[180px] flex-1'}
                    relative overflow-hidden group mb-3 h-auto
                    bg-[#040812]/20 backdrop-blur-xl border border-[#0ef34b]/15 rounded-lg hover:border-[#0ef34b]/30 shadow-[0_0_15px_rgba(4,8,18,0.5)]`}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {/* Top highlight edge */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
          
          {/* Animated glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Inner scanline effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[10px] animate-[moveVertical_8s_linear_infinite]"></div>
          </div>
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#040812]/40 rounded-full flex items-center justify-center 
                          border border-[#0ef34b]/20 group-hover:border-[#0ef34b]/40
                          transition-all duration-500 overflow-hidden p-1">
              <img 
                src={platform.logo} 
                alt={platform.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <span className="text-white font-mono">
              <div className="text-xs text-[#0ef34b]/60 group-hover:text-[#0ef34b]/80 transition-colors duration-300">{platform.text}</div>
              <div className="text-sm font-bold tracking-wider group-hover:text-[#0ef34b] transition-colors duration-300">{platform.name}</div>
            </span>
          </div>
          
          {isMobile && (
            <div className="relative z-10 pr-2">
              <div className="w-6 h-6 rounded-full border border-[#0ef34b]/30 flex items-center justify-center group-hover:bg-[#0ef34b]/10 transition-all duration-300">
                <ArrowRight size={12} className="text-[#0ef34b] group-hover:translate-x-0.5 transition-all duration-300" />
              </div>
            </div>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default PlatformButtons;
