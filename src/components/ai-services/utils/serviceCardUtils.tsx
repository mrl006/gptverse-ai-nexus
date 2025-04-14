
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Zap, Star, Shield, Globe, ChevronRight, Lock } from 'lucide-react';

// Render service-specific buttons based on the buttonType
export const renderServiceButtons = (
  buttonType?: string, 
  isSmallMobile?: boolean
) => {
  // Generate buttons based on the buttonType with minimal glassmorphism
  switch (buttonType) {
    case "ai-hub":
      return (
        <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
          Try AI HUB
          <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      );
    case "language-tutor":
      return (
        <>
          <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm mb-2 md:mb-0 md:mr-2">
            Try in AI HUB
            <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          {!isSmallMobile && (
            <Button variant="outline" className="w-full md:w-auto bg-[#040812]/60 text-white border-white/10 hover:bg-[#040812]/80 flex items-center gap-2 transition-all duration-300 whitespace-nowrap text-sm">
              <Play size={16} /> Watch Trailer
            </Button>
          )}
        </>
      );
    case "ai-persona":
      return (
        <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
          Learn More
          <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      );
    case "fitness-coach":
      return (
        <Button className="w-full md:w-auto bg-[#040812]/60 backdrop-blur-md border border-white/10 hover:bg-[#040812]/80 text-white font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
          Start Training
          <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      );
    case "receptionist":
      return (
        <Button variant="outline" className="w-full md:w-auto bg-[#040812]/60 border-white/10 text-white hover:bg-[#040812]/80 font-medium px-4 md:px-6 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group text-sm">
          Join Waitlist
          <Lock className="ml-1 w-4 h-4" />
        </Button>
      );
    default:
      return null;
  }
};

// Get icon for the glow effect
export const getServiceIcon = (buttonType?: string, isMobile?: boolean) => {
  if (buttonType === "ai-hub") return <Zap className="text-white opacity-5" size={isMobile ? 80 : 120} />;
  if (buttonType === "language-tutor") return <Globe className="text-white opacity-5" size={isMobile ? 80 : 120} />;
  if (buttonType === "ai-persona") return <Star className="text-white opacity-5" size={isMobile ? 80 : 120} />;
  if (buttonType === "fitness-coach") return <Shield className="text-white opacity-5" size={isMobile ? 80 : 120} />;
  return <Zap className="text-white opacity-5" size={isMobile ? 80 : 120} />;
};
