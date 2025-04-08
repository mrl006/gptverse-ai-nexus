
import React, { useState } from 'react';
import { ArrowRight, BookOpen, FileText, HeartPulse, BrainCircuit, Laugh, Rocket, ImageIcon, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AiModelProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  by: string;
  detailUrl?: string;
}

const AiModels: AiModelProps[] = [
  {
    id: 'language-tutor',
    name: 'Language Tutor',
    icon: <BookOpen className="h-5 w-5" />,
    description: 'This AI specializes in teaching English through interactive lessons and personalized feedback, using advanced NLP to adapt to each learner\'s pace.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/language-tutor'
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader',
    icon: <FileText className="h-5 w-5" />,
    description: 'A sophisticated AI that reads and comprehends multiple PDFs, answering specific questions by extracting and summarizing content.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/pdf-reader'
  },
  {
    id: 'healty',
    name: 'Healty',
    icon: <HeartPulse className="h-5 w-5" />,
    description: 'An advanced Health Assistant AI creating personalized wellness plans by analyzing real-time health data to meet your unique goals.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/healty'
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    icon: <BrainCircuit className="h-5 w-5" />,
    description: 'AI-powered scriptwriting assistant that helps you craft compelling narratives, dialogue, and story structures for various media formats.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/scriptwriter'
  },
  {
    id: 'comedian',
    name: 'Comedian',
    icon: <Laugh className="h-5 w-5" />,
    description: 'An AI with a sense of humor, generating jokes, comedic stories, and witty responses customized to your preferred style of comedy.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/comedian'
  },
  {
    id: 'alien',
    name: 'Alien',
    icon: <Rocket className="h-5 w-5" />,
    description: 'Communicates in unusual and extraterrestrial ways, offering unique perspectives and creative solutions from beyond human thinking.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/alien'
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    icon: <ImageIcon className="h-5 w-5" />,
    description: 'Creates stunning, high-quality images from text descriptions using advanced AI image generation techniques and style controls.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/image-generator'
  }
];

const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('language-tutor');
  const [showSidebar, setShowSidebar] = useState(true);
  
  const currentModel = AiModels.find(model => model.id === selectedModel) || AiModels[0];

  return (
    <section id="products" className="section-anchor py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040812] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Main content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6">
          {/* Mobile Header & Toggle */}
          <div className="lg:hidden mb-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
              AI MODELS
            </h2>
            <Button 
              variant="outline" 
              onClick={() => setShowSidebar(!showSidebar)}
              className="w-full border-[#0ef34b]/20 text-[#0ef34b] hover:bg-[#0ef34b]/10"
            >
              {showSidebar ? 'Hide Models List' : 'Show Models List'}
            </Button>
          </div>
          
          {/* Sidebar Navigation */}
          <div className={`${showSidebar ? 'block' : 'hidden lg:block'} lg:border-r lg:border-white/10 pr-4`}>
            <div className="hidden lg:block mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
                AI MODELS
              </h2>
            </div>
            
            <div className="space-y-2">
              {AiModels.map((model) => (
                <button 
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                    selectedModel === model.id 
                      ? 'bg-[#1e1e2f] border-l-2 border-[#0ef34b]' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`flex-shrink-0 p-2 rounded-md ${
                    selectedModel === model.id 
                      ? 'bg-[#0ef34b]/20 text-[#0ef34b]' 
                      : 'bg-gray-800/50 text-gray-400'
                  }`}>
                    {model.icon}
                  </div>
                  <span className={selectedModel === model.id ? 'text-white' : 'text-gray-400'}>
                    {model.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="min-h-[600px]">
            <div className="glass-card p-6 lg:p-10 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden min-h-full">
              {/* Model Logo/Icon */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 bg-white rounded-full flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-[#262b7e] flex items-center justify-center text-white">
                      {currentModel.icon}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-white/50">{currentModel.by}</div>
                    <h3 className="text-3xl font-bold text-white">{currentModel.name}</h3>
                  </div>
                </div>
                
                <Button className="hidden sm:flex rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
                  Chat with {currentModel.name} <ArrowRight size={16} />
                </Button>
              </div>
              
              {/* Model Description */}
              <div className="mb-10">
                <p className="text-white/80 text-lg leading-relaxed">
                  {currentModel.description}
                </p>
              </div>
              
              {/* Quick Action Area */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
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
              
              {/* Featured Use Case */}
              <div className="bg-[#0c1424] rounded-xl p-6 border border-white/5">
                <h4 className="text-lg font-medium text-white mb-4">Chat Interface</h4>
                <div className="bg-[#080d16] rounded-xl p-4 border border-white/5 flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                    <img src="/lovable-uploads/939e5c07-6b47-4f15-a272-e60eef74ee1f.png" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="bg-[#1e1e2f] rounded-lg p-3 text-white/80">
                      Chat with {currentModel.name} →
                    </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
