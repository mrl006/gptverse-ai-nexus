
import { ReactNode } from 'react';
import { IconProps } from 'lucide-react';

interface AiService {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  buttonType?: string;
  icon?: React.ElementType;
  step?: number;
  progress?: 'shipped' | 'in-beta' | 'in-progress' | 'coming-soon';
  version?: string;
}

// This function returns the AI services data
const getAiServices = (): AiService[] => {
  return [
    {
      title: "AI",
      subtitle: "Hub",
      description: "AI Hub is a multi-platform solution that allows you to access multiple AI services with a single account and payment method.",
      image: "/lovable-uploads/f9c53327-d079-460f-b593-f1086215163f.png",
      statusLabels: [
        { text: "Shipped", color: "bg-[#0ef34b]/20 text-[#0ef34b]" }
      ],
      buttonType: "ai-hub",
      step: 1,
      progress: "shipped"
    },
    {
      title: "AI Education",
      subtitle: "Language Tutor",
      description: "With the AI Language Tutor, you can learn any language, assess your proficiency level, and enhance your conversational skills through interactive chats.",
      image: "/lovable-uploads/90260616-99d1-4348-a347-ac152303bc6b.png",
      statusLabels: [
        { text: "In Beta", color: "bg-[#f0db4f]/20 text-[#f0db4f]" }
      ],
      buttonType: "language-tutor",
      step: 2,
      progress: "in-beta"
    },
    {
      title: "Text to",
      subtitle: "Website",
      description: "The first, but hardest step! Create complete websites from simple text descriptions powered by our advanced AI.",
      image: "/lovable-uploads/e0137b19-a304-4537-9ef3-e39e89f1d6a4.png",
      statusLabels: [
        { text: "Shipped", color: "bg-[#0ef34b]/20 text-[#0ef34b]" }
      ],
      buttonType: "ai-persona",
      step: 3,
      progress: "shipped"
    },
    {
      title: "AI",
      subtitle: "Generated 3D",
      description: "Generate true 3D sites with 3D assets using our powerful AI technology. Create immersive experiences for your users with just a few clicks.",
      image: "/lovable-uploads/3808c426-ddc0-4d85-a636-1d1dee05a33c.png",
      statusLabels: [
        { text: "In Progress", color: "bg-[#f0db4f]/20 text-[#f0db4f]" }
      ],
      buttonType: "ai-hub",
      step: 4,
      progress: "in-progress",
      version: "for 1.0"
    },
    {
      title: "AI",
      subtitle: "Generated Animations",
      description: "Generation of interactive site animations. Add life to your websites with AI-generated animations that respond to user interactions.",
      image: "/lovable-uploads/7465b83d-7726-4b8b-b81e-746efde99eab.png",
      statusLabels: [
        { text: "In Progress", color: "bg-[#f0db4f]/20 text-[#f0db4f]" }
      ],
      buttonType: "receptionist",
      step: 5,
      progress: "in-progress"
    },
    {
      title: "AI",
      subtitle: "Fitness Coach",
      description: "AI Fitness Coach is the first character developed with our AI persona product. Ready to assist you in the realms of a healthy lifestyle and fitness.",
      image: "/lovable-uploads/7465b83d-7726-4b8b-b81e-746efde99eab.png",
      statusLabels: [
        { text: "Coming Soon", color: "bg-[#f43f5e]/20 text-[#f43f5e]" }
      ],
      buttonType: "fitness-coach",
      step: 6,
      progress: "coming-soon"
    }
  ];
};

export { getAiServices };
export type { AiService };
