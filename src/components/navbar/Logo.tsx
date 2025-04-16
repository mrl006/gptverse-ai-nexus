
import React from 'react';

export const Logo = () => {
  return (
    <a href="#" className="flex items-center space-x-2 group">
      <div className="w-10 h-10 rounded-full flex items-center justify-center relative overflow-hidden">
        <img 
          src="/lovable-uploads/e322c390-0e26-442f-90b3-bc13622b55e6.png" 
          alt="GPTVerse Logo" 
          className="w-full h-full object-cover"
        />
      </div>
      <span className="text-xl md:text-2xl font-bold text-white font-sans tracking-wider relative">
        GPTVerse
        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#087E8B] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
      </span>
    </a>
  );
};
