
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="overflow-hidden border-[#0ef34b]/15 bg-[#040812]/30 backdrop-blur-xl hover:border-[#0ef34b]/30 transition-all duration-500 shadow-[0_0_20px_rgba(4,8,18,0.5)] group">
      {/* Enhanced top light effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
      
      {/* Animated hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardContent className="p-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#040812]/40 rounded-lg border border-[#0ef34b]/20 group-hover:border-[#0ef34b]/40 transition-all duration-500 shadow-[0_0_15px_rgba(14,243,75,0.15)]">
            <div className="text-[#0ef34b]">
              {icon}
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-lg blur-sm bg-[#0ef34b]/10 -z-10 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white group-hover:text-[#0ef34b]/90 transition-colors duration-300">{title}</h4>
            <p className="text-white/70 text-sm group-hover:text-white/80 transition-colors duration-300">{description}</p>
          </div>
          
          <div className="ml-auto">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#040812]/40 border border-[#0ef34b]/10 group-hover:border-[#0ef34b]/30 transition-all duration-500">
              <ChevronRight className="w-4 h-4 text-[#0ef34b]/70 group-hover:text-[#0ef34b] transition-colors duration-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
