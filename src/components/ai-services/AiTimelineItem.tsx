
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, SquareCode, Sparkles } from 'lucide-react';

interface AiTimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  statusLabels: Array<{text: string, color: string}>;
  progress?: 'shipped' | 'in-beta' | 'in-progress' | 'coming-soon';
  version?: string;
  isLast?: boolean;
}

const AiTimelineItem: React.FC<AiTimelineItemProps> = ({
  title,
  subtitle,
  description,
  statusLabels,
  progress,
  version,
  isLast = false
}) => {
  // Get icon based on the title/subtitle
  const getIcon = () => {
    if (title.includes('3D') || subtitle.includes('3D')) {
      return <SquareCode className="h-6 w-6 text-[#00aeff]" />;
    } else if (title.includes('Text') || subtitle.includes('Website')) {
      return <Code className="h-6 w-6 text-[#0ef34b]" />;
    } else if (title.includes('Animation') || subtitle.includes('Animation')) {
      return <Sparkles className="h-6 w-6 text-[#f0db4f]" />;
    }
    return <Code className="h-6 w-6 text-[#0ef34b]" />;
  };

  // Get status badge
  const getStatusBadge = () => {
    switch (progress) {
      case 'shipped':
        return (
          <Badge className="bg-[#0ef34b]/20 text-[#0ef34b] border-0">
            Shipped
          </Badge>
        );
      case 'in-beta':
        return (
          <Badge className="bg-[#00aeff]/20 text-[#00aeff] border-0">
            In Beta
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge className="bg-[#f0db4f]/20 text-[#f0db4f] border-0">
            In progress
          </Badge>
        );
      case 'coming-soon':
        return (
          <Badge className="bg-[#f43f5e]/20 text-[#f43f5e] border-0">
            Coming Soon
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`timeline-item relative ${isLast ? 'mb-0' : 'mb-16'}`}>
      <div className="ml-6 md:ml-8">
        <div className="p-4 md:p-6 rounded-xl bg-[#0A1525]/80 backdrop-blur-sm border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-x-1">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              {getStatusBadge()}
              {version && (
                <Badge className="bg-[#1E293B] text-white border-0">
                  {version}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center mb-2">
              <div className="mr-3 w-10 h-10 rounded-full bg-[#0A1525] flex items-center justify-center border border-white/10">
                {getIcon()}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {title} <span className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] bg-clip-text text-transparent">{subtitle}</span>
                </h3>
              </div>
            </div>
            
            <p className="text-white/70 ml-0 md:ml-13 mb-0">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTimelineItem;
