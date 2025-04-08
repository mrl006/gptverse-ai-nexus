import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

interface MessageItemProps {
  message: { role: string; content: string };
  modelColor: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, modelColor }) => {
  const isUser = message.role === 'user';
  
  const textAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.2
      }
    })
  };
  
  const processContent = (content: string) => {
    if (content.includes('```')) {
      return [{type: 'code', content}];
    }
    
    return content.split('\n').map(text => ({
      type: 'text',
      content: text
    }));
  };
  
  const processedContent = processContent(message.content);
  
  return (
    <motion.div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      {!isUser && (
        <div className="flex-shrink-0 mr-2 mt-1">
          <motion.div 
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ backgroundColor: modelColor }}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Bot className="h-4 w-4 text-white" />
          </motion.div>
        </div>
      )}
      
      <motion.div 
        className={`max-w-[85%] rounded-lg p-3 ${
          isUser 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-[#1e1e2f] text-white/90 shadow-md border border-white/5'
        }`}
        initial={{ scale: 0.97, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {processedContent.map((item, i) => (
          <motion.div
            key={i}
            className={i > 0 ? "mt-2" : ""}
            initial="hidden"
            animate="visible"
            custom={i}
            variants={textAnimation}
          >
            {item.content}
          </motion.div>
        ))}
      </motion.div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-2 mt-1">
          <motion.div 
            className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <User className="h-4 w-4 text-white" />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MessageItem;
