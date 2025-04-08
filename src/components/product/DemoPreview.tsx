
import React, { useState, useEffect, useRef } from 'react';
import { AiModels, demoMessages } from '@/data/aiModels';
import DemoHeader from './DemoHeader';
import MessageList from './MessageList';
import FileUploadPreview from './FileUploadPreview';
import ImageGeneratorPreview from './ImageGeneratorPreview';
import ChatInput from './ChatInput';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

interface DemoPreviewProps {
  modelId: string;
  iconBg: string;
  iconComponent?: React.ReactNode;
}

// Extended demo messages for a more conversational experience
const extendedDemoMessages = {
  'chatbot': [
    { role: 'user', content: 'Can you help me understand quantum computing?' },
    { role: 'assistant', content: 'Absolutely! Quantum computing harnesses quantum mechanics to process information in ways traditional computers cannot. Instead of classical bits (0s and 1s), quantum computers use quantum bits or "qubits" that can exist in multiple states simultaneously.' },
    { role: 'user', content: 'That sounds complex. What practical applications does it have?' },
    { role: 'assistant', content: 'Great question! Quantum computing has promising applications in:\n\n1. Cryptography - breaking and creating new encryption methods\n2. Drug discovery - modeling complex molecular interactions\n3. Optimization problems - solving complex logistics challenges\n4. Material science - designing new materials with specific properties\n\nThese are just a few examples where quantum computing could revolutionize our capabilities.' }
  ],
  'pdf-reader': [
    { role: 'assistant', content: 'I\'ve analyzed your PDF document (Annual Financial Report 2024). What would you like to know about it?' },
    { role: 'user', content: 'Can you summarize the key financial metrics?' },
    { role: 'assistant', content: 'Here are the key financial metrics from the report:\n\n• Revenue: $245.3M (↑18% YoY)\n• Gross Margin: 68.7% (↑2.3% YoY)\n• EBITDA: $78.2M (↑22% YoY)\n• Net Income: $42.1M (↑15% YoY)\n• Free Cash Flow: $56.4M (↑28% YoY)\n• Debt-to-Equity Ratio: 0.38 (↓0.12 YoY)' },
    { role: 'user', content: 'What were the main growth drivers?' },
    { role: 'assistant', content: 'The main growth drivers identified in the report were:\n\n1. Expansion into European markets (contributed ~40% of new revenue growth)\n2. Launch of the premium subscription tier (22% adoption rate among existing customers)\n3. Strategic acquisition of TechSolutions Inc. (added $12.4M to annual revenue)\n4. Increased enterprise client base (32% growth in enterprise segment)\n\nThe report also mentions that R&D investments increased by 15% to support these growth initiatives.' }
  ],
  'code-assistant': [
    { role: 'user', content: 'Can you help me understand React hooks?' },
    { role: 'assistant', content: 'Of course! React hooks are functions that let you "hook into" React state and lifecycle features from function components.\n\nHere are the most commonly used hooks:\n\n• useState: Manages state in function components\n• useEffect: Handles side effects (like data fetching)\n• useContext: Accesses context values\n• useRef: Creates mutable references\n• useReducer: Manages complex state logic\n\nWould you like to see an example of how to use them?' },
    { role: 'user', content: 'Yes, can you show me a useState example?' },
    { role: 'assistant', content: 'Here\'s a simple example of useState:\n\n```jsx\nimport React, { useState } from \'react\';\n\nfunction Counter() {\n  // Declare state variable "count" with initial value 0\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\nIn this example:\n• useState returns a pair: the current state value (count) and a function to update it (setCount)\n• When the button is clicked, setCount updates the state and React re-renders the component' }
  ],
  'data-analyzer': [
    { role: 'user', content: 'I have sales data for the past year. Can you analyze the trends?' },
    { role: 'assistant', content: 'I\'d be happy to analyze your sales data! From the dataset you provided, I can identify several key trends:\n\n1. Seasonal Pattern: Sales peaked in Q4 (Nov-Dec), with a 34% increase over Q3\n2. Product Performance: Product category A showed consistent growth (18% YoY), while category C declined (-7% YoY)\n3. Regional Insights: Western region outperformed others with 22% YoY growth\n4. Customer Segments: New customer acquisition increased by 15%, but retention rate decreased by 3%\n\nWould you like me to elaborate on any specific area?' },
    { role: 'user', content: 'Can you dig deeper into the regional performance?' },
    { role: 'assistant', content: 'Certainly! Here\'s a deeper analysis of regional performance:\n\n• Western Region: 22% YoY growth\n  - Driven by new store openings in Seattle and Portland\n  - Online sales increased 37% after regional marketing campaign\n  - Top-performing product: Premium Subscription (41% of revenue)\n\n• Eastern Region: 14% YoY growth\n  - Strong performance in urban centers, weaker in rural areas\n  - B2B sales outperformed B2C by 2.5x\n  - Customer acquisition cost decreased by 12%\n\n• Southern Region: 8% YoY growth\n  - Slower growth due to increased competition\n  - Highest customer retention rate (87%)\n  - Lowest profit margin (14.3%)\n\n• Northern Region: 5% YoY growth\n  - Affected by temporary store closures in Q2\n  - Highest average transaction value ($156)\n  - Strong recovery in Q4 (18% QoQ growth)' }
  ],
  'writing-assistant': [
    { role: 'user', content: 'I need help writing a professional email to reschedule a meeting.' },
    { role: 'assistant', content: 'Here\'s a professional email template for rescheduling a meeting:\n\nSubject: Request to Reschedule: [Meeting Name] - [Original Date]\n\nDear [Recipient\'s Name],\n\nI hope this email finds you well. I\'m writing regarding our scheduled meeting on [original date and time] about [meeting topic].\n\nUnfortunately, I need to request a rescheduling due to [brief reason - e.g., "an unexpected conflict in my calendar" or "a pressing matter that requires my immediate attention"].\n\nI value our planned discussion and would appreciate if we could reschedule. Below are some alternative times that work for me:\n\n• [Option 1: Day, Date, Time]\n• [Option 2: Day, Date, Time]\n• [Option 3: Day, Date, Time]\n\nPlease let me know which option works best for you, or if you\'d prefer to suggest alternative times.\n\nI apologize for any inconvenience this may cause and appreciate your understanding.\n\nBest regards,\n[Your Name]\n[Your Contact Information]' },
    { role: 'user', content: 'That looks great, but can you make it sound more apologetic?' },
    { role: 'assistant', content: 'Here\'s a more apologetic version:\n\nSubject: Sincere Apologies - Need to Reschedule [Meeting Name] on [Original Date]\n\nDear [Recipient\'s Name],\n\nI hope this email finds you well. I\'m writing with sincere apologies regarding our scheduled meeting on [original date and time] about [meeting topic].\n\nI deeply regret to inform you that I must request a rescheduling due to [brief reason]. I understand this is inconvenient, especially given our planned agenda, and I truly apologize for any disruption this causes to your schedule.\n\nI value our planned discussion immensely and would be grateful if we could find another suitable time. I\'ve listed some alternative options below, but I\'m very flexible and happy to work around your availability:\n\n• [Option 1: Day, Date, Time]\n• [Option 2: Day, Date, Time]\n• [Option 3: Day, Date, Time]\n\nPlease let me know what works best for you. Again, I sincerely apologize for the late change and truly appreciate your understanding and flexibility.\n\nWith apologies and best regards,\n[Your Name]\n[Your Contact Information]' }
  ]
};

