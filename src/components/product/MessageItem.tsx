
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface MessageItemProps {
  message: { role: string; content: string };
  modelColor: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, modelColor }) => {
  const isUser = message.role === 'user';
  
  return (
    <motion.div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {!isUser && (
        <div className="flex-shrink-0 mr-2 mt-1">
          <div 
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: modelColor }}
          >
            <Bot className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
      
      <div className={`max-w-[80%] rounded-lg p-3 ${
        isUser 
          ? 'bg-blue-600 text-white shadow-lg' 
          : 'bg-[#1e1e2f] text-white/90 shadow-md border border-white/5'
      }`}>
        {message.content.split('\n').map((text, i) => (
          <p key={i} className={i > 0 ? "mt-2" : ""}>{text}</p>
        ))}
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-2 mt-1">
          <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MessageItem;
