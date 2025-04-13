
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
    <Card className="glass-card overflow-hidden border-white/10 bg-transparent hover:border-[#00aeff]/30 transition-all duration-300">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#06101a]/60 rounded-lg border border-white/10">
            {icon}
          </div>
          
          <div>
            <h4 className="font-semibold text-white">{title}</h4>
            <p className="text-white/70 text-sm">{description}</p>
          </div>
          
          <div className="ml-auto">
            <ChevronRight className="w-5 h-5 text-[#00aeff]/50" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
