
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AiServiceBoxProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  buttonType?: string;
}

const AiServiceBox: React.FC<AiServiceBoxProps> = ({
  title,
  subtitle,
  description,
  image,
  statusLabels,
  buttonType
}) => {
  // Render service-specific buttons based on the buttonType
  const renderButtons = () => {
    switch (buttonType) {
      case "ai-hub":
        return (
          <Button className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0070f3]/20 text-sm whitespace-nowrap">
            Try AI Hub
          </Button>
        );
      case "language-tutor":
        return (
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20 text-sm whitespace-nowrap">
            Try in AI Hub
          </Button>
        );
      case "ai-persona":
        return (
          <Button className="bg-gradient-to-r from-[#d946ef] to-[#00aeff] hover:opacity-90 text-white font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#d946ef]/20 text-sm whitespace-nowrap">
            Learn More
          </Button>
        );
      case "fitness-coach":
        return (
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0ef34b]/20 text-sm whitespace-nowrap">
            Start Training
          </Button>
        );
      case "receptionist":
        return (
          <Button variant="outline" className="border-[#f43f5e]/30 text-[#f43f5e] hover:bg-[#f43f5e]/10 font-medium px-4 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-1 text-sm whitespace-nowrap">
            Join Waitlist
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#0e1623]/60 rounded-xl overflow-hidden backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 shadow-lg h-full flex flex-col hover:translate-y-[-4px]">
      {/* Status bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#040812]/50 border-b border-white/5">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {statusLabels.map((label, index) => (
            <Badge key={index} className={`${label.color} text-xs px-2 py-0.5 whitespace-nowrap`}>
              {label.text}
            </Badge>
          ))}
        </div>
        <div className="w-2 h-2 rounded-full bg-[#0ef34b]/80 animate-pulse flex-shrink-0 ml-2"></div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 rounded-full bg-gradient-to-br from-[#0ef34b]/20 to-[#00aeff]/20 flex items-center justify-center flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-6 h-6 object-cover rounded-full"
            />
          </div>
          <div className="truncate">
            <h3 className="font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">
              {title} <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">{subtitle}</span>
            </h3>
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        
        <div className="flex">
          {renderButtons()}
        </div>
      </div>
    </div>
  );
};

export default AiServiceBox;
