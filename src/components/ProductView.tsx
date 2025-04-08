
import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, FileText, HeartPulse, BrainCircuit, Laugh, Rocket, ImageIcon, ArrowUpRight, MessageSquare, Send, Upload, Play, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Command, CommandInput } from '@/components/ui/command';

interface AiModelProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  by: string;
  detailUrl?: string;
  previewComponent: React.ReactNode;
}

// Chat messages interface
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isLoading?: boolean;
}

// Create specific model previews
const LanguageTutorPreview = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi, how are you feeling? How can I help you?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    // Simulate AI response
    setIsTyping(true);
    
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I can help you improve your English! Would you like to practice conversation, grammar, or vocabulary?"
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-blue-800 rounded-full flex items-center justify-center text-white">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">Language Tutor</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-[#0ef34b]/20 text-white' : 'bg-[#1e1e2f] text-white/80'}`}>
                {message.content}
              </div>
            </div>
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
        </div>
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask a question about English learning..."
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#0ef34b]/30"
        />
        <button 
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#0ef34b] text-black"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const PDFReaderPreview = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    setIsTyping(true);
    
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Based on the PDF you uploaded, I found this information: The report indicates a 15% increase in renewable energy adoption across the sector, with solar energy being the fastest growing segment at 22% year over year."
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };
  
  const handleUpload = () => {
    // Mock file upload
    setFileUploaded(true);
    setTimeout(() => {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: 'I\'ve analyzed your PDF. What would you like to know about it?'
        }
      ]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-orange-700 rounded-full flex items-center justify-center text-white">
          <FileText className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">PDF Reader</h3>
        </div>
      </div>
      
      {!fileUploaded ? (
        <div className="flex-grow flex flex-col items-center justify-center bg-[#080d16] rounded-xl border border-dashed border-white/20 p-8">
          <div className="mb-4 p-3 rounded-full bg-[#1e1e2f]">
            <FileText className="h-8 w-8 text-[#00aeff]" />
          </div>
          <h4 className="text-lg font-medium text-white mb-2">Upload a PDF</h4>
          <p className="text-white/60 text-sm text-center mb-6">
            Upload your document and ask questions about its content
          </p>
          <Button 
            onClick={handleUpload} 
            className="bg-[#00aeff] hover:bg-[#00aeff]/80 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Upload className="h-4 w-4" /> Upload PDF
          </Button>
        </div>
      ) : (
        <>
          <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
            <div className="flex items-center bg-[#1e1e2f] p-2 rounded-md mb-4">
              <FileText className="h-4 w-4 text-[#00aeff] mr-2" />
              <span className="text-sm text-white/80">RenewableEnergy_Report_2024.pdf</span>
            </div>
            
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-[#00aeff]/20 text-white' : 'bg-[#1e1e2f] text-white/80'}`}>
                    {message.content}
                  </div>
                </div>
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
            </div>
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a question about the PDF content..."
              className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#00aeff]/30"
            />
            <button 
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#00aeff] text-white"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const ImageGeneratorPreview = () => {
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  
  const handleGenerate = () => {
    if (!input.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate image generation
    setTimeout(() => {
      setGeneratedImage('/lovable-uploads/34d88fb3-36b5-4520-bcc1-f3546283ac9c.png');
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-purple-700 rounded-full flex items-center justify-center text-white">
          <ImageIcon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">Image Generator</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 bg-[#080d16] rounded-xl border border-white/5 p-4 flex flex-col">
        {!generatedImage && !isGenerating && (
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="h-10 w-10 text-[#d946ef] mx-auto mb-3" />
              <h4 className="text-lg font-medium text-white mb-2">Generate an image</h4>
              <p className="text-white/60 text-sm max-w-xs mx-auto">
                Enter a detailed description to create a unique image
              </p>
            </div>
          </div>
        )}
        
        {isGenerating && (
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg border border-white/10 bg-[#1e1e2f] mx-auto mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d946ef]/30 via-[#8b5cf6]/30 to-[#0ef34b]/30 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 border-4 border-[#d946ef] border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
              <p className="text-white/80">Generating your image...</p>
            </div>
          </div>
        )}
        
        {generatedImage && !isGenerating && (
          <div className="flex-grow flex items-center justify-center">
            <div className="relative">
              <img 
                src={generatedImage} 
                alt="Generated" 
                className="max-w-full max-h-[300px] rounded-lg border border-white/10 object-cover"
              />
              <div className="absolute -bottom-3 -right-3 bg-[#d946ef] text-white rounded-full h-8 w-8 flex items-center justify-center">
                <Play className="h-4 w-4" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          placeholder="Describe the image you want to create..."
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#d946ef]/30"
        />
        <button 
          onClick={handleGenerate}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#d946ef] text-white"
        >
          <ImageIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ScriptwriterPreview = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi, how are you feeling? How can I help you?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    setIsTyping(true);
    
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'd be happy to help with your script. For a compelling opening scene, consider starting with a visual that represents the central conflict - perhaps your protagonist facing a symbolic obstacle that foreshadows their journey."
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-indigo-700 rounded-full flex items-center justify-center text-white">
          <BrainCircuit className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">Scriptwriter</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-[#8b5cf6]/20 text-white' : 'bg-[#1e1e2f] text-white/80'}`}>
                {message.content}
              </div>
            </div>
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
        </div>
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask for scriptwriting assistance..."
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]/30"
        />
        <button 
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#8b5cf6] text-white"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const HealtyPreview = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi, how are you feeling? How can I help you?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    setIsTyping(true);
    
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Based on your health profile and sleep data, I recommend adjusting your evening routine. Try avoiding screen time 1 hour before bed and consider a 10-minute meditation to improve your sleep quality."
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-teal-700 rounded-full flex items-center justify-center text-white">
          <HeartPulse className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">Healty</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-[#0ef34b]/20 text-white' : 'bg-[#1e1e2f] text-white/80'}`}>
                {message.content}
              </div>
            </div>
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
        </div>
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask for health advice..."
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#0ef34b]/30"
        />
        <button 
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#0ef34b] text-white"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const AlienPreview = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi, how are you feeling? How can I help you?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    setIsTyping(true);
    
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "⌬⍙⎎⌇⍜⍾ Earth problem has simple solution. Your species views time as linear, but this limits perception. Consider nested dimensions of possibility where multiple outcomes coexist. ⌬⌿⍙⎒⊡"
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-green-700 rounded-full flex items-center justify-center text-white">
          <Rocket className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">Alien</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-[#00aeff]/20 text-white' : 'bg-[#1e1e2f] text-white/80'}`}>
                {message.content}
              </div>
            </div>
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
        </div>
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask the alien a question..."
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#00aeff]/30"
        />
        <button 
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#00aeff] text-white"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ComedianPreview = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hi, how are you feeling? How can I help you?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInput('');
    
    setIsTyping(true);
    
    setTimeout(() => {
      const responseMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Why don't scientists trust atoms? Because they make up everything! Speaking of making things up, have you heard about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!"
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-10 w-10 bg-yellow-600 rounded-full flex items-center justify-center text-white">
          <Laugh className="h-5 w-5" />
        </div>
        <div>
          <div className="text-sm text-white/50">@gptverse</div>
          <h3 className="text-lg font-bold text-white">Comedian</h3>
        </div>
      </div>
      
      <div className="flex-grow overflow-auto mb-4 p-4 bg-[#080d16] rounded-xl border border-white/5">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-lg p-3 ${message.role === 'user' ? 'bg-[#d946ef]/20 text-white' : 'bg-[#1e1e2f] text-white/80'}`}>
                {message.content}
              </div>
            </div>
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
        </div>
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask for a joke or funny story..."
          className="w-full p-3 pl-4 pr-12 bg-[#0c1424] border border-white/10 rounded-full text-white focus:outline-none focus:ring-1 focus:ring-[#d946ef]/30"
        />
        <button 
          onClick={handleSendMessage}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center rounded-full bg-[#d946ef] text-white"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

// Updated AI Models array with preview components
const AiModels: AiModelProps[] = [
  {
    id: 'language-tutor',
    name: 'Language Tutor',
    icon: <BookOpen className="h-5 w-5" />,
    description: 'This AI specializes in teaching English through interactive lessons and personalized feedback, using advanced NLP to adapt to each learner\'s pace.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/language-tutor',
    previewComponent: <LanguageTutorPreview />
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader',
    icon: <FileText className="h-5 w-5" />,
    description: 'A sophisticated AI that reads and comprehends multiple PDFs, answering specific questions by extracting and summarizing content.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/pdf-reader',
    previewComponent: <PDFReaderPreview />
  },
  {
    id: 'healty',
    name: 'Healty',
    icon: <HeartPulse className="h-5 w-5" />,
    description: 'An advanced Health Assistant AI creating personalized wellness plans by analyzing real-time health data to meet your unique goals.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/healty',
    previewComponent: <HealtyPreview />
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    icon: <BrainCircuit className="h-5 w-5" />,
    description: 'AI-powered scriptwriting assistant that helps you craft compelling narratives, dialogue, and story structures for various media formats.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/scriptwriter',
    previewComponent: <ScriptwriterPreview />
  },
  {
    id: 'comedian',
    name: 'Comedian',
    icon: <Laugh className="h-5 w-5" />,
    description: 'An AI with a sense of humor, generating jokes, comedic stories, and witty responses customized to your preferred style of comedy.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/comedian',
    previewComponent: <ComedianPreview />
  },
  {
    id: 'alien',
    name: 'Alien',
    icon: <Rocket className="h-5 w-5" />,
    description: 'Communicates in unusual and extraterrestrial ways, offering unique perspectives and creative solutions from beyond human thinking.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/alien',
    previewComponent: <AlienPreview />
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    icon: <ImageIcon className="h-5 w-5" />,
    description: 'Creates stunning, high-quality images from text descriptions using advanced AI image generation techniques and style controls.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/image-generator',
    previewComponent: <ImageGeneratorPreview />
  }
];

const ProductView = () => {
  const [selectedModel, setSelectedModel] = useState<string>('language-tutor');
  const [showSidebar, setShowSidebar] = useState(true);
  
  const currentModel = AiModels.find(model => model.id === selectedModel) || AiModels[0];

  return (
    <section id="products" className="section-anchor py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#040812] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Main content layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px,1fr] gap-6">
          {/* Mobile Header & Toggle */}
          <div className="lg:hidden mb-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
              AI MODELS
            </h2>
            <Button 
              variant="outline" 
              onClick={() => setShowSidebar(!showSidebar)}
              className="w-full border-[#0ef34b]/20 text-[#0ef34b] hover:bg-[#0ef34b]/10"
            >
              {showSidebar ? 'Hide Models List' : 'Show Models List'}
            </Button>
          </div>
          
          {/* Sidebar Navigation */}
          <div className={`${showSidebar ? 'block' : 'hidden lg:block'} lg:border-r lg:border-white/10 pr-4`}>
            <div className="hidden lg:block mb-6">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b]">
                AI MODELS
              </h2>
            </div>
            
            <div className="space-y-2">
              {AiModels.map((model) => (
                <button 
                  key={model.id}
                  onClick={() => setSelectedModel(model.id)}
                  className={`w-full text-left p-3 rounded-lg flex items-center gap-3 transition-all ${
                    selectedModel === model.id 
                      ? 'bg-[#1e1e2f] border-l-2 border-[#0ef34b]' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`flex-shrink-0 p-2 rounded-md ${
                    selectedModel === model.id 
                      ? 'bg-[#0ef34b]/20 text-[#0ef34b]' 
                      : 'bg-gray-800/50 text-gray-400'
                  }`}>
                    {model.icon}
                  </div>
                  <span className={selectedModel === model.id ? 'text-white' : 'text-gray-400'}>
                    {model.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="min-h-[600px]">
            <div className="glass-card p-6 lg:p-8 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden min-h-full">
              <div className="grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6 h-full">
                {/* Left Column - Model Details */}
                <div className="order-2 md:order-1 space-y-6">
                  {/* Model Logo/Icon */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full bg-[#262b7e] flex items-center justify-center text-white">
                          {currentModel.icon}
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm text-white/50">{currentModel.by}</div>
                        <h3 className="text-2xl font-bold text-white">{currentModel.name}</h3>
                      </div>
                    </div>
                    
                    <Button className="hidden sm:flex rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
                      Chat with {currentModel.name} <ArrowRight size={16} />
                    </Button>
                  </div>
                  
                  {/* Model Description */}
                  <div>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {currentModel.description}
                    </p>
                  </div>
                  
                  {/* Quick Action Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#1e1e2f]/50 p-6 rounded-xl border border-white/5 transition-all hover:border-[#0ef34b]/20 hover:bg-[#1e1e2f]/80">
                      <div className="flex flex-col h-full">
                        <div className="flex gap-3 items-center mb-3">
                          <MessageSquare className="h-5 w-5 text-[#0ef34b]" />
                          <span className="text-white/80 font-medium">Start Chat</span>
                        </div>
                        <p className="text-white/50 text-sm mb-4">Begin a conversation with this AI model</p>
                        <Button className="mt-auto rounded-lg border border-[#0ef34b]/20 bg-transparent text-[#0ef34b] hover:bg-[#0ef34b]/10">
                          Start <ArrowUpRight size={14} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-[#1e1e2f]/50 p-6 rounded-xl border border-white/5 transition-all hover:border-[#d946ef]/20 hover:bg-[#1e1e2f]/80">
                      <div className="flex flex-col h-full">
                        <div className="flex gap-3 items-center mb-3">
                          <BookOpen className="h-5 w-5 text-[#d946ef]" />
                          <span className="text-white/80 font-medium">Documentation</span>
                        </div>
                        <p className="text-white/50 text-sm mb-4">Review capabilities and prompt examples</p>
                        <Button className="mt-auto rounded-lg border border-[#d946ef]/20 bg-transparent text-[#d946ef] hover:bg-[#d946ef]/10">
                          View <ArrowUpRight size={14} />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-[#1e1e2f]/50 p-6 rounded-xl border border-white/5 transition-all hover:border-[#00aeff]/20 hover:bg-[#1e1e2f]/80">
                      <div className="flex flex-col h-full">
                        <div className="flex gap-3 items-center mb-3">
                          <FileText className="h-5 w-5 text-[#00aeff]" />
                          <span className="text-white/80 font-medium">API Access</span>
                        </div>
                        <p className="text-white/50 text-sm mb-4">Integrate this AI into your applications</p>
                        <Button className="mt-auto rounded-lg border border-[#00aeff]/20 bg-transparent text-[#00aeff] hover:bg-[#00aeff]/10">
                          Get API <ArrowUpRight size={14} />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Action Button */}
                  <div className="mt-6 sm:hidden">
                    <Button className="w-full rounded-full bg-[#0ef34b] hover:brightness-110 text-black font-medium gap-2">
                      Chat with {currentModel.name} <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
                
                {/* Right Column - Interactive Preview */}
                <div className="order-1 md:order-2 bg-[#0c1424] p-4 rounded-xl border border-white/10 h-[480px]">
                  <h4 className="text-lg font-medium text-white mb-4">Interactive Demo</h4>
                  <div className="h-[calc(100%-2rem)]">
                    {currentModel.previewComponent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;

