
import React from 'react';
import { motion } from 'framer-motion';

const PlatformButtons = () => {
  const platforms = [
    { 
      name: 'WINDOWS', 
      logo: "/lovable-uploads/7ed9aea1-a9a7-441f-9228-d11e9fdffff6.png",
      text: "Get it on",
      url: "#",
    },
    { 
      name: 'VR SIDEQUEST', 
      logo: "/lovable-uploads/8b1192d8-e3e9-4cb7-b6c8-91ad237c82b0.png",
      text: "Get it on",
      url: "#",
    },
    { 
      name: 'WEBGL', 
      logo: "/lovable-uploads/b623b62c-ca2f-42fa-b446-87d2ff1d737a.png",
      text: "Get it on",
      url: "#",
    },
    { 
      name: 'DAPP', 
      logo: "/lovable-uploads/8755fbb3-2819-46c7-a9d9-a8ca55d7696f.png",
      text: "Get it on",
      url: "#",
    },
  ];

  return (
    <div className="flex justify-center w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 w-full justify-center">
        {platforms.map((platform, index) => (
          <motion.a
            href={platform.url}
            key={index}
            className="flex-shrink-0 w-[220px] group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative rounded-xl overflow-hidden backdrop-blur-xl border border-[#0ef34b]/30 h-full bg-gradient-to-br from-[#040812]/90 to-[#051118]/80">
              {/* Pulsing background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 animate-pulse-slow opacity-30"></div>
              
              {/* Top/bottom borders with glow */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/40 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 flex items-center">
                {/* Logo container */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#040812]/80 to-[#051118]/60 rounded-full flex items-center justify-center border border-[#0ef34b]/20 shadow-[0_0_15px_rgba(14,243,75,0.2)] group-hover:shadow-[0_0_20px_rgba(14,243,75,0.4)] transition-all duration-500 mr-4 overflow-hidden p-2.5">
                  <img 
                    src={platform.logo} 
                    alt={platform.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Text content */}
                <div>
                  <div className="text-xs text-[#0ef34b]/70 font-mono mb-1">{platform.text}</div>
                  <div className="font-bold tracking-wider text-white font-mono text-lg">{platform.name}</div>
                </div>
                
                {/* Arrow indicator that appears on hover */}
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#0ef34b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="#0ef34b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              {/* Corner highlights */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default PlatformButtons;
