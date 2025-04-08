
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
    
    // Generate buttons based on the buttonType with glassmorphism
    switch (buttonType) {
      case "ai-hub":
        return (
          <Button className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300">
            Try AI HUB
          </Button>
        );
      case "language-tutor":
        return (
          <>
            <Button className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300">
              Try in AI HUB
            </Button>
            <Button variant="outline" className="backdrop-blur-md bg-black/20 text-white border-white/10 hover:bg-white/5 flex items-center gap-2 transition-all duration-300">
              <Play size={16} /> Watch Trailer
            </Button>
          </>
        );
      case "ai-persona":
        return (
          <Button className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300">
            Learn More
          </Button>
        );
      case "fitness-coach":
        return (
          <Button className="backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300">
            Start Training
          </Button>
        );
      case "receptionist":
        return (
          <Button variant="outline" className="backdrop-blur-md bg-black/20 border-white/10 text-white hover:bg-white/5 font-medium px-6 py-2 rounded-lg transition-all duration-300">
            Join Waitlist
          </Button>
        );
      default:
        return null;
    }
  };

  // Simplified icon for the glow effect
  const IconForLabel = () => {
    if (buttonType === "ai-hub") return <Zap className="text-white opacity-10" size={120} />;
    if (buttonType === "language-tutor") return <Globe className="text-white opacity-10" size={120} />;
    if (buttonType === "ai-persona") return <Star className="text-white opacity-10" size={120} />;
    if (buttonType === "fitness-coach") return <Shield className="text-white opacity-10" size={120} />;
    return <Zap className="text-white opacity-10" size={120} />;
  };

  return (
    <div className={`w-full h-full transition-all duration-500 transform ${isActive ? 'scale-105 z-10' : 'scale-95 opacity-80'}`}>
      <Card className="w-full h-full overflow-hidden border-0 bg-transparent">
        <div className="w-full h-full backdrop-blur-xl bg-[#06101a]/30 border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300 shadow-lg relative group">
          {/* Subtle background ambient glow */}
          <div className="absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-50 transition-opacity duration-700">
            <IconForLabel />
          </div>
          
          {/* Reduced scanline effect */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0)_100%)] bg-[length:100%_4px] animate-[pulse-slow_10s_linear_infinite] opacity-10"></div>
          
          <div className="flex flex-col h-full">
            {/* Image container with subtle overlay */}
            <div className="relative overflow-hidden h-48">
              <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/90 via-transparent to-transparent z-10"></div>
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Minimal holographic overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#040812]/5 to-[#040812]/5 mix-blend-overlay"></div>
              
              {/* Status labels with glassmorphism style */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                {statusLabels.map((label, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm font-medium rounded-md backdrop-blur-md bg-black/20 border border-white/10 text-white"
                  >
                    {label.text}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-between">
              {/* Title section with minimal styling */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {title}
                </h2>
                
                <h3 className="text-xl md:text-2xl font-bold text-white/70 mb-4">
                  {subtitle}
                </h3>
                
                {/* Simplified description section */}
                <div className="relative">
                  <div className="absolute -left-2 top-0 w-px h-full bg-white/10"></div>
                  <p className="text-white/60 mb-6 pl-4">
                    {description}
                  </p>
                </div>
              </div>
              
              {/* Action buttons with glassmorphism */}
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
