
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
      className="flex items-center glass-card p-4 hover:border-[#0ef34b]/40 transition-all cursor-pointer opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mr-4 text-[#0ef34b]">{icon}</div>
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
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-[#040812] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,243,75,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMXY0MEgweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMTAgMGgxdjQwSDEweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMjAgMGgxdjQwSDIweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMzAgMGgxdjQwSDMweiIgZmlsbD0icmdiYSgxNCwyNDMsNzUsMC4wMikiLz48cGF0aCBkPSJNMCAwdjFoNDBWMHoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMTB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMjB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PHBhdGggZD0iTTAgMzB2MWg0MHYtMXoiIGZpbGw9InJnYmEoMTQsMjQzLDc1LDAuMDIpIi8+PC9zdmc+')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="mb-16 max-w-3xl fade-element opacity-0" style={{ animationDelay: '0ms' }}>
          <h2 className="heading-gradient text-3xl md:text-4xl mb-6">
            ✨ Experience the Future
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
        
        <div className="glass-card p-6 md:p-10 relative overflow-hidden fade-element opacity-0" style={{ animationDelay: '300ms' }}>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0ef34b]/10 to-transparent"></div>
          
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0ef34b] mr-2"></span>
              <span className="text-[#0ef34b] font-medium">ADVANCED FEATURES</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              The Ultimate All-in-One AI Ecosystem
            </h3>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0ef34b] mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">Seamlessly integrate across multiple platforms with our unified API</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0ef34b] mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">State-of-the-art AI models fine-tuned for specialized domains</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0ef34b] mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">Best-in-class security features and data privacy controls</p>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="text-[#0ef34b] mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-white/80">Constant updates and new features driven by community feedback</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-[#0ef34b] to-[#00aeff] text-black group">
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
