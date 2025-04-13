
import React from 'react';
import { Card } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Skeleton } from "@/components/ui/skeleton";

interface PartnerCardProps {
  partner: {
    name: string;
    logo: string;
  };
  imagesLoaded: boolean;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partner, imagesLoaded }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="group cursor-pointer">
          <Card
            className="relative h-32 backdrop-blur-xl bg-[#06101a]/40 border border-[#0ef34b]/10 rounded-xl overflow-hidden
                     hover:border-[#0ef34b]/30 transition-all duration-500 flex items-center justify-center
                     shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(14,243,75,0.15)]"
          >
            <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#0ef34b]/0 via-[#0ef34b]/20 to-[#00aeff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {!imagesLoaded ? (
              <Skeleton className="h-16 w-24 bg-gray-700/30" />
            ) : (
              <div className="flex items-center justify-center p-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-16 max-w-full brightness-100 invert opacity-90 group-hover:opacity-100 transition-all duration-300"
                  style={{ 
                    filter: "brightness(0) invert(1)",
                    objectFit: "contain" 
                  }}
                />
              </div>
            )}
            
            <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#0ef34b]/50 group-hover:bg-[#0ef34b] transition-colors duration-300" />
          </Card>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto p-2 backdrop-blur-xl bg-[#06101a]/90 border border-[#0ef34b]/20 text-white">
        {partner.name}
      </HoverCardContent>
    </HoverCard>
  );
};

export default PartnerCard;
