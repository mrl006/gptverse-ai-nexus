
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
    <div className="flex flex-wrap md:flex-nowrap justify-between gap-6 mb-12 w-full max-w-6xl mx-auto px-4">
      {platforms.map((platform, index) => (
        <motion.a
          href={platform.url}
          key={index}
          className="group relative w-full md:w-1/4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#06101a]/80 to-[#071420]/60 backdrop-blur-xl border border-[#0ef34b]/30 h-full">
            {/* Glow effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[#0ef34b]/10 via-[#00aeff]/5 to-[#0ef34b]/10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
            
            {/* Button inner glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-[#0ef34b]/5 rounded-lg"></div>
            
            {/* Content */}
            <div className="relative z-10 p-5 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#040812]/80 rounded-full flex items-center justify-center border border-[#0ef34b]/20 shadow-[0_0_15px_rgba(14,243,75,0.15)] group-hover:shadow-[0_0_20px_rgba(14,243,75,0.3)] transition-all duration-500 mb-3 overflow-hidden p-3">
                <img 
                  src={platform.logo} 
                  alt={platform.name}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-center">
                <div className="text-xs text-[#0ef34b]/70 font-mono mb-1">{platform.text}</div>
                <div className="font-bold tracking-wider text-white font-mono">{platform.name}</div>
              </div>
              
              {/* Interactive button effect */}
              <motion.div 
                className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#0ef34b] to-transparent mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            {/* Hover state corner highlights */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0ef34b]/0 group-hover:border-[#0ef34b]/70 transition-all duration-300"></div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default PlatformButtons;
