
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
    // Only scroll within this component
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [messages, isTyping]);
  
  return (
    <div className="space-y-4">
      <AnimatePresence initial={false}>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="max-w-[80%] rounded-lg p-3 bg-[#1e1e2f] text-white/80">
            <div className="flex gap-1">
              <div className="h-2 w-2 bg-white/50 rounded-full animate-pulse"></div>
              <div className="h-2 w-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="h-2 w-2 bg-white/50 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </motion.div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
