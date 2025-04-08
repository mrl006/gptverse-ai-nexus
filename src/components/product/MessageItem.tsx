
import React from 'react';

interface MessageItemProps {
  message: { role: string; content: string };
  modelColor: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, modelColor }) => {
  return (
    <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-lg p-3 ${
        message.role === 'user' 
          ? `bg-[${modelColor}]/20 text-white` 
          : 'bg-[#1e1e2f] text-white/80'
      }`}>
        {message.content}
      </div>
    </div>
  );
};

export default MessageItem;