const DemoPreview: React.FC<DemoPreviewProps> = ({ modelId, iconBg, iconComponent }) => {
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(modelId === 'pdf-reader');
  const [showGeneratedImage, setShowGeneratedImage] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const currentModel = AiModels.find(m => m.id === modelId);
  
  useEffect(() => {
    // Reset state when model changes
    setMessages([]);
    setInputMessage('');
    setIsTyping(false);
    setShowFileUpload(modelId === 'pdf-reader');
    setShowGeneratedImage(false);
    setCurrentMessageIndex(0);
    
    // Prevent page scroll when starting demo
    const scrollPosition = window.scrollY;
    startDemo();
    // Restore scroll position
    window.scrollTo({top: scrollPosition});
  }, [modelId]);
  
  const startDemo = () => {
    if (modelId === 'pdf-reader') {
      setTimeout(() => {
        setShowFileUpload(false);
        setMessages([extendedDemoMessages['pdf-reader'][0]]);
        
        // Continue conversation
        continueConversation();
      }, 2000);
    } else if (modelId === 'image-generator') {
      // For image generator, we show the preview directly
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setShowGeneratedImage(true);
      }, 3000);
    } else if (extendedDemoMessages[modelId]?.length) {
      // Auto-populate messages for other models
      setTimeout(() => {
        setMessages([extendedDemoMessages[modelId][0]]);
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, extendedDemoMessages[modelId][1]]);
          setCurrentMessageIndex(2);
          
          // Continue conversation
          continueConversation();
        }, 1500);
      }, 800);
    } else if (demoMessages[modelId]?.length) {
      // Fallback to original demo messages if extended not available
      setTimeout(() => {
        setMessages([demoMessages[modelId][0]]);
        setIsTyping(true);
        
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, demoMessages[modelId][1]]);
        }, 1500);
      }, 800);
    }
  };
  
  const continueConversation = () => {
    if (!extendedDemoMessages[modelId]) return;
    
    const messagesForModel = extendedDemoMessages[modelId];
    if (currentMessageIndex >= messagesForModel.length) return;
    
    setTimeout(() => {
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, messagesForModel[currentMessageIndex]]);
        
        if (currentMessageIndex + 1 < messagesForModel.length) {
          setCurrentMessageIndex(currentMessageIndex + 1);
          continueConversation();
        }
      }, 2000);
    }, 1500);
  };

  // Dummy function for the input (not functional as requested)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No functionality as requested
  };

  return (
    <motion.div 
      ref={containerRef}
      className="flex flex-col h-full bg-[#06101a] rounded-xl overflow-hidden border border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DemoHeader 
        modelId={modelId} 
        iconBg={iconBg} 
        iconComponent={iconComponent} 
      />
      
      <ScrollArea className="flex-grow bg-[#080d16]" style={{ height: "400px" }}>
        <div className="p-4">
          {showFileUpload && modelId === 'pdf-reader' && (
            <FileUploadPreview />
          )}
          
          {modelId === 'image-generator' ? (
            <ImageGeneratorPreview 
              showGeneratedImage={showGeneratedImage} 
              isTyping={isTyping} 
            />
          ) : (
            <MessageList 
              messages={messages} 
              isTyping={isTyping}
              modelColor={currentModel?.buttonColor || '#0ef34b'}
            />
          )}
        </div>
      </ScrollArea>
      
      <ChatInput 
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSubmit={handleSubmit}
        modelId={modelId}
        buttonColor={currentModel?.buttonColor || '#0ef34b'}
      />
    </motion.div>
  );
};

export default DemoPreview;
