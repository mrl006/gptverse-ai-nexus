
import React from 'react';

interface EcosystemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#040812]/60 backdrop-blur-md border border-white/10 rounded-xl relative overflow-hidden group hover:border-[#d946ef]/30 transition-all duration-300 shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-[#d946ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex flex-col items-center text-center gap-3 relative z-10 p-5">
        <div className="p-3 bg-[#06101a]/60 rounded-full border border-white/10">
          {icon}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
          <p className="text-white/70 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
