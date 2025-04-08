
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Zap, Star, Shield, Globe } from 'lucide-react';

interface AiServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  actionButtons?: React.ReactNode;
  buttonType?: string;
  isActive?: boolean;
}

const AiServiceCard: React.FC<AiServiceCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  statusLabels, 
  flipped = false,
  actionButtons,
  buttonType,
  isActive = false
}) => {
  
  // Render service-specific buttons based on the buttonType
  const renderButtons = () => {
    if (actionButtons) return actionButtons;
    
    // Generate buttons based on the buttonType
    switch (buttonType) {
      case "ai-hub":
        return (
          <Button className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0070f3]/20">
            Try AI HUB
          </Button>
        );
      case "language-tutor":
        return (
          <>
            <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20">
              Try in AI HUB
            </Button>
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-white/30">
              <Play size={16} /> Watch Trailer
            </Button>
          </>
        );
      case "ai-persona":
        return (
          <Button className="bg-gradient-to-r from-[#d946ef] to-[#00aeff] hover:opacity-90 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d946ef]/20">
            Learn More
          </Button>
        );
      case "fitness-coach":
        return (
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20">
            Start Training
          </Button>
        );
      case "receptionist":
        return (
          <Button variant="outline" className="border-[#f43f5e]/30 text-[#f43f5e] hover:bg-[#f43f5e]/10 font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">
            Join Waitlist
          </Button>
        );
      default:
        return null;
    }
  };

  // Icon for the glow effect
  const IconForLabel = () => {
    if (buttonType === "ai-hub") return <Zap className="text-[#0070f3] opacity-30" size={120} />;
    if (buttonType === "language-tutor") return <Globe className="text-[#0ef34b] opacity-30" size={120} />;
    if (buttonType === "ai-persona") return <Star className="text-[#d946ef] opacity-30" size={120} />;
    if (buttonType === "fitness-coach") return <Shield className="text-[#0ef34b] opacity-30" size={120} />;
    return <Zap className="text-[#00aeff] opacity-30" size={120} />;
  };

  return (
    <div className={`w-full h-full transition-all duration-500 transform ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}>
      <Card className="w-full h-full overflow-hidden border-0 bg-transparent">
        <div className={`w-full h-full bg-[#0e1623]/60 rounded-xl overflow-hidden backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg relative group`}>
          {/* Background ambient glow */}
          <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <IconForLabel />
          </div>
          
          {/* Alien scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(14,243,75,0)_0%,rgba(14,243,75,0.03)_50%,rgba(14,243,75,0)_100%)] bg-[length:100%_4px] animate-[pulse-slow_10s_linear_infinite] opacity-30"></div>
          
          <div className={`flex flex-col h-full`}>
            {/* Image container with overlay */}
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/90 via-transparent to-transparent z-10"></div>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0ef34b]/5 to-[#00aeff]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Status labels with futuristic style */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                {statusLabels.map((label, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 text-sm font-medium rounded-md backdrop-blur-md ${label.color} transition-all duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(14,243,75,0.3)]`}
                  >
                    {label.text}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-between">
              {/* Title section with enhanced styling */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-[#0ef34b] transition-colors duration-300">
                  {title}
                </h2>
                
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent mb-4">
                  {subtitle}
                </h3>
                
                {/* Futuristic description section */}
                <div className="relative">
                  <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#0ef34b]/30 to-transparent"></div>
                  <p className="text-white/80 mb-6 pl-4 relative">
                    {description}
                    <span className="absolute -bottom-2 left-0 w-20 h-px bg-gradient-to-r from-[#0ef34b]/20 to-transparent"></span>
                  </p>
                </div>
              </div>
              
              {/* Action buttons with enhanced animation */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {renderButtons()}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AiServiceCard;
