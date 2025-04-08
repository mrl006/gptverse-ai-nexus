
import React from 'react';

const AiServicesBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0ef34b]/5 to-[#00aeff]/5 opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,243,75,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,174,255,0.1),transparent_70%)]"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-30"></div>
    
      {/* Animated pulse points */}
      <div className="absolute top-[20%] left-[10%]">
        <div className="w-1 h-1 bg-[#0ef34b] rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute inset-0 w-2 h-2 bg-[#0ef34b]/50 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
      </div>
      <div className="absolute top-[70%] right-[15%]">
        <div className="w-1 h-1 bg-[#00aeff] rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute inset-0 w-3 h-3 bg-[#00aeff]/30 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.2s'}}></div>
      </div>
      <div className="absolute top-[40%] right-[30%]">
        <div className="w-1 h-1 bg-[#d946ef] rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
        <div className="absolute inset-0 w-2 h-2 bg-[#d946ef]/30 rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '0.7s'}}></div>
      </div>
    
      {/* Enhanced gradient accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
    </div>
  );
};

export default AiServicesBackground;
