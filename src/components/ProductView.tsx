
import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, FileText, HeartPulse, BrainCircuit, Laugh, Rocket, ImageIcon, ArrowUpRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AiModelProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  by: string;
  detailUrl?: string;
  color: string;
  buttonColor: string;
}

// Demo messages for each AI model
const demoMessages = {
  'language-tutor': [
    { role: 'user', content: "How can I improve my English pronunciation?" },
    { role: 'assistant', content: "I can help you improve your English pronunciation! Try these techniques: 1) Listen to native speakers, 2) Record yourself speaking, 3) Practice difficult sounds daily. Would you like to practice some specific sounds?" }
  ],
  'pdf-reader': [
    { role: 'user', content: "Can you summarize the main findings of the report?" },
    { role: 'assistant', content: "Based on the PDF you uploaded, the report indicates a 15% increase in renewable energy adoption across the sector, with solar energy being the fastest growing segment at 22% year over year." }
  ],
  'healty': [
    { role: 'user', content: "What's a good evening routine for better sleep?" },
    { role: 'assistant', content: "Based on your health profile and sleep data, I recommend adjusting your evening routine. Try avoiding screen time 1 hour before bed and consider a 10-minute meditation to improve your sleep quality." }
  ],
  'scriptwriter': [
    { role: 'user', content: "How should I write an opening scene for my screenplay?" },
    { role: 'assistant', content: "For a compelling opening scene, consider starting with a visual that represents the central conflict - perhaps your protagonist facing a symbolic obstacle that foreshadows their journey." }
  ],
  'comedian': [
    { role: 'user', content: "Tell me some science jokes" },
    { role: 'assistant', content: "Why don't scientists trust atoms? Because they make up everything! Speaking of making things up, have you heard about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!" }
  ],
  'alien': [
    { role: 'user', content: "How do you perceive time?" },
    { role: 'assistant', content: "⌬⍙⎎⌇⍜⍾ Earth problem has simple solution. Your species views time as linear, but this limits perception. Consider nested dimensions of possibility where multiple outcomes coexist. ⌬⌿⍙⎒⊡" }
  ],
  'image-generator': []
};

