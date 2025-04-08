
import React, { useState, useEffect, useRef } from 'react';
import { AiModels, demoMessages, extendedDemoMessages } from '@/data/aiModels';
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
        setMessages([extendedDemoMessages['pdf-reader'][0]]);
        
        // Continue conversation faster
        setTimeout(() => continueConversation(), 900); // Faster response
      }, 1000); // Faster initial load
    } else if (modelId === 'image-generator') {
      // For image generator, we show the preview directly
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setShowGeneratedImage(true);
      }, 1500); // Faster image generation
    } else if (extendedDemoMessages[modelId]?.length) {
      // Start with first message immediately
      setMessages([extendedDemoMessages[modelId][0]]);
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, extendedDemoMessages[modelId][1]]);
        setCurrentMessageIndex(2);
        
        // Continue conversation faster
        setTimeout(() => continueConversation(), 800); // Faster response
      }, 900); // Faster typing simulation
    } else if (extendedDemoMessages['chatbot']?.length && !['pdf-reader', 'image-generator'].includes(modelId)) {
      // Fallback to chatbot extended messages if specific ones not available
      setMessages([extendedDemoMessages['chatbot'][0]]);
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, extendedDemoMessages['chatbot'][1]]);
        setCurrentMessageIndex(2);
        
        // Continue conversation faster
        setTimeout(() => continueConversation(), 800); // Faster response
      }, 900); // Faster typing simulation
    } else if (demoMessages[modelId]?.length) {
      // Last fallback to original demo messages
      setMessages([demoMessages[modelId][0]]);
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, demoMessages[modelId][1]]);
      }, 900); // Faster typing simulation
    }
  };
  
  const continueConversation = () => {
    const messagesForModel = extendedDemoMessages[modelId] || extendedDemoMessages['chatbot'];
    if (!messagesForModel || currentMessageIndex >= messagesForModel.length) return;
    
    setIsTyping(true);
    
    // Faster typing simulation
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, messagesForModel[currentMessageIndex]]);
      
      if (currentMessageIndex + 1 < messagesForModel.length) {
        setCurrentMessageIndex(currentMessageIndex + 1);
        // Continue conversation faster
        setTimeout(() => continueConversation(), 1000); // Faster next message
      }
    }, 800); // Faster typing simulation
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
      transition={{ duration: 0.3 }} // Faster animation
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
