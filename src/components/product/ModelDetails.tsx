
import React from 'react';
import { ArrowRight, ArrowUpRight, MessageSquare, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AiModelProps } from '@/data/aiModels';

interface ModelDetailsProps {
  currentModel: AiModelProps;
}

const ModelDetails: React.FC<ModelDetailsProps> = ({ currentModel }) => {
  return (
    <div>
      {/* Model Logo/Icon */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full flex items-center justify-center bg-white">
            <div className={`h-10 w-10 rounded-full ${currentModel.color} flex items-center justify-center text-white`}>
              {currentModel.icon}
            </div>
          </div>
          
          <div>
            <div className="text-sm text-white/50">{currentModel.by}</div>
            <h3 className="text-2xl font-bold text-white">{currentModel.name}</h3>
          </div>
        </div>
        
        <Button className="hidden sm:flex rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
          Chat with {currentModel.name} <ArrowRight size={16} />
        </Button>
      </div>
      
      {/* Model Description */}
      <div className="mb-6">
        <p className="text-white/80 text-lg leading-relaxed">
          {currentModel.description}
        </p>
      </div>
      
      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#1e1e2f]/50 p-6 rounded-xl border border-white/5 transition-all hover:border-[#0ef34b]/20 hover:bg-[#1e1e2f]/80">
          <div className="flex flex-col h-full">
            <div className="flex gap-3 items-center mb-3">
              <MessageSquare className="h-5 w-5 text-[#0ef34b]" />
              <span className="text-white/80 font-medium">Start Chat</span>
            </div>
            <p className="text-white/50 text-sm mb-4">Begin a conversation with this AI model</p>
            <Button className="mt-auto rounded-lg border border-[#0ef34b]/20 bg-transparent text-[#0ef34b] hover:bg-[#0ef34b]/10">
              Start <ArrowUpRight size={14} />
            </Button>
          </div>
        </div>
        
        <div className="bg-[#1e1e2f]/50 p-6 rounded-xl border border-white/5 transition-all hover:border-[#d946ef]/20 hover:bg-[#1e1e2f]/80">
          <div className="flex flex-col h-full">
            <div className="flex gap-3 items-center mb-3">
              <BookOpen className="h-5 w-5 text-[#d946ef]" />
              <span className="text-white/80 font-medium">Documentation</span>
            </div>
            <p className="text-white/50 text-sm mb-4">Review capabilities and prompt examples</p>
            <Button className="mt-auto rounded-lg border border-[#d946ef]/20 bg-transparent text-[#d946ef] hover:bg-[#d946ef]/10">
              View <ArrowUpRight size={14} />
            </Button>
          </div>
        </div>
        
        <div className="bg-[#1e1e2f]/50 p-6 rounded-xl border border-white/5 transition-all hover:border-[#00aeff]/20 hover:bg-[#1e1e2f]/80">
          <div className="flex flex-col h-full">
            <div className="flex gap-3 items-center mb-3">
              <FileText className="h-5 w-5 text-[#00aeff]" />
              <span className="text-white/80 font-medium">API Access</span>
            </div>
            <p className="text-white/50 text-sm mb-4">Integrate this AI into your applications</p>
            <Button className="mt-auto rounded-lg border border-[#00aeff]/20 bg-transparent text-[#00aeff] hover:bg-[#00aeff]/10">
              Get API <ArrowUpRight size={14} />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Action Button */}
      <div className="mt-6 sm:hidden">
        <Button className="w-full rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
          Chat with {currentModel.name} <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ModelDetails;
