
import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';
import { motion, AnimatePresence } from 'framer-motion';

interface MessageListProps {
  messages: { role: string; content: string }[];
  isTyping: boolean;
  modelColor: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping, modelColor }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Smooth scroll within the component's container
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [messages, isTyping]);
  
  return (
    <div className="space-y-3">
      <AnimatePresence initial={false}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <MessageItem 
              message={message}
              modelColor={modelColor}
            />
          </motion.div>
        ))}
      </AnimatePresence>
      
      {isTyping && (
        <motion.div 
          className="flex justify-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-2 mt-1">
              <div 
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: modelColor }}
              >
                <motion.div 
                  animate={{ scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M12 4V20" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.div>
              </div>
            </div>
            <div className="max-w-[85%] rounded-lg p-3 bg-[#1e1e2f] text-white/80">
              <div className="flex gap-1.5">
                <motion.div 
                  className="h-2 w-2 bg-white/60 rounded-full"
                  animate={{ scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div 
                  className="h-2 w-2 bg-white/60 rounded-full"
                  animate={{ scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.div 
                  className="h-2 w-2 bg-white/60 rounded-full"
                  animate={{ scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
