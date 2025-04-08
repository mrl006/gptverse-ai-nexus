
import React from 'react';
import { ImageIcon, Send } from 'lucide-react';

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  modelId: string;
  buttonColor: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  inputMessage, 
  setInputMessage, 
  handleSubmit, 
  modelId, 
  buttonColor 
}) => {
  // Disabled component for display only
  return (
    <div className="p-4 border-t border-white/10 bg-[#080d16]">
      <div className="relative">
        <input
          type="text"
          value=""
          disabled
          placeholder={modelId === 'image-generator' 
            ? "Describe the image you want to create..."
            : "Ask something..."
          }
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white/50 focus:outline-none focus:border-white/30 transition-colors cursor-not-allowed"
        />
        <div 
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full text-white opacity-50"
          style={{ backgroundColor: buttonColor }}
        >
          {modelId === 'image-generator' ? <ImageIcon className="h-4 w-4" /> : <Send className="h-4 w-4" />}
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
