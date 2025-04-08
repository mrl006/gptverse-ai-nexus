
import React, { useRef, useEffect } from 'react';
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
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={modelId === 'image-generator' 
            ? "Describe the image you want to create..."
            : "Ask a question..."
          }
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:border-white/30 transition-colors"
        />
        <button 
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full text-white"
          style={{ backgroundColor: buttonColor }}
          disabled={!inputMessage.trim()}
        >
          {modelId === 'image-generator' ? <ImageIcon className="h-4 w-4" /> : <Send className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
