
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageSquare, Upload, Users, Activity, Headphones } from 'lucide-react';

interface ExploreCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

const ExploreCard = ({ title, description, icon, comingSoon }: ExploreCardProps) => (
  <Card className="glass-card glow border-0 bg-opacity-10 h-full hover:translate-y-[-5px] transition-transform duration-300">
    <CardHeader className="relative">
      <div className="absolute top-4 right-4 text-gptv-teal opacity-60 animate-pulse-glow">
        {icon}
      </div>
      <CardTitle className="text-white text-lg sm:text-xl">{title}</CardTitle>
      {comingSoon && (
        <span className="absolute top-4 left-4 px-2 py-0.5 bg-gptv-magenta/20 border border-gptv-magenta/40 text-gptv-magenta text-xs font-medium rounded-full">
          Coming Soon
        </span>
      )}
    </CardHeader>
    <CardContent>
      <CardDescription className="text-white/70">{description}</CardDescription>
    </CardContent>
  </Card>
);

const Explore = () => {
  const exploreItems = [
    {
      title: 'AI Language Tutor',
      description: 'Interactive chat and voice-based AI tutor to help you master new languages naturally.',
      icon: <MessageSquare size={24} />,
    },
    {
      title: 'Multi-PDF Chatbot',
      description: 'Upload multiple PDFs and have conversations about their content with our intelligent AI.',
      icon: <Upload size={24} />,
    },
    {
      title: 'AI Persona',
      description: 'Create and customize your own AI characters with unique personalities and knowledge.',
      icon: <Users size={24} />,
    },
    {
      title: 'AI Fitness Coach',
      description: 'Personalized workout plans and health guidance based on your goals and preferences.',
      icon: <Activity size={24} />,
    },
    {
      title: 'AI Receptionist',
      description: 'An intelligent virtual assistant that manages appointments, answers queries, and directs customers.',
      icon: <Headphones size={24} />,
      comingSoon: true,
    },
  ];

  return (
    <section id="explore" className="section-padding bg-gptv-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-animate">Explore GPTVerse</span>
          </h2>
          <p className="text-white/80 max-w-2xl">
            Discover our suite of AI-powered tools and applications designed to revolutionize your digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreItems.map((item, index) => (
            <ExploreCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              comingSoon={item.comingSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;
