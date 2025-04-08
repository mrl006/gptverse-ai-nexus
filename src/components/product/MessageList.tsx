
import React, { useRef, useEffect } from 'react';
import MessageItem from './MessageItem';

interface MessageListProps {
  messages: { role: string; content: string }[];
  isTyping: boolean;
  modelColor: string;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping, modelColor }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Instead of automatically scrolling, we'll only scroll within this component
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }
  }, [messages, isTyping]);
  
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <MessageItem 
          key={index} 
          message={message} 
          modelColor={modelColor}
        />
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
  );
};

export default MessageList;
