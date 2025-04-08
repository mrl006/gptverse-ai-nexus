
import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  FileText, 
  HeartPulse, 
  BrainCircuit, 
  Laugh, 
  Rocket, 
  ImageIcon, 
  ArrowUpRight, 
  MessageSquare 
} from 'lucide-react';

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
