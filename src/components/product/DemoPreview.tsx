
import React, { useState, useEffect, useRef } from 'react';
import { AiModels } from '@/data/aiModels';
import { demoMessages, extendedDemoMessages } from '@/data/demoMessages';
import { getIconByName } from '@/utils/iconUtils';
import DemoHeader from './DemoHeader';
import MessageList from './MessageList';
import FileUploadPreview from './FileUploadPreview';
import ImageGeneratorPreview from './ImageGeneratorPreview';
import ChatInput from './ChatInput';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

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
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  
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
    setCurrentMessageIndex(0);
    
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
      // For image generator, we show the user message first
      setMessages([demoMessages['image-generator'][0]]);
      
      // Then show typing indicator and generated image
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setShowGeneratedImage(true);
          setMessages(prev => [...prev, demoMessages['image-generator'][1]]);
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
    <motion.div 
      ref={containerRef}
      className="flex flex-col h-full bg-[#06101a] rounded-xl overflow-hidden border border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
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
    </motion.div>
  );
};

export default DemoPreview;
