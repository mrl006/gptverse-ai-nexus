
import React from 'react';

interface EcosystemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#040812]/30 backdrop-blur-xl border border-[#0ef34b]/15 rounded-xl relative overflow-hidden group hover:border-[#0ef34b]/30 transition-all duration-500 shadow-[0_0_20px_rgba(4,8,18,0.5)]">
      {/* Enhanced glassmorphism with better glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Top highlight edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
      
      {/* Left highlight edge */}
      <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-[#0ef34b]/30 via-transparent to-transparent"></div>
      
      <div className="flex flex-col items-center text-center gap-3 relative z-10 p-5">
        <div className="p-3 bg-[#040812]/40 rounded-full border border-[#0ef34b]/20 group-hover:border-[#0ef34b]/40 transition-all duration-500 shadow-[0_0_15px_rgba(14,243,75,0.15)]">
          <div className="text-[#0ef34b] relative">
            {icon}
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-full blur-sm bg-[#0ef34b]/20 -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#0ef34b]/90 transition-colors duration-300">{title}</h4>
          <p className="text-white/70 text-sm group-hover:text-white/80 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