// Demo preview component that shows automated chat interactions
const DemoPreview = ({ modelId, iconBg, iconComponent }: { modelId: string, iconBg: string, iconComponent: React.ReactNode }) => {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(modelId === 'pdf-reader');
  const [showGeneratedImage, setShowGeneratedImage] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  
  // Reset animation on model change
  useEffect(() => {
    setMessages([]);
    setIsTyping(false);
    setShowFileUpload(modelId === 'pdf-reader');
    setShowGeneratedImage(false);
    setCurrentStep(0);
    
    // Start the automated demo
    const timer = setTimeout(() => {
      startDemo();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [modelId]);
  
  const startDemo = () => {
    if (modelId === 'pdf-reader') {
      // For PDF Reader, simulate file upload first
      setTimeout(() => {
        setShowFileUpload(false);
        setMessages([
          { role: 'assistant', content: 'I\'ve analyzed your PDF. What would you like to know about it?' }
        ]);
        
        // Then proceed with Q&A after a delay
        setTimeout(() => {
          if (demoMessages[modelId]?.length) {
            setMessages(prev => [...prev, demoMessages[modelId][0]]);
            setIsTyping(true);
            
            setTimeout(() => {
              setIsTyping(false);
              setMessages(prev => [...prev, demoMessages[modelId][1]]);
            }, 2000);
          }
        }, 3000);
      }, 2000);
    } else if (modelId === 'image-generator') {
      // For Image Generator, simulate prompt entry and image generation
      setTimeout(() => {
        setMessages([{ role: 'user', content: 'Create a futuristic cityscape with flying cars and neon lights' }]);
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setShowGeneratedImage(true);
        }, 3000);
      }, 1000);
    } else {
      // For chat-based models, simulate conversation
      if (demoMessages[modelId]?.length) {
        setTimeout(() => {
          setMessages([demoMessages[modelId][0]]);
          setIsTyping(true);
          
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, demoMessages[modelId][1]]);
          }, 2000);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className={`h-10 w-10 ${iconBg} rounded-full flex items-center justify-center text-white`}>
          {iconComponent}
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">{AiModels.find(m => m.id === modelId)?.name}</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
        {/* PDF Reader File Upload UI */}
        {showFileUpload && modelId === 'pdf-reader' && (
          <div className="flex-grow flex flex-col items-center justify-center bg-[#080d16] h-full rounded-xl border border-dashed border-white/20 p-8">
            <div className="mb-4 p-3 rounded-full bg-[#1e1e2f]">
              <FileText className="h-8 w-8 text-[#00aeff]" />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Uploading PDF...</h4>
            <div className="w-48 h-1 bg-[#121827] rounded-full overflow-hidden mt-2">
              <div className="h-full bg-[#00aeff] rounded-full animate-[progress_2s_ease-in-out]" style={{width: '70%'}}></div>
            </div>
          </div>
        )}
        
        {/* Image Generator Result UI */}
        {modelId === 'image-generator' && showGeneratedImage && (
          <div className="flex-grow flex items-center justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/34d88fb3-36b5-4520-bcc1-f3546283ac9c.png" 
                alt="Generated" 
                className="max-w-full max-h-[300px] rounded-lg border border-white/10 object-cover"
              />
            </div>
          </div>
        )}
        
        {/* Image Generator Loading UI */}
        {modelId === 'image-generator' && !showGeneratedImage && isTyping && (
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border border-white/10 bg-[#1e1e2f] mx-auto mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/30 via-[#8b5cf6]/30 to-[#0ef34b]/30 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 border-4 border-[#d946ef] border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <p className="text-white/80">Generating your image...</p>
            </div>
          </div>
        )}
        
        {/* Chat Messages UI */}
        {(modelId !== 'image-generator' || (!showGeneratedImage && !isTyping)) && (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? `bg-[${AiModels.find(m => m.id === modelId)?.buttonColor}]/20 text-white` 
                    : 'bg-[#1e1e2f] text-white/80'
                }`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-[#1e1e2f] text-white/80">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 bg-white/50 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="h-2 w-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Fixed input field for demo purposes - not interactive */}
      <div className="relative">
        <input
          type="text"
          placeholder={modelId === 'image-generator' 
            ? "Describe the image you want to create..."
            : "Ask a question..."
          }
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white/50 focus:outline-none"
          disabled
        />
        <div 
          className={`absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[${AiModels.find(m => m.id === modelId)?.buttonColor}] text-white`}
        >
          {modelId === 'image-generator' ? <ImageIcon className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </div>
      </div>
    </div>
  );
};

// Updated AI Models array with colors for styling
const AiModels: AiModelProps[] = [
  {
    id: 'language-tutor',
    name: 'Language Tutor',
    icon: <BookOpen className="h-5 w-5" />,
    description: 'This AI specializes in teaching English through interactive lessons and personalized feedback, using advanced NLP to adapt to each learner\'s pace.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/language-tutor',
    color: 'bg-blue-800',
    buttonColor: '#0ef34b'
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader',
    icon: <FileText className="h-5 w-5" />,
    description: 'A sophisticated AI that reads and comprehends multiple PDFs, answering specific questions by extracting and summarizing content.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/pdf-reader',
    color: 'bg-orange-700',
    buttonColor: '#00aeff'
  },
  {
    id: 'healty',
    name: 'Healty',
    icon: <HeartPulse className="h-5 w-5" />,
    description: 'An advanced Health Assistant AI creating personalized wellness plans by analyzing real-time health data to meet your unique goals.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/healty',
    color: 'bg-teal-700',
    buttonColor: '#0ef34b'
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    icon: <BrainCircuit className="h-5 w-5" />,
    description: 'AI-powered scriptwriting assistant that helps you craft compelling narratives, dialogue, and story structures for various media formats.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/scriptwriter',
    color: 'bg-indigo-700',
    buttonColor: '#8b5cf6'
  },
  {
    id: 'comedian',
    name: 'Comedian',
    icon: <Laugh className="h-5 w-5" />,
    description: 'An AI with a sense of humor, generating jokes, comedic stories, and witty responses customized to your preferred style of comedy.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/comedian',
    color: 'bg-yellow-600',
    buttonColor: '#d946ef'
  },
  {
    id: 'alien',
    name: 'Alien',
    icon: <Rocket className="h-5 w-5" />,
    description: 'Communicates in unusual and extraterrestrial ways, offering unique perspectives and creative solutions from beyond human thinking.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/alien',
    color: 'bg-green-700',
    buttonColor: '#00aeff'
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    icon: <ImageIcon className="h-5 w-5" />,
    description: 'Creates stunning, high-quality images from text descriptions using advanced AI image generation techniques and style controls.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/image-generator',
    color: 'bg-purple-700',
    buttonColor: '#d946ef'
  }
];

// Main ProductView component
const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('language-tutor');
  const [showSidebar, setShowSidebar] = useState(true);
  
  const currentModel = AiModels.find(model => model.id === selectedModel) || AiModels[0];

  return (
    <section id="products" className="section-anchor py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040812] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
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
            <div className="glass-card p-6 lg:p-8 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden min-h-full">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6 h-full">
                {/* Left Column - Model Details */}
                <div className="order-2 md:order-1">
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
                
                {/* Right Column - Interactive Preview */}
                <div className="order-1 md:order-2 bg-[#0c1424] p-4 rounded-xl border border-white/10 h-[480px]">
                  <h4 className="text-lg font-medium text-white mb-4">Interactive Demo</h4>
                  <div className="h-[calc(100%-2rem)]">
                    <DemoPreview 
                      modelId={currentModel.id} 
                      iconBg={currentModel.color} 
                      iconComponent={currentModel.icon}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
