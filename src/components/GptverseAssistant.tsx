
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Sparkles, Bot, Mic } from 'lucide-react';

const GptverseAssistant = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: string, content: string}[]>([
    { role: 'assistant', content: 'How can I help you with AI integration today? Ask me anything about GPTVerse!' }
  ]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;
    
    // Add user message to chat
    setChatHistory(prev => [...prev, { role: 'user', content: message }]);
    
    // Simulate AI response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: 'I\'m the GPTVerse Assistant, designed to help you navigate our AI ecosystem. Would you like to learn more about our features, token utilities, or integration capabilities?'
      }]);
    }, 1000);
    
    setMessage('');
  };

  return (
    <div className="glass-card p-4 rounded-2xl backdrop-blur-xl relative overflow-hidden transition-all shadow-lg shadow-gptv-neon-blue/20 border-2 border-white/5 h-[420px] flex flex-col">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gptv-blue via-gptv-teal to-gptv-magenta"></div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gptv-neon-blue/30 flex items-center justify-center text-white">
            <Bot size={20} />
          </div>
          <div>
            <span className="font-medium flex items-center">
              GPTVerse Assistant <Sparkles size={16} className="ml-2 text-gptv-neon-blue" />
            </span>
            <span className="text-xs text-white/60">AI-powered support</span>
          </div>
        </div>
        <div className="h-8 w-8 rounded-full bg-gptv-neon-violet/20 flex items-center justify-center cursor-pointer hover:bg-gptv-neon-violet/30 transition-colors">
          <span className="text-white">⋮</span>
        </div>
      </div>
      
      <div className="flex-grow overflow-y-auto mb-4 pr-2 custom-scrollbar">
        {chatHistory.map((chat, index) => (
          <div key={index} className={`mb-3 ${chat.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-3 rounded-lg max-w-[80%] ${
              chat.role === 'user' 
                ? 'bg-gptv-neon-blue/20 text-white rounded-tr-none' 
                : 'bg-gptv-deep-navy/70 text-white/90 rounded-tl-none'
            }`}>
              {chat.content}
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-gptv-deep-navy/50 rounded-xl p-2 flex items-center border border-white/5">
        <input 
          type="text" 
          placeholder="Ask GPTVerse Assistant..." 
          className="flex-grow bg-transparent border-none outline-none text-white px-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <div className="flex">
          <button className="h-9 w-9 rounded-full flex items-center justify-center text-white/70 hover:text-gptv-neon-blue transition-colors">
            <Mic size={18} />
          </button>
          <button 
            className="h-9 w-9 rounded-full bg-gradient-to-r from-gptv-neon-blue to-gptv-teal flex items-center justify-center text-white"
            onClick={handleSendMessage}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="outline" className="text-xs border-gptv-neon-blue/40 text-white hover:bg-gptv-neon-blue/20">
          AI Features
        </Button>
        <Button variant="outline" className="text-xs border-gptv-neon-blue/40 text-white hover:bg-gptv-neon-blue/20">
          Tokenomics
        </Button>
        <Button variant="outline" className="text-xs border-gptv-neon-blue/40 text-white hover:bg-gptv-neon-blue/20">
          dApp Integrations
        </Button>
        <Button variant="outline" className="text-xs border-gptv-neon-blue/40 text-white hover:bg-gptv-neon-blue/20">
          GPTVerse Chain
        </Button>
      </div>
    </div>
  );
};

export default GptverseAssistant;
