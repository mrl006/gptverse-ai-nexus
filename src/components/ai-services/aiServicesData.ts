
import { ReactNode } from 'react';

interface AiService {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  actionButtons?: ReactNode;
}

// This function returns the AI services data
// We'll define the actionButtons later in React components
const getAiServices = (): AiService[] => {
  return [
    {
      title: "AI",
      subtitle: "Hub",
      description: "AI Hub is a multi-platform solution that allows you to access multiple AI services with a single account and payment method. It consolidates various distributed AI services under one roof, supported and enhanced by three core feeders: GPTVerse, Partners, Community",
      image: "/lovable-uploads/f9c53327-d079-460f-b593-f1086215163f.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" },
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      // We'll pass the actual ReactNode buttons from the AiServiceCard component
      actionButtons: null
    },
    {
      title: "AI Education",
      subtitle: "Language Tutor",
      description: "With the AI Language Tutor, you can learn any language, assess your proficiency level, and enhance your conversational skills through interactive chats. Utilize AI HUB for text-based interactions and GPTVerse Multiverse for voice-based communication.",
      image: "/lovable-uploads/90260616-99d1-4348-a347-ac152303bc6b.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" },
        { text: "Integrated", color: "bg-[#f0db4f]/20 text-[#f0db4f]" }
      ],
      flipped: true,
      actionButtons: null
    },
    {
      title: "AI",
      subtitle: "Persona",
      description: "Would you like to personalize artificial intelligence? It's now possible to characterize AI by adding features such as name, emotion, life story, and more. With AI Persona, limited only by your imagination, create your own artificial intelligence character.",
      image: "/lovable-uploads/e0137b19-a304-4537-9ef3-e39e89f1d6a4.png",
      statusLabels: [
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      actionButtons: null
    },
    {
      title: "AI",
      subtitle: "Fitness Coach",
      description: "AI Fitness Coach is the first character developed with our AI persona product. Ready to assist you in the realms of a healthy lifestyle and fitness through our AI Hub and Multiverse platforms.",
      image: "/lovable-uploads/7465b83d-7726-4b8b-b81e-746efde99eab.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" }
      ],
      flipped: true,
      actionButtons: null
    },
    {
      title: "AI",
      subtitle: "Receptionist",
      description: "Let artificial intelligence track and organize your appointments on your behalf. As your most loyal assistant, it will always be by your side to support business development. Its customizable structure allows it to understand your business model and tailor its services to your unique needs.",
      image: "/lovable-uploads/18a49ba5-8c2f-43d1-a442-6c7f9444f3ab.png",
      statusLabels: [
        { text: "Coming Soon", color: "bg-[#f43f5e]/20 text-[#f43f5e]" },
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      actionButtons: null
    }
  ];
};

export { getAiServices };
export type { AiService };
