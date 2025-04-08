
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, BookOpen, FileText, HeartPulse, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface AiModelProps {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  author: string;
  rating?: number;
}

const AiModels: AiModelProps[] = [
  {
    id: 'language-tutor',
    name: 'Language Tutor',
    icon: <BookOpen className="h-10 w-10" />,
    color: 'from-purple-600 to-indigo-500',
    description: 'This AI specializes in teaching English through interactive lessons and personalized feedback, using advanced NLP to adapt to each learner\'s pace.',
    author: '@gptverse',
    rating: 4.8
  },
  {
    id: 'pdf-reader',
    name: 'PDF Reader',
    icon: <FileText className="h-10 w-10" />,
    color: 'from-blue-500 to-cyan-400',
    description: 'A sophisticated AI that reads and comprehends multiple PDFs, answering specific questions by extracting and summarizing content.',
    author: '@gptverse',
    rating: 4.7
  },
  {
    id: 'healty',
    name: 'Healty',
    icon: <HeartPulse className="h-10 w-10" />,
    color: 'from-pink-500 to-rose-400',
    description: 'An advanced Health Assistant AI creating personalized wellness plans by analyzing real-time health data to meet your unique goals.',
    author: '@gptverse',
    rating: 4.9
  },
  {
    id: 'scriptwriter',
    name: 'Scriptwriter',
    icon: <BrainCircuit className="h-10 w-10" />,
    color: 'from-green-500 to-emerald-400',
    description: 'AI-powered scriptwriting assistant that helps you craft compelling narratives, dialogue, and story structures for various media formats.',
    author: '@gptverse',
    rating: 4.6
  }
];

const ProductView = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#d946ef] via-[#8b5cf6] to-[#0ef34b] inline-block">
            Explore AI Models
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover a universe of AI capabilities in the GPTVerse ecosystem. From language learning to health planning, our AI models are designed to transform your digital experience.
          </p>
        </div>

        {/* Featured AI Model */}
        <div className="mb-16 glass-card p-8 backdrop-blur-lg border border-white/10 bg-[#06101a]/40 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#0ef34b] text-sm">
                <Sparkles size={14} /> Featured AI
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white">Language Tutor</h3>
              <p className="text-white/70">
                Our most advanced language learning AI, combining natural language processing with personalized lesson plans. Practice conversations, receive instant feedback, and track your progress with detailed analytics.
              </p>
              
              <div className="flex items-center gap-4">
                <Button className="rounded-full bg-gradient-to-r from-[#9333ea] to-[#4f46e5] hover:brightness-110 border-none text-white">
                  Try Language Tutor <ArrowRight size={16} className="ml-2" />
                </Button>
                
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
                  ))}
                  <span className="text-white/70 ml-1 text-sm">4.8</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[300px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/20 rounded-xl"></div>
              <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-600/20">
                <BookOpen className="h-14 w-14 text-white" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-purple-500/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-500/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* AI Models Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {AiModels.map((model) => (
                <CarouselItem key={model.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="bg-[#06101a]/60 border border-white/10 backdrop-blur-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0ef34b]/10 hover:border-[#0ef34b]/30">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${model.color} flex items-center justify-center`}>
                          {model.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white">{model.name}</h3>
                      
                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {model.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-white/50 text-xs">{model.author}</span>
                        
                        {model.rating && (
                          <div className="flex items-center">
                            <Star size={14} className="fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="text-white/70 text-xs">{model.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <Button className="w-full mt-4 rounded-md bg-transparent border border-[#0ef34b]/50 text-[#0ef34b] hover:bg-[#0ef34b]/10">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-12 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-[#0ef34b]/10 border border-[#0ef34b]/20 text-[#0ef34b]" />
            </div>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-[#0ef34b]/10 border border-[#0ef34b]/20 text-[#0ef34b]" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
