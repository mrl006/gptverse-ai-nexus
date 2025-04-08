
import React, { useState, useEffect, useRef } from 'react';
import { AiModels, demoMessages } from '@/data/aiModels';
import DemoHeader from './DemoHeader';
import MessageList from './MessageList';
import FileUploadPreview from './FileUploadPreview';
import ImageGeneratorPreview from './ImageGeneratorPreview';
import ChatInput from './ChatInput';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const currentModel = AiModels.find(m => m.id === modelId);
  
  useEffect(() => {
    // Reset state when model changes
    setMessages([]);
    setInputMessage('');
    setIsTyping(false);
    setShowFileUpload(modelId === 'pdf-reader');
    setShowGeneratedImage(false);
    
    // Start demo without scrolling the page
    startDemo();
  }, [modelId]);
  
  const startDemo = () => {
    if (modelId === 'pdf-reader') {
      setTimeout(() => {
        setShowFileUpload(false);
        setMessages([
          { role: 'assistant', content: 'I\'ve analyzed your PDF. What would you like to know about it?' }
        ]);
      }, 2000);
    } else if (modelId === 'image-generator') {
      // For image generator, we show the preview directly
      setTimeout(() => {
        setShowGeneratedImage(true);
      }, 1000);
    } else if (demoMessages[modelId]?.length) {
      // Auto-populate messages for other models
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

  // Dummy function for the input (not functional as requested)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No functionality as requested
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col h-full bg-[#06101a] rounded-xl overflow-hidden border border-white/10"
    >
      <DemoHeader 
        modelId={modelId} 
        iconBg={iconBg} 
        iconComponent={iconComponent} 
      />
      
      <ScrollArea className="flex-grow bg-[#080d16]" style={{ height: "400px" }}>
        <div className="p-4">
          {showFileUpload && modelId === 'pdf-reader' && (
            <FileUploadPreview />
          )}
          
          {modelId === 'image-generator' ? (
            <ImageGeneratorPreview 
              showGeneratedImage={showGeneratedImage} 
              isTyping={isTyping} 
            />
          ) : (
            <MessageList 
              messages={messages} 
              isTyping={isTyping}
              modelColor={currentModel?.buttonColor || '#0ef34b'}
            />
          )}
        </div>
      </ScrollArea>
      
      <ChatInput 
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSubmit={handleSubmit}
        modelId={modelId}
        buttonColor={currentModel?.buttonColor || '#0ef34b'}
      />
    </div>
  );
};

export default DemoPreview;
