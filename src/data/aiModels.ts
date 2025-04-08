
import React from 'react';
import { ArrowRight, BookOpen, FileText, HeartPulse, BrainCircuit, Laugh, Rocket, ImageIcon, ArrowUpRight, MessageSquare } from 'lucide-react';

export interface AiModelProps {
  id: string;
  name: string;
  iconName: string;
  description: string;
  by: string;
  detailUrl?: string;
  color: string;
  buttonColor: string;
}

// Demo messages for each AI model
export const demoMessages: Record<string, Array<{role: string, content: string}>> = {
  'language-tutor': [
    { role: 'user', content: "How can I improve my English pronunciation?" },
    { role: 'assistant', content: "I can help you improve your English pronunciation! Try these techniques: 1) Listen to native speakers, 2) Record yourself speaking, 3) Practice difficult sounds daily. Would you like to practice some specific sounds?" }
  ],
  'pdf-reader': [
    { role: 'user', content: "Can you summarize the main findings of the report?" },
    { role: 'assistant', content: "Based on the PDF you uploaded, the report indicates a 15% increase in renewable energy adoption across the sector, with solar energy being the fastest growing segment at 22% year over year." }
  ],
  'healty': [
    { role: 'user', content: "What's a good evening routine for better sleep?" },
    { role: 'assistant', content: "Based on your health profile and sleep data, I recommend adjusting your evening routine. Try avoiding screen time 1 hour before bed and consider a 10-minute meditation to improve your sleep quality." }
  ],
  'scriptwriter': [
    { role: 'user', content: "How should I write an opening scene for my screenplay?" },
    { role: 'assistant', content: "For a compelling opening scene, consider starting with a visual that represents the central conflict - perhaps your protagonist facing a symbolic obstacle that foreshadows their journey." }
  ],
  'comedian': [
    { role: 'user', content: "Tell me some science jokes" },
    { role: 'assistant', content: "Why don't scientists trust atoms? Because they make up everything! Speaking of making things up, have you heard about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!" }
  ],
  'alien': [
    { role: 'user', content: "How do you perceive time?" },
    { role: 'assistant', content: "⌬⍙⎎⌇⍜⍾ Earth problem has simple solution. Your species views time as linear, but this limits perception. Consider nested dimensions of possibility where multiple outcomes coexist. ⌬⌿⍙⎒⊡" }
  ],
  'image-generator': []
};

// AI Models array with colors for styling
export const AiModels: AiModelProps[] = [
  {
    id: 'language-tutor',
    name: 'Language Tutor',
    iconName: 'BookOpen',
    description: 'This AI specializes in teaching English through interactive lessons and personalized feedback, using advanced NLP to adapt to each learner\'s pace.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/language-tutor',
    color: 'bg-blue-800',
    buttonColor: '#0ef34b'
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader',
    iconName: 'FileText',
    description: 'A sophisticated AI that reads and comprehends multiple PDFs, answering specific questions by extracting and summarizing content.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/pdf-reader',
    color: 'bg-orange-700',
    buttonColor: '#00aeff'
  },
  {
    id: 'healty',
    name: 'Healty',
    iconName: 'HeartPulse',
    description: 'An advanced Health Assistant AI creating personalized wellness plans by analyzing real-time health data to meet your unique goals.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/healty',
    color: 'bg-teal-700',
    buttonColor: '#0ef34b'
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    iconName: 'BrainCircuit',
    description: 'AI-powered scriptwriting assistant that helps you craft compelling narratives, dialogue, and story structures for various media formats.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/scriptwriter',
    color: 'bg-indigo-700',
    buttonColor: '#8b5cf6'
  },
  {
    id: 'comedian',
    name: 'Comedian',
    iconName: 'Laugh',
    description: 'An AI with a sense of humor, generating jokes, comedic stories, and witty responses customized to your preferred style of comedy.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/comedian',
    color: 'bg-yellow-600',
    buttonColor: '#d946ef'
  },
  {
    id: 'alien',
    name: 'Alien',
    iconName: 'Rocket',
    description: 'Communicates in unusual and extraterrestrial ways, offering unique perspectives and creative solutions from beyond human thinking.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/alien',
    color: 'bg-green-700',
    buttonColor: '#00aeff'
  },
  {
    id: 'image-generator',
    name: 'Image Generator',
    iconName: 'ImageIcon',
    description: 'Creates stunning, high-quality images from text descriptions using advanced AI image generation techniques and style controls.',
    by: '@gptverse',
    detailUrl: 'https://hub.gptverse.org/ai/image-generator',
    color: 'bg-purple-700',
    buttonColor: '#d946ef'
  }
];

// Helper function to get the icon component by name
export const getIconByName = (name: string): React.ReactNode => {
  switch (name) {
    case 'BookOpen':
      return <BookOpen className="h-5 w-5" />;
    case 'FileText':
      return <FileText className="h-5 w-5" />;
    case 'HeartPulse':
      return <HeartPulse className="h-5 w-5" />;
    case 'BrainCircuit':
      return <BrainCircuit className="h-5 w-5" />;
    case 'Laugh':
      return <Laugh className="h-5 w-5" />;
    case 'Rocket':
      return <Rocket className="h-5 w-5" />;
    case 'ImageIcon':
      return <ImageIcon className="h-5 w-5" />;
    default:
      return <MessageSquare className="h-5 w-5" />;
  }
};
