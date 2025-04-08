
import React, { useState, useEffect, useRef } from 'react';
import { FileText, ImageIcon, Send } from 'lucide-react';
import { AiModels, demoMessages, getIconByName } from '@/data/aiModels';
import { Button } from '@/components/ui/button';

interface DemoPreviewProps {
  modelId: string;
  iconBg: string;
  iconComponent?: React.ReactNode;
}

const DemoPreview: React.FC<DemoPreviewProps> = ({ modelId, iconBg, iconComponent }) => {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(modelId === 'pdf-reader');
  const [showGeneratedImage, setShowGeneratedImage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const currentModel = AiModels.find(m => m.id === modelId);
  const modelIcon = currentModel ? getIconByName(currentModel.iconName) : iconComponent;
  
  useEffect(() => {
    setMessages([]);
    setInputMessage('');
    setIsTyping(false);
    setShowFileUpload(modelId === 'pdf-reader');
    setShowGeneratedImage(false);
    
    const timer = setTimeout(() => {
      startDemo();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [modelId]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const startDemo = () => {
    if (modelId === 'pdf-reader') {
      setTimeout(() => {
        setShowFileUpload(false);
        setMessages([
          { role: 'assistant', content: 'I\'ve analyzed your PDF. What would you like to know about it?' }
        ]);
      }, 2000);
    } else if (modelId === 'image-generator') {
      // For image generator, we don't auto-populate
      return;
    } else if (demoMessages[modelId]?.length) {
      // Auto-populate first message for other models
      setTimeout(() => {
        setMessages([demoMessages[modelId][0]]);
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, demoMessages[modelId][1]]);
        }, 2000);
      }, 1000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message
    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      
      if (modelId === 'image-generator') {
        setShowGeneratedImage(true);
      } else {
        // Find existing response or use a default
        const modelResponses = demoMessages[modelId] || [];
        const aiResponse = modelResponses.find(msg => msg.role === 'assistant')?.content || 
          "I'm happy to help! Is there anything specific you'd like to know?";
        
        setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
      }
    }, 2000);
    
    // Focus input after sending
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const getButtonColor = () => {
    const buttonColor = currentModel?.buttonColor || '#0ef34b';
    return {
      backgroundColor: buttonColor
    };
  };

  return (
    <div className="flex flex-col h-full bg-[#06101a] rounded-xl overflow-hidden border border-white/10">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 ${iconBg} rounded-full flex items-center justify-center text-white`}>
            {modelIcon}
          </div>
          <div>
            <div className="text-sm text-white/50">@gptverse</div>
            <h3 className="text-lg font-bold text-white">{currentModel?.name}</h3>
          </div>
        </div>
        
        <Button 
          className="rounded-full bg-[#00aeff] hover:bg-[#00aeff]/90 text-black font-medium px-4 py-2 text-sm flex items-center gap-2"
        >
          Chat with {currentModel?.name} <Send className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="flex-grow overflow-auto p-4 bg-[#080d16]">
        {showFileUpload && modelId === 'pdf-reader' && (
          <div className="flex-grow flex flex-col items-center justify-center h-full rounded-xl border border-dashed border-white/20 p-8">
            <div className="mb-4 p-3 rounded-full bg-[#1e1e2f]">
              <FileText className="h-8 w-8 text-[#00aeff]" />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Uploading PDF...</h4>
            <div className="w-48 h-1 bg-[#121827] rounded-full overflow-hidden mt-2">
              <div className="h-full bg-[#00aeff] rounded-full animate-[progress_2s_ease-in-out]" style={{width: '70%'}}></div>
            </div>
          </div>
        )}
        
        {modelId === 'image-generator' && showGeneratedImage && (
          <div className="flex-grow flex items-center justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/aa4883fb-56f2-46d8-95f2-c7e2d19ba69d.png" 
                alt="Generated" 
                className="max-w-full max-h-[300px] rounded-lg border border-white/10 object-cover"
              />
            </div>
          </div>
        )}
        
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
        
        {(modelId !== 'image-generator' || (!showGeneratedImage && !isTyping)) && (
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === 'user' 
                    ? `bg-[${currentModel?.buttonColor || '#0ef34b'}]/20 text-white` 
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
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder={modelId === 'image-generator' 
              ? "Describe the image you want to create..."
              : "Ask a question..."
            }
            className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:border-white/30 transition-colors"
          />
          <button 
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full text-white"
            style={getButtonColor()}
            disabled={!inputMessage.trim()}
          >
            {modelId === 'image-generator' ? <ImageIcon className="h-4 w-4" /> : <Send className="h-4 w-4" />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoPreview;
