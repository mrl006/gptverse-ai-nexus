
import React from 'react';
import { Cpu } from 'lucide-react';

const AiServicesHeader: React.FC = () => {
  return (
    <div className="text-center mb-12 relative">
      {/* Simplified alien tech decoration */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(14,243,75,0.05)_0%,rgba(14,243,75,0)_70%)]"></div>
      
      <div className="flex flex-col items-center">
        {/* Main title with minimalist styling */}
        <div className="flex items-center gap-3 mb-5 justify-center">
          <Cpu size={28} className="text-[#0ef34b]" />
          <h2 className="text-4xl md:text-5xl font-bold text-[#0ef34b]">
            AI SERVICES
          </h2>
        </div>
        
        {/* Minimal powered by banner with subtle line dividers */}
        <div className="flex items-center gap-5 mb-6">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
          <p className="text-[#0ef34b]/60 text-sm font-mono uppercase tracking-wider">
            POWERED BY GPTVERSE
          </p>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#0ef34b]/20 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default AiServicesHeader;
