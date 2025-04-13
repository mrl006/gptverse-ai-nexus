
import React, { useState, useEffect, useRef } from 'react';
import { AiModels } from '@/data/aiModels';
import { demoMessages } from '@/data/demoMessages';
import DemoHeader from './DemoHeader';
import MessageList from './MessageList';
import FileUploadPreview from './FileUploadPreview';
import ImageGeneratorPreview from './ImageGeneratorPreview';
import ChatInput from './ChatInput';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const scrollPosition = useRef(0);
  const { isMobile } = useIsMobile();
  
  const currentModel = AiModels.find(m => m.id === modelId);
  
  // Store scroll position before model changes
  useEffect(() => {
    return () => {
      if (window) {
        scrollPosition.current = window.scrollY;
      }
    };
  }, [modelId]);
  
  useEffect(() => {
    // Reset state when model changes
    setMessages([]);
    setInputMessage('');
    setIsTyping(false);
    setShowFileUpload(modelId === 'pdf-reader');
    setShowGeneratedImage(false);
    
    // Restore scroll position
    if (window) {
      window.scrollTo({top: scrollPosition.current});
    }
    
    startDemo();
  }, [modelId]);
  
  const startDemo = () => {
    if (modelId === 'pdf-reader') {
      setTimeout(() => {
        setShowFileUpload(false);
        // Start with first message from demoMessages
        setMessages([demoMessages['pdf-reader'][0]]);
        
        // Show assistant response quickly
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, demoMessages['pdf-reader'][1]]);
          }, 800);
        }, 800);
      }, 1000);
    } else if (modelId === 'image-generator') {
      // For image generator, show a more specific user prompt
      setMessages([{
        role: 'user',
        content: "Generate multiple style variations of a character design for my game"
      }]);
      
      // Then show typing indicator and generated image sequence
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setShowGeneratedImage(true);
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: "I've created 8 different style variations of a character design, ranging from realistic to cartoon, isometric, abstract, and stylized. Each has unique artistic elements that could work for different game aesthetics."
          }]);
        }, 1500);
      }, 800);
    } else if (demoMessages[modelId]?.length) {
      // Start with first message immediately
      setMessages([demoMessages[modelId][0]]);
      
      // Show typing indicator then assistant response
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, demoMessages[modelId][1]]);
        }, 800);
      }, 800);
    }
  };

  // Dummy function for the input (not functional as requested)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No functionality as requested
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={modelId}
        ref={containerRef}
        className="flex flex-col h-full bg-[#06101a] rounded-xl overflow-hidden border border-white/10 relative"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Simplified glassmorphism accent */}
        <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-br from-[#0ef34b]/5 via-transparent to-[#00aeff]/5 pointer-events-none"></div>
        
        <DemoHeader 
          modelId={modelId} 
          iconBg={iconBg} 
          iconComponent={iconComponent} 
        />
        
        <ScrollArea 
          className="flex-grow bg-[#080d16]/70 backdrop-blur-md" 
          style={{ height: isMobile ? "300px" : "400px" }}
        >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoPreview;
