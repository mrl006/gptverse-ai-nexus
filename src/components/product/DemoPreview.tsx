
import React, { useState, useEffect, useRef } from 'react';
import { AiModels, demoMessages } from '@/data/aiModels';
import DemoHeader from './DemoHeader';
import MessageList from './MessageList';
import FileUploadPreview from './FileUploadPreview';
import ImageGeneratorPreview from './ImageGeneratorPreview';
import ChatInput from './ChatInput';

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
  const inputRef = useRef<HTMLInputElement>(null);
  
  const currentModel = AiModels.find(m => m.id === modelId);
  
  useEffect(() => {
    // Reset state when model changes
    setMessages([]);
    setInputMessage('');
    setIsTyping(false);
    setShowFileUpload(modelId === 'pdf-reader');
    setShowGeneratedImage(false);
    
    // Prevent scrolling to model when changing models
    if (containerRef.current) {
      const currentScrollPosition = window.scrollY;
      
      // Delay to allow for state updates
      setTimeout(() => {
        window.scrollTo(0, currentScrollPosition);
        startDemo();
      }, 100);
    } else {
      startDemo();
    }
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
      
      <div className="flex-grow overflow-auto p-4 bg-[#080d16]" style={{ minHeight: "400px" }}>
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
