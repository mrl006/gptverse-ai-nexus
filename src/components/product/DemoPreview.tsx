
import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, ImageIcon } from 'lucide-react';
import { AiModels, demoMessages } from '@/data/aiModels';

interface DemoPreviewProps {
  modelId: string;
  iconBg: string;
  iconComponent: React.ReactNode;
}

const DemoPreview: React.FC<DemoPreviewProps> = ({ modelId, iconBg, iconComponent }) => {
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

export default DemoPreview;
