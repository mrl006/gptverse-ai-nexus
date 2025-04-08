
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

interface AiServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  statusLabels: Array<{text: string, color: string}>;
  flipped?: boolean;
  actionButtons?: React.ReactNode;
}

const AiServiceCard: React.FC<AiServiceCardProps> = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  statusLabels, 
  flipped = false,
  actionButtons
}) => {
  return (
    <div className="w-full bg-[#0e1623]/60 rounded-xl overflow-hidden backdrop-blur-md border border-white/5 mb-16">
      <div className={`flex flex-col ${flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
        <div className="lg:w-1/2">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {statusLabels.map((label, index) => (
              <span 
                key={index} 
                className={`px-3 py-1 text-sm font-medium rounded-md ${label.color}`}
              >
                {label.text}
              </span>
            ))}
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            {title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#0ef34b] mb-6">
            {subtitle}
          </h3>
          
          <p className="text-white/80 mb-8 text-lg">
            {description}
          </p>
          
          {actionButtons && (
            <div className="flex flex-wrap gap-4">
              {actionButtons}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AiServices = () => {
  const aiServices = [
    {
      title: "AI",
      subtitle: "Hub",
      description: "AI Hub is a multi-platform solution that allows you to access multiple AI services with a single account and payment method. It consolidates various distributed AI services under one roof, supported and enhanced by three core feeders: GPTVerse, Partners, Community",
      image: "/lovable-uploads/f9c53327-d079-460f-b593-f1086215163f.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" },
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ],
      actionButtons: (
        <Button className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white font-medium px-6 py-2 rounded-lg">
          Try AI HUB
        </Button>
      )
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
      actionButtons: (
        <>
          <Button className="bg-[#0ef34b] hover:bg-[#0ef34b]/90 text-black font-medium px-6 py-2 rounded-lg">
            Try in AI HUB
          </Button>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 flex items-center gap-2">
            <Play size={16} /> Watch Trailer
          </Button>
        </>
      )
    },
    {
      title: "AI",
      subtitle: "Persona",
      description: "Would you like to personalize artificial intelligence? It's now possible to characterize AI by adding features such as name, emotion, life story, and more. With AI Persona, limited only by your imagination, create your own artificial intelligence character.",
      image: "/lovable-uploads/e0137b19-a304-4537-9ef3-e39e89f1d6a4.png",
      statusLabels: [
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ]
    },
    {
      title: "AI",
      subtitle: "Fitness Coach",
      description: "AI Fitness Coach is the first character developed with our AI persona product. Ready to assist you in the realms of a healthy lifestyle and fitness through our AI Hub and Multiverse platforms.",
      image: "/lovable-uploads/7465b83d-7726-4b8b-b81e-746efde99eab.png",
      statusLabels: [
        { text: "On Live", color: "bg-[#0ef34b]/20 text-[#0ef34b]" }
      ],
      flipped: true
    },
    {
      title: "AI",
      subtitle: "Receptionist",
      description: "Let artificial intelligence track and organize your appointments on your behalf. As your most loyal assistant, it will always be by your side to support business development. Its customizable structure allows it to understand your business model and tailor its services to your unique needs.",
      image: "/lovable-uploads/18a49ba5-8c2f-43d1-a442-6c7f9444f3ab.png",
      statusLabels: [
        { text: "Coming Soon", color: "bg-[#f43f5e]/20 text-[#f43f5e]" },
        { text: "MVP Ready", color: "bg-[#00aeff]/20 text-[#00aeff]" }
      ]
    }
  ];

  return (
    <section id="ai-services" className="py-24 relative overflow-hidden">
      {/* Enhanced glassmorphism background with green-blue gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0ef34b]/5 to-[#00aeff]/5 opacity-50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,243,75,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,174,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0ef34b]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00aeff]/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-mono tracking-tight">
            <span className="bg-gradient-to-r from-[#0ef34b] via-[#00aeff] to-[#d946ef] bg-clip-text text-transparent">
              AI SERVICES
            </span>
          </h2>
          <div className="flex justify-center space-x-3 items-center">
            <div className="h-0.5 w-16 bg-gradient-to-r from-[#0ef34b]/80 to-transparent"></div>
            <div className="text-[#0ef34b]/70 text-lg">POWERED BY GPTVERSE</div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-[#00aeff]/80"></div>
          </div>
        </div>
        
        {aiServices.map((service, index) => (
          <AiServiceCard
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            image={service.image}
            statusLabels={service.statusLabels}
            flipped={service.flipped}
            actionButtons={service.actionButtons}
          />
        ))}
      </div>
    </section>
  );
};

export default AiServices;
