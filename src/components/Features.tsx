
import React, { useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight, LineChart, GraduationCap, Coins, Share2, Palette, ShoppingBag, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const FeatureItem = ({ icon, title, delay }: FeatureItemProps) => {
  return (
    <div 
      className="flex items-center bg-gptv-gray/30 rounded-lg p-4 hover:bg-gptv-gray/50 transition-all cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mr-4 text-gptv-teal">{icon}</div>
      <p className="font-medium">{title}</p>
    </div>
  );
};

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = containerRef.current?.querySelectorAll('.fade-element');
    elements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="features" className="section-padding bg-gptv-dark relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_80%,rgba(14,243,75,0.15)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative" ref={containerRef}>
        <div className="mb-16 max-w-3xl fade-element opacity-0" style={{ animationDelay: '0ms' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient-animate">✨ Experience the Future</span>
          </h2>
          <p className="text-white/80 text-lg">
            Explore a vibrant metaverse where AI integrates with social interactions, education, shopping, design, and more. The GPTVerse ecosystem offers revolutionary tools powered by advanced AI models.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <FeatureItem 
            icon={<LineChart size={24} />} 
            title="AI Trading Solutions" 
            delay={200}
          />
          <FeatureItem 
            icon={<GraduationCap size={24} />} 
            title="AI Education Hub" 
            delay={300}
          />
          <FeatureItem 
            icon={<Coins size={24} />} 
            title="AI Finance Center" 
            delay={400}
          />
          <FeatureItem 
            icon={<Share2 size={24} />} 
            title="AI Marketing Innovations" 
            delay={500}
          />
          <FeatureItem 
            icon={<Palette size={24} />} 
            title="AI Design & NFTs" 
            delay={600}
          />
          <FeatureItem 
            icon={<ShoppingBag size={24} />} 
            title="AI-Powered Shopping" 
            delay={700}
          />
          <FeatureItem 
            icon={<MessageSquare size={24} />} 
            title="AI Event Experiences" 
            delay={800}
          />
        </div>
        
        <div className="bg-gptv-gray/20 rounded-2xl p-6 md:p-10 relative overflow-hidden fade-element opacity-0" style={{ animationDelay: '300ms' }}>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gptv-blue/10 to-transparent"></div>
          
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center mb-4">
              <span className="w-2 h-2 rounded-full bg-gptv-teal mr-2"></span>
              <span className="text-gptv-teal font-medium">ADVANCED FEATURES</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The Ultimate All-in-One AI Ecosystem
            </h3>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="text-gptv-teal mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">Seamlessly integrate across multiple platforms with our unified API</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-gptv-teal mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">State-of-the-art AI models fine-tuned for specialized domains</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-gptv-teal mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">Best-in-class security features and data privacy controls</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-gptv-teal mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">Constant updates and new features driven by community feedback</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-gptv-blue to-gptv-teal text-white group">
              Learn More 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
